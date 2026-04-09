import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:cleaningserviceqca@gmail.com"
                className="flex items-start gap-3 hover:opacity-80 transition-all duration-200"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">cleaningserviceqca@gmail.com</span>
              </a>
              <a
                href="tel:+15144097019"
                className="flex items-start gap-3 hover:opacity-80 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+1 (514) 409-7019</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Adresse</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                280 rue des Bouleaux Ouest<br />
                Québec, QC
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-sm space-y-1">
                <p>Lun-Ven: 8:00-20:00</p>
                <p>Sam-Dim: 9:00-17:00</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <div className="space-y-2">
              <Link
                to="/privacy"
                className="block text-sm hover:opacity-80 transition-all duration-200"
              >
                Politique de confidentialité
              </Link>
              <Link
                to="/terms"
                className="block text-sm hover:opacity-80 transition-all duration-200"
              >
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} House Cleaning Services. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;