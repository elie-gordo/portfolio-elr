
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Cpu, Smartphone, Lightbulb, Palette, ArrowRight } from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 3,
      title: "Conseil Numérique",
      description: "Accompagnement stratégique pour la transformation digitale de votre entreprise. Audit de vos solutions existantes et recommandations personnalisées.",
      details: ["Stratégie digitale", "Audit technique", "Optimisation UX/UI", "Formation"],
      icon: <Lightbulb className="w-6 h-6 text-white/80" />
    },
    {
      id: 0,
      title: "Automatisation et intégration IA",
      description: "Intégration d'intelligence artificielle dans vos applications et processus d'entreprise. Automatisation de tâches complexes et optimisation des workflows.",
      details: ["Chatbots IA", "Automatisation de processus", "Analyse de données", "Solutions personnalisées"],
      icon: <Brain className="w-6 h-6 text-white/80" />
    },
    {
      id: 1,
      title: "Développement Web",
      description: "Création de sites web sur mesure, responsive et optimisés pour les moteurs de recherche. Utilisation des technologies modernes pour une performance optimale.",
      details: ["Sites vitrines", "E-commerce", "Applications web", "Progressive Web Apps"],
      icon: <Cpu className="w-6 h-6 text-white/80" />
    },
    {
      id: 2,
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles natives ou cross-platform pour iOS et Android, avec une expérience utilisateur intuitive et fluide.",
      details: ["Apps iOS", "Apps Android", "Solutions cross-platform", "Maintenance et mise à jour"],
      icon: <Smartphone className="w-6 h-6 text-white/80" />
    },
    {
      id: 4,
      title: "Design UI/UX",
      description: "Création d'interfaces utilisateur modernes et attrayantes, avec une expérience utilisateur optimisée pour maximiser l'engagement et la conversion.",
      details: ["Design d'interface", "Prototypage", "Tests utilisateurs", "Identité visuelle"],
      icon: <Palette className="w-6 h-6 text-white/80" />
    }
  ];

  return (
    <div className="layout-container bg-background">
      <StarBackground />
      <div className="content-wrapper pb-20">
        <div className={`max-w-4xl mx-auto px-4 pt-16 sm:pt-24 pb-12 ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-gradient mb-8">Mes Services Professionnels</h1>
          <p className="text-gray-300 text-lg mb-12">
            Découvrez mes différentes prestations pour répondre à vos besoins en matière de développement et de stratégie numérique.
          </p>
          
          <div className="space-y-16 staggered-fade-in">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * service.id }}
                className="bg-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {service.icon && service.icon}
                  <h2 className="text-2xl md:text-3xl font-sans font-bold text-gradient">{service.title}</h2>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-white/70"></div>
                      <span className="text-gray-200">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center relative">
            <motion.div 
              className="absolute -z-10 w-[120%] h-[120%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="text-2xl font-bold text-gradient mb-6">Besoin d'une solution sur mesure ?</h3>
            <div className="flex justify-center">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-block"
                >
                  <Button>
                    <span className="relative z-10">Me contacter</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    <motion.span 
                      className="absolute inset-0 bg-white/10 z-0"
                      initial={{ x: "-100%", opacity: 0.5 }}
                      whileHover={{ x: "100%", opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Services;
