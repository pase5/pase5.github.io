import re

new_logo_section = """
        <section id="logo-design" class="bg-[#050505] overflow-hidden relative border-t border-white/5 backdrop-blur-md">
            <!-- Header stays sticky during horizontal scroll -->
            <div class="absolute top-12 md:top-24 left-6 md:left-12 z-30 pointer-events-none mix-blend-difference">
                <h2 class="text-xs tracking-[0.3em] font-mono text-cyan-400 mb-2">02 // BRAND IDENTITY</h2>
                <h3 class="text-3xl md:text-5xl font-light text-white">Logo Design Works</h3>
            </div>
            
            <!-- Horizontal Scroll Container -->
            <div id="horizontal-scroll-container" class="flex w-[300vw] h-screen items-center relative z-10">
                
                <!-- Slide 1: IRIS -->
                <div class="w-screen h-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center p-6 md:p-24 relative overflow-hidden group logo-slide">
                    <!-- Oscilloscope bg -->
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wLDI1IEM1MCwwIDUwLDUwIDEwMCwyNSBDMTUwLDAgMTUwLDUwIDIwMCwyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] mix-blend-overlay opacity-20 parallax-bg"></div>
                    <div class="absolute inset-0 bg-radial-gradient from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                    
                    <!-- Massive Watermark -->
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                        <span class="text-[40vw] font-black text-white/[0.015] leading-none select-none tracking-tighter">01</span>
                    </div>

                    <!-- Logo huge in center -->
                    <div class="w-full md:w-[55%] flex justify-center z-10 parallax-logo">
                        <img src="logos_wrk/iris.svg" class="w-[85%] max-w-[600px] drop-shadow-[0_0_80px_rgba(34,211,238,0.15)] group-hover:scale-105 transition-transform duration-1000 ease-out" alt="IRIS Logo">
                    </div>
                    
                    <!-- Details floating on side (Glassmorphism Cards) -->
                    <div class="w-full md:w-[45%] flex flex-col justify-center space-y-6 z-10 px-4 md:px-12 parallax-details">
                        <div class="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/[0.04] transition-colors duration-500">
                            <p class="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-4">Concept // 01</p>
                            <h4 class="text-3xl md:text-4xl font-light text-cyan-50 mb-4">Vision & Clarity</h4>
                            <p class="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                                The central motif integrates an eye and a waveform, representing insight and technical precision in signal processing.
                            </p>
                        </div>
                        
                        <div class="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/[0.04] transition-colors duration-500">
                            <p class="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">Color System</p>
                            <div class="flex gap-3 items-end h-20">
                                <div class="w-16 h-[100%] bg-[#FFFFFF] rounded-sm relative group/color cursor-crosshair"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover/color:opacity-100 text-gray-400 font-mono transition-opacity">#FFFFFF</span></div>
                                <div class="w-16 h-[70%] bg-[#204172] rounded-sm relative group/color cursor-crosshair"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover/color:opacity-100 text-gray-400 font-mono transition-opacity">#204172</span></div>
                                <div class="w-16 h-[40%] bg-[#22D3EE] rounded-sm relative group/color cursor-crosshair"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover/color:opacity-100 text-gray-400 font-mono transition-opacity">#22D3EE</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 2: PCM -->
                <div class="w-screen h-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center p-6 md:p-24 relative overflow-hidden group logo-slide border-l border-white/5">
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wLDI1IEM1MCwwIDUwLDUwIDEwMCwyNSBDMTUwLDAgMTUwLDUwIDIwMCwyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] mix-blend-overlay opacity-20 parallax-bg"></div>
                    <div class="absolute inset-0 bg-radial-gradient from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                    
                    <!-- Massive Watermark -->
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                        <span class="text-[40vw] font-black text-white/[0.015] leading-none select-none tracking-tighter">02</span>
                    </div>

                    <div class="w-full md:w-[55%] flex justify-center z-10 parallax-logo">
                        <img src="logos_wrk/pcm.svg" class="w-[85%] max-w-[600px] drop-shadow-[0_0_80px_rgba(168,85,247,0.15)] group-hover:scale-105 transition-transform duration-1000 ease-out" alt="PCM Logo">
                    </div>
                    
                    <div class="w-full md:w-[45%] flex flex-col justify-center space-y-6 z-10 px-4 md:px-12 parallax-details">
                        <div class="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/[0.04] transition-colors duration-500">
                            <p class="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-4">Concept // 02</p>
                            <h4 class="text-3xl md:text-4xl font-light text-purple-50 mb-4">Connectivity</h4>
                            <p class="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                                A continuous line forming an interconnected loop symbolizing seamless communication, circuitry, and data flow.
                            </p>
                        </div>
                        
                        <div class="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/[0.04] transition-colors duration-500">
                            <p class="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">Color System</p>
                            <div class="flex gap-3 items-end h-20">
                                <div class="w-16 h-[100%] bg-[#FFFFFF] rounded-sm relative group/color cursor-crosshair"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover/color:opacity-100 text-gray-400 font-mono transition-opacity">#FFFFFF</span></div>
                                <div class="w-16 h-[70%] bg-[#111111] border border-white/10 rounded-sm relative group/color cursor-crosshair"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover/color:opacity-100 text-gray-400 font-mono transition-opacity">#111111</span></div>
                                <div class="w-16 h-[40%] bg-[#A855F7] rounded-sm relative group/color cursor-crosshair"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover/color:opacity-100 text-gray-400 font-mono transition-opacity">#A855F7</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slide 3: WELTECH -->
                <div class="w-screen h-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center p-6 md:p-24 relative overflow-hidden group logo-slide border-l border-white/5">
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wLDI1IEM1MCwwIDUwLDUwIDEwMCwyNSBDMTUwLDAgMTUwLDUwIDIwMCwyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] mix-blend-overlay opacity-20 parallax-bg"></div>
                    <div class="absolute inset-0 bg-radial-gradient from-lime-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                    
                    <!-- Massive Watermark -->
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                        <span class="text-[40vw] font-black text-white/[0.015] leading-none select-none tracking-tighter">03</span>
                    </div>

                    <div class="w-full md:w-[55%] flex justify-center z-10 parallax-logo">
                        <img src="logos_wrk/weltech.svg" class="w-[85%] max-w-[600px] drop-shadow-[0_0_80px_rgba(163,230,53,0.15)] group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Weltech Logo">
                    </div>
                    
                    <div class="w-full md:w-[45%] flex flex-col justify-center space-y-6 z-10 px-4 md:px-12 parallax-details">
                        <div class="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/[0.04] transition-colors duration-500">
                            <p class="text-[10px] font-mono text-lime-400 uppercase tracking-widest mb-4">Concept // 03</p>
                            <h4 class="text-3xl md:text-4xl font-light text-lime-50 mb-4">Durability & Precision</h4>
                            <p class="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                                An industrial yet modern identity crafted for the engineering sector. The sharp, angular cuts mimic precision tooling and permanence.
                            </p>
                        </div>
                        
                        <div class="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/[0.04] transition-colors duration-500">
                            <p class="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">Color System</p>
                            <div class="flex gap-3 items-end h-20">
                                <div class="w-16 h-[100%] bg-[#FFFFFF] rounded-sm relative group/color cursor-crosshair"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover/color:opacity-100 text-gray-400 font-mono transition-opacity">#FFFFFF</span></div>
                                <div class="w-16 h-[70%] bg-[#21283A] rounded-sm relative group/color cursor-crosshair"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover/color:opacity-100 text-gray-400 font-mono transition-opacity">#21283A</span></div>
                                <div class="w-16 h-[40%] bg-[#FBD804] rounded-sm relative group/color cursor-crosshair"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover/color:opacity-100 text-gray-400 font-mono transition-opacity">#FBD804</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'<section id="logo-design".*?</section>', new_logo_section, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
