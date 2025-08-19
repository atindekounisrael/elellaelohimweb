import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProfileTab = ({ user }) => {
  const { toast } = useToast();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-white">Mon profil</h2>
      <div className="glass-effect rounded-xl p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
              <User className="h-10 w-10 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{user.name}</h3>
              <p className="text-gray-400">{user.email}</p>
              <p className="text-sm text-gray-500">
                Membre depuis {new Date(user.joinedAt).toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Nom</label>
              <input
                type="text"
                value={user.name}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input
                type="email"
                value={user.email}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                readOnly
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <Button
              onClick={() => toast({
                title: "Modification du profil",
                description: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
              })}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
            >
              Modifier le profil
            </Button>
            <Button
              onClick={() => toast({
                title: "Changement de mot de passe",
                description: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
              })}
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              Changer le mot de passe
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileTab;