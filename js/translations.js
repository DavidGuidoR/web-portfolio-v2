// js/translations.js
const portfolioTranslations = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
      resumeLink: "https://drive.google.com/file/d/1-Wb8WkDHcYKH79dTncggSjNI5G8RfhfK/view?usp=sharing"
    },
    hero: {
      title: "Hello, <br>I'm David Guido",
      subtitle: "Software Developer",
      description: "Computer Systems Engineer & Full-Stack Developer. Focused on building efficient interfaces and robust architectures with an emphasis on scalability and software development best practices.",
      btn: "Check out my work!",
      profile_name: "David Guido",
      profile_role: "Full-stack developer",
      profile_email: "guidod890@gmail.com",
      profile_education: "Computer Systems Engineering",
      profile_location: "Mexico",
      profile_availability: "Full-time / Part-time",
      profile_experience: "+1 Year of Experience"
    },
    experience: {
      title: "Experience",
      job1_title: "Full stack web developer",
      job1_company: "Digital Ignition MX",
      job1_date: "February 2025 - February 2026",
      job1_desc: "I have led the development of scalable systems and REST APIs with secure authentication and role-based access control. I specialize in building high-performance interfaces, managing cloud deployments, version control, and end-to-end CMS maintenance.",
      job2_title: "Full stack web developer",
      job2_company: "Instituto Tecnologico de Morelia",
      job2_date: "December 2023 - June 2024",
      job2_desc: "I have led the development of online enrollment modules, actively participating in requirements analysis, database design, and end-to-end application deployment."
    },
    skills: {
      title: "Skills"
    },
    projects: {
      title: "Projects",
      view_project: "View Project",
      p1_title: "Butzu Mobile",
      p1_desc: "A digital ecosystem designed for the modernization of local businesses, featuring a mobile application for menu management and a dedicated web platform for business registration and administration. The system enables the full digitalization of catalogs and services, facilitating interaction between establishments and local users through a synchronized web and mobile architecture",
      p2_title: "SIM-ITM",
      p2_desc: "Development of the enrollment module for new students as part of the official student management system at the Instituto Tecnológico de Morelia. The project digitized and optimized the admission process, enabling seamless registration and administrative tracking for applicants within a centralized platform.",
      p3_title: "Vialidolid",
      p3_desc: "Web platform designed for the management of citizen complaints, allowing users to report road and urban infrastructure incidents efficiently and transparently. The system facilitates communication between citizens and competent authorities, optimizing response times and tracking of each report made through the mobile application.",
      p1_detail: {
        title: "Butzu Mobile",
        role: "Academic Project",
        overview: "Butzu is an academic project developed with React Native and Expo that consumes a RESTful API built in Express.js with Vanilla JavaScript, backed by a non-relational MongoDB database. The project was managed using the SCRUM methodology, featuring clear role divisions among the development team.",
        challenge: "The platform empowers local businesses to register and deploy custom, digital menus. It generates QR codes for their menus, allowing customers to easily scan and browse products and prices seamlessly via the mobile app, while giving business owners an intuitive way to offer modern QR-based menus.",
        tech: ["HTML", "CSS", "Express.js", "MongoDB", "React", "React-native", "Node.js", "Git"],
        images: ["./assets/projects/Butzu_menu_inicial.png", "./assets/projects/Butzu_menu_negocio.png", "./assets/projects/Butzu_formulario_negocio.png", "./assets/projects/Butzu_menu_QR.png"]
      },
      p2_detail: {
        title: "SIM ITM",
        role: "Social Service Developer",
        overview: "Developed during my social service, SIM ITM is a streamlined enrollment module for incoming students joining the institution. The system leverages Laravel, handling the frontend with Livewire and the backend with native PHP. Data is securely stored using PostgreSQL, and the entire deployment architecture is containerized inside Docker.",
        challenge: "A key feature of the module is an automated form system that asks for the applicant's CURP (Unique Population Registry Code). It instantly parses and extracts data such as birth state and birthdate, significantly speeding up the registration process and preventing manual data entry errors.",
        tech: ["HTML", "Tailwind", "Laravel", "PHP", "Livewire", "PostgreSQL", "Git"],
        images: ["./assets/projects/SIM_ITM_inscripcion.png", "./assets/projects/SIM-ITM_login.png", "./assets/projects/SIM-ITM_formulario.png", "./assets/projects/SIM-ITM_curp.png"]
      },
      p3_detail: {
        title: "Vialidolid",
        role: "Academic Project",
        overview: "Vialidolid is an academic web and mobile platform designed to handle and centralize citizen reports such as potholes, animal abuse, water leaks, and power grid failures. It enables rapid feedback for city authorities and organizes streets and neighborhoods to effectively report urgent infrastructure issues together.",
        challenge: "The project was divided into two main interfaces: a mobile application built in Kotlin that citizens use to create reports and upload attached images, and a web dashboard for authorities to consult report locations, images, and incident clustering. The web platform was built using an Express.js Vanilla JS backend, while the frontend utilized EJS templates and plain CSS.",
        tech: ["HTML", "EJS", "CSS", "Node.js", "Express.js", "PostgreSQL", "Kotlin", "Git"],
        images: ["./assets/projects/Vialidolid_web.png", "./assets/projects/Vialidolid_web_admin.png", "./assets/projects/Vialidolid_movil_mapa.png", "./assets/projects/Vialidolid_movil_reportes.png"]
      }
    },
    project: {
      back: "Back to Projects",
      overview: "Overview",
      challenge: "Challenge & Solution",
      tech: "Technologies"
    },
    contact: {
      title: "Get in Touch",
      desc: "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      btn: "Contact me"
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "Currículum",
      resumeLink: "https://drive.google.com/file/d/1vBd6QZZO4IrKhhR6NAN-LItirSfrBPMc/view?usp=sharing"
    },
    hero: {
      title: "Hola, <br>soy David Guido",
      subtitle: "Desarrollador de Software",
      description: "Ingeniero en Sistemas y Desarrollador Full-Stack. Especializado en construir interfaces eficientes y arquitecturas robustas con un enfoque en escalabilidad y buenas prácticas de desarrollo.",
      btn: "¡Mira mi trabajo!",
      profile_name: "David Guido",
      profile_role: "Desarrollador Full-stack",
      profile_email: "guidod890@gmail.com",
      profile_education: "Ing. en Sistemas Computacionales",
      profile_location: "México",
      profile_availability: "Tiempo completo / Medio tiempo",
      profile_experience: "+1 Año de Experiencia"
    },
    experience: {
      title: "Experiencia",
      job1_title: "Desarrollador Web Full-stack",
      job1_company: "Digital Ignition MX",
      job1_date: "Febrero 2025 - Febrero 2026",
      job1_desc: "He liderado el desarrollo de sistemas escalables y APIs REST con arquitecturas de autenticación segura y gestión de roles. Me especializo en la creación de interfaces de alto rendimiento, gestionando el despliegue en entornos cloud, el control de versiones y el mantenimiento integral de plataformas CMS.",
      job2_title: "Desarrollador Web Full-stack",
      job2_company: "Instituto Tecnologico de Morelia",
      job2_date: "Diciembre 2023 - Junio 2024",
      job2_desc: "He liderado el desarrollo de módulos de inscripción en línea, participando activamente en el análisis de requisitos, el diseño de bases de datos y el despliegue de aplicaciones a producción."
    },
    skills: {
      title: "Habilidades"
    },
    projects: {
      title: "Proyectos",
      view_project: "Ver Proyecto",
      p1_title: "Butzu Mobile",
      p1_desc: "Ecosistema digital diseñado para la modernización de comercios locales, compuesto por una aplicación móvil para la gestión de menús y una plataforma web dedicada al registro y administración de negocios. El sistema permite la digitalización integral de catálogos y servicios, facilitando la interacción entre los establecimientos y los usuarios de su zona mediante una arquitectura web y móvil sincronizada.",
      p2_title: "SIM-ITM",
      p2_desc: "Desarrollo del módulo de inscripciones para alumnos de nuevo ingreso, integrado en el sistema oficial de gestión del alumnado del Instituto Tecnológico de Morelia. El proyecto permitió la digitalización y optimización del proceso de admisión, facilitando el registro y seguimiento administrativo de los aspirantes en una plataforma centralizada.",
      p3_title: "Vialidolid",
      p3_desc: "Plataforma web diseñada para la gestión de denuncias ciudadanas, permitiendo a los usuarios reportar incidencias viales y de infraestructura urbana de manera eficiente y transparente. El sistema facilita la comunicación entre la ciudadanía y las autoridades competentes, optimizando los tiempos de respuesta y seguimiento de cada reporte realizado mediante aplicación móvil.",
      p1_detail: {
        title: "Butzu Mobile",
        role: "Proyecto Académico",
        overview: "Butzu es un proyecto académico desarrollado en React Native utilizando Expo. Su núcleo consume una API REST creada en Express.js con JavaScript Vanilla y estructurada sobre una base de datos no relacional MongoDB. El proyecto fue gestionado estrictamente bajo la metodología SCRUM, con una clara división de roles y responsabilidades de equipo.",
        challenge: "La app principal permite a las personas registrar sus negocios y hacer el despliegue de menús personalizados. Una característica central es la capacidad de descargar o generar un código QR para que los clientes puedan consultar menús y precios. Esto facilita a los dueños de los locales ofrecer una opción digital ágil mediante menús QR.",
        tech: ["HTML", "CSS", "Express.js", "MongoDB", "React", "React-native", "Node.js", "Git"],
        images: ["./assets/projects/Butzu_menu_inicial.png", "./assets/projects/Butzu_menu_negocio.png", "./assets/projects/Butzu_formulario_negocio.png", "./assets/projects/Butzu_menu_QR.png"]
      },
      p2_detail: {
        title: "SIM ITM",
        role: "Desarrollador de Servicio Social",
        overview: "Realizado durante mi proceso de servicio social, SIM ITM es un módulo de inscripciones diseñado específicamente para agilizar el registro administrativo de alumnos de nuevo ingreso. Fue construido íntegramente en Laravel, empleando Livewire para dinamizar el frontend y PHP en el backend, soportado por PostgreSQL y empaquetado mediante contenedores Docker.",
        challenge: "Uno de los mayores logros para agilizar el proceso de inscripción fue integrar la lectura de la CURP en el formulario, de la cual, mediante funciones automatizadas, se extraen y autocompletan datos clave del aspirante como el estado y la fecha de nacimiento.",
        tech: ["HTML", "Tailwind", "Laravel", "PHP", "Livewire", "PostgreSQL", "Git"],
        images: ["./assets/projects/SIM_ITM_inscripcion.png", "./assets/projects/SIM-ITM_login.png", "./assets/projects/SIM-ITM_formulario.png", "./assets/projects/SIM-ITM_curp.png"]
      },
      p3_detail: {
        title: "Vialidolid",
        role: "Proyecto Académico",
        overview: "Vialidolid es una plataforma académica orientada a la creación de reportes ciudadanos sobre problemas en infraestructura urbana, tales como baches, maltrato animal, fugas de agua o fallas en la red eléctrica. Funciona como un puente directo que permite a las autoridades tener retroalimentación rápida de los problemas, y a los ciudadanos organizarse a nivel colonia de forma urgente.",
        challenge: "La solución completa exigió el desarrollo de dos interfaces: una aplicación móvil en Kotlin para que la ciudadanía pueda capturar denuncias y adjuntar fotos, y una plataforma web administrativa para las autoridades que permite la consulta por ubicación, la visualización de evidencia y la agrupación de reportes recurrentes. El portal web fue diseñado utilizando EJS, impulsado por Express.js y estilado con CSS Vanilla.",
        tech: ["HTML", "EJS", "CSS", "Node.js", "Express.js", "PostgreSQL", "Kotlin", "Git"],
        images: ["./assets/projects/Vialidolid_web.png", "./assets/projects/Vialidolid_web_admin.png", "./assets/projects/Vialidolid_movil_mapa.png", "./assets/projects/Vialidolid_movil_reportes.png"]
      }
    },
    project: {
      back: "Volver a Proyectos",
      overview: "Resumen General",
      challenge: "El Reto y la Solución",
      tech: "Tecnologías"
    },
    contact: {
      title: "Ponte en Contacto",
      desc: "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras decir hola, ¡haré todo lo posible para responderte!",
      btn: "Contactame"
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  }
};
