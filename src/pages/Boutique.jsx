import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Download, Star, ShoppingCart, BookOpen, FileText, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Boutique = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'free', name: 'Gratuits' },
    { id: 'premium', name: 'Premium' },
    { id: 'guides', name: 'Guides' },
    { id: 'templates', name: 'Templates' }
  ];

  const products = [
    {
      id: 1,
      title: 'Guide Complet du Développement Web',
      description: 'Un guide exhaustif de 200 pages couvrant HTML, CSS, JavaScript, React et Node.js avec des exemples pratiques.',
      category: 'guides',
      price: 29.99,
      isFree: false,
      rating: 4.9,
      downloads: 1250,
      pages: 200,
      format: 'PDF',
      image: 'Guide de développement web avec code et exemples',
      preview: 'Aperçu disponible - 20 premières pages',
      features: [
        'HTML5 & CSS3 modernes',
        'JavaScript ES6+',
        'React & Hooks',
        'Node.js & Express',
        'Projets pratiques',
        'Bonnes pratiques'
      ]
    },
    {
      id: 2,
      title: 'Templates React Professionnels',
      description: 'Collection de 15 templates React prêts à l\'emploi pour vos projets web : dashboards, landing pages, e-commerce.',
      category: 'templates',
      price: 49.99,
      isFree: false,
      rating: 4.8,
      downloads: 890,
      pages: 0,
      format: 'ZIP',
      image: 'Templates React modernes et responsives',
      preview: 'Démo live disponible',
      features: [
        '15 templates complets',
        'Code source inclus',
        'Responsive design',
        'Documentation détaillée',
        'Support technique',
        'Mises à jour gratuites'
      ]
    },
    {
      id: 3,
      title: 'Introduction au Digital - Guide Gratuit',
      description: 'Découvrez les bases du numérique et de la transformation digitale dans ce guide gratuit de 50 pages.',
      category: 'guides',
      price: 0,
      isFree: true,
      rating: 4.7,
      downloads: 3200,
      pages: 50,
      format: 'PDF',
      image: 'Guide introduction au digital et transformation numérique',
      preview: 'Téléchargement immédiat',
      features: [
        'Bases du digital',
        'Transformation numérique',
        'Outils essentiels',
        'Stratégies digitales',
        'Cas d\'usage',
        'Ressources complémentaires'
      ]
    },
    {
      id: 4,
      title: 'Stratégies Marketing Digital 2024',
      description: 'Les dernières stratégies marketing digital qui fonctionnent en 2024 : SEO, SEA, Social Media et Analytics.',
      category: 'guides',
      price: 39.99,
      isFree: false,
      rating: 4.9,
      downloads: 670,
      pages: 150,
      format: 'PDF',
      image: 'Stratégies marketing digital avec graphiques et analyses',
      preview: 'Extrait gratuit disponible',
      features: [
        'SEO avancé 2024',
        'Google Ads optimisé',
        'Social Media ROI',
        'Analytics & KPIs',
        'Automation marketing',
        'Cas d\'études réels'
      ]
    },
    {
      id: 5,
      title: 'Kit de Démarrage Freelance',
      description: 'Tout ce dont vous avez besoin pour démarrer votre activité freelance : contrats, devis, factures et conseils.',
      category: 'templates',
      price: 0,
      isFree: true,
      rating: 4.6,
      downloads: 2100,
      pages: 0,
      format: 'ZIP',
      image: 'Kit freelance avec documents et templates professionnels',
      preview: 'Accès immédiat après inscription',
      features: [
        'Modèles de contrats',
        'Templates devis/factures',
        'Guide tarification',
        'Conseils juridiques',
        'Outils de gestion',
        'Checklist démarrage'
      ]
    },
    {
      id: 6,
      title: 'Masterclass UX/UI Design',
      description: 'Formation complète en design UX/UI avec exercices pratiques, études de cas et ressources Figma.',
      category: 'guides',
      price: 59.99,
      isFree: false,
      rating: 4.9,
      downloads: 420,
      pages: 180,
      format: 'PDF + Figma',
      image: 'Formation UX/UI design avec wireframes et prototypes',
      preview: 'Chapitre gratuit disponible',
      features: [
        'Principes UX/UI',
        'Figma avancé',
        'Design systems',
        'Prototypage',
        'Tests utilisateurs',
        'Portfolio design'
      ]
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : selectedCategory === 'free'
    ? products.filter(product => product.isFree)
    : selectedCategory === 'premium'
    ? products.filter(product => !product.isFree)
    : products.filter(product => product.category === selectedCategory);

  const handlePurchase = (product) => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour accéder à nos produits.",
      });
      return;
    }

    if (product.isFree) {
      toast({
        title: "Téléchargement démarré !",
        description: `"${product.title}" a été ajouté à votre bibliothèque. Consultez votre tableau de bord.`,
      });
    } else {
      toast({
        title: "Redirection vers le paiement",
        description: `🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀`,
      });
    }
  };

  const handlePreview = (product) => {
    toast({
      title: "Aperçu du produit",
      description: `🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Boutique - Livres et Ressources Numériques - El Ella Elohim Web</title>
        <meta name="description" content="Découvrez notre boutique de livres numériques, guides et templates pour le développement web, marketing digital et design. Ressources gratuites et premium." />
        <meta property="og:title" content="Boutique - Livres et Ressources Numériques - El Ella Elohim Web" />
        <meta property="og:description" content="Guides, templates et ressources numériques pour développeurs, marketeurs et designers." />
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
                <span className="gold-gradient">Boutique</span> Numérique
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Découvrez notre collection de livres numériques, guides pratiques et templates professionnels
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Download className="h-5 w-5" />
                  <span>Téléchargement immédiat</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <FileText className="h-5 w-5" />
                  <span>Formats PDF & ZIP</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Star className="h-5 w-5" />
                  <span>Contenu premium</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={selectedCategory === category.id 
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black" 
                    : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl overflow-hidden hover-glow group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      alt={`Produit ${product.title}`}
                     src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                    <div className="absolute top-4 left-4">
                      {product.isFree ? (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Gratuit
                        </span>
                      ) : (
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          Premium
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/80 text-white px-2 py-1 rounded text-sm">
                        {product.format}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{product.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{product.rating}</span>
                      </div>
                      {product.pages > 0 && (
                        <div className="flex items-center space-x-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{product.pages} pages</span>
                        </div>
                      )}
                    </div>

                    {/* Preview */}
                    <div className="text-sm text-yellow-400">
                      {product.preview}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-white">Contenu inclus :</div>
                      <div className="space-y-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                        {product.features.length > 3 && (
                          <div className="text-xs text-yellow-400">
                            +{product.features.length - 3} autres éléments
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="pt-4 border-t border-gray-700 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold gold-gradient">
                          {product.isFree ? 'Gratuit' : `${product.price}€`}
                        </div>
                        {!product.isFree && (
                          <div className="flex items-center space-x-1 text-gray-400 text-sm">
                            <Lock className="h-4 w-4" />
                            <span>Paiement sécurisé</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        {!product.isFree && (
                          <Button
                            onClick={() => handlePreview(product)}
                            variant="outline"
                            className="flex-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-sm"
                          >
                            Aperçu
                          </Button>
                        )}
                        <Button
                          onClick={() => handlePurchase(product)}
                          className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold"
                        >
                          {product.isFree ? (
                            <>
                              <Download className="mr-2 h-4 w-4" />
                              Télécharger
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Acheter
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pourquoi choisir nos <span className="gold-gradient">ressources</span> ?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Download,
                  title: 'Accès Immédiat',
                  description: 'Téléchargement instantané après achat ou inscription'
                },
                {
                  icon: FileText,
                  title: 'Contenu Premium',
                  description: 'Ressources créées par des experts avec des années d\'expérience'
                },
                {
                  icon: Star,
                  title: 'Mises à Jour',
                  description: 'Contenu régulièrement mis à jour avec les dernières tendances'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
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
                Besoin d'une ressource personnalisée ?
              </h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto">
                Nous créons des guides et templates sur mesure pour répondre à vos besoins spécifiques. 
                Contactez-nous pour discuter de votre projet.
              </p>
              <Button
                onClick={() => handlePurchase({ title: 'Ressource personnalisée', isFree: false })}
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold"
              >
                Demander un devis
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Boutique;