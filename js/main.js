document.getElementById('cta-button')?.addEventListener('click', () => {
    alert('Gracias por tu interés. ¡Nos pondremos en contacto pronto!');
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado. ¡Gracias por contactarnos!');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle'); // Selecciona el h1
    const navMenu = document.getElementById('nav-menu'); // Selecciona el menú
    const navLinks = document.querySelectorAll('#nav-menu li a'); // Selecciona todos los enlaces del menú

    // Verifica si los elementos existen antes de agregar eventos
    if (menuToggle && navMenu) {
        // Alterna el menú y oculta/muestra el h1
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show'); // Alterna la clase 'show' para mostrar/ocultar el menú
            menuToggle.classList.toggle('hidden'); // Alterna la clase 'hidden' para ocultar/mostrar el h1
        });

        // Cierra el menú y muestra el h1 al hacer clic en un enlace
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show'); // Oculta el menú
                menuToggle.classList.remove('hidden'); // Muestra el h1
            });
        });
    } else {
        console.error('Elementos menu-toggle o nav-menu no encontrados en el DOM.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const navTitle = document.getElementById("menu-toggle"); // Selecciona el título
    const sections = document.querySelectorAll("section"); // Selecciona todas las secciones
    let currentSection = "";

    // Función para dividir el texto en letras individuales
    const applyLetterAnimation = (element, text) => {
        element.textContent = ""; // Limpia el contenido actual
        text.split("").forEach((letter) => {
            const span = document.createElement("span");
            span.textContent = letter === " " ? "\u00A0" : letter; // Maneja los espacios
            element.appendChild(span);
        });
    };

    // Función para obtener el nombre de la sección actual
    const getSectionName = (id) => {
        switch (id) {
            case "about":
                return "About Me";
            case "Skill":
                return "Personal Skills";
            case "projet":
                return "My Projects";
            case "contact":
                return "Contact Me";
            default:
                return "About Me";
        }
    };

    // Detecta el scroll y actualiza el título
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
                const newSection = section.getAttribute("id");
                if (currentSection !== newSection) {
                    currentSection = newSection;
                    const newTitle = getSectionName(currentSection);

                    // Cambia el título con animación
                    navTitle.classList.add("fade-out"); // Aplica la clase para la animación de salida
                    setTimeout(() => {
                        applyLetterAnimation(navTitle, newTitle); // Cambia el texto y aplica la animación letra por letra
                        navTitle.classList.remove("fade-out"); // Quita la clase para que reaparezca
                    }, 300); // Tiempo en milisegundos que coincide con la duración de la transición en CSS
                }
            }
        });
    });

    // Aplica la animación inicial al cargar la página
    applyLetterAnimation(navTitle, "About Me");
});

document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach((item) => {
        const image = item.querySelector('.skill-image');

        image.addEventListener('click', () => {
            // Elimina la clase "active" de todas las imágenes
            skillItems.forEach((otherItem) => {
                otherItem.classList.remove('active');
            });

            // Agrega la clase "active" solo a la imagen seleccionada
            item.classList.add('active');
        });
    });

    // Agregar delays diferentes a cada imagen de skill
    const skillImages = document.querySelectorAll('.skill-image');
    skillImages.forEach((img, index) => {
        img.style.setProperty('--delay', index);
    });
});

document.addEventListener('mousemove', (e) => {
    const shadow = document.getElementById('cursor-shadow');
    const { clientX, clientY } = e; // Obtiene la posición del cursor

    // Actualiza la posición del elemento
    shadow.style.left = `${clientX}px`;
    shadow.style.top = `${clientY}px`;
});

// Animación de letras para encabezados
document.addEventListener("DOMContentLoaded", () => {
    const animatedHeaders = [
        document.querySelector(".project-header"),
        document.querySelector(".contact-header"),
        document.getElementById("animated-skill-h2"),
        document.getElementById("animated-h2"),
        document.getElementById("animated-h2-2"),
    ];

    animatedHeaders.forEach((header) => {
        if (header) {
            const text = header.textContent.trim(); // Obtiene el texto del encabezado
            header.innerHTML = ''; // Limpia el contenido actual
            text.split('').forEach((letter) => {
                const span = document.createElement('span');
                span.textContent = letter === ' ' ? '\u00A0' : letter; // Maneja los espacios
                header.appendChild(span);
            });
        } else {
            console.error('Uno de los encabezados no se encontró en el DOM.');
        }
    });
});

