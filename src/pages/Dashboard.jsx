import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { User, BookOpen, Download, ShoppingBag, Calendar, Award, TrendingUp, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfileTab from '@/components/dashboard/ProfileTab';

const Dashboard = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [userStats, setUserStats] = useState({
    coursesEnrolled: 0,
    coursesCompleted: 0,
    downloads: 0,
    purchases: 0
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Simuler le chargement des statistiques utilisateur
    const savedStats = localStorage.getItem(`userStats_${user.id}`);
    if (savedStats) {
      setUserStats(JSON.parse(savedStats));
    }
  }, [user, navigate]);

  const tabs = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: TrendingUp },
    { id: 'courses', name: 'Mes formations', icon: BookOpen },
    { id: 'purchases', name: 'Mes achats', icon: ShoppingBag },
    { id: 'downloads', name: 'Téléchargements', icon: Download },
    { id: 'profile', name: 'Profil', icon: User }
  ];

  const recentCourses = [
    {
      id: 1,
      title: 'Développement Web Complet',
      progress: 65,
      lastAccessed: '2024-01-20',
      status: 'En cours'
    },
    {
      id: 2,
      title: 'Introduction au Digital',
      progress: 100,
      lastAccessed: '2024-01-18',
      status: 'Terminé'
    },
    {
      id: 3,
      title: 'Marketing Digital Avancé',
      progress: 30,
      lastAccessed: '2024-01-15',
      status: 'En cours'
    }
  ];

  const recentPurchases = [
    {
      id: 1,
      title: 'Guide Complet du Développement Web',
      date: '2024-01-20',
      price: 29.99,
      type: 'PDF'
    },
    {
      id: 2,
      title: 'Templates React Professionnels',
      date: '2024-01-15',
      price: 49.99,
      type: 'ZIP'
    }
  ];

  const achievements = [
    { title: 'Premier cours terminé', icon: Award, unlocked: true },
    { title: 'Apprenant assidu', icon: Clock, unlocked: true },
    { title: 'Collectionneur', icon: Download, unlocked: false },
    { title: 'Expert certifié', icon: Star, unlocked: false }
  ];

  const handleDownload = (item) => {
    toast({
      title: "Téléchargement démarré",
      description: `🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀`,
    });
  };

  const handleContinueCourse = (course) => {
    toast({
      title: "Redirection vers le cours",
      description: `🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀`,
    });
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Tableau de bord - El Ella Elohim Web</title>
        <meta name="description" content="Gérez vos formations, téléchargements et achats depuis votre tableau de bord personnel El Ella Elohim Web." />
        <meta property="og:title" content="Tableau de bord - El Ella Elohim Web" />
        <meta property="og:description" content="Votre espace personnel pour suivre vos progrès et gérer vos ressources." />
      </Helmet>

      <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Bienvenue, <span className="gold-gradient">{user.name}</span> !
            </h1>
            <p className="text-gray-400">
              Gérez vos formations, téléchargements et suivez vos progrès
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  className={`flex items-center space-x-2 ${
                    activeTab === tab.id 
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black" 
                      : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Formations inscrites', value: userStats.coursesEnrolled, icon: BookOpen, color: 'from-blue-500 to-blue-600' },
                    { title: 'Formations terminées', value: userStats.coursesCompleted, icon: Award, color: 'from-green-500 to-green-600' },
                    { title: 'Téléchargements', value: userStats.downloads, icon: Download, color: 'from-purple-500 to-purple-600' },
                    { title: 'Achats effectués', value: userStats.purchases, icon: ShoppingBag, color: 'from-yellow-500 to-yellow-600' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-effect rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-400 text-sm">{stat.title}</p>
                          <p className="text-2xl font-bold text-white">{stat.value}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                          <stat.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Courses */}
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Formations récentes</h3>
                    <div className="space-y-4">
                      {recentCourses.map((course) => (
                        <div key={course.id} className="border border-gray-700 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-white">{course.title}</h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              course.status === 'Terminé' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-blue-500/20 text-blue-400'
                            }`}>
                              {course.status}
                            </span>
                          </div>
                          <div className="mb-3">
                            <div className="flex justify-between text-sm text-gray-400 mb-1">
                              <span>Progression</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">
                              Dernier accès: {new Date(course.lastAccessed).toLocaleDateString('fr-FR')}
                            </span>
                            <Button
                              onClick={() => handleContinueCourse(course)}
                              size="sm"
                              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                            >
                              Continuer
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Réalisations</h3>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                          achievement.unlocked ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-gray-800/50'
                        }`}>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            achievement.unlocked 
                              ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black' 
                              : 'bg-gray-700 text-gray-400'
                          }`}>
                            <achievement.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className={`font-medium ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`}>
                              {achievement.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {achievement.unlocked ? 'Débloqué' : 'À débloquer'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white">Mes formations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="glass-effect rounded-xl p-6 hover-glow">
                      <h3 className="text-lg font-bold text-white mb-3">{course.title}</h3>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Progression</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          course.status === 'Terminé' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {course.status}
                        </span>
                        <Button
                          onClick={() => handleContinueCourse(course)}
                          size="sm"
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                        >
                          {course.status === 'Terminé' ? 'Revoir' : 'Continuer'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Purchases Tab */}
            {activeTab === 'purchases' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white">Mes achats</h2>
                <div className="space-y-4">
                  {recentPurchases.map((purchase) => (
                    <div key={purchase.id} className="glass-effect rounded-xl p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">{purchase.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Acheté le {new Date(purchase.date).toLocaleDateString('fr-FR')}</span>
                            <span>Format: {purchase.type}</span>
                            <span className="text-yellow-400 font-semibold">{purchase.price}€</span>
                          </div>
                        </div>
                        <Button
                          onClick={() => handleDownload(purchase)}
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Télécharger
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Downloads Tab */}
            {activeTab === 'downloads' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-white">Mes téléchargements</h2>
                <div className="text-center py-16">
                  <Download className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Aucun téléchargement</h3>
                  <p className="text-gray-400 mb-6">Vos téléchargements apparaîtront ici une fois que vous aurez acheté des ressources.</p>
                  <Button
                    onClick={() => navigate('/boutique')}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                  >
                    Découvrir la boutique
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && <ProfileTab user={user} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;