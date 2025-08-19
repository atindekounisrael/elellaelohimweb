import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Award, Target, Heart, Users, Code, TrendingUp, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous restons à la pointe des technologies pour offrir des solutions modernes et efficaces.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre passion pour le digital nous pousse à donner le meilleur de nous-mêmes dans chaque projet.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous croyons en la force du travail d\'équipe et de la collaboration avec nos clients.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tout ce que nous faisons, de la conception à la livraison.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projets réalisés' },
    { number: '8000+', label: 'Étudiants formés' },
    { number: '50+', label: 'Entreprises accompagnées' },
    { number: '5', label: 'Années d\'expérience' }
  ];

  const expertise = [
    {
      icon: Code,
      title: 'Développement',
      skills: ['React', 'Node.js', 'Python', 'PHP', 'Mobile Apps']
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      skills: ['SEO/SEA', 'Social Media', 'Analytics', 'Content Marketing']
    },
    {
      icon: Globe,
      title: 'Stratégie Digitale',
      skills: ['Transformation digitale', 'E-commerce', 'UX/UI', 'Consulting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>À propos d'Atindekoun Israël - El Ella Elohim Web</title>
        <meta name="description" content="Découvrez l'histoire d'Atindekoun Israël, fondateur d'El Ella Elohim Web. Expert en développement web, marketing digital et formations en ligne depuis 5 ans." />
        <meta property="og:title" content="À propos d'Atindekoun Israël - El Ella Elohim Web" />
        <meta property="og:description" content="Expert passionné en technologies digitales, formations et accompagnement d'entreprises dans leur transformation numérique." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow">
                  À propos d'<span className="gold-gradient">Atindekoun Israël</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Fondateur et expert passionné en technologies digitales, formations et accompagnement d'entreprises 
                  dans leur transformation numérique.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Award className="h-5 w-5" />
                    <span>Expert certifié</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Users className="h-5 w-5" />
                    <span>8000+ étudiants</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Globe className="h-5 w-5" />
                    <span>5 ans d'expérience</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10">
                  <img  
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    alt="Portrait professionnel d'Atindekoun Israël"
                   src="https://images.unsplash.com/photo-1647964185937-1c0456bb8f76" />
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-20"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mon <span className="gold-gradient">Parcours</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Une passion pour la technologie transformée en mission d'accompagnement digital
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">L'origine de la passion</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Tout a commencé par une fascination pour les technologies et leur pouvoir de transformation. 
                    Dès mes premiers pas dans le développement web, j'ai compris que le digital n'était pas 
                    seulement un outil, mais un véritable levier de croissance pour les entreprises.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Cette passion m'a poussé à approfondir mes connaissances et à me spécialiser dans 
                    les technologies modernes : React, Node.js, marketing digital et stratégies de croissance.
                  </p>
                </div>

                <div className="glass-effect rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">La naissance d'El Ella Elohim Web</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Après avoir aidé de nombreuses entreprises à réussir leur transformation digitale, 
                    j'ai créé El Ella Elohim Web avec une mission claire : démocratiser l'accès aux 
                    technologies modernes et accompagner chaque entrepreneur dans sa réussite numérique.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <img  
                  className="w-full h-64 object-cover rounded-xl"
                  alt="Atindekoun Israël travaillant sur des projets digitaux"
                 src="https://images.unsplash.com/photo-1647964185937-1c0456bb8f76" />
                
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center glass-effect rounded-xl p-6"
                    >
                      <div className="text-3xl font-bold gold-gradient mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-gray-400 text-sm">{achievement.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="glass-effect rounded-xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                      <Target className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Notre Mission</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Démocratiser l'accès aux technologies modernes et accompagner chaque entrepreneur, 
                    freelance et entreprise dans leur transformation digitale. Nous croyons que chacun 
                    mérite d'avoir accès aux outils et connaissances nécessaires pour réussir dans 
                    l'économie numérique.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="glass-effect rounded-xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Notre Vision</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Devenir la référence francophone en matière de formation et d'accompagnement digital. 
                    Nous visons à créer un écosystème où l'innovation, l'apprentissage et la réussite 
                    se rencontrent pour construire l'avenir numérique de demain.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nos <span className="gold-gradient">Valeurs</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Les principes qui guident notre approche et notre engagement envers nos clients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 text-center hover-glow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Domaines d'<span className="gold-gradient">Expertise</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Une expertise technique et stratégique au service de votre réussite digitale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {expertise.map((domain, index) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-8 hover-glow"
                >
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
                      <domain.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{domain.title}</h3>
                    <div className="space-y-2">
                      {domain.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2 text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
                Prêt à transformer votre vision en réalité ?
              </h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto">
                Rejoignez les centaines d'entrepreneurs qui ont fait confiance à notre expertise 
                pour réussir leur transformation digitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-md text-lg font-semibold transition-colors"
                >
                  Discutons de votre projet
                </motion.a>
                <motion.a
                  href="/formations"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
                >
                  Découvrir les formations
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;