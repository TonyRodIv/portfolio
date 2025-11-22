import { ArrowRight } from 'lucide-react';
import { projects, Project } from '../data'; // Importa do arquivo data.ts na raiz de src

interface ProjectsGridProps {
  onProjectSelect: (project: Project) => void;
}

export default function ProjectsGrid({ onProjectSelect }: ProjectsGridProps) {
  return (
    <section id="projects" className="w-full py-24 relative z-10">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        <h2 className="text-4xl font-bold text-[#323232] mb-12 text-center">Trabalhos Recentes</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => onProjectSelect(project)}
              className="group relative w-full md:w-[48%] lg:w-[32%] h-[450px] rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagem de Fundo */}
              <div className="absolute inset-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#323232]/90 via-[#323232]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Conteúdo Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-[#3F6F6D] px-3 py-1 rounded-full text-xs font-bold mb-3 backdrop-blur-md border border-white/10">
                  {project.year}
                </div>
                <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
                <p className="text-white/70 mb-4 font-medium">{project.subtitle}</p>
                
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map(t => <span key={t} className="text-[10px] border border-white/20 px-2 py-1 rounded-md">{t}</span>)}
                  </div>
                  <span className="inline-flex items-center text-sm font-bold text-[#FFF3E8] border-b border-[#FFF3E8] pb-0.5">
                    Explorar Case <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}