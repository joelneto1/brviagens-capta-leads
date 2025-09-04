import React from "react";
import { TravelButton } from "@/components/ui/travel-button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plane, Shield, PiggyBank, Users, Star, Mail, ExternalLink, MessageCircle, Search } from "lucide-react";
import familySmartphone from "@/assets/family-smartphone.jpg";
const BRViagensClube = () => {
  console.log('[BRViagens] Página carregada');
  const handleWhatsAppClick = () => {
    console.log('[BRViagens] CTA WhatsApp clicado');
    window.open('https://wa.me/5511999999999', '_blank');
  };
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/892dc44a-d2ea-4a43-bffb-440669d76a30.png" 
              alt="BR Viagens Clube" 
              className="h-8 md:h-10 lg:h-12"
            />
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href="#contato" 
              className="text-travel-blue hover:text-travel-orange transition-colors font-medium text-sm md:text-base"
            >
              FALE CONOSCO
            </a>
            <Search className="w-4 h-4 md:w-5 md:h-5 text-travel-blue cursor-pointer hover:text-travel-orange transition-colors" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-14 md:pt-20 bg-gradient-to-br from-blue-50 to-orange-50 relative overflow-hidden">
        {/* Travel-themed background pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23da8418' fill-opacity='0.4'%3E%3Cpath d='M20 20l5 2-2 5-5-2zm25 15l8 3-3 8-8-3zm30 25l6 2-2 6-6-2z'/%3E%3Cpath d='M15 50c0-2 1-4 3-5l10 4c2 1 3 3 3 5s-1 4-3 5l-10-4c-2-1-3-3-3-5zm40 20c0-1.5 0.8-3 2.2-3.8l7 2.8c1.4 0.8 2.3 2.3 2.3 3.8s-0.9 3-2.3 3.8l-7-2.8c-1.4-0.8-2.2-2.3-2.2-3.8z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        ></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-16 md:top-20 right-4 md:right-10 opacity-20">
          <Plane className="w-8 h-8 md:w-12 md:h-12 text-travel-blue transform rotate-45" />
        </div>
        <div className="absolute bottom-16 md:bottom-20 left-4 md:left-10 opacity-20">
          <Plane className="w-6 h-6 md:w-8 md:h-8 text-travel-orange transform -rotate-12" />
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Social Proof and Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative max-w-sm md:max-w-md mx-auto">
                <img 
                  src={familySmartphone} 
                  alt="Família usando BR Viagens Clube"
                  className="w-full rounded-2xl shadow-lg object-cover object-right"
                />
                
                {/* Speech Bubble */}
                <div className="absolute bottom-2 left-1 md:bottom-4 md:left-2 lg:bottom-8 lg:left-4 animate-fade-in">
                  <div className="relative bg-white p-3 md:p-4 rounded-2xl shadow-lg max-w-[280px] md:max-w-xs lg:max-w-sm border border-gray-100">
                    <p className="text-xs md:text-sm lg:text-base text-travel-blue italic leading-relaxed">
                      "Descobri com a BR Viagens Clube que é possível viajar com muito mais conforto pagando muito menos do que eu imaginei."
                    </p>
                    {/* Speech bubble tail */}
                    <div className="absolute top-[-8px] left-6 md:left-8 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Value Proposition and CTA */}
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-travel-blue leading-tight">
                Economize de 30 a 70% nas suas próximas viagens
              </h1>
              
              <h2 className="text-lg md:text-xl lg:text-2xl text-travel-blue">
                Acesse <span className="text-travel-orange font-bold">gratuitamente</span> o nosso grupo de WhatsApp e receba ofertas exclusivas imediatamente.
              </h2>
              
              <div className="pt-2 md:pt-4">
                <div className="space-y-3 md:space-y-4">
                  <p className="text-travel-blue font-medium text-center lg:text-left text-sm md:text-base mb-3 md:mb-4">
                    Escolha sua cidade:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto lg:mx-0">
                    <TravelButton 
                      variant="whatsapp" 
                      size="lg" 
                      onClick={() => {
                        console.log('[BRViagens] CTA WhatsApp Maceió clicado');
                        window.open('https://wa.me/5511999999999', '_blank');
                      }} 
                      className="w-full bg-travel-orange hover:bg-travel-orange/90 text-white font-bold py-3 px-4 text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      aria-label="Entrar no grupo de WhatsApp de Maceió"
                    >
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      GRUPO PROMOÇÕES - MACEIÓ
                    </TravelButton>
                    
                    <TravelButton 
                      variant="whatsapp" 
                      size="lg" 
                      onClick={() => {
                        console.log('[BRViagens] CTA WhatsApp Aracaju clicado');
                        window.open('https://wa.me/5511999999999', '_blank');
                      }} 
                      className="w-full bg-travel-orange hover:bg-travel-orange/90 text-white font-bold py-3 px-4 text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      aria-label="Entrar no grupo de WhatsApp de Aracaju"
                    >
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      GRUPO PROMOÇÕES - ARACAJU
                    </TravelButton>
                    
                    <TravelButton 
                      variant="whatsapp" 
                      size="lg" 
                      onClick={() => {
                        console.log('[BRViagens] CTA WhatsApp Recife clicado');
                        window.open('https://wa.me/5511999999999', '_blank');
                      }} 
                      className="w-full bg-travel-orange hover:bg-travel-orange/90 text-white font-bold py-3 px-4 text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      aria-label="Entrar no grupo de WhatsApp de Recife"
                    >
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      GRUPO PROMOÇÕES - RECIFE
                    </TravelButton>
                    
                    <TravelButton 
                      variant="whatsapp" 
                      size="lg" 
                      onClick={() => {
                        console.log('[BRViagens] CTA WhatsApp Fortaleza clicado');
                        window.open('https://wa.me/5511999999999', '_blank');
                      }} 
                      className="w-full bg-travel-orange hover:bg-travel-orange/90 text-white font-bold py-3 px-4 text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      aria-label="Entrar no grupo de WhatsApp de Fortaleza"
                    >
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      GRUPO PROMOÇÕES - FORTALEZA
                    </TravelButton>
                    
                    <TravelButton 
                      variant="whatsapp" 
                      size="lg" 
                      onClick={() => {
                        console.log('[BRViagens] CTA WhatsApp São Paulo clicado');
                        window.open('https://wa.me/5511999999999', '_blank');
                      }} 
                      className="w-full md:col-span-2 lg:col-span-1 xl:col-span-2 bg-travel-blue hover:bg-travel-blue/90 text-white font-bold py-3 px-4 text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      aria-label="Entrar no grupo de WhatsApp de São Paulo"
                    >
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      GRUPO PROMOÇÕES - SÃO PAULO
                    </TravelButton>
                  </div>
                </div>
              </div>
              
              <p className="text-travel-blue font-medium text-base md:text-lg">
                Oportunidades incríveis. Preços reais.
              </p>
              
              <p className="text-gray-600 text-sm md:text-base">
                Mais de 2.000 pessoas já recebem nossas ofertas diariamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-travel-blue mb-3 md:mb-4">
            As Melhores Companhias e Hotéis do Mundo
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
            Divulgamos promoções de parceiros diariamente em nossos grupos.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 items-center opacity-70">
            {['LATAM', 'GOL', 'AZUL', 'AMERICAN AIRLINES', 'IHG', 'ACCOR', 'HILTON'].map(brand => <div key={brand} className="flex items-center justify-center h-12 md:h-16 text-gray-500 font-bold text-xs md:text-sm lg:text-lg px-2">
                {brand}
              </div>)}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-travel-blue mb-3 md:mb-4">
              Veja as vantagens da BR VIAGENS CLUBE
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Nós garantimos que, com a gente, você sempre irá economizar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 md:p-8 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-travel-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <PiggyBank className="w-8 h-8 md:w-10 md:h-10 text-travel-orange" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-travel-blue mb-3 md:mb-4">
                  Economize em todas as viagens
                </h3>
                <p className="text-gray-600 text-sm md:text-base">Enviamos várias oportunidades com desconto em passagens, hospedagens e pacotes todos os dias.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 md:p-8 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-travel-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Shield className="w-8 h-8 md:w-10 md:h-10 text-travel-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-travel-blue mb-3 md:mb-4">
                  Segurança
                </h3>
                <p className="text-gray-600 text-sm md:text-base">Procuramos ofertas apenas de grandes companhias e com descontos reais.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 md:p-8 shadow-soft hover:shadow-medium transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="pt-4 md:pt-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-travel-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Plane className="w-8 h-8 md:w-10 md:h-10 text-travel-orange" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-travel-blue mb-3 md:mb-4">
                  Os melhores destinos do Brasil e do Mundo
                </h3>
                <p className="text-gray-600 text-sm md:text-base">Ofertas para destinos incríveis: Brasil, Europa, EUA, América do Sul e muito mais.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Números + Depoimentos */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-travel-blue">
                FAÇA PARTE DOS NOSSOS GRUPOS DE WHATSAPP, IGUAL AOS NOSSOS CLIENTES, E VIAJE GASTANDO MENOS.
              </h3>
              <p className="text-lg md:text-xl text-travel-orange font-bold">
                +1.500 viajantes já economizaram conosco.
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md lg:max-w-none mx-auto lg:mx-0">
                <div className="text-center p-4 md:p-6 bg-gray-50 rounded-xl">
                  <div className="text-2xl md:text-3xl font-black text-travel-blue mb-2">+ de 500</div>
                  <div className="text-gray-600 text-sm md:text-base">participantes</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-gray-50 rounded-xl">
                  <div className="text-2xl md:text-3xl font-black text-travel-orange mb-2">+10</div>
                  <div className="text-gray-600 text-sm md:text-base">promoções diárias</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-travel-blue mb-6 md:mb-8 text-center">
                Feedback dos nossos clientes!
              </h4>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow">
                  <img 
                    src="/lovable-uploads/08d16b41-49a1-4ec0-ab2a-d81a0d57a5b5.png" 
                    alt="Feedback de Anna Morais - 5 estrelas"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow">
                  <img 
                    src="/lovable-uploads/79f339c6-d18d-4988-9d0a-5574035ed565.png" 
                    alt="Feedback de Murilo Alves e Any Matos - 5 estrelas"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow">
                  <img 
                    src="/lovable-uploads/d62aa404-c646-4e57-b352-7c5bb858d8d5.png" 
                    alt="Feedback de Michelen Souza - 5 estrelas"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow">
                  <img 
                    src="/lovable-uploads/2fc6ab94-2380-4ea5-bd8a-8994005cbdd3.png" 
                    alt="Feedback de Hstefanevianadossantos Viana e Kella Carvalho - 5 estrelas"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-travel-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
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
      <section className="py-12 md:py-20 relative overflow-hidden" style={{backgroundImage: 'url(/lovable-uploads/da47a96b-fe80-4e5a-b399-a20035af8df5.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-travel-orange/80"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              MAIOR SEGURANÇA
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
              Somos credenciados nas maiores companhias aéreas e nossos links são verificados e 100% confiáveis.
            </p>
            
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
                👇 Escolha sua cidade e entre no grupo exclusivo 👇
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
                <TravelButton 
                  variant="whatsapp-outline" 
                  size="lg" 
                  onClick={() => {
                    console.log('[BRViagens] CTA WhatsApp Maceió clicado');
                    window.open('https://wa.me/5511999999999', '_blank');
                  }} 
                  className="bg-white hover:bg-travel-blue text-travel-blue hover:text-white w-full py-3 md:py-4 text-sm md:text-base font-bold transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  MACEIÓ
                </TravelButton>
                
                <TravelButton 
                  variant="whatsapp-outline" 
                  size="lg" 
                  onClick={() => {
                    console.log('[BRViagens] CTA WhatsApp Aracaju clicado');
                    window.open('https://wa.me/5511999999999', '_blank');
                  }} 
                  className="bg-white hover:bg-travel-blue text-travel-blue hover:text-white w-full py-3 md:py-4 text-sm md:text-base font-bold transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  ARACAJU
                </TravelButton>
                
                <TravelButton 
                  variant="whatsapp-outline" 
                  size="lg" 
                  onClick={() => {
                    console.log('[BRViagens] CTA WhatsApp Recife clicado');
                    window.open('https://wa.me/5511999999999', '_blank');
                  }} 
                  className="bg-white hover:bg-travel-blue text-travel-blue hover:text-white w-full py-3 md:py-4 text-sm md:text-base font-bold transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  RECIFE
                </TravelButton>
                
                <TravelButton 
                  variant="whatsapp-outline" 
                  size="lg" 
                  onClick={() => {
                    console.log('[BRViagens] CTA WhatsApp Fortaleza clicado');
                    window.open('https://wa.me/5511999999999', '_blank');
                  }} 
                  className="bg-white hover:bg-travel-blue text-travel-blue hover:text-white w-full py-3 md:py-4 text-sm md:text-base font-bold transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  FORTALEZA
                </TravelButton>
                
                <TravelButton 
                  variant="whatsapp-outline" 
                  size="lg" 
                  onClick={() => {
                    console.log('[BRViagens] CTA WhatsApp São Paulo clicado');
                    window.open('https://wa.me/5511999999999', '_blank');
                  }} 
                  className="bg-white hover:bg-travel-orange text-travel-orange hover:text-white w-full md:col-span-2 lg:col-span-1 py-3 md:py-4 text-sm md:text-base font-bold transition-all duration-300 border-2 border-travel-orange"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  SÃO PAULO
                </TravelButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="relative overflow-hidden py-8 md:py-12" style={{backgroundImage: 'url(/lovable-uploads/da47a96b-fe80-4e5a-b399-a20035af8df5.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 md:space-y-6 text-white">
            <div className="flex justify-center mb-3 md:mb-4">
              <img src="/lovable-uploads/892dc44a-d2ea-4a43-bffb-440669d76a30.png" alt="BR Viagens Clube" className="h-12 md:h-16" />
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-travel-blue font-medium">CNPJ: 42.292.890/0001-00</p>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-travel-orange" />
                <a href="mailto:contato@brviagensclube.com.br" className="hover:text-travel-orange transition-colors text-travel-blue text-sm md:text-base">
                  contato@brviagensclube.com.br
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4 text-travel-orange" />
                <a href="#" className="hover:text-travel-orange transition-colors text-travel-blue text-sm md:text-base">
                  Política de Privacidade
                </a>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-4 md:pt-6 text-xs">
              <p className="text-travel-blue">Copyright © 2024 BR VIAGENS CLUBE. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default BRViagensClube;