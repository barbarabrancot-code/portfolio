import gingoImg from "@/assets/images/gingo.png";

export type Project = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  description: string;
  image?: string;
  page?: {
    heroImage?: string;
    type?: string;
    tools?: string;
    category?: string;
    body?: string[];
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "gingo",
    title: "Gingô",
    date: "06/2026",
    tag: "UX/UI",
    description: "Design de aplicativo mobile de eventos voltado para a comunidade da dança.",
    image: gingoImg,
    page: {
      heroImage: gingoImg,
      type: "Projeto de conclusão de curso",
      tools: "Figma",
      category: "UX/UI",
      body: [
        "Gingô is an innovative project designed to showcase the culmination of our academic journey. This course completion project represents not just the skills we've acquired, but also our passion for design and user experience. Through meticulous research and creative exploration, we have crafted a solution that addresses real-world challenges while enhancing user engagement. Our goal is to create a seamless interaction that resonates with users and elevates their experience.",
        "In this project, we delve into the principles of UX/UI design, applying theoretical knowledge to practical applications. Each element has been thoughtfully designed to ensure clarity and functionality, making it accessible to a diverse audience. As we present our work, we invite you to explore the intricacies of our design process and the innovative solutions we've developed, reflecting our commitment to excellence in the field.",
      ],
    },
  },
  { slug: "polen", title: "Pólen", date: "11/2025", tag: "Product", description: "Plataforma de gestão de safra para pequenos produtores, com sincronização offline e relatórios." },
  { slug: "cardume", title: "Cardume", date: "07/2025", tag: "Branding", description: "Identidade visual completa para um clube de assinatura de livros independentes brasileiros." },
  { slug: "helios", title: "Helios", date: "04/2025", tag: "UX/UI", description: "Dashboard de monitoramento de painéis solares residenciais, com alertas inteligentes." },
  { slug: "vento-sul", title: "Vento Sul", date: "01/2025", tag: "Visual", description: "Sistema de comunicação e sinalização para festival de música no litoral catarinense." },
  { slug: "mira", title: "Mira", date: "09/2024", tag: "Product", description: "App de telemedicina com triagem por IA, agendamento e prontuário acessível ao paciente." },
  { slug: "tear", title: "Tear", date: "05/2024", tag: "Branding", description: "Marca para coletivo de artesãs do nordeste, da identidade ao e-commerce próprio." },
  { slug: "orbita", title: "Órbita", date: "02/2024", tag: "UX/UI", description: "Redesign de SaaS B2B com foco em redução de churn e ativação de novos times." },
];
