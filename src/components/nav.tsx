import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none flex flex-col items-center pt-4 md:pt-6">
        <div className="pointer-events-auto w-[90%] max-w-[1200px] h-16 bg-[#FFF3E8]/80 backdrop-blur-md border border-[#3F6F6D]/10 rounded-full shadow-sm flex justify-between items-center px-6 transition-all hover:shadow-md">
          <div className='flex items-center gap-2 font-bold text-[#323232] text-xl'>
            <div className='w-2 h-2 bg-[#3F6F6D] rounded-full'></div>
            TonyRodIv
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium text-[#323232]">
            <li><a className="hover:text-[#3F6F6D] transition-colors" href="#about">Sobre</a></li>
            <li><a className="hover:text-[#3F6F6D] transition-colors" href="#projects">Projetos</a></li>
            <li><a href="#contact" className="px-5 py-2 bg-[#323232] text-[#FFF3E8] rounded-full hover:bg-[#3F6F6D] transition-colors">Contato</a></li>
          </ul>
          <button onClick={toggleMenu} className="md:hidden text-[#323232]"><Menu size={24} /></button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#FFF3E8] flex flex-col items-center justify-center gap-8 animate-fade-up">
          <button onClick={toggleMenu} className="absolute top-8 right-8"><X size={32} /></button>
          <a onClick={toggleMenu} href="#about" className="text-4xl font-bold text-[#323232]">Sobre</a>
          <a onClick={toggleMenu} href="#projects" className="text-4xl font-bold text-[#323232]">Projetos</a>
          <a onClick={toggleMenu} href="#contact" className="text-4xl font-bold text-[#3F6F6D]">Contato</a>
        </div>
      )}
    </>
  );
}