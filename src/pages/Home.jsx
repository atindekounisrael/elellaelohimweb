import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Code, Smartphone, TrendingUp, Users, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Sites web modernes et applications sur mesure'
    },
    {
      icon: Smartphone,
      title: 'Solutions Mobiles',
      description: 'Applications mobiles natives et responsives'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description: 'Stratégies digitales pour booster votre présence'
    },
    {
      icon: Users,
      title: 'Formations',
      description: 'Formations complètes en développement et digital'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Directrice Marketing',
      content: 'El Ella Elohim Web a transformé notre présence digitale. Résultats exceptionnels !',
      rating: 5
    },
    {
      name: 'Jean Martin',
      role: 'Entrepreneur',
      content: 'Formation de qualité et accompagnement personnalisé. Je recommande vivement.',
      rating: 5
    },
    {
      name: 'Sophie Laurent',
      role: 'Développeuse',
      content: 'Les formations sont très complètes et pratiques. Parfait pour monter en compétences.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients satisfaits' },
    { number: '1000+', label: 'Projets réalisés' },
    { number: '50+', label: 'Formations dispensées' },
    { number: '98%', label: 'Taux de satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>El Ella Elohim Web - Services Numériques et Formations en Ligne</title>
        <meta name="description" content="Spécialiste en services numériques, développement web, formations en ligne et solutions digitales innovantes. Transformez votre présence digitale avec nos experts." />
        <meta property="og:title" content="El Ella Elohim Web - Services Numériques et Formations en Ligne" />
        <meta property="og:description" content="Spécialiste en services numériques, développement web, formations en ligne et solutions digitales innovantes." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Transformez Votre
                <span className="block gold-gradient">Présence Digitale</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Spécialiste en services numériques, formations en ligne et solutions digitales innovantes. 
                Votre succès digital commence ici.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/services">
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 px-8 py-3 text-lg font-semibold hover-glow">
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/formations">
                  <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg font-semibold">
                    Nos formations
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 animate-float">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 blur-xl"></div>
            </div>
            <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-10 blur-2xl"></div>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="absolute bottom-0 center-0 w-1/3 h-1/3 opacity-100"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 2, delay: 0.8 }}
          >
            <img  alt="Une étudiante satisfaite chez El Ella Elohim Web" src="/assets/image3.png" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 w-1/3 h-1/3 opacity-100"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img  alt="Une future génération de la Technologie" src="/assets/image2.png" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-0 w-1/3 h-1/3 opacity-100"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 3, delay: 0.8 }}
          >
            <img  alt="Une femme en plein tournage vidéo" src="/assets/image4.png" />
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nos <span className="gold-gradient">Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Des solutions complètes pour réussir votre transformation digitale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover-glow group cursor-pointer"
                >
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-black/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ce que disent nos <span className="gold-gradient">clients</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Découvrez les témoignages de ceux qui nous font confiance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover-glow"
                >
                  <div className="space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Prêt à commencer votre <span className="gold-gradient">transformation digitale</span> ?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 px-8 py-3 text-lg font-semibold hover-glow">
                    Nous contacter
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/videos-live">
                  <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg font-semibold">
                    <Play className="mr-2 h-5 w-5" />
                    Voir nos vidéos
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
