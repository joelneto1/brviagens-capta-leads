import React from "react";
import { TravelButton } from "@/components/ui/travel-button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plane, Shield, PiggyBank, Users, Star, Mail, ExternalLink, MessageCircle, Search } from "lucide-react";
import personSmartphone from "@/assets/person-smartphone.jpg";
const BRViagensClube = () => {
  console.log('[BRViagens] Página carregada');
  const handleWhatsAppClick = () => {
    console.log('[BRViagens] Clique WhatsApp');
    window.open('https://wa.me/5511999999999', '_blank');
  };
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/892dc44a-d2ea-4a43-bffb-440669d76a30.png" 
              alt="BR Viagens Clube" 
              className="h-10 md:h-12"
            />
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-6">
            <a 
              href="#contato" 
              className="text-travel-blue hover:text-travel-orange transition-colors font-medium"
            >
              FALE CONOSCO
            </a>
            <Search className="w-5 h-5 text-travel-blue cursor-pointer hover:text-travel-orange transition-colors" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 bg-white relative overflow-hidden">
        {/* Subtle geometric pattern background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Social Proof and Visual */}
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <img 
                  src={personSmartphone} 
                  alt="Pessoa usando BR Viagens Clube"
                  className="w-full rounded-2xl shadow-lg"
                />
                
                {/* Speech Bubble */}
                <div className="absolute -right-4 top-8 bg-white p-4 rounded-2xl shadow-lg border max-w-xs">
                  <div className="text-sm text-gray-700 leading-relaxed">
                    "Descobri com o BR VIAGENS CLUBE que é possível viajar com muito mais conforto pagando muito menos do que eu imaginei."
                  </div>
                  {/* Arrow pointing to person */}
                  <div className="absolute -left-2 top-6 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></div>
                </div>
                
                {/* Name Tag */}
                <div className="absolute -bottom-4 left-4 bg-travel-orange text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-semibold text-sm">João Silva, Membro do Clube</span>
                </div>
              </div>
            </div>

            {/* Right Column - Value Proposition and CTA */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-travel-blue leading-tight">
                Economize até 70% nas suas próximas viagens
              </h1>
              
              <h2 className="text-xl md:text-2xl text-travel-blue">
                Acesse <span className="text-travel-orange font-bold">gratuitamente</span> a nossa comunidade e comece a receber ofertas exclusivas imediatamente.
              </h2>
              
              <div className="pt-4">
                <TravelButton 
                  variant="whatsapp" 
                  size="lg" 
                  onClick={handleWhatsAppClick} 
                  className="w-full md:w-auto bg-travel-orange hover:bg-travel-orange/90 text-white font-bold py-4 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Começar a receber ofertas agora!
                </TravelButton>
              </div>
              
              <p className="text-travel-blue font-medium text-lg">
                Oportunidades incríveis. Preços reais.
              </p>
              
              <p className="text-gray-600 text-sm">
                Mais de 2.000 pessoas já recebem nossas ofertas diariamente.
              </p>
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
            {['Azul', 'LATAM', 'GOL', 'Booking.com', 'Decolar', 'Accor', 'Hilton'].map(brand => <div key={brand} className="flex items-center justify-center h-16 text-gray-500 font-bold text-lg">
                {brand}
              </div>)}
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
                <p className="text-gray-600">Enviamos várias oportunidades com desconto em passagens, hospedagens e pacotes todos os dias.</p>
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
                <p className="text-gray-600">Procuramos ofertas apenas de grandes companhias e com descontos reais.</p>
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
                <p className="text-gray-600">Ofertas para destinos incríveis: Brasil, Europa, EUA, América do Sul e muito mais.</p>
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
                {[1, 2, 3, 4].map(i => <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>)}
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
                👇 Entre agora no nosso grupo exclusivo 👇
              </h3>
              <div className="flex justify-center max-w-md mx-auto">
                <TravelButton variant="whatsapp-outline" size="lg" onClick={handleWhatsAppClick} className="bg-white hover:bg-travel-blue w-full">
                  <MessageCircle className="w-6 h-6" />
                  ENTRAR NO GRUPO DO WHATSAPP
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
            <div className="flex justify-center mb-4">
              <img src="/lovable-uploads/892dc44a-d2ea-4a43-bffb-440669d76a30.png" alt="BR Viagens Clube" className="h-16" />
            </div>
            <div className="space-y-2 text-sm">
              <p>CNPJ: 42.292.890/0001-00</p>
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
    </div>;
};
export default BRViagensClube;