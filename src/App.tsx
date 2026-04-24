import React, { useState, useEffect } from "react";

// ==========================================
// ÍCONES EMBUTIDOS (Substitui o lucide-react)
// ==========================================
const Icon = ({ children, size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);
const MessageCircle = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </Icon>
);
const ShieldCheck = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
const Clock = ({ size, className }) => (
  <Icon size={size} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Icon>
);
const FileSearch = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
    <path d="m9 18-1.5-1.5" />
    <circle cx="5" cy="14" r="3" />
  </Icon>
);
const CheckCircle2 = ({ size, className }) => (
  <Icon size={size} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
const ChevronDown = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);
const Menu = ({ size, className }) => (
  <Icon size={size} className={className}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </Icon>
);
const X = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
);
const MapPin = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);
const Scale = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </Icon>
);
const Brain = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M9.5 2A5.5 5.5 0 0 0 4 7.5c0 1.63.71 3.1 1.83 4.12.11.1.2.22.25.35.4.92.2 2.03-.5 2.53a3.5 3.5 0 1 0 4.92 4.92c.5-.7 1.61-.9 2.53-.5.13.05.25.14.35.25A5.5 5.5 0 0 0 22 14.5c0-1.63-.71-3.1-1.83-4.12a.65.65 0 0 1-.25-.35c-.4-.92-.2-2.03.5-2.53a3.5 3.5 0 1 0-4.92-4.92c-.5.7-1.61.9-2.53.5a.65.65 0 0 1-.35-.25A5.5 5.5 0 0 0 9.5 2z" />
  </Icon>
);
const GraduationCap = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </Icon>
);
const Zap = ({ size, className }) => (
  <Icon size={size} className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Icon>
);
const HeartHandshake = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 15v3.8l-1.3 1.2c-.4.4-1.1.4-1.5 0l-1.6-1.5c-.8-.8-.8-2.1 0-2.9l1.4-1.3" />
    <path d="M17 14v4.8c0 .5-.4 1-1 1h-2c-.5 0-1-.4-1-1v-4.8" />
    <path d="M12 15l2 1.8c.4.4 1.1.4 1.5 0l2.3-2.1" />
  </Icon>
);
const FileText = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
  </Icon>
);
const Gavel = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="m14 13-5 5" />
    <path d="m15 16-5 5" />
    <path d="m18 10-5 5" />
    <path d="m19 13-5 5" />
    <path d="m21 10-5-5" />
    <path d="M9 13 4 8" />
    <path d="m10 16-5-5" />
    <path d="m13 19-5-5" />
  </Icon>
);
const Home = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </Icon>
);
const Users = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);
const Briefcase = ({ size, className }) => (
  <Icon size={size} className={className}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </Icon>
);
// ==========================================

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const colors = {
    navy: "#1b1d2f",
    background: "#e4e6f9",
    white: "#ffffff",
    gold: "#c5a059",
  };

  useEffect(() => {
    // ESTA É A MÁGICA QUE IMPEDE QUE FIQUE DESCONFIGURADO NO CODESANDBOX
    if (!document.getElementById("tailwind-cdn")) {
      const script = document.createElement("script");
      script.id = "tailwind-cdn";
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Contacto WhatsApp com nome completo na mensagem
  const whatsappLink =
    "https://wa.me/5551997278848?text=Olá Dr. Flávio D. Alcaraz Gomes, gostaria de uma consultoria jurídica.";

  const SectionTitle = ({ children, light = false, className = "" }) => (
    <h2
      className={`text-3xl md:text-5xl font-bold mb-6 leading-tight text-center ${
        light ? "text-white" : "text-[#1b1d2f]"
      } ${className}`}
      style={{ fontFamily: "Libre Baskerville, serif" }}
    >
      {children}
    </h2>
  );

  const GoldButton = ({ children, className = "" }) => (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c5a059] text-white rounded-md font-bold text-lg hover:bg-[#b38f4d] transition-all transform hover:scale-105 shadow-lg ${className}`}
      style={{ fontFamily: "Libre Baskerville, serif" }}
    >
      <MessageCircle size={22} />
      {children}
    </a>
  );

  const areasAtuacao = [
    {
      title: "Direito de família",
      desc: "Divórcios, guarda de filhos, pensão alimentícia e inventários com sensibilidade e técnica.",
      icon: <Users size={40} />,
      dark: false,
    },
    {
      title: "Contratos",
      desc: "Elaboração, análise e revisão de contratos civis e comerciais para sua segurança jurídica.",
      icon: <FileText size={40} />,
      dark: true,
    },
    {
      title: "Direito penal",
      desc: "Atuação em investigações, audiências e processos criminais, garantindo defesa técnica e proteção dos direitos do cliente.",
      icon: <Gavel size={40} />,
      dark: false,
    },
    {
      title: "Direito do Consumidor",
      desc: "Defesa contra práticas abusivas, cobranças indevidas e problemas com produtos ou serviços.",
      icon: <HeartHandshake size={40} />,
      dark: true,
    },
    {
      title: "Direito Imobiliário",
      desc: "Ações possessórias, usucapião, despejos e regularização de imóveis.",
      icon: <Home size={40} />,
      dark: false,
    },
    {
      title: "Sucessões",
      desc: "Planejamento sucessório, testamentos e partilha de bens de forma eficiente.",
      icon: <Briefcase size={40} />,
      dark: true,
    },
  ];

  return (
    <div
      className="min-h-screen selection:bg-[#c5a059] selection:text-white"
      style={{ backgroundColor: colors.background, color: colors.navy }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
          body { font-family: 'Libre Baskerville', serif; font-size: 20px; }
          .font-title { font-size: 55px; font-weight: 700; }
          .font-subtitle { font-size: 40px; font-weight: 700; }
          html { scroll-behavior: smooth; }
        `}
      </style>

      {/* Navegação */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1b1d2f] py-2 shadow-xl" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="logo.jpg"
              alt="Logo Dr. Flávio D. Alcaraz Gomes"
              className="h-12 md:h-16"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            <a
              href="#inicio"
              className={`${
                isScrolled ? "text-white" : "text-[#1b1d2f]"
              } hover:text-[#c5a059]`}
            >
              Início
            </a>
            <a
              href="#areas"
              className={`${
                isScrolled ? "text-white" : "text-[#1b1d2f]"
              } hover:text-[#c5a059]`}
            >
              Áreas
            </a>
            <a
              href="#sobre"
              className={`${
                isScrolled ? "text-white" : "text-[#1b1d2f]"
              } hover:text-[#c5a059]`}
            >
              Diferenciais
            </a>
            <a
              href={whatsappLink}
              className="bg-[#c5a059] text-white px-4 py-2 rounded text-xs"
            >
              Consultoria Direta
            </a>
          </div>

          <button
            className="md:hidden text-[#1b1d2f]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? "text-white" : ""} />
            ) : (
              <Menu className={isScrolled ? "text-white" : ""} />
            )}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1b1d2f] text-white flex flex-col items-center justify-center gap-8 text-2xl">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
            Início
          </a>
          <a href="#areas" onClick={() => setIsMenuOpen(false)}>
            Áreas de Atuação
          </a>
          <a href="#sobre" onClick={() => setIsMenuOpen(false)}>
            Diferenciais
          </a>
          <GoldButton onClick={() => setIsMenuOpen(false)}>WhatsApp</GoldButton>
        </div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 space-y-6">
            <h1 className="font-title leading-tight text-[#1b1d2f]">
              Seu Direito não pode esperar:{" "}
              <span className="text-[#c5a059]">Solução estratégica</span> e sem
              burocracia.
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              O <span className="font-bold">Dr. Flávio D. Alcaraz Gomes</span>{" "}
              utiliza métodos práticos de análise para uma condução de casos
              focada na identificação imediata de soluções viáveis, superando a
              lentidão e a burocracia do direito tradicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GoldButton>Analisar o meu caso via WhatsApp</GoldButton>
            </div>
            <div className="flex items-center gap-2 text-sm opacity-70">
              <ShieldCheck size={18} className="text-[#c5a059]" />
              <span>
                OAB/SC 139144 • Atendimento Estratégico em Florianópolis e Porto
                Alegre
              </span>
            </div>
          </div>
          <div className="md:w-2/5 relative">
            <div className="absolute -inset-4 bg-[#c5a059] rounded-lg opacity-20 blur-xl"></div>
            <img
              src="WhatsApp Image 2026-04-24 at 14.57.01.jpeg"
              alt="Dr. Flávio D. Alcaraz Gomes"
              className="relative rounded-lg shadow-2xl w-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Filosofia de Trabalho */}
      <section className="py-16 bg-[#1b1d2f] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-white/10 rounded-full text-[#c5a059]">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold">Soluções Práticas</h3>
              <p className="opacity-80 text-base leading-relaxed">
                No escritório, o atendimento não se limita à teoria jurídica
                tradicional. Utilizamos métodos de análise que priorizam a
                agilidade.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-white/10 rounded-full text-[#c5a059]">
                <FileSearch size={32} />
              </div>
              <h3 className="text-xl font-bold">Caminhos Seguros</h3>
              <p className="opacity-80 text-base leading-relaxed">
                Cada caso é conduzido através de mapeamento de riscos,
                identificando a rota com maior probabilidade de êxito e menor
                exposição para o cliente.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-white/10 rounded-full text-[#c5a059]">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-bold">Visão Estratégica</h3>
              <p className="opacity-80 text-base leading-relaxed">
                A condução do caso é planeada como um tabuleiro. Antecipamos
                movimentos para garantir que cada etapa nos aproxime do objetivo
                final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-24 px-6 bg-[#e4e6f9]">
        <div className="container mx-auto">
          <SectionTitle className="italic mb-4">Áreas de atuação</SectionTitle>
          <div className="w-24 h-1 bg-[#1b1d2f] mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {areasAtuacao.map((area, index) => (
              <div
                key={index}
                className={`p-12 flex flex-col items-center text-center min-h-[380px] justify-center transition-all duration-300 ${
                  area.dark
                    ? "bg-[#1b1d2f] text-white shadow-xl scale-105 z-10"
                    : "bg-white text-[#1b1d2f]"
                }`}
              >
                <div
                  className={`mb-8 ${
                    area.dark ? "text-white/80" : "text-[#1b1d2f]/60"
                  }`}
                >
                  {area.icon}
                </div>
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "Libre Baskerville, serif" }}
                >
                  {area.title}
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    area.dark ? "opacity-80" : "opacity-90 text-gray-600"
                  }`}
                >
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridade e Perfil */}
      <section id="sobre" className="py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-[#c5a059] uppercase tracking-widest font-bold text-sm">
              Metodologia e Trajetória
            </h3>
            <SectionTitle className="text-left">
              Dr. Flávio D. Alcaraz Gomes
            </SectionTitle>
            <p className="leading-relaxed">
              Graduado pela <span className="font-bold">PUCRS</span> e
              certificado pelo <span className="font-bold">AprovaJuris</span>,
              construo o meu trabalho sobre uma premissa clara:{" "}
              <span className="text-[#1b1d2f] font-bold">
                o Direito deve servir à vida prática.
              </span>
            </p>
            <p className="leading-relaxed italic border-l-4 border-[#c5a059] pl-4">
              "Trabalho com métodos práticos de análise e condução de casos, o
              que permite identificar caminhos mais rápidos e seguros para cada
              situação, fugindo da rigidez da teoria tradicional."
            </p>
            <p className="leading-relaxed">
              A minha experiência com estudos de alta performance e a disciplina
              vinda do desporto permitem-me oferecer um atendimento onde a
              transparência é regra e o compromisso com a verdade é o que guia
              cada decisão estratégica.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-[#c5a059]" size={20} />
                <span>Análise Prática de Casos</span>
              </li>
              <li className="flex items-center gap-3">
                <GraduationCap className="text-[#c5a059]" size={20} />
                <span>Certificação AprovaJuris</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-[#c5a059]" size={20} />
                <span>Base Académica PUCRS</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-[#c5a059]" size={20} />
                <span>Estratégias Florianópolis e POA</span>
              </li>
            </ul>
            <div className="pt-6">
              <GoldButton>Solicitar avaliação estratégica</GoldButton>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="WhatsApp Image 2026-04-24 at 15.01.54.jpeg"
              alt="Dr. Flávio D. Alcaraz Gomes"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Método de Atendimento */}
      <section id="atendimento" className="py-20 bg-[#1b1d2f] text-white px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <SectionTitle light>Condução de Casos Focada no Cliente</SectionTitle>
          <p className="opacity-80 mb-12">
            Fugimos da burocracia tradicional para focar no que realmente
            importa: a sua segurança.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-8 border border-white/10 rounded-xl bg-white/5">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#c5a059] rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="text-xl font-bold mb-4 pt-4">Triagem Prática</h4>
              <p className="text-sm opacity-70">
                Diagnóstico rápido via WhatsApp para entender se há viabilidade
                jurídica e qual a urgência do caso.
              </p>
            </div>
            <div className="relative p-8 border border-white/10 rounded-xl bg-white/5">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#c5a059] rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="text-xl font-bold mb-4 pt-4">
                Mapeamento de Rota
              </h4>
              <p className="text-sm opacity-70">
                Identificamos o caminho mais seguro e menos dispendioso,
                baseados em análise prática e jurisprudência atualizada.
              </p>
            </div>
            <div className="relative p-8 border border-white/10 rounded-xl bg-white/5">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#c5a059] rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="text-xl font-bold mb-4 pt-4">Execução Direta</h4>
              <p className="text-sm opacity-70">
                Monitorização constante e reporte em linguagem clara. Você
                saberá sempre onde o seu caso está e para onde está a ir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Urgência */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl space-y-8">
          <Scale size={48} className="mx-auto text-[#c5a059]" />
          <SectionTitle>O Direito é tempo e oportunidade.</SectionTitle>
          <p className="text-xl leading-relaxed">
            Muitas vezes, a teoria atrasa o que a prática resolve. Não permita
            que o tempo esgote as suas hipóteses de defesa. Conte com um
            atendimento que entende a dinâmica real do judiciário.
          </p>
          <GoldButton className="w-full sm:w-auto">
            Quero uma Solução Ágil Agora
          </GoldButton>
        </div>
      </section>

      {/* FAQ / Dúvidas */}
      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-3xl">
          <SectionTitle>Dúvidas Frequentes</SectionTitle>
          <div className="space-y-4 mt-8">
            {[
              {
                q: "Como o Dr. Flávio D. Alcaraz Gomes atende à distância?",
                a: "Utilizamos tecnologias de videoconferência e assinatura digital. O suporte via WhatsApp é constante, garantindo que o cliente se sinta próximo do advogado.",
              },
              {
                q: "Por que escolher o Dr. Flávio D. Alcaraz Gomes?",
                a: "Pelo rigor técnico e pela busca por soluções que fujam da lentidão do judiciário comum, focando em resultados práticos e caminhos seguros.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-lg shadow-sm"
              >
                <summary className="p-6 cursor-pointer flex justify-between items-center font-bold list-none">
                  {item.q}
                  <ChevronDown className="group-open:rotate-180 transition-transform text-[#c5a059]" />
                </summary>
                <div className="px-6 pb-6 opacity-80 text-base border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer
        id="contato"
        className="bg-[#1b1d2f] text-white py-12 px-6 border-t border-white/5"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img
              src="logo.jpg"
              alt="Logo Footer"
              className="h-12 brightness-0 invert"
            />
            <p className="text-sm opacity-60 leading-relaxed">
              Métodos práticos de análise para caminhos mais rápidos e seguros.
              A sua tranquilidade é a nossa meta.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-[#c5a059]">
              Locais de Atendimento
            </h5>
            <p className="text-sm opacity-60">Florianópolis / SC</p>
            <p className="text-sm opacity-60">Porto Alegre / RS</p>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-[#c5a059]">
              Canais de Contacto
            </h5>
            <p className="text-sm opacity-60 font-bold">
              E-mail: flavioalcarazadv@gmail.com
            </p>
            <p className="text-sm opacity-60">WhatsApp: (51) 99727-8848</p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h5 className="font-bold mb-4 text-[#c5a059]">Profissional</h5>
              <p className="text-sm opacity-60 tracking-widest">
                OAB/SC 139144
              </p>
              <p className="text-sm opacity-60 mt-4">
                &copy; 2024 Dr. Flávio D. Alcaraz Gomes.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5">
              <p className="text-[10px] opacity-40 uppercase tracking-[0.2em]">
                Feito por <span className="font-bold">Wecan Marketing</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp Mobile */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#c5a059] p-4 rounded-full shadow-2xl text-white md:hidden animate-bounce"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
};

export default App;
