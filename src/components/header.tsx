import { Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center w-[90%] max-w-[1000px] mx-auto pt-20 text-center relative z-10">
      <div className="relative mb-8 animate-scale-in">
        <div className="absolute inset-0 bg-[#3F6F6D] blur-[60px] opacity-20 rounded-full"></div>
        <img 
          src="https://github.com/TonyRodIv/portfolio/blob/main/public/pfpG.png?raw=true" 
          className="relative z-10 rounded-full w-32 h-32 md:w-48 md:h-48 object-cover border-4 border-white shadow-2xl" 
          alt="Profile" 
          onError={(e) => { e.currentTarget.src = "https://placehold.co/200x200/3F6F6D/FFF?text=AR"; }}
        />
      </div>
      <h1 className="text-4xl md:text-7xl font-extrabold text-[#323232] mb-6 animate-fade-up tracking-tight">
        Criando experiências <br/> digitais <span className="text-[#3F6F6D]">memoráveis</span>.
      </h1>
      <p className="text-lg md:text-xl text-[#323232]/70 max-w-2xl mb-10 animate-fade-up animate-delay-100">
        Full Stack Developer focado em interfaces limpas e arquiteturas robustas.
      </p>
      <div className="flex gap-4 animate-fade-up animate-delay-200">
        <a href="#projects" className="bg-[#323232] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Ver Projetos</a>
        <div className="flex gap-2">
          <a href="https://github.com/TonyRodIv" className="p-3 bg-white rounded-full shadow-sm hover:text-[#3F6F6D] transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/Tonyrodiv/" className="p-3 bg-white rounded-full shadow-sm hover:text-[#3F6F6D] transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </section>
  );
}