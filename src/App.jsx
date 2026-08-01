import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Play, ChevronRight, ChevronLeft, MonitorPlay, Mail, XCircle, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const useScrollReveal = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  return { isVisible, domRef };
};

const Loader = ({ onComplete }) => {
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsSliding(true), 1200);
    const timer2 = setTimeout(() => onComplete(), 2000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0c0c09] flex flex-col items-center justify-center transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${isSliding ? '-translate-y-full pointer-events-none' : 'translate-y-0'}`}>
      <div className="relative flex items-center justify-center">
        <MonitorPlay className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] absolute z-10" />
        <div className="w-12 h-12 md:w-16 md:h-16 border-[2px] border-white/10 rounded-full absolute"></div>
        <div className="w-12 h-12 md:w-16 md:h-16 border-[2px] border-transparent border-t-[#FFD700] border-r-[#FFD700]/50 rounded-full animate-[spin_1s_cubic-bezier(0.68,-0.55,0.265,1.55)_infinite]"></div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="fixed top-4 md:top-6 left-0 w-full flex justify-center z-50 pointer-events-none">
      <nav className="w-[95%] max-w-6xl animate-[fadeDown_1s_ease-out_1.2s_both] pointer-events-auto">
        <div className="bg-[#181714]/80 backdrop-blur-2xl rounded-full p-1.5 md:p-2 flex flex-row items-center justify-between border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-[#FFD700]/40 transition-colors duration-500 w-full relative">
        
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 pl-3 md:pl-4 shrink-0">
          <MonitorPlay className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" />
          <div className="leading-none flex flex-col justify-center">
            <h1 className="text-white font-sans font-black text-lg md:text-xl tracking-tighter uppercase mt-0.5">FRAMEX STUDIO</h1>
          </div>
        </div>
        
        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#home" className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all">Home</a>
          <a href="#work" className="hover:text-white transition-colors duration-300">Work</a>
          <a href="#process" className="hover:text-white transition-colors duration-300">Process</a>
        </div>

        {/* Button - Locked inside the pill */}
        <div className="shrink-0 flex items-center pr-0.5 md:pr-1">
          <a href="#contact" className="group relative bg-[#FFD700] text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.15)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:scale-105">
            <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
              Let's Chat <Mail className="w-3 h-3 md:w-4 md:h-4 group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-full"></div>
          </a>
        </div>
      </div>
      </nav>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-[#FFD700]/10 blur-[120px] rounded-full pointer-events-none animate-[pulseGlow_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-yellow-600/10 blur-[100px] rounded-full pointer-events-none animate-[pulseGlow_10s_ease-in-out_infinite_reverse]"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 md:px-5 py-2 rounded-full mb-8 shadow-xl animate-[fadeUp_1s_ease-out_1.1s_both] hover:bg-white/10 transition-colors cursor-default">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </div>
          <span className="text-xs md:text-sm font-medium text-white/90 tracking-wide">Accepting new projects</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-sans font-black text-white tracking-tight leading-[1.05] mb-6 flex flex-col items-center">
          <span className="overflow-hidden inline-block pb-1 md:pb-3">
            <span className="inline-block animate-[slideUp_1s_cubic-bezier(0.77,0,0.175,1)_1.2s_both]">We Build Digital Systems</span>
          </span>
          <span className="overflow-hidden inline-block pb-1 md:pb-3">
            <span className="inline-block animate-[slideUp_1s_cubic-bezier(0.77,0,0.175,1)_1.3s_both]">
              to Scale <span className="text-white font-display italic pr-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] font-light">Ambitious</span> Creators
            </span>
          </span>
        </h1>
        
        <p className="text-base md:text-xl text-gray-400 max-w-2xl mb-10 font-medium leading-relaxed animate-[fadeUp_1s_ease-out_1.5s_both] px-4">
          Engineering the visual hooks and retention systems behind growing channels through premium, data-driven video editing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-[fadeUp_1s_ease-out_1.6s_both] w-full sm:w-auto px-4">
          <a href="#work" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-sm md:text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:bg-gray-100">
            See Our Work <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-sm md:text-base font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20">
            Book a Strategy Call <Sparkles className="w-5 h-5 text-[#FFD700]" />
          </a>
        </div>

        {/* HERO VIDEO SECTION */}
        <div 
          className="w-full max-w-5xl aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden relative group border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-700 hover:scale-[1.02] hover:border-[#FFD700]/50 animate-[fadeUp_1s_ease-out_1.8s_both]"
        >
          
          <div className="absolute inset-0 bg-[#161512] overflow-hidden">
             {/* REAL VIDEO BACKGROUND */}
             <video 
               autoPlay
               muted
               loop 
               playsInline 
               className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
             >
               <source src="https://res.cloudinary.com/ldzwikpf/video/upload/c_scale,w_1920,q_auto,f_auto/v1785589209/showreel_pfw5kk.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-8 md:py-12 overflow-hidden border-y border-white/5 relative flex whitespace-nowrap group">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#12110E] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#12110E] to-transparent z-10"></div>
      
      <div className="animate-[marquee_20s_linear_infinite] group-hover:pause flex items-center text-3xl md:text-5xl lg:text-7xl font-sans font-black tracking-wide">
        {Array(10).fill(0).map((_, i) => (
          <Fragment key={i}>
            <span className="mx-4 md:mx-8 text-transparent transition-all duration-300 hover:text-white cursor-default" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)' }}>AGENCIES</span>
            <span className="text-[#FFD700] opacity-50 text-2xl md:text-4xl">✦</span>
            <span className="mx-4 md:mx-8 text-transparent transition-all duration-300 hover:text-white cursor-default" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)' }}>BRANDS</span>
            <span className="text-[#FFD700] opacity-50 text-2xl md:text-4xl">✦</span>
            <span className="mx-4 md:mx-8 text-transparent transition-all duration-300 hover:text-white cursor-default" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)' }}>CREATORS</span>
            <span className="text-[#FFD700] opacity-50 text-2xl md:text-4xl">✦</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const ShortFormCard = ({ project }) => (
  <div className="relative w-full aspect-[9/16] bg-gradient-to-br from-[#1a1914] via-[#12110e] to-[#2a2512] rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#FFD700]/50 transition-all duration-500 shadow-xl flex items-center justify-center">
    
    {/* Premium Animated Placeholder Background */}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 group-hover:text-[#FFD700] transition-colors duration-500">
        <Play className="w-5 h-5 md:w-6 md:h-6 ml-1" />
      </div>
      <p className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mt-4">Hover to Play</p>
    </div>

    {/* Video Player */}
    <video 
      loop 
      muted 
      playsInline
      preload="none"
      onMouseEnter={(e) => {
        // Attempt to play only on hover
        const playPromise = e.target.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => console.log("Video play interrupted"));
        }
      }}
      onMouseLeave={(e) => {
        e.target.pause();
        // Don't reset time so they can resume where they left off, feels more premium!
      }}
      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"
    >
      <source src={project.video} type="video/mp4" />
    </video>

    {/* Metadata overlay */}
    <div className="absolute bottom-2 md:bottom-4 left-0 right-0 mx-auto w-[92%] bg-black/70 backdrop-blur-xl border border-white/10 rounded-lg md:rounded-xl p-1.5 md:p-2 flex items-center gap-2 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 overflow-hidden">
      <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-md flex items-center justify-center text-[#FFD700] font-sans font-black text-xs md:text-sm shadow-inner border border-white/5 shrink-0">
        {project.letter}
      </div>
      <div className="leading-tight font-sans overflow-hidden flex-1 text-left">
        <h4 className="text-white font-bold text-[10px] md:text-xs truncate">{project.brand}</h4>
        <p className="text-gray-400 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold mt-0.5 truncate">{project.sub}</p>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [filter, setFilter] = useState('short');
  const { isVisible, domRef } = useScrollReveal();

  const baseShorts = Array.from({ length: 16 }, (_, i) => ({
    brand: `Client Project ${i + 1}`,
    sub: "SHORT FORM",
    letter: "C",
    video: `/Videos/Short/${i + 1}.mp4`
  }));
  
  // We need exactly 18 videos so the 6 columns have equal heights (3 videos each). 
  // We just borrow the first 2 videos to fill the gap.
  const shortProjects = [...baseShorts, baseShorts[0], baseShorts[1]];

  const getColumns = (numCols) => {
    const cols = Array.from({ length: numCols }, () => []);
    shortProjects.forEach((p, i) => cols[i % numCols].push(p));
    return cols;
  };

  const longProjects = Array.from({ length: 4 }, (_, i) => ({
    brand: `Premium Edit 0${i + 1}`,
    sub: "LONG FORM",
    letter: "P",
    video: `https://res.cloudinary.com/ldzwikpf/video/upload/c_scale,w_1080,q_auto,f_auto/l${i + 1}.mp4`
  }));

  return (
    <section id="work" className="py-20 md:py-32 overflow-hidden relative">
      <div 
        ref={domRef}
        className={`max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16 flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#FFD700]"></div>
          <span className="text-[#FFD700] text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase font-sans whitespace-nowrap">[ OUR ARCHIVE ]</span>
          <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#FFD700]"></div>
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-black text-white tracking-tight text-center mb-8 md:mb-12 leading-tight">
          High-Impact Edits That <br/>
          <span className="text-gray-500 font-display italic font-medium">Perform</span>
        </h2>
        
        <div className="flex gap-2 p-1.5 bg-white/5 rounded-full border border-white/10 shadow-2xl backdrop-blur-md">
          <button 
            onClick={() => setFilter('short')}
            className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 font-sans ${filter === 'short' ? 'bg-[#FFD700] text-black shadow-[0_0_20px_rgba(255,215,0,0.3)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            Short-Form
          </button>
          <button 
            onClick={() => setFilter('long')}
            className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 font-sans ${filter === 'long' ? 'bg-[#FFD700] text-black shadow-[0_0_20px_rgba(255,215,0,0.3)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            Long-Form
          </button>
        </div>
      </div>

      {filter === 'short' ? (
        <div 
          className="w-full max-w-7xl mx-auto relative h-[85vh] min-h-[600px] max-h-[1000px] pause-all"
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <div className="absolute inset-0 overflow-hidden px-4 md:px-6">
            {/* Mobile Grid (2 columns) */}
            <div className="grid grid-cols-2 gap-3 md:hidden h-full">
              {getColumns(2).map((col, colIdx) => (
                <div key={colIdx} className={`flex flex-col gap-3 ${colIdx % 2 !== 0 ? 'animate-[scrollDown_30s_linear_infinite]' : 'animate-[scrollUp_30s_linear_infinite]'} hover:[animation-play-state:paused]`}>
                  {[...col, ...col].map((project, idx) => (
                    <ShortFormCard key={idx} project={project} />
                  ))}
                </div>
              ))}
            </div>
            
            {/* Tablet Grid (4 columns) */}
            <div className="hidden md:grid lg:hidden grid-cols-4 gap-4 h-full">
              {getColumns(4).map((col, colIdx) => (
                <div key={colIdx} className={`flex flex-col gap-4 ${colIdx % 2 !== 0 ? 'animate-[scrollDown_40s_linear_infinite]' : 'animate-[scrollUp_40s_linear_infinite]'} hover:[animation-play-state:paused]`}>
                  {[...col, ...col].map((project, idx) => (
                    <ShortFormCard key={idx} project={project} />
                  ))}
                </div>
              ))}
            </div>

            {/* Desktop Grid (6 columns) */}
            <div className="hidden lg:grid grid-cols-6 gap-5 h-full">
              {getColumns(6).map((col, colIdx) => (
                <div key={colIdx} className={`flex flex-col gap-5 ${colIdx % 2 !== 0 ? 'animate-[scrollDown_50s_linear_infinite]' : 'animate-[scrollUp_50s_linear_infinite]'} hover:[animation-play-state:paused]`}>
                  {[...col, ...col].map((project, idx) => (
                    <ShortFormCard key={idx} project={project} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-8 max-w-6xl mx-auto px-4 md:px-6 pb-12 md:pb-32">
          {longProjects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-5 group cursor-pointer w-full transition-all duration-700 ease-out hover:-translate-y-2 ${index % 2 === 1 ? 'md:mt-32' : ''}`}
            >
              <div className="w-full aspect-[4/5] md:aspect-[4/3] bg-gradient-to-br from-[#1a1914] via-[#12110e] to-[#2a2512] rounded-[2rem] overflow-hidden relative border border-white/5 group-hover:border-[#FFD700]/30 transition-colors duration-500 shadow-2xl shadow-black/50">
                
                {/* Premium Animated Placeholder Background */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 group-hover:text-[#FFD700] transition-colors duration-500">
                    <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                  </div>
                  <p className="text-[10px] md:text-[12px] text-white/30 uppercase tracking-[0.2em] font-bold mt-4">Hover to Play</p>
                </div>

                <video 
                  loop 
                  muted 
                  playsInline 
                  preload="none"
                  onMouseEnter={(e) => {
                    const playPromise = e.target.play();
                    if (playPromise !== undefined) {
                      playPromise.catch(error => console.log("Video play interrupted"));
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.pause();
                  }}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
              
              <div className="flex items-center gap-4 px-2">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] font-sans font-black text-xl shrink-0">
                  {project.letter}
                </div>
                <p className="text-white font-bold font-sans text-xl md:text-2xl tracking-tight">{project.brand}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const Experience = () => {
  const { isVisible, domRef } = useScrollReveal();
  
  return (
    <section className="py-12 md:py-32 relative z-10 w-full bg-[#12110E] overflow-hidden border-y border-white/5">
      <div 
        ref={domRef}
        className={`max-w-7xl mx-auto px-4 md:px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >


        {/* Marquee Strip - Sleek Dark Mode */}
        <div className="w-full max-w-6xl mx-auto bg-white/[0.02] border border-white/5 rounded-3xl py-8 md:py-10 relative z-10 mb-20 md:mb-32 overflow-hidden flex items-center backdrop-blur-xl shadow-2xl">
          <div className="flex animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap items-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
                 <span className="text-white/70 font-black text-2xl md:text-3xl tracking-tighter flex items-center gap-4 hover:text-white transition-colors cursor-default">
                   <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white text-base shadow-lg">A</div>
                   Walta technologies
                 </span>
                 <span className="text-white/70 font-black text-2xl md:text-3xl tracking-widest flex items-center gap-4 hover:text-white transition-colors cursor-default">
                   <div className="w-10 h-10 border-[3px] border-white/70 rounded-full border-t-transparent -rotate-45"></div>
                   Dacord Real Estate
                 </span>
                 <span className="text-white/70 font-black text-2xl md:text-3xl tracking-tight flex items-center gap-4 hover:text-white transition-colors cursor-default">
                   <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center p-1.5"><div className="w-full h-full rounded-full border-[3px] border-white flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div></div>
                   ECLIPTIC
                 </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 relative z-10 max-w-5xl mx-auto">
          <div className="text-center relative group cursor-default">
            <h3 className="text-6xl md:text-8xl font-display italic font-medium text-white group-hover:text-[#FFD700] transition-colors duration-500 tracking-tighter mb-4 md:mb-6">1000+</h3>
            <p className="text-gray-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Projects</p>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          </div>
          
          <div className="text-center relative group cursor-default">
            <h3 className="text-6xl md:text-8xl font-display italic font-medium text-white group-hover:text-[#FFD700] transition-colors duration-500 tracking-tighter mb-4 md:mb-6">10M+</h3>
            <p className="text-gray-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">ORGANIC IMPRESSIONS</p>
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          </div>
          
          <div className="text-center relative group cursor-default">
            <h3 className="text-6xl md:text-8xl font-display italic font-medium text-white group-hover:text-[#FFD700] transition-colors duration-500 tracking-tighter mb-4 md:mb-6">3+</h3>
            <p className="text-gray-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">TYEARS OF EXPERIENCE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ComparisonRow = ({ item, index }) => {
  const { isVisible: isRowVisible, domRef: rowRef } = useScrollReveal(index * 100);
  return (
    <div 
      ref={rowRef}
      className={`grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-6 md:gap-8 py-8 md:py-10 border-b border-white/5 items-start transition-all duration-700 hover:bg-white/[0.02] px-4 -mx-4 md:px-6 md:-mx-6 rounded-2xl ${isRowVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
    >
      {/* Title */}
      <h3 className="text-lg md:text-xl font-sans font-bold text-white pt-1">{item.title}</h3>

      {/* Bad (Mobile gets headers added inline) */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-2 md:hidden">
          <XCircle className="w-5 h-5 text-red-500" strokeWidth={2} />
          <span className="text-white font-bold text-sm">Other Providers</span>
        </div>
        <p className="text-gray-400 text-sm md:text-sm leading-relaxed font-sans">{item.badDesc}</p>
      </div>

      {/* Good */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-2 md:hidden">
          <CheckCircle className="w-5 h-5 text-[#FFD700]" strokeWidth={2} />
          <span className="text-white font-bold text-sm">Framex Studio</span>
        </div>
        <p className="text-gray-200 text-sm md:text-sm leading-relaxed font-sans font-medium">{item.goodDesc}</p>
      </div>
    </div>
  );
};

const Comparison = () => {
  const { isVisible, domRef } = useScrollReveal();
  
  const comparisons = [
    { title: "Deadline", badDesc: "Missed deadlines in ~80% of cases.", goodDesc: "99% of cases strictly on deadline." },
    { title: "Target Audience Focus", badDesc: "Standard edit with basic motion templates.", goodDesc: "Customized to the pain points, symptoms & sophistication of the audience." },
    { title: "Communication", badDesc: "Replies usually around 3 AM on weekdays.", goodDesc: "Max response time on weekdays: 1 hour." },
    { title: "UI & Creative Input", badDesc: "Usually non-existent & no creative ping-pong.", goodDesc: "Adaptation to your UI & audience expectations + input on visuals." }
  ];

  return (
    <section className="py-12 md:py-32 relative overflow-hidden">
      <div 
        ref={domRef}
        className={`max-w-5xl mx-auto px-4 md:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-white tracking-tight mb-1 md:mb-2">
            Why are our edits
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-[#FFD700] italic tracking-tight">
            so much better?
          </h2>
        </div>
        
        <div className="flex flex-col">
          <div className="hidden md:grid grid-cols-[1fr_1fr] md:grid-cols-[1.2fr_1fr_1fr] gap-4 md:gap-8 items-end pb-8 border-b border-white/10">
             <div></div>
             <div className="flex flex-col items-start">
               <div className="w-10 h-10 rounded-full border border-red-500/30 flex items-center justify-center mb-3">
                 <XCircle className="w-5 h-5 text-red-500" strokeWidth={2} />
               </div>
               <h4 className="text-white font-bold font-sans text-base">Other Providers</h4>
             </div>
             <div className="flex flex-col items-start">
               <div className="w-10 h-10 rounded-full border border-[#FFD700]/30 flex items-center justify-center mb-3">
                 <CheckCircle className="w-5 h-5 text-[#FFD700]" strokeWidth={2} />
               </div>
               <h4 className="text-white font-bold font-sans text-base">Framex Studio</h4>
             </div>
          </div>

          {comparisons.map((item, i) => (
            <ComparisonRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ step, index }) => {
  const { isVisible, domRef } = useScrollReveal(index * 150);
  return (
    <div 
      ref={domRef}
      className={`relative bg-[#181715]/80 backdrop-blur-sm p-6 md:p-10 rounded-2xl md:rounded-[2rem] flex flex-col md:flex-row md:items-center gap-4 md:gap-10 border border-white/5 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-[#1a1914] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      <div className="absolute -left-[1.85rem] md:-left-[3.4rem] top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#12110E] border-[2px] border-[#FFD700] rounded-full group-hover:scale-150 group-hover:bg-[#FFD700] transition-all duration-300"></div>

      <span className="text-[#FFD700] font-display italic text-5xl md:text-7xl font-bold shrink-0 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
        0{index + 1}
      </span>
      <div>
        <h3 className="text-xl md:text-3xl font-sans font-bold text-white mb-2 md:mb-3 transition-colors duration-300">{step.title}</h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">{step.desc}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    { title: "Kick Off Strategy", desc: "We deep-dive into your audience, USPs, and visual needs to craft a bespoke editing playbook." },
    { title: "Script & Storyboard", desc: "We map out the hooks, visual pacing, and retention mechanics before a single frame is cut." },
    { title: "Dynamic Animation", desc: "Our team brings the vision to life with custom motion graphics, SFX, and color grading." },
    { title: "Rapid Iteration", desc: "Review via Frame.io. Tell us what you want tweaked, and we execute changes lightning fast." }
  ];

  return (
    <section id="process" className="py-12 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white tracking-tight">The <span className="font-display italic font-medium text-[#FFD700]">Pipeline</span></h2>
          <p className="text-gray-400 mt-4 md:mt-6 max-w-xl mx-auto font-medium text-sm md:text-base px-4">A frictionless system designed to take you from raw footage to high-converting asset.</p>
        </div>
        
        <div className="relative pl-8 md:pl-20 max-w-3xl mx-auto">
          <div className="absolute left-2 md:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FFD700] via-white/10 to-transparent"></div>

          <div className="flex flex-col gap-8 md:gap-12">
            {steps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, role, index }) => {
  const { isVisible, domRef } = useScrollReveal();
  return (
    <div 
      ref={domRef}
      className={`bg-[#181715]/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 transition-all duration-700 hover:-translate-y-2 hover:border-[#FFD700]/30 hover:bg-[#1a1914] shadow-xl group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        ))}
      </div>
      <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed font-sans mb-8">"{quote}"</p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-display italic font-bold text-xl text-[#FFD700] border border-white/20">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-bold font-sans">{author}</h4>
          <p className="text-gray-500 text-xs uppercase tracking-widest mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    { quote: "They completely transformed our YouTube presence. We saw a 300% increase in retention within the first month.", author: "Abebe Kebede", role: "Content Creator" },
    { quote: "The best editing team we've ever worked with. Lightning fast, incredible attention to detail, and they understand pacing better than anyone.", author: "Natan", role: "Marketing Director" },
    { quote: "Our ROI went through the roof. They don't just edit videos, they engineer them to keep eyes glued to the screen.", author: "Nebiyu", role: "Agency Owner" }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#0c0c09]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white tracking-tight">Client <span className="font-display italic font-medium text-[#FFD700]">Love</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((test, i) => (
            <TestimonialCard key={i} index={i} {...test} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="overflow-hidden pt-20 md:pt-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic font-medium text-white mb-8 md:mb-10">Want To Work Together?</h2>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-16 md:mb-24 w-full sm:w-auto px-4">
          <a href="mailto:info@framexstudio.com" className="bg-white/5 border border-white/10 px-6 md:px-8 py-3 md:py-4 rounded-full text-white/90 text-xs md:text-sm hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-pointer font-sans font-medium flex items-center justify-center gap-3 group w-full sm:w-auto">
            <Mail className="w-4 h-4 text-[#FFD700] group-hover:scale-110 transition-transform" /> info@framexstudio.com
          </a>
          <a href="tel:+251944074894" className="bg-white/5 border border-white/10 px-6 md:px-8 py-3 md:py-4 rounded-full text-white/90 text-xs md:text-sm hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-pointer font-sans font-medium flex justify-center w-full sm:w-auto">
            +251 944 074 894 | +251 947 648 879
          </a>
        </div>
      </div>

      <div className="bg-[#FFD700] py-3 md:py-5 -rotate-2 scale-110 overflow-hidden flex whitespace-nowrap mb-12 md:mb-24 shadow-[0_0_50px_rgba(255,215,0,0.2)] z-20 relative">
        <div className="animate-[marquee_15s_linear_infinite] hover:[animation-play-state:paused] flex items-center text-black font-medium text-2xl md:text-4xl font-display italic">
          {Array(20).fill("Let's have a chat »").map((text, i) => (
            <span key={i} className="mx-4 md:mx-8 hover:opacity-70 transition-opacity cursor-pointer">{text}</span>
          ))}
        </div>
      </div>

      <div className="w-full mx-auto px-2 text-center relative z-10 flex flex-col items-center overflow-hidden">
        <h2 
          className="text-[11vw] sm:text-[12vw] md:text-[11.5vw] leading-none whitespace-nowrap font-sans font-black tracking-tighter mb-8 md:mb-12 select-none cursor-default"
          style={{
            background: 'linear-gradient(to bottom, #ffffff, #666666)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0px 20px 50px rgba(255,215,0,0.1)'
          }}
        >
          Framex Studio
        </h2>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center py-6 md:py-8 border-t border-white/10 gap-6 md:gap-8">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-400 font-sans font-medium">
            <MonitorPlay className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] mr-0 md:mr-2 hidden md:block" />
            <a href="#home" className="hover:text-[#FFD700] transition-colors">Home</a>
            <a href="#work" className="hover:text-[#FFD700] transition-colors">Work</a>
            <a href="#process" className="hover:text-[#FFD700] transition-colors">Process</a>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3 md:gap-4 text-xs md:text-sm text-gray-400 font-sans font-medium">
             <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a href="#" className="hover:text-white transition-colors">TikTok</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             </div>
             <p className="text-gray-600 text-[10px] md:text-xs mt-1 font-medium">© 2026 Framex Studio. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const BackgroundGrid = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    {/* Subtle Grid Pattern */}
    <div 
      className="absolute inset-0 opacity-[0.07]" 
      style={{
        backgroundImage: `
          linear-gradient(to right, #FFD700 1px, transparent 1px),
          linear-gradient(to bottom, #FFD700 1px, transparent 1px)
        `,
        backgroundSize: '5rem 5rem',
        maskImage: 'radial-gradient(ellipse 100% 100% at 50% 10%, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 10%, black 20%, transparent 80%)'
      }}
    />
    
    {/* Main Top Center Gold Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[120vw] md:w-[80vw] h-[80vh] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.18)_0%,rgba(255,215,0,0)_70%)] rounded-full blur-[80px]" />
    
    {/* Subtle Secondary Glows for depth */}
    <div className="absolute top-[30%] -left-[20%] w-[70vw] h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.06)_0%,rgba(255,215,0,0)_70%)] rounded-full blur-[100px]" />
    <div className="absolute bottom-[-10%] -right-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.04)_0%,rgba(255,215,0,0)_70%)] rounded-full blur-[100px]" />
  </div>
);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
      
      <div className={`bg-[#12110E] min-h-screen text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          
          body { 
            font-family: 'Inter', sans-serif; 
            overflow-x: hidden; 
            background-color: #12110E; 
          }
          .font-sans {
            font-family: 'Inter', sans-serif;
          }
          .font-display { 
            font-family: 'Playfair Display', serif; 
          }
          
          ::selection {
            background-color: #FFD700;
            color: black;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes progress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }

          @keyframes pulseGlow {
            0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
          }

          @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(120%); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          
          @keyframes scrollDown {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          
          .pause { animation-play-state: paused; }
          .pause-all:hover * { animation-play-state: paused !important; }
        `}} />
        
        {isLoaded && (
          <>
            <BackgroundGrid />
            
            <Navbar />
            <Hero />
            <Portfolio />
            <Experience />
            <Comparison />
            <Process />
            <Testimonials />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default App;