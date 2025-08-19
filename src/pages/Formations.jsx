import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Play, Clock, Users, Star, BookOpen, Award, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Formations = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les formations' },
    { id: 'web', name: 'Développement Web' },
    { id: 'mobile', name: 'Applications Mobiles' },
    { id: 'marketing', name: 'Marketing Digital' },
    { id: 'design', name: 'Graphisme' }
  ];

  const formations = [
    {
      id: 1,
      title: 'Développement Web Complet',
      description: 'Maîtrisez HTML, CSS, JavaScript, React et Node.js pour devenir développeur full-stack.',
      category: 'web',
      level: 'Débutant à Avancé',
      duration: '40 heures',
      students: 1250,
      rating: 4.9,
      price: 299,
      isFree: false,
      instructor: 'Atindekoun Israël',
      image: 'Formation complète en développement web moderne',
      modules: [
        'HTML5 & CSS3 Avancé',
        'JavaScript ES6+',
        'React & Redux',
        'Node.js & Express',
        'Bases de données',
        'Déploiement'
      ]
    },
    {
      id: 2,
      title: 'Marketing Digital Avancé',
      description: 'Stratégies complètes de marketing digital : SEO, SEA, réseaux sociaux et analytics.',
      category: 'marketing',
      level: 'Intermédiaire',
      duration: '25 heures',
      students: 890,
      rating: 4.8,
      price: 199,
      isFree: false,
      instructor: 'Atindekoun Israël',
      image: 'Stratégies de marketing digital et réseaux sociaux',
      modules: [
        'SEO & Référencement',
        'Google Ads & Facebook Ads',
        'Content Marketing',
        'Email Marketing',
        'Analytics & ROI',
        'Stratégie Social Media'
      ]
    },
    {
      id: 3,
      title: 'Introduction au Développement',
      description: 'Découvrez les bases de la programmation et du développement web gratuitement.',
      category: 'web',
      level: 'Débutant',
      duration: '8 heures',
      students: 2100,
      rating: 4.7,
      price: 0,
      isFree: true,
      instructor: 'Atindekoun Israël',
      image: 'Introduction aux concepts de base du développement',
      modules: [
        'Qu\'est-ce que la programmation ?',
        'HTML de base',
        'CSS fondamentaux',
        'JavaScript introduction',
        'Outils de développement',
        'Premier projet'
      ]
    },
    {
      id: 4,
      title: 'Cadrage et Montage Vidéo',
      description: 'Apprenez à filmer des sections sur le terrain et à monter une vidéo captivante.',
      category: 'design',
      level: 'Intermédiaire',
      duration: '30 heures',
      students: 650,
      rating: 4.9,
      price: 249,
      isFree: false,
      instructor: 'Atindekoun Israël',
      image: 'Cadrage et montage vidéo professionnelle et publicitaire',
      modules: [
        'Adobe Première Pro',
        'Adobe After Effect',
        'Capcut Pro',
        'Tournage sur le terrain',
        'Animation Logo/Slogan',
        'Utilisation IA'
      ]
    },
    {
      id: 5,
      title: 'Applications Mobiles React Native',
      description: 'Développez des applications mobiles cross-platform avec React Native.',
      category: 'mobile',
      level: 'Avancé',
      duration: '35 heures',
      students: 420,
      rating: 4.8,
      price: 349,
      isFree: false,
      instructor: 'Atindekoun Israël',
      image: 'Développement d\'applications mobiles avec React Native',
      modules: [
        'React Native Basics',
        'Navigation',
        'State Management',
        'API Integration',
        'Native Modules',
        'Publication App Store'
      ]
    },
    {
      id: 6,
      title: 'Bases du Digital',
      description: 'Formation gratuite pour comprendre les enjeux du numérique et du digital.',
      category: 'marketing',
      level: 'Débutant',
      duration: '5 heures',
      students: 3200,
      rating: 4.6,
      price: 0,
      isFree: true,
      instructor: 'Atindekoun Israël',
      image: 'Comprendre les enjeux du numérique et transformation digitale',
      modules: [
        'Transformation digitale',
        'Réseaux sociaux',
        'E-commerce basics',
        'Sécurité numérique',
        'Tendances tech',
        'Opportunités carrière'
      ]
    },
    {
      id: 7,
      title: 'Infographie',
      description: 'Apprenez à créer des affiches de tous types, Logo, Flyers, Cartes graphiques etc.',
      category: 'design',
      level: 'Expert',
      duration: '25 heures',
      students: 650,
      rating: 4.9,
      price: 220,
      isFree: false,
      instructor: 'Atindekoun Israël',
      image: 'Affiche publicitaire',
      modules: [
        'Adode Photoshop',
        'Adobe illustrator',
        'Canva Pro',
        'Prise de Photo sur le terrain',
        'Utilisation IA'
      ]
    }
  ];

  const filteredFormations = selectedCategory === 'all' 
    ? formations 
    : formations.filter(formation => formation.category === selectedCategory);

  const handleEnroll = (formation) => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour vous inscrire à cette formation.",
      });
      return;
    }

    if (formation.isFree) {
      toast({
        title: "Inscription réussie !",
        description: `Vous êtes maintenant inscrit à "${formation.title}". Accédez à votre tableau de bord pour commencer.`,
      });
    } else {
      toast({
        title: "Redirection vers le paiement",
        description: (
      <Text color="black">
        Cette fonctionnalité n'est pas encore implémentée — mais ne vous inquiétez pas !
        Vous pouvez la demander dans votre prochaine requête !
      </Text>),
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Formations en Ligne - El Ella Elohim Web</title>
        <meta name="description" content="Formations complètes en développement web, marketing digital, design UX/UI et applications mobiles. Formations gratuites et payantes avec certificats." />
        <meta property="og:title" content="Formations en Ligne - El Ella Elohim Web" />
        <meta property="og:description" content="Apprenez le développement web, le marketing digital et les technologies modernes avec nos formations expertes." />
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
                Formations <span className="gold-gradient">en Ligne</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Développez vos compétences avec nos formations expertes en développement, marketing digital et technologies modernes
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Award className="h-5 w-5" />
                  <span>Certificats inclus</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Users className="h-5 w-5" />
                  <span>+8000 étudiants</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Star className="h-5 w-5" />
                  <span>4.8/5 de satisfaction</span>
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

        {/* Formations Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormations.map((formation, index) => (
                <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl overflow-hidden hover-glow group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      alt={`Formation ${formation.title}`}
                     src="https://images.unsplash.com/photo-1619376212910-bdfe06f6ca77" />
                    <div className="absolute top-4 left-4">
                      {formation.isFree ? (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Gratuit
                        </span>
                      ) : (
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          Premium
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{formation.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{formation.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{formation.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{formation.rating}</span>
                      </div>
                    </div>

                    {/* Level & Instructor */}
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-gray-400">Niveau : </span>
                        <span className="text-yellow-400">{formation.level}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Instructeur : </span>
                        <span className="text-white">{formation.instructor}</span>
                      </div>
                    </div>

                    {/* Modules Preview */}
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-white">Modules inclus :</div>
                      <div className="space-y-1">
                        {formation.modules.slice(0, 3).map((module, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                            <BookOpen className="h-3 w-3" />
                            <span>{module}</span>
                          </div>
                        ))}
                        {formation.modules.length > 3 && (
                          <div className="text-xs text-yellow-400">
                            +{formation.modules.length - 3} autres modules
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-gray-700 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold gold-gradient">
                          {formation.isFree ? 'Gratuit' : `${formation.price}€`}
                        </div>
                        {formation.isFree && user && (
                          <div className="flex items-center space-x-1 text-green-400 text-sm">
                            <Download className="h-4 w-4" />
                            <span>Téléchargeable</span>
                          </div>
                        )}
                      </div>
                      <Button
                        onClick={() => handleEnroll(formation)}
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold"
                      >
                        {formation.isFree ? 'Accéder gratuitement' : 'S\'inscrire maintenant'}
                      </Button>
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
                Pourquoi choisir nos <span className="gold-gradient">formations</span> ?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Certificats Reconnus',
                  description: 'Obtenez des certificats valorisants pour votre carrière'
                },
                {
                  icon: Play,
                  title: 'Contenu Pratique',
                  description: 'Projets réels et exercices pratiques pour apprendre efficacement'
                },
                {
                  icon: Users,
                  title: 'Communauté Active',
                  description: 'Rejoignez une communauté d\'apprenants passionnés'
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
      </div>
    </>
  );
};

export default Formations;