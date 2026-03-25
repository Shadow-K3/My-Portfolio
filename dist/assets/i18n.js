import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        nav: {
            home: "home",
            projects: "projects",
            about: "about",
            contact: "contact"
        },
        hero: {
            isA: "Berol is a",
            titles: [
                "full-stack developer",
                "UI/UX designer",
                "junior web pentester",
                "solution architect"
            ],
            description: "I craft responsive websites where technologies meet creativity. Based in Douala, focused on security and robust architectures.",
            cta: "Contact me",
            currentProject: "Currently working on"
        },
        about: {
            title: "about-me",
            greeting: "Hello, I'm Berol!",
            description: "I am a {role1} and {role2}, Trained at Getsmarter based in Douala, Cameroon. My journey is driven by a deep interest in building modern, functional, and aesthetic digital solutions.",
            role1: "Full-Stack Developer",
            role2: "UI/UX Designer",
            cta: "Read_Full_Bio",
            log: {
                title: "Current Stack Audit",
                env: "Environment",
                security: "Security",
                loc: "Loc"
            }
        },
        contact: {
            title: "contacts",
            connection: "ESTABLISHING_CONNECTION...",
            subtitle: "I'm currently open to {freelance} and collaboration on secure infrastructure projects. If you have a specific request or just want to say hi, my inbox is always open.",
            freelance: "freelance opportunities",
            cardTitle: "Message_Me_Here",
            whatsappLabel: "Whatsapp_Encrypted",
            emailLabel: "Direct_Email",
            status: "STATUS: READY"
        },
        projects: {
            title: "projects",
            viewAll: "VIEW_ALL_LOGS",
            demo: "LIVE_DEMO",
            design: "VIEW_DESIGN",
            root: "ACCESS_ROOT",
            list: {
                ai: {
                    title: "AI Assistance",
                    desc: "AI-powered assistant providing automated task management and smart conversational flows.",
                    badge: "AI_INTEGRATED"
                },
                neura: {
                    title: "Neuralearn",
                    desc: "Online Tech learning Platform designed for students and professionals. High-fidelity prototypes.",
                    badge: "SECURED_CORE"
                },
                saveurs: {
                    title: "Saveurs D'ebene",
                    desc: "A Restaurant reservation system with a secure backend, user-friendly interface, and real-time availability updates.",
                    badge: "STABLE_BUILD"
                }
            }
        },
        skills: {
            title: "skills",
            categories: {
                languages: "Languages",
                frameworks: "Frameworks",
                databases: "Databases",
                tools: "Tools_&_Environments",
                webCore: "Web_Core"
            }
        },
        quote: {
            part1: "With great",
            highlight: "deployment",
            part2: "comes great responsibility and very little sleep.",
            author: "Auth: Berol"
        },
        footer: {
            status: "System_Status",
            online: "Online",
            tagline: "// Building secure digital infrastructures.",
            location: "// Based in Douala, Cameroon.",
            reachOut: "Reach_out",
            madeWith: "Made with"
        },
        projectsPage: {
            title: "projects",
            subtitle: "List of my software achievements.",
            backHome: "BACK_TO_ROOT",
            apps: "complete-apps",
            small: "small-projects",
            cv: {
                filename: "curriculum_vitae.pdf",
                desc: "PDF format optimized for recruiters.",
                btn: "EXTRACT_DATA",
                loading: "Encrypting..."
            },
            // Descriptions des projets
            news: "A secure, responsive newsletter subscription page with email validation.",
            coffee: "Modern website for a local coffee shop with online menu and reservation.",
            elite: "Secure online store for a fashion brand with user authentication.",
            energy: "Real-time dashboard for monitoring energy consumption in smart homes.",
            port: "The site you are currently browsing. Minimalist terminal-inspired design.",
            fb: "Pixel-perfect clone of the Facebook web interface.",
            orange: "Reproduction of the Orange Cameroon web portal.",
            insta: "Full UI clone with functional navigation.",
            medi: "Landing page for a hospital management system.",
            uba: "Reproduction of the UBA banking interface.",
            camtel: "Clone of the Camtel institutional website."
        },
        aboutMe: {
            whoami: "root@berol:~$ whoami",
            hello: "Hello, I'm Berol!",
            bio: "I am a {dev} and {design} with a specialized focus on {security}. Trained at Getsmarter Based in Douala, Cameroon, I bridge the gap between complex business requirements and robust digital solutions.",
            roles: { dev: "Full-Stack Developer", design: "UI/UX Designer", security: "Application Security (Pentesting)" },
            methodTitle: "Methodology: Architecture Before Action",
            methodDesc: "Every project begins with a rigorous {uml}. Mapping out logic before implementation ensures systems are maintainable, secure, and ready to scale.",
            skillsTitle: "skills",
            eduTitle: "education",
            factsTitle: "fun-facts",
            facts: [
                "I don't like pictures 📸",
                "I traveled 3 years back in time for this portfolio photo 😂",
                "Gamer & Movie enthusiast 🎮",
                "Proudly from Cameroon 🇨🇲",
                "Student @ Getsmarter",
                "I engineer before I code 🛠️"
            ]
        },
        contact: {
            title: "contacts",
            subtitle: "Let's build something secure together.",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                placeholderName: "John Doe",
                placeholderEmail: "john@example.com",
                placeholderMsg: "Tell me about your project...",
                btn: "SEND_MESSAGE"
            },
            sidebar: {
                title: "Message me here",
                socials: "Socials:"
            }
        }
    },
    fr: {
        nav: {
            home: "accueil",
            projects: "projets",
            about: "à-propos",
            contact: "contact"
        },
        hero: {
            isA: "Berol est un",
            titles: [
                "développeur full-stack",
                "UI/UX designer",
                "junior web pentester",
                "architecte solution"
            ],
            description: "Je conçois des sites web responsifs où la technologie rencontre la créativité. Basé à Douala, focus sur la sécurité et les architectures robustes.",
            cta: "Contactez-moi",
            currentProject: "Actuellement sur"
        },
        about: {
            title: "à-propos",
            greeting: "Salut, je suis Berol !",
            description: "Je suis un {role1} et {role2}, formé à Getsmarter et basé à Douala, Cameroun. Mon parcours est guidé par un profond intérêt pour la création de solutions numériques modernes, fonctionnelles et esthétiques.",
            role1: "Développeur Full-Stack",
            role2: "UI/UX Designer",
            cta: "Lire_la_Bio",
            log: {
                title: "Audit de la Stack",
                env: "Environnement",
                security: "Sécurité",
                loc: "Lieu"
            }
        },
        contact: {
            title: "contacts",
            connection: "ÉTABLISSEMENT_CONNEXION...",
            subtitle: "Je suis actuellement ouvert aux {freelance} et aux collaborations sur des projets d'infrastructure sécurisée. Si vous avez une demande spécifique ou voulez juste dire salut, ma boîte mail est ouverte.",
            freelance: "opportunités en freelance",
            cardTitle: "Contactez_Moi_Ici",
            whatsappLabel: "Whatsapp_Chiffré",
            emailLabel: "Email_Direct",
            status: "STATUT : PRÊT"
        },
        projects: {
            title: "projets",
            viewAll: "VOIR_TOUS_LES_LOGS",
            demo: "DEMO_LIVE",
            design: "VOIR_DESIGN",
            root: "ACCÈS_ROOT",
            list: {
                ai: {
                    title: "AI Assistance",
                    desc: "Assistant propulsé par l'IA offrant une gestion automatisée des tâches et des flux conversationnels intelligents.",
                    badge: "IA_INTÉGRÉE"
                },
                neura: {
                    title: "Neuralearn",
                    desc: "Plateforme d'apprentissage tech en ligne conçue pour étudiants et professionnels. Prototypes haute fidélité.",
                    badge: "CŒUR_SÉCURISÉ"
                },
                saveurs: {
                    title: "Saveurs D'ebene",
                    desc: "Système de réservation de restaurant avec backend sécurisé, interface intuitive et mises à jour en temps réel.",
                    badge: "BUILD_STABLE"
                }
            }
        },
        skills: {
            title: "compétences",
            categories: {
                languages: "Langages",
                frameworks: "Frameworks",
                databases: "Bases_de_données",
                tools: "Outils_&_Environnements",
                webCore: "Cœur_Web"
            }
        },
        quote: {
            part1: "Un grand",
            highlight: "déploiement",
            part2: "implique de grandes responsabilités et très peu de sommeil.",
            author: "Auteur : Berol"
        },
        footer: {
            status: "État_Système",
            online: "En_Ligne",
            tagline: "// Construction d'infrastructures numériques sécurisées.",
            location: "// Basé à Douala, Cameroun.",
            reachOut: "Me_rejoindre",
            madeWith: "Conçu avec"
        },
        projectsPage: {
            title: "projets",
            subtitle: "Liste de mes réalisations logicielles.",
            backHome: "RETOUR_RACINE",
            apps: "applications-complètes",
            small: "petits-projets",
            cv: {
                filename: "curriculum_vitae.pdf",
                desc: "Format PDF optimisé pour les recruteurs.",
                btn: "EXTRAIRE_DONNÉES",
                loading: "Chiffrement..."
            },
            news: "Page d'abonnement newsletter sécurisée avec validation d'email.",
            coffee: "Site moderne pour un café local avec menu en ligne et réservations.",
            elite: "Boutique en ligne sécurisée pour une marque de mode.",
            energy: "Tableau de bord temps réel pour l'optimisation de l'énergie.",
            port: "Le site sur lequel vous naviguez. Design inspiré des terminaux.",
            fb: "Clone pixel-perfect de l'interface web de Facebook.",
            orange: "Reproduction du portail web d'Orange Cameroun.",
            insta: "Clone UI complet avec navigation fonctionnelle.",
            medi: "Landing page pour un système de gestion hospitalière.",
            uba: "Reproduction de l'interface bancaire d'UBA.",
            camtel: "Clone du site institutionnel de Camtel."
        },
        aboutMe: {
            whoami: "root@berol:~$ qui_suis_je",
            hello: "Salut, je suis Berol !",
            bio: "Je suis {dev} et {design} avec une spécialisation en {security}. Formé à Getsmarter et basé à Douala, Cameroun, je fais le pont entre les besoins métier complexes et les solutions numériques robustes.",
            roles: { dev: "Développeur Full-Stack", design: "Designer UI/UX", security: "Sécurité Applicative (Pentesting)" },
            methodTitle: "Méthodologie : L'Architecture avant l'Action",
            methodDesc: "Chaque projet commence par une analyse {uml} rigoureuse. Modéliser la logique avant l'implémentation garantit des systèmes maintenables, sécurisés et évolutifs.",
            skillsTitle: "compétences",
            eduTitle: "formation",
            factsTitle: "infos-vrac",
            facts: [
                "Je n'aime pas les photos 📸",
                "J'ai voyagé 3 ans dans le passé pour cette photo de portfolio 😂",
                "Gamer & fan de ciné 🎮",
                "Fier d'être Camerounais 🇨🇲",
                "Étudiant @ Getsmarter",
                "Je conçois avant de coder 🛠️"
            ]
        },
        contact: {
            title: "contacts",
            subtitle: "Construisons quelque chose de sécurisé ensemble.",
            form: {
                name: "Nom",
                email: "E-mail",
                message: "Message",
                placeholderName: "Jean Dupont",
                placeholderEmail: "jean@exemple.com",
                placeholderMsg: "Parlez-moi de votre projet...",
                btn: "ENVOYER_MESSAGE"
            },
            sidebar: {
                title: "Contactez-moi ici",
                socials: "Réseaux :"
            }
        }
    },

}

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('locale') || 'fr',
    fallbackLocale: 'en',
    messages,
})
export default i18n