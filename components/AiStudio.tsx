import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image, Wand2, Loader2, Upload, AlertCircle, Sparkles } from 'lucide-react';
import { ImageSize } from '../types';
import * as geminiService from '../services/geminiService';

const AiStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'generate' | 'edit'>('generate');
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  
  // Generation specific state
  const [genSize, setGenSize] = useState<ImageSize>(ImageSize.Size1K);
  
  // Edit specific state
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [sourceMimeType, setSourceMimeType] = useState<string>('image/png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Error/Message state
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size/type if needed
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        // Strip prefix for API
        const base64Data = base64.split(',')[1];
        setSourceImage(base64Data);
        setSourceMimeType(file.type);
        // Set preview for UI (using the full data URI)
        setResultImage(base64); 
      };
      reader.readAsDataURL(file);
    }
  };

  const checkProKey = async (): Promise<boolean> => {
    if (window.aistudio) {
        try {
            const hasKey = await window.aistudio.hasSelectedApiKey();
            if (!hasKey) {
                await window.aistudio.openSelectKey();
                // We assume success if openSelectKey returns/resolves, or check again
                return true;
            }
            return true;
        } catch (e) {
            console.error("API Key selection failed", e);
            setError("Failed to select API key. Please try again.");
            return false;
        }
    }
    return true; // If window.aistudio is missing, we might be in dev mode or using env vars, try proceeding
  };

  const handleGenerate = async () => {
    if (!prompt) {
        setError("Please enter a prompt.");
        return;
    }
    
    // For Gemini 3 Pro Image, user MUST select key
    const hasKey = await checkProKey();
    if (!hasKey) return;

    setIsLoading(true);
    setError(null);
    setResultImage(null);

    try {
      const result = await geminiService.generateImagePro(prompt, genSize);
      setResultImage(result);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to generate image.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async () => {
    if (!prompt || !sourceImage) {
        setError("Please provide both an image and a prompt.");
        return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await geminiService.editImageFlash(prompt, sourceImage, sourceMimeType);
      setResultImage(result);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to edit image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto" id="technology">
      <div className="bg-onyx-light border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric to-deepPurple"></div>
        
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Wand2 className="text-deepPurple" /> Thimax AI Studio
            </h3>
            <p className="text-gray-400 text-sm mt-1">Prototype custom assets with our embedded generative engine.</p>
          </div>
          <div className="flex bg-black/50 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => { setActiveTab('generate'); setError(null); setResultImage(null); }}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'generate' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Generate
            </button>
            <button
              onClick={() => { setActiveTab('edit'); setError(null); setResultImage(null); }}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === 'edit' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Edit Image
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          
          {/* Controls Panel */}
          <div className="p-8 border-r border-white/5 flex flex-col gap-6">
             
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200 text-sm flex items-start gap-2">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            {activeTab === 'generate' ? (
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Prompt</label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the industrial environment or asset..."
                    className="w-full h-32 bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:border-electric focus:ring-1 focus:ring-electric outline-none resize-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Resolution</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[ImageSize.Size1K, ImageSize.Size2K, ImageSize.Size4K].map((size) => (
                      <button
                        key={size}
                        onClick={() => setGenSize(size)}
                        className={`py-2 px-3 text-sm font-mono border rounded-lg transition-all ${
                          genSize === size 
                            ? 'bg-electric/10 border-electric text-electric' 
                            : 'border-white/10 text-gray-400 hover:border-white/30'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                    <div className="text-xs text-gray-500 mb-2">Powered by Gemini 3 Pro (Nano Banana Pro)</div>
                    <button 
                        onClick={handleGenerate}
                        disabled={isLoading}
                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex justify-center items-center gap-2"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                        Generate Asset
                    </button>
                    {/* Explicit Button for Key Selection if needed, though handleGenerate handles it */}
                     <button 
                        onClick={() => window.aistudio && window.aistudio.openSelectKey()}
                        className="mt-2 text-xs text-gray-600 underline hover:text-gray-400 w-full text-center"
                     >
                        Change API Key
                     </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                 <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Source Image</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-32 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-electric/50 hover:bg-white/5 transition-all group"
                  >
                     <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleFileChange}
                     />
                     {sourceImage ? (
                        <div className="text-green-400 flex items-center gap-2">
                             <Image size={20} /> Image Loaded
                        </div>
                     ) : (
                         <>
                            <Upload className="text-gray-500 mb-2 group-hover:text-electric transition-colors" />
                            <span className="text-sm text-gray-500">Click to upload reference</span>
                         </>
                     )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Instruction</label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. 'Add a yellow safety robot', 'Make it cybernetic'..."
                    className="w-full h-32 bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:border-deepPurple focus:ring-1 focus:ring-deepPurple outline-none resize-none transition-all"
                  />
                </div>

                <div className="mt-auto">
                    <div className="text-xs text-gray-500 mb-2">Powered by Gemini 2.5 Flash (Nano Banana)</div>
                    <button 
                        onClick={handleEdit}
                        disabled={isLoading}
                        className="w-full py-4 bg-deepPurple text-white font-bold rounded-xl hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex justify-center items-center gap-2"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 size={18} />}
                        Process Edit
                    </button>
                </div>
              </div>
            )}
          </div>

          {/* Preview Panel */}
          <div className="bg-black/80 flex items-center justify-center p-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
             
             {isLoading ? (
                <div className="flex flex-col items-center gap-4 animate-pulse">
                    <div className="w-16 h-16 border-4 border-t-electric border-r-transparent border-b-deepPurple border-l-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-500 font-mono text-sm">Processing Neural Request...</span>
                </div>
             ) : resultImage || (activeTab === 'edit' && sourceImage) ? (
                <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                        src={resultImage || (sourceImage ? `data:${sourceMimeType};base64,${sourceImage}` : '')} 
                        alt="AI Result" 
                        className="max-w-full max-h-[400px] object-contain rounded-lg shadow-2xl border border-white/10"
                    />
                    {resultImage && (
                        <a 
                           href={resultImage} 
                           download="thimax_asset.png"
                           className="absolute bottom-4 right-4 px-4 py-2 bg-black/80 backdrop-blur text-white text-xs font-bold rounded-full border border-white/20 hover:bg-white hover:text-black transition-all"
                        >
                            Download Asset
                        </a>
                    )}
                </div>
             ) : (
                <div className="text-center text-gray-600">
                    <div className="w-20 h-20 bg-white/5 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <Image size={32} opacity={0.5} />
                    </div>
                    <p className="font-mono text-sm">Awaiting Input Stream</p>
                </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiStudio;