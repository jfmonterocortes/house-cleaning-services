import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ✅ Replace with your Formspree form ID after creating your form at formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const ReservationsPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    frequency: '',
    message: '',
  });

  const services = [
    'Nettoyage de la cuisine',
    'Nettoyage des salles de bains',
    'Lavage des planchers',
    'Aspirateur de tapis',
    'Nettoyage des chambres',
    'Dépoussiérage',
  ];

  const frequencies = [
    'Une fois',
    'Hebdomadaire',
    'Bi-hebdomadaire',
    'Mensuel',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.serviceType) {
      toast({
        title: 'Champs requis manquants',
        description: 'Veuillez remplir tous les champs obligatoires.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Prénom: formData.firstName,
          Nom: formData.lastName,
          Email: formData.email,
          Téléphone: formData.phone,
          Adresse: formData.address,
          Service: formData.serviceType,
          Fréquence: formData.frequency,
          Message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          serviceType: '',
          frequency: '',
          message: '',
        });
      } else {
        throw new Error('Erreur serveur');
      }
    } catch {
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Réservations - House Cleaning Services</title>
        <meta
          name="description"
          content="Réservez votre service de nettoyage professionnel à Québec. Remplissez le formulaire pour obtenir une soumission gratuite."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Réservations</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous desservons Québec et ses environs avec un service professionnel et personnalisé. Remplissez le formulaire ci-dessous pour obtenir votre soumission gratuite.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Demande envoyée !</h2>
                    <p className="text-muted-foreground mb-6">
                      Nous avons bien reçu votre demande et vous contacterons sous peu pour confirmer votre rendez-vous.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>
                      Faire une autre demande
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          Prénom <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="text-gray-900"
                          placeholder="Votre prénom"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Nom de famille <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="text-gray-900"
                          placeholder="Votre nom de famille"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="text-gray-900"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="text-gray-900"
                          placeholder="+1 (514) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">
                        Adresse avec code postal <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="text-gray-900"
                        placeholder="123 rue Exemple, Québec, QC G1A 1A1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">
                          Type de service <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(value) => handleSelectChange('serviceType', value)}
                          required
                        >
                          <SelectTrigger id="serviceType" className="text-gray-900">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="frequency">Fréquence demandée</Label>
                        <Select
                          value={formData.frequency}
                          onValueChange={(value) => handleSelectChange('frequency', value)}
                        >
                          <SelectTrigger id="frequency" className="text-gray-900">
                            <SelectValue placeholder="Sélectionnez une fréquence" />
                          </SelectTrigger>
                          <SelectContent>
                            {frequencies.map((frequency) => (
                              <SelectItem key={frequency} value={frequency}>
                                {frequency}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="text-gray-900"
                        placeholder="Informations supplémentaires ou demandes spéciales..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full transition-all duration-200 active:scale-[0.98]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Notre engagement</h3>
                    <p className="text-foreground leading-relaxed">
                      En nous engageant, vous pouvez bénéficier d'avantages inégalés. Notre travail se termine lorsque notre client est satisfait et nous veillons à lui accorder toute notre attention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground">
              Vous avez des questions ? N'hésitez pas à nous contacter directement au{' '}
              <a href="tel:+15144097019" className="text-primary hover:underline font-medium">
                +1 (514) 409-7019
              </a>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ReservationsPage;