// Función debounce para optimizar el scroll
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this,
            args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Animación de entrada y salida para la sección About
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#about");
    const aboutHeader = document.querySelector(".about-header");
    const aboutDescription = document.querySelector(".about-description");
    const aboutImage = document.querySelector(".about-image");

    if (!aboutSection || !aboutHeader || !aboutDescription || !aboutImage) {
        console.error("No se encontraron los elementos de la sección About.");
        return;
    }

    // Configuración del IntersectionObserver
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animaciones de entrada
                    aboutHeader.classList.remove("fade-out-left");
                    aboutHeader.classList.add("fade-in-left");

                    aboutDescription.classList.remove("fade-out-right");
                    aboutDescription.classList.add("fade-in-right");

                    aboutImage.classList.remove("fade-out-left");
                    aboutImage.classList.add("fade-in-left");

                    // Agrega la animación de flotación después de la entrada
                    setTimeout(() => {
                        aboutImage.classList.add("float");
                    }, 2000); // 2000ms coincide con la duración de la animación de entrada
                } else {
                    // Animaciones de salida
                    aboutHeader.classList.remove("fade-in-left");
                    aboutHeader.classList.add("fade-out-left");

                    aboutDescription.classList.remove("fade-in-right");
                    aboutDescription.classList.add("fade-out-right");

                    aboutImage.classList.remove("fade-in-left", "float");
                    aboutImage.classList.add("fade-out-left");
                }
            });
        },
        {
            threshold: 0.3, // Activa la animación cuando el 30% de la sección sea visible
        }
    );

    // Observa la sección About
    observer.observe(aboutSection);
});

// Animación de entrada y salida para la sección Skills
document.addEventListener("scroll", () => {
    const skillSection = document.querySelector("#Skill");
    const skillHeader = document.querySelector(".Skill-header");
    const frontendSection = document.querySelector(".frontend-section");
    const backendSection = document.querySelector(".backend-section");

    const sectionPosition = skillSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    const sectionHeight = skillSection.offsetHeight;
    const sectionVisibility =
        sectionPosition > 0
            ? Math.min(screenHeight - sectionPosition, sectionHeight) / sectionHeight
            : Math.min(sectionHeight + sectionPosition, screenHeight) / sectionHeight;

    if (sectionVisibility > 0.3) {
        skillHeader.classList.remove("fade-out-left");
        skillHeader.classList.add("fade-in-left");

        frontendSection.classList.remove("fade-out-right");
        frontendSection.classList.add("fade-in-right");

        backendSection.classList.remove("fade-out-left");
        backendSection.classList.add("fade-in-left");
    } else {
        skillHeader.classList.remove("fade-in-left");
        skillHeader.classList.add("fade-out-left");

        frontendSection.classList.remove("fade-in-right");
        frontendSection.classList.add("fade-out-right");

        backendSection.classList.remove("fade-in-left");
        backendSection.classList.add("fade-out-left");
    }
});

// Animación de entrada y salida para la sección Projects
document.addEventListener("scroll", () => {
    const projectSection = document.querySelector("#projet");
    const projectHeader = document.querySelector(".project-header");
    const projectRectangles = document.querySelectorAll(".rectangle");

    const sectionPosition = projectSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    const sectionHeight = projectSection.offsetHeight;
    const sectionVisibility =
        sectionPosition > 0
            ? Math.min(screenHeight - sectionPosition, sectionHeight) / sectionHeight
            : Math.min(sectionHeight + sectionPosition, screenHeight) / sectionHeight;

    if (sectionVisibility > 0.3) {
        projectHeader.classList.remove("fade-out-left");
        projectHeader.classList.add("fade-in-left");

        projectRectangles.forEach((rectangle, index) => {
            rectangle.classList.remove("fade-out-left", "fade-out-right");
            if (index % 2 === 0) {
                rectangle.classList.add("fade-in-left");
            } else {
                rectangle.classList.add("fade-in-right");
            }
        });
    } else {
        projectHeader.classList.remove("fade-in-left");
        projectHeader.classList.add("fade-out-left");

        projectRectangles.forEach((rectangle, index) => {
            rectangle.classList.remove("fade-in-left", "fade-in-right");
            if (index % 2 === 0) {
                rectangle.classList.add("fade-out-left");
            } else {
                rectangle.classList.add("fade-out-right");
            }
        });
    }
});

