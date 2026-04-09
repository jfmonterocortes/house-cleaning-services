import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const FAQPage = () => {
  const faqs = [
    {
      question: 'Offrez-vous des services à Québec et dans les environs ?',
      answer: 'Oui, nous desservons Québec, Lévis, Saint-Nicolas, Lac-Beauport et les environs. Notre équipe se déplace dans toute la région pour vous offrir nos services de nettoyage professionnel.',
    },
    {
      question: 'Dois-je être présent pendant le nettoyage ?',
      answer: 'Non, vous n\'avez pas besoin d\'être présent. Beaucoup de nos clients nous confient leurs clés ou nous donnent accès à leur propriété. Nous sommes une entreprise de confiance avec un personnel qualifié et fiable.',
    },
    {
      question: 'Fournissez-vous les produits de nettoyage ?',
      answer: 'Oui, nous fournissons tous les produits et équipements nécessaires pour le nettoyage. Nous utilisons des produits professionnels de qualité pour garantir les meilleurs résultats.',
    },
    {
      question: 'Comment puis-je réserver vos services ?',
      answer: 'Vous pouvez réserver en remplissant notre formulaire de réservation en ligne, en nous appelant au +1 (514) 409-7019, ou en nous envoyant un email à cleaningserviceqca@gmail.com. Nous vous contacterons rapidement pour confirmer votre rendez-vous.',
    },
    {
      question: 'Nettoyez-vous également les bureaux et locaux commerciaux ?',
      answer: 'Oui, nous offrons des services de nettoyage pour les résidences, bureaux et locaux commerciaux. Notre équipe est qualifiée pour gérer des projets de toutes tailles.',
    },
    {
      question: 'Quels sont vos horaires de service ?',
      answer: 'Nous sommes disponibles du lundi au vendredi de 8h00 à 20h00, et les samedis et dimanches de 9h00 à 17h00. Nous pouvons également accommoder des horaires spéciaux selon vos besoins.',
    },
  ];

  const serviceAreas = ['Québec', 'Lévis', 'Saint-Nicolas', 'Lac-Beauport'];

  return (
    <>
      <Helmet>
        <title>FAQ - House Cleaning Services</title>
        <meta
          name="description"
          content="Questions fréquentes sur nos services de nettoyage à Québec. Trouvez des réponses sur nos horaires, zones desservies, et modalités de service."
        />
      </Helmet>

      <Header />

      <main className="py-20 bg-background">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Foire aux questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trouvez les réponses aux questions les plus fréquentes sur nos services de nettoyage
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Notre mission</h2>
                <p className="text-foreground leading-relaxed">
                  Nous sommes une entreprise qui possède plusieurs années d'expérience dans le domaine du nettoyage, nous intervenons dans la ville de Québec et ses environs, nous disposons d'un personnel hautement qualifié pour nettoyer votre maison, bureaux et locaux commerciaux.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Zones desservies</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted"
                    >
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Vous avez d'autres questions ?</h2>
                <p className="mb-6 opacity-90">
                  Notre équipe est là pour vous aider. N'hésitez pas à nous contacter pour toute question ou pour réserver nos services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/reservations">Réserver maintenant</Link>
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
                  <a href="tel:+15144097019" className="hover:opacity-80 transition-all duration-200">
                    <Phone className="w-4 h-4 inline mr-2" />
                    +1 (514) 409-7019
                  </a>
                  <a href="mailto:cleaningserviceqca@gmail.com" className="hover:opacity-80 transition-all duration-200">
                    <Mail className="w-4 h-4 inline mr-2" />
                    cleaningserviceqca@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FAQPage;