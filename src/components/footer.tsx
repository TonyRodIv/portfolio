import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#323232] text-white py-20 mt-10 text-center rounded-t-[3rem]">
      <div className="w-[90%] max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para inovar?</h2>
        <p className="text-white/60 mb-10">Vamos transformar suas ideias em realidade digital.</p>
        <a href="mailto:oi@exemplo.com" className="inline-flex items-center gap-2 bg-[#3F6F6D] px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#3F6F6D] transition-all">
          <Mail size={20} /> Iniciar Conversa
        </a>
        <p className="mt-16 text-sm text-white/20">© 2025 Antony Rodrigues</p>
      </div>
    </footer>
  );
}