// Animación de entrada y salida para la sección Contact
document.addEventListener("scroll", () => {
    const contactSection = document.querySelector("#contact");
    const contactHeader = document.querySelector(".contact-header");

    if (!contactSection || !contactHeader) {
        console.error("No se encontraron los elementos de la sección Contact.");
        return;
    }

    const sectionPosition = contactSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    const sectionHeight = contactSection.offsetHeight;
    const sectionVisibility =
        sectionPosition > 0
            ? Math.min(screenHeight - sectionPosition, sectionHeight) / sectionHeight
            : Math.min(sectionHeight + sectionPosition, screenHeight) / sectionHeight;

    console.log("Visibilidad de la sección Contact:", sectionVisibility);

    if (sectionVisibility > 0.3) {
        contactHeader.classList.remove("fade-out-left");
        contactHeader.classList.add("fade-in-left");
    } else {
        contactHeader.classList.remove("fade-in-left");
        contactHeader.classList.add("fade-out-left");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const contactImage = document.querySelector(".contact-image-left");
    const contactSection = document.getElementById("contact");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Agrega la animación de entrada
                    contactImage.classList.add("fade-in-left");

                    // Calcula el tiempo total de espera (duración de la animación de entrada + 1 segundo)
                    const animationDuration = 1500; // Duración de la animación de entrada en milisegundos
                    const delay = 1000; // Retraso adicional en milisegundos

                    setTimeout(() => {
                        contactImage.classList.add("float");
                    }, animationDuration + delay); // Tiempo total de espera
                } else {
                    // Elimina las clases de animación para que se puedan volver a agregar
                    contactImage.classList.remove("fade-in-left", "float");
                }
            });
        },
        {
            threshold: 0.3, // Activa la animación cuando el 30% de la sección sea visible
        }
    );

    observer.observe(contactSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".form-container");
    const contactSection = document.getElementById("contact");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Agrega la animación de entrada
                    contactForm.classList.add("fade-in-right");
                } else {
                    // Elimina las clases de animación para que se puedan volver a agregar
                    contactForm.classList.remove("fade-in-right");
                }
            });
        },
        {
            threshold: 0.3, // Activa la animación cuando el 30% de la sección sea visible
        }
    );

    observer.observe(contactSection);
});

document.addEventListener("DOMContentLoaded", () => {
    // Inicializa EmailJS con tu user_id
    emailjs.init("XGsw4H0KCMWJJpu2M"); // Reemplaza "YOUR_USER_ID" con tu ID de usuario de EmailJS

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita el envío predeterminado del formulario

        // Obtén los datos del formulario
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Envía el formulario a través de EmailJS
        emailjs
            .send("service_doq4bud", "template_3buokdm", formData)
            .then(
                (response) => {
                    alert("¡Formulario enviado con éxito!");
                    contactForm.reset(); // Limpia el formulario después de enviarlo
                },
                (error) => {
                    alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
                    console.error("Error:", error);
                }
            );
    });
});

