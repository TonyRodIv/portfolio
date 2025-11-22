import { XCircle, Globe, Sparkles, ExternalLink } from 'lucide-react';
import { Project } from '../data'; // Importa do arquivo data.ts na raiz de src

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#323232]/40 backdrop-blur-sm animate-fade-up">
      <div className="bg-[#FFF3E8] w-full max-w-[1100px] max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
        
        <button onClick={onClose} className="absolute top-6 right-6 z-20 bg-white/50 hover:bg-white p-2 rounded-full backdrop-blur-md transition-all cursor-pointer">
          <XCircle size={32} className="text-[#323232]" />
        </button>

        {/* Esquerda: Visual */}
        <div className="w-full md:w-5/12 h-64 md:h-auto relative">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3F6F6D]/20 mix-blend-multiply"></div>
        </div>

        {/* Direita: Conteúdo Scrollável */}
        <div className="w-full md:w-7/12 overflow-y-auto p-8 md:p-12 bg-[#FFF3E8]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#3F6F6D] font-bold text-sm uppercase tracking-wider">{project.subtitle}</span>
            <span className="w-1 h-1 bg-[#323232] rounded-full"></span>
            <span className="text-[#323232]/60 text-sm font-medium">{project.year}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#323232] mb-8 leading-[1.1]">{project.title}</h2>

          <div className="space-y-8">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-[#323232] text-lg mb-3">
                <div className="bg-[#3F6F6D]/10 p-1.5 rounded-md"><Globe size={18} className="text-[#3F6F6D]"/></div> 
                O Desafio
              </h4>
              <p className="text-[#323232]/80 leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-bold text-[#323232] text-lg mb-3">
                <div className="bg-[#3F6F6D]/10 p-1.5 rounded-md"><Sparkles size={18} className="text-[#3F6F6D]"/></div> 
                A Solução
              </h4>
              <p className="text-[#323232]/80 leading-relaxed">{project.solution}</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-[#3F6F6D]/10">
              <h4 className="font-bold text-[#323232] mb-4 text-sm uppercase">Stack Utilizada</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-[#FFF3E8] text-[#3F6F6D] rounded-lg text-sm font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a href={project.link} className="block w-full bg-[#323232] hover:bg-[#3F6F6D] text-white text-center font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2">
              Acessar Projeto Online <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}