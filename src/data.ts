export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  tech: string[];
  year: string;
  role: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EcoTracker",
    subtitle: "SaaS de Sustentabilidade",
    description: "Monitoramento de pegada de carbono em tempo real.",
    challenge: "Empresas lutam para consolidar dados de emissões de fontes fragmentadas em relatórios auditáveis.",
    solution: "Desenvolvemos uma pipeline de dados agnóstica que ingere CSVs e APIs, normalizando tudo em um dashboard React.",
    tech: ["React", "Node.js", "AWS", "Recharts"],
    year: "2024",
    role: "Lead Frontend",
    image: "https://placehold.co/800x600/3F6F6D/FFF3E8?text=EcoTracker",
    link: "#"
  },
  {
    id: 2,
    title: "DevDash",
    subtitle: "Produtividade para Devs",
    description: "Dashboard centralizado para CI/CD e tickets.",
    challenge: "A alternância de contexto entre GitHub, Jira e Vercel estava matando a produtividade do time.",
    solution: "Um 'Single Pane of Glass' que usa webhooks para atualizar status em tempo real com interface arrastável.",
    tech: ["Next.js", "GraphQL", "Tailwind", "Prisma"],
    year: "2023",
    role: "Full Stack",
    image: "https://placehold.co/800x600/2A4A48/FFF3E8?text=DevDash",
    link: "#"
  },
  {
    id: 3,
    title: "CryptoVis",
    subtitle: "Fintech & Dados",
    description: "Análise de sentimento de mercado cripto.",
    challenge: "Traders perdem sinais importantes que aparecem em redes sociais antes de impactarem o preço.",
    solution: "Visualizador que cruza a API da CoinGecko com análise de sentimento (NLP) do Twitter/NewsAPI.",
    tech: ["Vue", "Firebase", "Chart.js", "NLP"],
    year: "2023",
    role: "Frontend",
    image: "https://placehold.co/800x600/558F8C/FFF3E8?text=CryptoVis",
    link: "#"
  }
];