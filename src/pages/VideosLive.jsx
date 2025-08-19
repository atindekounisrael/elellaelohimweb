import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Play, Calendar, Clock, Users, Video, Mic, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const VideosLive = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('upcoming');

  const categories = [
    { id: 'upcoming', name: 'À venir' },
    { id: 'live', name: 'En direct' },
    { id: 'recorded', name: 'Enregistrements' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Masterclass React Avancé',
      description: 'Découvrez les techniques avancées de React : hooks personnalisés, optimisation des performances et patterns modernes.',
      date: '2024-01-25',
      time: '19:00',
      duration: '2h',
      instructor: 'Atindekoun Israël',
      attendees: 156,
      category: 'Développement',
      isFree: false,
      price: 29,
      meetLink: 'https://meet.google.com/abc-defg-hij'
    },
    {
      id: 2,
      title: 'Stratégies Marketing Digital 2024',
      description: 'Les nouvelles tendances du marketing digital et comment les appliquer à votre business.',
      date: '2024-01-28',
      time: '18:30',
      duration: '1h30',
      instructor: 'Atindekoun Israël',
      attendees: 203,
      category: 'Marketing',
      isFree: true,
      price: 0,
      meetLink: 'https://meet.google.com/xyz-uvwx-yz'
    },
    {
      id: 3,
      title: 'Design System & Figma',
      description: 'Créez des design systems cohérents et efficaces avec Figma pour vos projets.',
      date: '2024-02-02',
      time: '20:00',
      duration: '2h30',
      instructor: 'Atindekoun Israël',
      attendees: 89,
      category: 'Design',
      isFree: false,
      price: 39,
      meetLink: 'https://meet.google.com/design-system-live'
    }
  ];

  const liveEvents = [
    {
      id: 4,
      title: 'Q&A Développement Web',
      description: 'Session questions-réponses en direct sur le développement web moderne.',
      startTime: '18:00',
      viewers: 234,
      instructor: 'Atindekoun Israël',
      category: 'Développement',
      meetLink: 'https://meet.google.com/live-qa-session'
    }
  ];

  const recordedVideos = [
    {
      id: 5,
      title: 'Introduction à Node.js',
      description: 'Les bases de Node.js pour créer des applications backend performantes.',
      duration: '45 min',
      views: 1250,
      date: '2024-01-15',
      instructor: 'Atindekoun Israël',
      category: 'Développement',
      thumbnail: 'Cours Node.js avec exemples de code et terminal'
    },
    {
      id: 6,
      title: 'SEO en 2024',
      description: 'Techniques SEO modernes pour améliorer votre référencement naturel.',
      duration: '1h 20min',
      views: 890,
      date: '2024-01-10',
      instructor: 'Atindekoun Israël',
      category: 'Marketing',
      thumbnail: 'Analyse SEO avec graphiques et outils de référencement'
    },
    {
      id: 7,
      title: 'UX/UI Best Practices',
      description: 'Les meilleures pratiques pour créer des interfaces utilisateur exceptionnelles.',
      duration: '1h 15min',
      views: 567,
      date: '2024-01-05',
      instructor: 'Atindekoun Israël',
      category: 'Design',
      thumbnail: 'Interface design avec wireframes et prototypes'
    }
  ];

  const handleJoinEvent = (event) => {
    if (event.isFree === false && event.price > 0) {
      toast({
        title: "Paiement requis",
        description: `🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀`,
      });
    } else {
      toast({
        title: "Redirection vers Google Meet",
        description: `Vous allez être redirigé vers la session : ${event.title}`,
      });
      // window.open(event.meetLink, '_blank');
    }
  };

  const handleWatchRecording = (video) => {
    toast({
      title: "Lecture de la vidéo",
      description: `🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀`,
    });
  };

  const getCurrentContent = () => {
    switch (selectedCategory) {
      case 'upcoming':
        return upcomingEvents;
      case 'live':
        return liveEvents;
      case 'recorded':
        return recordedVideos;
      default:
        return upcomingEvents;
    }
  };

  return (
    <>
      <Helmet>
        <title>Vidéos Live et Webinaires - El Ella Elohim Web</title>
        <meta name="description" content="Participez à nos sessions live, webinaires et masterclass en développement web, marketing digital et design. Sessions gratuites et premium disponibles." />
        <meta property="og:title" content="Vidéos Live et Webinaires - El Ella Elohim Web" />
        <meta property="og:description" content="Sessions live interactives avec Atindekoun Israël sur les technologies modernes et le marketing digital." />
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
                Vidéos <span className="gold-gradient">Live</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Participez à nos sessions live interactives, webinaires et masterclass avec Atindekoun Israël
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Video className="h-5 w-5" />
                  <span>Sessions interactives</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Mic className="h-5 w-5" />
                  <span>Q&A en direct</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Share2 className="h-5 w-5" />
                  <span>Google Meet intégré</span>
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

        {/* Content Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Upcoming Events */}
            {selectedCategory === 'upcoming' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Prochaines <span className="gold-gradient">Sessions</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-effect rounded-xl p-6 hover-glow"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            {event.category}
                          </span>
                          {event.isFree ? (
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Gratuit
                            </span>
                          ) : (
                            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {event.price}€
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white">{event.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>

                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{event.time} ({event.duration})</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees} inscrits</span>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-700">
                          <Button
                            onClick={() => handleJoinEvent(event)}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold"
                          >
                            {event.isFree ? 'Rejoindre gratuitement' : `S'inscrire - ${event.price}€`}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Live Events */}
            {selectedCategory === 'live' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Sessions <span className="gold-gradient">En Direct</span>
                </h2>
                {liveEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {liveEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="glass-effect rounded-xl p-6 hover-glow border-2 border-red-500"
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                              🔴 EN DIRECT
                            </span>
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                              {event.category}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{event.description}</p>

                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>{event.viewers} spectateurs</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>Depuis {event.startTime}</span>
                            </div>
                          </div>

                          <Button
                            onClick={() => handleJoinEvent(event)}
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold"
                          >
                            <Play className="mr-2 h-5 w-5" />
                            Rejoindre le live
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Aucune session en direct</h3>
                    <p className="text-gray-400">Consultez les sessions à venir ou les enregistrements disponibles.</p>
                  </div>
                )}
              </div>
            )}

            {/* Recorded Videos */}
            {selectedCategory === 'recorded' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  <span className="gold-gradient">Enregistrements</span> Disponibles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recordedVideos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-effect rounded-xl overflow-hidden hover-glow group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img  
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          alt={`Enregistrement ${video.title}`}
                         src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            {video.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white">{video.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{video.description}</p>

                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4" />
                            <span>{video.views} vues</span>
                          </div>
                          <span>{new Date(video.date).toLocaleDateString('fr-FR')}</span>
                        </div>

                        <Button
                          onClick={() => handleWatchRecording(video)}
                          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Regarder
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Integration Info */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Sessions via <span className="gold-gradient">Google Meet</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Toutes nos sessions live utilisent Google Meet (atindekounisrael13@gmail.com) pour une expérience optimale. 
                Rejoignez-nous facilement depuis n'importe quel appareil.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Video className="h-5 w-5 text-yellow-400" />
                  <span>Qualité HD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mic className="h-5 w-5 text-yellow-400" />
                  <span>Audio cristallin</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="h-5 w-5 text-yellow-400" />
                  <span>Partage d'écran</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-yellow-400" />
                  <span>Chat interactif</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VideosLive;