// Script mejorado para animación de desplazamiento suave
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todas las secciones
    const sections = document.querySelectorAll('section');
    let currentSection = 0;
    let isScrolling = false;
    const scrollDelay = 800; // Tiempo reducido para un desplazamiento más rápido
    
    // Función para desplazamiento suave sin flash blanco
    function smoothScrollTo(targetPosition) {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500; // Duración de la animación en ms
      let startTime = null;
      
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          isScrolling = false;
        }
      }
      
      // Función de aceleración/desaceleración
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }
      
      requestAnimationFrame(animation);
    }
    
    // Función para desplazarse a una sección específica
    function scrollToSection(index) {
      if (index >= 0 && index < sections.length && !isScrolling) {
        isScrolling = true;
        currentSection = index;
        
        // Posición de la sección objetivo
        const targetPosition = sections[index].offsetTop;
        
        // Usar nuestra función de desplazamiento personalizada
        smoothScrollTo(targetPosition);
        
        // Actualizar indicadores y navegación
        updateNavigation(index);
        updateIndicators(index);
      }
    }
    
    // Función para actualizar la navegación
    function updateNavigation(index) {
      const navLinks = document.querySelectorAll('header nav ul li a');
      if (navLinks.length > 0) {
        navLinks.forEach((link, i) => {
          if (i === index) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }
    
    // Función para actualizar los indicadores
    function updateIndicators(index) {
      const indicators = document.querySelectorAll('.section-indicator');
      if (indicators.length > 0) {
        indicators.forEach((indicator, i) => {
          if (i === index) {
            indicator.classList.add('active');
          } else {
            indicator.classList.remove('active');
          }
        });
      }
    }
    
    // Detector del evento wheel con un throttle para evitar múltiples activaciones
    let wheelTimeout;
    window.addEventListener('wheel', function(event) {
      event.preventDefault();
      
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (!isScrolling) {
          const direction = event.deltaY > 0 ? 1 : -1;
          const newSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
          
          if (newSection !== currentSection) {
            scrollToSection(newSection);
          }
        }
      }, 50); // Pequeño retraso para evitar activaciones rápidas múltiples
    }, { passive: false });
    
    // Configurar los enlaces de navegación
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach((link, index) => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection(index);
      });
    });
    
    // Detectar desplazamiento con teclas de flecha
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        const newSection = Math.min(sections.length - 1, currentSection + 1);
        scrollToSection(newSection);
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        const newSection = Math.max(0, currentSection - 1);
        scrollToSection(newSection);
      }
    });
    
    // Detectar cuando el usuario termina de hacer scroll manualmente
    let scrollEndTimeout;
    window.addEventListener('scroll', function() {
      if (!isScrolling) {
        clearTimeout(scrollEndTimeout);
        scrollEndTimeout = setTimeout(() => {
          // Encontrar la sección más cercana
          let closestSection = 0;
          let minDistance = Infinity;
          
          sections.forEach((section, index) => {
            const distance = Math.abs(section.offsetTop - window.scrollY);
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = index;
            }
          });
          
          // Si estamos cerca de una sección pero no exactamente en ella, ajustar
          if (closestSection !== currentSection && minDistance < window.innerHeight / 4) {
            scrollToSection(closestSection);
          } else {
            // Actualizar la sección actual sin desplazamiento
            currentSection = closestSection;
            updateNavigation(currentSection);
            updateIndicators(currentSection);
          }
        }, 150);
      }
    });
    
    // Crear indicadores de sección
    function createSectionIndicators() {
      const indicatorsContainer = document.createElement('div');
      indicatorsContainer.className = 'section-indicators';
      
      sections.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'section-indicator';
        if (index === 0) {
          indicator.classList.add('active');
        }
        
        indicator.addEventListener('click', () => {
          scrollToSection(index);
        });
        
        indicatorsContainer.appendChild(indicator);
      });
      
      document.body.appendChild(indicatorsContainer);
    }
    
    // Inicializar
    createSectionIndicators();
    updateNavigation(0);
});

document.addEventListener("DOMContentLoaded", () => {
    // Función para detectar si el dispositivo es móvil
    const isMobile = () => {
        return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    };

    // Si es móvil, carga el archivo CSS para móviles
    if (isMobile()) {
        const mobileStylesheet = document.createElement("link");
        mobileStylesheet.rel = "stylesheet";
        mobileStylesheet.href = "css/mobile.css"; // Ruta al archivo CSS para móviles
        document.head.appendChild(mobileStylesheet);
        console.log("Estilos para móviles cargados.");
    } else {
        console.log("Dispositivo no detectado como móvil.");
    }
});

// Función para aplicar el efecto de letra por letra
function applyLetterEffect(element) {
    const text = element.textContent.trim();
    element.textContent = ''; // Limpia el contenido actual
    
    // Crea spans para cada letra
    text.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter; // Maneja los espacios
        element.appendChild(span);
    });
}

// Aplica el efecto a los h3 cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    const frontendTitle = document.querySelector('.frontend-section h3');
    const backendTitle = document.querySelector('.backend-section h3');
    
    if (frontendTitle) applyLetterEffect(frontendTitle);
    if (backendTitle) applyLetterEffect(backendTitle);
});

document.addEventListener('DOMContentLoaded', () => {
    // Agregar delays diferentes a cada rectángulo Coming Soon
    const comingSoonRects = document.querySelectorAll('.rectangle.coming-soon');
    comingSoonRects.forEach((rect, index) => {
        rect.style.setProperty('--delay', index + 1);
    });
});
