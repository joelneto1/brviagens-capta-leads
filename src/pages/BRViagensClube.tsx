import React from "react";
import { TravelButton } from "@/components/ui/travel-button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plane, Shield, PiggyBank, Users, Star, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

const BRViagensClube = () => {
  console.log('[BRViagens] Página carregada');

  const handleWhatsAppClick = () => {
    console.log('[BRViagens] Clique WhatsApp');
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const handleTelegramClick = () => {
    console.log('[BRViagens] Clique Telegram');
    window.open('https://t.me/brviagensclube', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-shadow-lg">
                BR VIAGENS CLUBE
              </h1>
              <div className="w-24 h-1 bg-travel-orange mx-auto mb-6"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Você ama viajar pagando pouco?
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
              Nós encontramos as melhores ofertas de passagens e pacotes de viagem e 
              publicamos em nossos Grupos exclusivos.
            </p>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-large">
              <h3 className="text-2xl md:text-3xl font-bold text-travel-blue mb-8">
                Escolha abaixo o Grupo para entrar
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <TravelButton 
                  variant="whatsapp" 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="flex-1 sm:flex-none"
                >
                  ✈️ GRUPO DO WHATSAPP
                </TravelButton>
                <TravelButton 
                  variant="telegram" 
                  size="lg"
                  onClick={handleTelegramClick}
                  className="flex-1 sm:flex-none"
                >
                  ✈️ GRUPO DO TELEGRAM
                </TravelButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-travel-blue mb-4">
            As Melhores Companhias e Hotéis do Mundo
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Divulgamos promoções de parceiros confiáveis e seguros.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center opacity-70">
            {['Azul', 'LATAM', 'GOL', 'Booking.com', 'Decolar', 'Accor', 'Hilton'].map((brand) => (
              <div key={brand} className="flex items-center justify-center h-16 text-gray-500 font-bold text-lg">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-travel-blue mb-4">
              Veja as vantagens do BR VIAGENS CLUBE
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Nós garantimos que, com a gente, você sempre irá economizar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-travel-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PiggyBank className="w-10 h-10 text-travel-orange" />
                </div>
                <h3 className="text-xl font-bold text-travel-blue mb-4">
                  Economize em todas as viagens
                </h3>
                <p className="text-gray-600">
                  Enviamos vários cupons de desconto, passagens em promoção e ofertas relâmpago todos os dias.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-travel-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-travel-blue" />
                </div>
                <h3 className="text-xl font-bold text-travel-blue mb-4">
                  Segurança
                </h3>
                <p className="text-gray-600">
                  Procuramos ofertas apenas de grandes companhias e sites confiáveis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-travel-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="w-10 h-10 text-travel-orange" />
                </div>
                <h3 className="text-xl font-bold text-travel-blue mb-4">
                  Os melhores destinos do Brasil e do Mundo
                </h3>
                <p className="text-gray-600">
                  Ofertas para destinos incríveis: Nordeste, Europa, EUA, América do Sul e muito mais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Números + Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-travel-blue">
                A MAIOR COMUNIDADE DE VIAJANTES ECONÔMICOS DO BRASIL
              </h3>
              <p className="text-xl text-travel-orange font-bold">
                +500.000 viajantes já economizaram conosco
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-black text-travel-blue mb-2">+1mi</div>
                  <div className="text-gray-600">participantes</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-black text-travel-orange mb-2">+50</div>
                  <div className="text-gray-600">promoções diárias</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-travel-blue mb-8 text-center">
                Viagens dos nossos usuários
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-travel-blue text-center mb-12">
              Perguntas frequentes
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-soft">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                  Os grupos são gratuitos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Sim! Nossos grupos são 100% gratuitos. Você não paga nada para receber as melhores ofertas de viagem.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-soft">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                  Como são selecionadas as promoções?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Nossa equipe especializada monitora constantemente as principais companhias aéreas e agências de viagem para encontrar as melhores ofertas e repassar exclusivamente para nossos membros.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-soft">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                  É confiável comprar pelo grupo?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Absolutamente! Trabalhamos apenas com empresas credenciadas e sites oficiais. Todos os links são verificados e direcionam para as páginas oficiais das companhias.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-soft">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                  Que tipos de promoções encontro?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Passagens aéreas promocionais, pacotes de viagem com desconto, ofertas de hotéis, cupons de desconto e muito mais para destinos nacionais e internacionais.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-soft">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                  Qual a maior vantagem de entrar no grupo?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Você recebe ofertas exclusivas em primeira mão, muitas vezes com descontos que não estão disponíveis publicamente, além de dicas valiosas de viagem da nossa comunidade.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-travel-orange">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              MAIOR SEGURANÇA
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Somos credenciados nas maiores companhias aéreas e nossos links são verificados e 100% confiáveis.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                👇 Escolha abaixo o Grupo para entrar 👇
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                <TravelButton 
                  variant="whatsapp-outline" 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="flex-1 sm:flex-none bg-white hover:bg-travel-blue"
                >
                  ✈️ GRUPO DO WHATSAPP
                </TravelButton>
                <TravelButton 
                  variant="telegram-outline" 
                  size="lg"
                  onClick={handleTelegramClick}
                  className="flex-1 sm:flex-none bg-white hover:bg-travel-blue"
                >
                  ✈️ GRUPO DO TELEGRAM
                </TravelButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-travel-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="text-xl font-bold">BR VIAGENS CLUBE ®</div>
            <div className="space-y-2 text-sm">
              <p>CNPJ: XX.XXX.XXX/0001-XX</p>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contato@brviagensclube.com.br" className="hover:text-travel-orange transition-colors">
                  contato@brviagensclube.com.br
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
                <a href="#" className="hover:text-travel-orange transition-colors">
                  Política de Privacidade
                </a>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6 text-xs">
              <p>Copyright © 2024 BR VIAGENS CLUBE. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BRViagensClube;