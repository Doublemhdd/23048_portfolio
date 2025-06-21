"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Award,
  Languages,
  ExternalLink,
  Download,
  ChevronDown,
  Sparkles,
  Zap,
  Database,
  Brain,
  Cpu,
  Server,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedCounter } from "@/components/animated-counter"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)

  const getImagePath = () => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      // Check if we're on GitHub Pages
      if (window.location.hostname.includes("github.io")) {
        return "/23048_portfolio/profile.png"
      }
    }
    return "/profile.png"
  }

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["about", "experience", "education", "projects", "skills", "contact"]

      // Find the section that is currently in view
      let currentSection = sections[0]
      let minDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const distance = Math.abs(rect.top)

          // If this section is closer to the top of the viewport than the current one
          if (distance < minDistance) {
            minDistance = distance
            currentSection = section
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount to set initial active section

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null
  }

  const experiences = [
    {
      title: "Spécialiste en ingénierie des données",
      titleEn: "Data Engineering Specialist",
      company: "Moders Digital",
      period: "2025 - Présent",
      location: "Online, Mauritanie",
      description:
        "Responsable de la conception, de l'implémentation et de la gestion de systèmes de traitement de données à grande échelle. Développement et optimisation d'algorithmes pour l'analyse et l'exploitation de données complexes.",
      descriptionEn:
        "Responsible for designing, implementing and managing large-scale data processing systems. Development and optimization of algorithms for complex data analysis and exploitation.",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Développeur de solutions pédagogiques",
      titleEn: "Educational Solutions Developer",
      company: "Coorat",
      period: "2024 - Présent",
      location: "Online, Mauritanie",
      description:
        "Participation à la reproduction des cours pour une approche alternative, basée sur les besoins des étudiants via un formulaire d'évaluation. Collaboration avec l'équipe pour développer des solutions interactives.",
      descriptionEn:
        "Participation in course reproduction for an alternative approach, based on student needs via evaluation forms. Collaboration with the team to develop interactive solutions.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const education = [
    {
      title: "École Supérieure Polytechnique (ESP)",
      titleEn: "Polytechnic Higher School (ESP)",
      degree: "Ingénierie",
      degreeEn: "Engineering",
      period: "2023 - Présent",
      location: "Nouakchott, Mauritanie",
      description: "Formation axée sur la statistique et l'ingénierie des données.",
      descriptionEn: "Training focused on statistics and data engineering.",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "IPGEI",
      titleEn: "IPGEI",
      degree: "Classe préparatoire",
      degreeEn: "Preparatory Class",
      period: "2021 - 2023",
      location: "Nouakchott, Mauritanie",
      description:
        "Base solide en mathématiques et sciences fondamentales, préparation intensive aux concours d'ingénierie.",
      descriptionEn:
        "Solid foundation in mathematics and fundamental sciences, intensive preparation for engineering competitions.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
  ]

  const projects = [
    {
      title: "Système de Visualisation CSA",
      titleEn: "CSA Visualization System",
      period: "2023 - Présent",
      description:
        "Développement d'un système de visualisation et d'exploration des données en temps réel avec modèle d'alerte pour la sécurité alimentaire. Interface de monitoring avancée avec tableaux de bord interactifs.",
      descriptionEn:
        "Development of a real-time data visualization and exploration system with alert model for food security. Advanced monitoring interface with interactive dashboards.",
      tech: ["Data Viz", "Real-time", "Python", "Dashboard", "Alerts", "Security"],
      github: "https://github.com/Doublemhdd/AGSAVN_CSA",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      gradient: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
    },
    {
      title: "Simulateur Blockchain Crypto",
      titleEn: "Crypto Blockchain Simulator",
      period: "2024 - Présent",
      description:
        "Développement d'un simulateur de blockchain pour comprendre et analyser les mécanismes de cryptomonnaies. Implémentation des algorithmes de consensus, mining et transactions décentralisées.",
      descriptionEn:
        "Development of a blockchain simulator to understand and analyze cryptocurrency mechanisms. Implementation of consensus algorithms, mining and decentralized transactions.",
      tech: ["Blockchain", "Cryptocurrency", "Python", "Consensus", "Mining", "DeFi"],
      github: "https://github.com/Doublemhdd/Crypto_Ahd",
      icon: <Server className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      title: "Calculateur INPC ANSAD",
      titleEn: "INPC Calculator ANSAD",
      period: "2023 - 2024",
      description:
        "Développement d'un système de calcul de l'Indice National des Prix à la Consommation pour l'ANSAD. Automatisation des calculs statistiques et génération de rapports économiques détaillés.",
      descriptionEn:
        "Development of a National Consumer Price Index calculation system for ANSAD. Automation of statistical calculations and generation of detailed economic reports.",
      tech: ["Statistics", "Economics", "Python", "Data Analysis", "Reports", "ANSAD"],
      github: "https://github.com/Doublemhdd/Ansad-project",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-400 to-blue-500",
      gradient: "bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20",
    },
  ]

  const skills = {
    "Langages de programmation": ["Python", "R", "JavaScript", "Scala", "HTML", "CSS", "LaTeX"],
    "Technologies Web": ["Django", "Flask", "React", "Angular", "Flutter"],
    "Ingénierie des données": ["Big Data", "Data Visualization", "Traitement temps réel", "IoT"],
    "Bases de données": ["MySQL", "NoSQL", "Excel"],
    "Outils mathématiques": ["Mathématiques avancées", "Analyse statistique", "Algorithmes"],
  }

  const skillsEn = {
    "Programming Languages": ["Python", "R", "JavaScript", "Scala", "HTML", "CSS", "LaTeX"],
    "Web Technologies": ["Django", "Flask", "React", "Angular", "Flutter"],
    "Data Engineering": ["Big Data", "Data Visualization", "Real-time Processing", "IoT"],
    Databases: ["MySQL", "NoSQL", "Excel"],
    "Mathematical Tools": ["Advanced Mathematics", "Statistical Analysis", "Algorithms"],
  }

  const stats = [
    { number: 2, label: language === "fr" ? "Années d'expérience" : "Years of Experience", suffix: "+" },
    { number: 8, label: language === "fr" ? "Projets réalisés" : "Projects Completed", suffix: "+" },
    { number: 10, label: language === "fr" ? "Technologies maîtrisées" : "Technologies Mastered", suffix: "+" },
    { number: 3, label: language === "fr" ? "Langues parlées" : "Languages Spoken", suffix: "" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-x-hidden">
      <ParticleBackground />

      {/* Enhanced Header */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-800/20 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
            MML
          </div>

          <nav className="hidden md:flex space-x-8">
            {[
              { id: "about", label: "about" },
              { id: "experience", label: "experience" },
              { id: "education", label: "education" },
              { id: "projects", label: "projects" },
              { id: "skills", label: "skills" },
              { id: "contact", label: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(item.id)
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                }}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {t(item.label)}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              <Languages className="w-4 h-4 mr-1" />
              {language.toUpperCase()}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleThemeToggle}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative pt-24">
        <div
          className="container mx-auto text-center relative z-10"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="relative w-64 h-64 mx-auto mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin-slow opacity-75 blur-sm"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-500">
              {/* Next.js Image (primary) */}
              <Image
                src={getImagePath() || "/placeholder.svg"}
                alt="Mohamed M.Lemine"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 256px, 256px"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  document.getElementById("fallback-img")!.style.display = "block"
                }}
              />

              {/* Regular HTML image (fallback) */}
              <img
                id="fallback-img"
                src={getImagePath() || "/placeholder.svg"}
                alt="Mohamed M.Lemine"
                style={{
                  display: "none",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "https://ui-avatars.com/api/?name=Mohamed+Lemine&size=512&background=3b82f6&color=fff"
                  target.style.display = "block"
                }}
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in-up">
            {t("heroTitle")}
          </h1>

          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            {t("heroSubtitle")}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
            {t("heroDescription")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up animation-delay-600">
            <Button
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById("projects")
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              }}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {t("viewWork")}
            </Button>

            <Button
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              }}
              variant="outline"
              size="lg"
              className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-900/20 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              {t("downloadCV")}
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16 animate-fade-in-up animation-delay-800">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("aboutTitle")}
          </h2>

          <Card className="max-w-5xl mx-auto border-0 shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl text-blue-600 dark:text-blue-400 flex items-center">
                <Award className="w-6 h-6 mr-3" />
                {t("objective")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{t("objectiveText")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section
        id="experience"
        className="py-24 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("experienceTitle")}
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <CardHeader className="relative">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
                        {exp.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                          {language === "fr" ? exp.title : exp.titleEn}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 dark:from-blue-900 dark:to-purple-900 dark:text-blue-300 px-4 py-2 text-sm font-semibold"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {language === "fr" ? exp.description : exp.descriptionEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("educationTitle")}
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <CardHeader className="relative">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                        {edu.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                          {language === "fr" ? edu.title : edu.titleEn}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                          {language === "fr" ? edu.degree : edu.degreeEn}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-green-100 to-teal-100 text-green-700 dark:from-green-900 dark:to-teal-900 dark:text-green-300 px-4 py-2 text-sm font-semibold"
                    >
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {edu.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {language === "fr" ? edu.description : edu.descriptionEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section
        id="projects"
        className="py-24 px-4 bg-gradient-to-r from-purple-50/50 to-cyan-50/50 dark:from-purple-900/20 dark:to-cyan-900/20"
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("projectsTitle")}
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.05] group overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {project.icon}
                    </div>
                    <Badge
                      variant="outline"
                      className="border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-400 px-3 py-1"
                    >
                      {project.period}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-600 dark:text-blue-400 mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {language === "fr" ? project.title : project.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {language === "fr" ? project.description : project.descriptionEn}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className={`bg-gradient-to-r ${project.color} text-white hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      asChild
                      className={`bg-gradient-to-r ${project.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t("viewCode")}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("viewProject")}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("skillsTitle")}
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(language === "fr" ? skills : skillsEn).map(([category, skillList], index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.05] group"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600 dark:text-blue-400 flex items-center group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    <Code className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:scale-110 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            {t("contactTitle")}
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-cyan-300 flex items-center text-xl">
                  <Languages className="w-6 h-6 mr-3" />
                  {t("languages")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-gray-200 flex items-center mb-4">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  {t("arabic")}
                </div>
                <div className="text-gray-200 flex items-center mb-4">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                  {t("french")}
                </div>
                <div className="text-gray-200 flex items-center mb-4">
                  <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                  {t("english")}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-cyan-300 flex items-center text-xl">
                  <Award className="w-6 h-6 mr-3" />
                  {t("interests")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {[t("music"), t("art"), t("chess"), t("football"), t("logic")].map((interest, index) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:scale-110 transition-all duration-300"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-8 text-cyan-200">{t("getInTouch")}</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <a
                href="mailto:23048@esp.mr"
                className="flex items-center text-gray-200 hover:text-cyan-300 transition-colors duration-300 hover:scale-105 transform"
              >
                <Mail className="w-5 h-5 mr-3" />
                23048@esp.mr
              </a>
              <div className="flex items-center text-gray-200">
                <MapPin className="w-5 h-5 mr-3" />
                Nouakchott, Mauritanie
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                <a href="https://github.com/Doublemhdd" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 mr-3" />
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                <a
                  href="https://www.linkedin.com/in/mohamed-mohamed-lemine-93715b345/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 mr-3" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Mohamed M.Lemine
          </div>
          <p className="text-gray-400 mb-6">© 2025 All rights reserved. Made with ❤️ and lots of ☕</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Doublemhdd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-125 transform"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-mohamed-lemine-93715b345/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-125 transform"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
