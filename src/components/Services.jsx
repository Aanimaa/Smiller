import React from 'react'
import { Code, Palette, Zap, Smartphone, Globe, Rocket } from 'lucide-react'

export default function Services() {
    const services = [
        {
            icon: Code,
            title: "Développement Web",
            description: "Applications web modernes et performantes avec des technologies de pointe",
            gradient: "from-purple-600 to-pink-600",
            hoverShadow: "group-hover:shadow-purple-500/25"
        },
        {
            icon: Palette,
            title: "Design UI/UX",
            description: "Interfaces utilisateur intuitives et designs visuellement impactants",
            gradient: "from-pink-600 to-purple-600",
            hoverShadow: "group-hover:shadow-pink-500/25"
        },
        {
            icon: Zap,
            title: "Expériences Interactives",
            description: "Animations créatives et interactions qui captivent vos utilisateurs",
            gradient: "from-purple-600 to-pink-600",
            hoverShadow: "group-hover:shadow-purple-500/25"
        },
        {
            icon: Smartphone,
            title: "Applications Mobile",
            description: "Apps mobiles natives et cross-platform pour iOS et Android",
            gradient: "from-pink-600 to-purple-600",
            hoverShadow: "group-hover:shadow-pink-500/25"
        },
        {
            icon: Globe,
            title: "Sites Web Responsives",
            description: "Sites web adaptatifs qui fonctionnent parfaitement sur tous les appareils",
            gradient: "from-purple-600 to-pink-600",
            hoverShadow: "group-hover:shadow-purple-500/25"
        },
        {
            icon: Rocket,
            title: "Optimisation Performance",
            description: "Amélioration des performances et de la vitesse de vos applications",
            gradient: "from-pink-600 to-purple-600",
            hoverShadow: "group-hover:shadow-pink-500/25"
        }
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Des solutions sur mesure pour donner vie à vos projets les plus ambitieux
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className="mb-6">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 ${service.hoverShadow} transition-all duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-purple-300 mb-3">{service.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center">
                                        En savoir plus
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* About Section */}
                <div className="mt-20 pt-20 border-t border-purple-500/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  À Propos
                </span>
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Bienvenue dans mon univers créatif ! Je suis un développeur passionné qui croit que chaque projet
                                mérite une approche unique et personnalisée. Mon style se caractérise par des designs audacieux,
                                des couleurs vibrantes et une attention particulière aux détails.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Que ce soit pour des applications web, des interfaces utilisateur ou des expériences interactives,
                                j'apporte toujours cette touche distinctive qui fait la différence.
                            </p>
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Découvrir mon parcours
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                                <h4 className="text-xl font-semibold mb-3 text-purple-300">Expertise Technique</h4>
                                <p className="text-gray-300">
                                    Développement web moderne, UI/UX design, animations et interactions créatives
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/40 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                                <h4 className="text-xl font-semibold mb-3 text-pink-300">Vision Créative</h4>
                                <p className="text-gray-300">
                                    Transformer les idées en réalités numériques percutantes et mémorables
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                                <h4 className="text-xl font-semibold mb-3 text-purple-300">Approche Collaborative</h4>
                                <p className="text-gray-300">
                                    Travail en étroite collaboration pour comprendre et dépasser vos attentes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}