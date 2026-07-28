/**
 * Mídia originada de videos_fotos/ — servida via public/images e public/videos.
 */

export const mediaImages = {
  draRenataHero: "/images/profissional/dra-renata-nova.png",
  draRenataConsulta: "/images/profissional/dra-renata-consulta.jpeg",
  procedimentoFacial1: "/images/procedimentos/procedimento-facial-1.jpeg",
  procedimentoFacial2: "/images/procedimentos/procedimento-facial-2.jpeg",
  procedimentoMasculino: "/images/procedimentos/procedimento-masculino.jpeg",
  avaliacaoEspelho: "/images/procedimentos/avaliacao-espelho.jpeg",
  consultaAvaliacao: "/images/clinica/consulta-avaliacao.jpeg",
  estanteProdutos: "/images/clinica/estante-produtos.jpeg",
  recepcaoCafe: "/images/clinica/recepcao-cafe.jpeg",
  antesDepoisFacial: "/images/resultados/antes-depois-facial.jpeg",
} as const;

export interface MediaVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  muted?: boolean;
}

export const mediaVideos: MediaVideo[] = [
  {
    id: "apresentacao-clinica",
    src: "/videos/apresentacao-clinica.mp4",
    poster: mediaImages.draRenataConsulta,
    title: "Conheça a Clínica Renata Bastos",
  },
  {
    id: "avaliacao-espelho",
    src: "/videos/avaliacao-espelho.mp4",
    poster: mediaImages.avaliacaoEspelho,
    title: "Avaliação personalizada",
  },
  {
    id: "procedimento-facial-1",
    src: "/videos/procedimento-facial-1.mp4",
    poster: mediaImages.procedimentoFacial1,
    title: "Procedimento facial em ambiente clínico",
  },
  {
    id: "procedimento-facial-2",
    src: "/videos/procedimento-facial-2.mp4",
    poster: mediaImages.procedimentoFacial2,
    title: "Precisão técnica em rejuvenescimento",
    muted: true,
  },
  {
    id: "procedimento-facial-3",
    src: "/videos/procedimento-facial-3.mp4",
    poster: mediaImages.procedimentoFacial2,
    title: "Tratamento facial personalizado",
  },
  {
    id: "procedimento-corporal-1",
    src: "/videos/procedimento-corporal-1.mp4",
    poster: mediaImages.procedimentoMasculino,
    title: "Procedimento corporal personalizado",
  },
  {
    id: "procedimento-corporal-2",
    src: "/videos/procedimento-corporal-2.mp4",
    poster: mediaImages.consultaAvaliacao,
    title: "Protocolo estético integrativo",
  },
];

const videosById = Object.fromEntries(mediaVideos.map((video) => [video.id, video]));

export const clinicaGallery = [
  { src: mediaImages.recepcaoCafe, alt: "Recepção acolhedora da clínica" },
  { src: mediaImages.draRenataConsulta, alt: "Dra. Renata Bastos em atendimento" },
  { src: mediaImages.consultaAvaliacao, alt: "Consulta e avaliação personalizada" },
  { src: mediaImages.avaliacaoEspelho, alt: "Avaliação facial com espelho" },
  { src: mediaImages.estanteProdutos, alt: "Produtos e materiais de alta qualidade" },
  { src: mediaImages.procedimentoFacial1, alt: "Procedimento facial" },
  { src: mediaImages.procedimentoFacial2, alt: "Harmonização facial — precisão técnica" },
  { src: mediaImages.procedimentoMasculino, alt: "Procedimento estético masculino" },
];

export const resultadosGallery = [
  { src: mediaImages.antesDepoisFacial, alt: "Antes e depois facial com resultado natural" },
];

export const featuredVideo = videosById["apresentacao-clinica"];

export const clinicVideos = [
  videosById["apresentacao-clinica"],
  videosById["avaliacao-espelho"],
].filter(Boolean);

export const metodoVideos = [videosById["avaliacao-espelho"]].filter(Boolean);

export const facialVideos = [
  videosById["procedimento-facial-1"],
  videosById["procedimento-facial-2"],
].filter(Boolean);

export const corporalVideos = [
  videosById["procedimento-corporal-1"],
  videosById["procedimento-corporal-2"],
].filter(Boolean);
