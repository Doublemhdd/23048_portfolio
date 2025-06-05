"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    about: "À propos",
    experience: "Expérience",
    education: "Formation",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",

    // Hero section
    heroTitle: "Mohamed M.Lemine",
    heroSubtitle: "Ingénieur en Données & Développeur Full-Stack",
    heroDescription:
      "Passionné par l'ingénierie des données et la visualisation en temps réel, je développe des solutions innovantes dans le domaine financier et technologique.",
    viewWork: "Voir mes projets",
    downloadCV: "Télécharger CV",

    // About section
    aboutTitle: "À propos de moi",
    objective: "OBJECTIF",
    objectiveText:
      "Passionné par l'ingénierie des données et la visualisation en temps réel, je souhaite mettre à profit mes compétences techniques et analytiques en me concentrant sur des applications innovantes dans le domaine financier.",

    // Experience section
    experienceTitle: "Expérience Professionnelle",
    present: "Présent",

    // Education section
    educationTitle: "Formation",

    // Projects section
    projectsTitle: "Mes Projets",
    viewProject: "Voir le projet",
    viewCode: "Voir le code",

    // Skills section
    skillsTitle: "Compétences Techniques",

    // Contact section
    contactTitle: "Contactez-moi",
    languages: "Langues",
    interests: "Centres d'intérêt",
    getInTouch: "Restons en contact",

    // Languages
    arabic: "Arabe (natif)",
    french: "Français (DALF C1)",
    english: "Anglais (Intermédiaire supérieur)",

    // Interests
    music: "Musique",
    art: "Art",
    chess: "Échecs",
    football: "Football",
    logic: "Logique & Mathématiques",
  },
  en: {
    // Navigation
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",

    // Hero section
    heroTitle: "Mohamed M.Lemine",
    heroSubtitle: "Data Engineer & Full-Stack Developer",
    heroDescription:
      "Passionate about data engineering and real-time visualization, I develop innovative solutions in the financial and technological domain.",
    viewWork: "View My Work",
    downloadCV: "Download CV",

    // About section
    aboutTitle: "About Me",
    objective: "OBJECTIVE",
    objectiveText:
      "Passionate about data engineering and real-time visualization, I want to leverage my technical and analytical skills by focusing on innovative applications in the financial domain.",

    // Experience section
    experienceTitle: "Professional Experience",
    present: "Present",

    // Education section
    educationTitle: "Education",

    // Projects section
    projectsTitle: "My Projects",
    viewProject: "View Project",
    viewCode: "View Code",

    // Skills section
    skillsTitle: "Technical Skills",

    // Contact section
    contactTitle: "Get In Touch",
    languages: "Languages",
    interests: "Interests",
    getInTouch: "Let's Connect",

    // Languages
    arabic: "Arabic (native)",
    french: "French (DALF C1)",
    english: "English (Upper-Intermediate)",

    // Interests
    music: "Music",
    art: "Art",
    chess: "Chess",
    football: "Football",
    logic: "Logic & Mathematics",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
