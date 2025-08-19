import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Code, Smartphone, TrendingUp, Video, Palette, Database, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Code,
      title: 'Création de Sites Web',
      description: 'Sites web modernes, responsives et optimisés pour le SEO. De la vitrine e-commerce aux applications web complexes.',
      features: ['Design responsive', 'Optimisation SEO', 'Performance optimisée', 'Sécurité renforcée'],
      price: 'À partir de 1 500€'
    },
    {
      icon: Smartphone,
      title: 'Développement d\'Applications',
      description: 'Applications mobiles natives et web progressives pour iOS et Android avec une expérience utilisateur exceptionnelle.',
      features: ['Applications natives', 'PWA', 'Interface intuitive', 'Synchronisation cloud'],
      price: 'À partir de 3 000€'
    },
    {
      icon: TrendingUp,
      title: 'Marketing en Ligne',
      description: 'Stratégies digitales complètes pour booster votre visibilité et générer plus de leads qualifiés.',
      features: ['SEO/SEA', 'Réseaux sociaux', 'Email marketing', 'Analytics'],
      price: 'À partir de 800€/mois'
    },
    {
      icon: Palette,
      title: 'Gestion Digitale',
      description: 'Gestion complète de votre présence digitale, de la stratégie à l\'exécution quotidienne.',
      features: ['Stratégie digitale', 'Community management', 'Content marketing', 'Reporting'],
      price: 'À partir de 1 200€/mois'
    },
    {
      icon: Video,
      title: 'Montage Vidéo',
      description: 'Création et montage de contenus vidéo professionnels pour vos campagnes marketing et communications.',
      features: ['Montage professionnel', 'Motion design', 'Effets spéciaux', 'Optimisation formats'],
      price: 'À partir de 500€'
    },
    {
      icon: Database,
      title: 'Solutions Cloud',
      description: 'Migration et gestion de vos données dans le cloud avec des solutions sécurisées et évolutives.',
      features: ['Migration cloud', 'Sauvegarde automatique', 'Sécurité avancée', 'Support 24/7'],
      price: 'Sur devis'
    }
  ];

  const handleContactService = (serviceName) => {
    toast({
      title: "Demande de devis",
      description: `🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Services Numériques - El Ella Elohim Web</title>
        <meta name="description" content="Découvrez nos services numériques : création de sites web, développement d'applications, marketing digital, gestion digitale et montage vidéo professionnel." />
        <meta property="og:title" content="Services Numériques - El Ella Elohim Web" />
        <meta property="og:description" content="Services complets de développement web, applications mobiles, marketing digital et solutions cloud." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow">
                Nos <span className="gold-gradient">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Des solutions numériques complètes pour propulser votre entreprise vers le succès digital
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-8 hover-glow group"
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8" />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="space-y-4 pt-4 border-t border-gray-700">
                      <div className="text-xl font-bold gold-gradient">{service.price}</div>
                      <Button
                        onClick={() => handleContactService(service.title)}
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold"
                      >
                        Demander un devis
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Notre <span className="gold-gradient">Processus</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Une méthodologie éprouvée pour garantir le succès de votre projet
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Analyse', description: 'Étude approfondie de vos besoins et objectifs' },
                { step: '02', title: 'Stratégie', description: 'Élaboration d\'une stratégie sur mesure' },
                { step: '03', title: 'Développement', description: 'Création et développement de votre solution' },
                { step: '04', title: 'Lancement', description: 'Mise en ligne et accompagnement continu' }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-2xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons transformer votre vision en réalité.
              </p>
              <Button
                onClick={() => handleContactService('Consultation gratuite')}
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold"
              >
                Consultation gratuite
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;