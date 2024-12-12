// eslint-disable-next-line
// @ts-nocheck
import { JSX } from 'preact/compat';
import './app.css';
import { Button } from './components/ui/button';
import { Shield, Database, Bell, BarChart, MonitorCheck, MonitorUp, LayoutGrid, Network } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";

const screenshots = [
  {
    url: "/main-inventory.png",
    alt: "Listagem de dispositivos",
  },
  {
    url: "/main-softwares.png",
    alt: "Softwares",
  },
  {
    url: "/geolocalizacao.png",
    alt: "Geolocalização",
  },
  {
    url: "/detalhes.png",
    alt: "Detalhes do dispositivo",
  },
  {
    url: "/history.png",
    alt: "Histórico de alterações",
  },
  {
    url: "/main-dashboard.png",
    alt: "Dashboard de ativos",
  },
  {
    url: "/main-monitoring.png",
    alt: "Monitoramento contínuo",
  },
  {
    url: "/alertas.png",
    alt: "Alertas automáticos",
  },
  {
    url: "/equipaments.png",
    alt: "Estoque de equipamentos",
  },
  {
    url: "/command.png",
    alt: "Comandos e scripts remotos",
  },
];

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Gerenciamento Completo de Ativos de TI
          <span className="text-primary block">Simplificado</span>
        </h1>
        <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
          Inventário de Hardware e Software, monitoramento em tempo real e gerenciamento remoto
          para toda sua infraestrutura de TI.
        </p>
        <div className="flex gap-4 justify-center mb-16">
          <Button size="lg">Iniciar Avaliação Gratuita</Button>
          <Button size="lg" variant="outline">Entre em contato conosco</Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
          <FeatureCard 
            icon={<Database />}
            title="Rastreamento Detalhado de Ativos"
            description="Coleta automática e extensiva de informações de hardware, software, e sistema."
          />
          <FeatureCard 
            icon={<Shield />}
            title="Prevenção de Perdas"
            description="Proteção avançada contra roubo e rastreamento por geolocalização para todos os dispositivos."
          />
          <FeatureCard 
            icon={<Bell />}
            title="Alertas Inteligentes"
            description="Notificações automáticas para licenciamento, manutenção e questões de segurança."
          />
          <FeatureCard 
            icon={<MonitorUp />}
            title="Gerenciamento Remoto"
            description="Controle e suporte de dispositivos de qualquer lugar com acesso remoto seguro."
          />
          <FeatureCard 
            icon={<BarChart />}
            title="Análises Avançadas"
            description="Relatórios abrangentes e acompanhamento da depreciação de ativos."
          />
          <FeatureCard 
            icon={<MonitorCheck />}
            title="Monitoramento de Produtividade"
            description="Monitoramento a atividade dos usuários através de abas ativas e processos em execução"
          />
          <FeatureCard 
            icon={<LayoutGrid />}
            title="Gerenciamento de licenças"
            description="Acompanhamento e gestão de licenças de software e alertas de renovação."
          />
          <FeatureCard 
            icon={<Network />}
            title="Automações Inteligentes"
            description="Faça scripts e comandos remotos para automatizar tarefas de rotina e configurar dispositivos de forma padronizada."
          />
        </div>

        {/* Screenshot Carousel Section */}
        <div className="my-20">
        <h2 className="text-3xl font-bold mb-8">Conheça Nossa Interface</h2>
        <div className="w-full max-w-4xl mx-auto px-4">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 via-fuchsia-500 to-pink-500 animate-gradient-x bg-clip-text text-transparent transition-colors duration-300 pb-1">{screenshot.alt}</h2>
                  <div className="p-1">
                    <img 
                      src={screenshot.url}
                      alt={screenshot.alt}
                      className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-4">
              <CarouselPrevious className="static" />
              <CarouselNext className="static" />
            </div>
          </Carousel>
        </div>
      </div>

        {/* CTA Section */}
        <div className="bg-muted py-16 px-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu gerenciamento de TI?</h2>
          <p className="text-muted-foreground mb-8">
            Junte-se a milhares de empresas gerenciando seus ativos de TI de forma eficiente
          </p>
          <Button size="lg" className="bg-primary">
            Comece Hoje
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 py-8 text-center text-muted-foreground">
        <p>© 2024 Infonova Tecnologia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: JSX.Element; 
  title: string; 
  description: string 
}) {
  return (
    <div className="p-4 rounded-lg border border-slate-300 bg-card text-card-foreground">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}