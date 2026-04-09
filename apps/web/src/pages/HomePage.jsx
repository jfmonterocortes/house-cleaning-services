import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChefHat, Bath, Waves, Wind, Bed, Sparkles, Award, Users, Shield, ThumbsUp, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import TrustPoint from '@/components/TrustPoint.jsx';
import BeforeAfterSlider from '@/components/BeforeAfterSlider.jsx';

const HomePage = () => {
  const services = [
    {
      icon: ChefHat,
      title: 'Nettoyage de la cuisine',
      description: 'Un nettoyage complet de votre cuisine pour un espace sain et accueillant où préparer vos repas en toute sérénité.',
      image: 'https://images.unsplash.com/photo-1617228069096-4638a7ffc906?w=600&q=75&auto=format&fit=crop'
    },
    {
      icon: Bath,
      title: 'Nettoyage des salles de bains',
      description: 'Désinfection et nettoyage en profondeur de vos salles de bains pour une hygiène irréprochable.',
      image: 'https://images.unsplash.com/photo-1694885195469-2f661900901c?w=600&q=75&auto=format&fit=crop'
    },
    {
      icon: Waves,
      title: 'Lavage des planchers',
      description: 'Lavage professionnel de tous types de planchers pour retrouver leur éclat d\'origine.',
      image: 'https://images.unsplash.com/photo-1563174378-62b20fb3342d?w=600&q=75&auto=format&fit=crop'
    },
    {
      icon: Wind,
      title: 'Aspirateur de tapis',
      description: 'Aspiration minutieuse de vos tapis et moquettes pour éliminer poussière et allergènes.',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=75&auto=format&fit=crop'
    },
    {
      icon: Bed,
      title: 'Nettoyage des chambres',
      description: 'Un environnement propre et apaisant dans vos chambres pour un repos bien mérité.',
      image: 'https://images.unsplash.com/photo-1659710601119-e627544437bd?w=600&q=75&auto=format&fit=crop'
    },
    {
      icon: Sparkles,
      title: 'Dépoussiérage',
      description: 'Dépoussiérage complet de toutes les surfaces pour un intérieur impeccable et sain.',
      image: 'https://images.unsplash.com/photo-1670344930438-76f21718f334?w=600&q=75&auto=format&fit=crop'
    },
  ];

  const transformations = [
    {
      before: 'https://images.unsplash.com/photo-1647381518264-97ff1835026f?w=900&q=75&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1699412025743-7fcf93cc0b57?w=900&q=75&auto=format&fit=crop',
      title: 'Restauration de salon'
    },
    {
      before: 'https://images.unsplash.com/photo-1656690278205-1febeb97d664?w=900&q=75&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1670064161367-4c605010ac37?w=900&q=75&auto=format&fit=crop',
      title: 'Nettoyage en profondeur'
    }
  ];

  const trustPoints = [
    {
      icon: Award,
      title: 'Expérience',
      description: 'Plusieurs années d\'expertise dans le domaine du nettoyage résidentiel et commercial.',
    },
    {
      icon: Users,
      title: 'Personnel qualifié',
      description: 'Une équipe hautement qualifiée et formée aux meilleures pratiques de nettoyage.',
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Service ponctuel et professionnel sur lequel vous pouvez compter.',
    },
    {
      icon: ThumbsUp,
      title: 'Satisfaction client',
      description: 'Votre satisfaction est notre priorité absolue, nous ne partons que lorsque vous êtes satisfait.',
    },
  ];

  const testimonials = [
    {
      rating: 5,
      quote: 'Excellent service, personnes très responsables et attentionnés avec toute ma maison.',
      name: 'Teresa Rodrigues',
      role: 'Cliente résidentielle',
    },
    {
      rating: 5,
      quote: 'Satisfaite du service, couple très sympathique et ma maison impeccable merci beaucoup.',
      name: 'Maria Tremblay',
      role: 'Cliente résidentielle',
    },
    {
      rating: 5,
      quote: 'Merci House Cleaning Services pour vos services de nettoyage, ils ont laissé ma maison rayonnante et sentait bon.',
      name: 'Roberto Huerta',
      role: 'Client résidentiel',
    },
    {
      rating: 5,
      quote: 'Je suis très reconnaissante pour le service, les très bons nettoyeurs, tout est très bien fait.',
      name: 'Silvis Poulin',
      role: 'Cliente résidentielle',
    },
  ];

  const serviceAreas = ['Québec', 'Lévis', 'Saint-Nicolas', 'Lac-Beauport'];

  return (
    <>
      <Helmet>
        <title>House Cleaning Services - Nettoyage professionnel à Québec</title>
        <meta
          name="description"
          content="Service de nettoyage professionnel à Québec et environs. Personnel qualifié, satisfaction garantie. Réservez votre soumission gratuite dès maintenant."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1656122381069-9ec666d95cf1?w=1400&q=75&auto=format&fit=crop)',
            }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          </div>

          <div className="container relative z-10 text-center text-white py-24 md:py-32">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-balance drop-shadow-lg"
            >
              Votre maison mérite une propreté impeccable
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-95 drop-shadow-md font-medium"
            >
              Service de nettoyage professionnel à Québec et environs. Personnel qualifié, produits fournis, satisfaction garantie.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="text-base h-14 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <Link to="/reservations">Obtenir une soumission gratuite</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-base h-14 px-8 rounded-xl bg-white text-foreground hover:bg-white/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <Link to="/reservations">Réserver maintenant</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Nos services d'excellence</h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Une gamme complète de services de nettoyage adaptés à vos besoins, réalisés avec soin et professionnalisme.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-24 md:py-32 bg-muted/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Transformations remarquables</h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Découvrez la différence qu'un nettoyage professionnel peut apporter à votre espace de vie.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {transformations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="flex flex-col gap-4"
                >
                  <BeforeAfterSlider
                    beforeImage={item.before}
                    afterImage={item.after}
                  />
                  <h3 className="text-xl font-semibold text-center text-foreground">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Pourquoi nous choisir</h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Ce qui nous distingue dans le domaine du nettoyage professionnel
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TrustPoint {...point} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ce que disent nos clients</h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                La satisfaction de nos clients est notre meilleure récompense
              </p>
            </motion.div>

            <Carousel
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard {...testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">À propos de nous</h2>
                <p className="text-xl md:text-2xl leading-relaxed opacity-90 font-light">
                  Nous sommes une entreprise qui possède plusieurs années d'expérience dans le domaine du nettoyage, nous intervenons dans la ville de Québec et ses environs, nous disposons d'un personnel hautement qualifié pour nettoyer votre maison, bureaux et locaux commerciaux.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Zones desservies</h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Nous offrons nos services dans les régions suivantes
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-semibold text-lg text-foreground">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">Prêt à transformer votre espace ?</h2>
              <p className="text-xl mb-10 opacity-90 font-light">
                Contactez-nous dès aujourd'hui pour une soumission gratuite et découvrez la différence d'un service professionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="text-base h-14 px-8 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Link to="/reservations">Réserver maintenant</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center text-base font-medium">
                <a href="tel:+15144097019" className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                  +1 (514) 409-7019
                </a>
                <a href="mailto:cleaningserviceqca@gmail.com" className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                  cleaningserviceqca@gmail.com
                </a>
                <a href="https://www.instagram.com/cleaningserviceqca" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-primary transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                  @cleaningserviceqca
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;