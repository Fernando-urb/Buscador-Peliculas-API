# 🎬 Buscador de Películas - API

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/TMDB%20API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" alt="TMDB API">
</div>

<div align="center">
  <h3>🔍 Aplicación web para buscar y explorar películas usando The Movie Database API</h3>
</div>

---

## 📝 Descripción

**Buscador de Películas API** es una aplicación web moderna que permite a los usuarios buscar, explorar y descubrir información detallada sobre películas. Utilizando **The Movie Database (TMDB) API**, la aplicación ofrece acceso a una extensa base de datos con miles de películas, información actualizada, trailers, reseñas y mucho más.

### ¿Por qué este proyecto?
- 🎯 Practicar consumo de APIs REST complejas
- 💡 Implementar búsqueda en tiempo real
- 🎨 Crear interfaces dinámicas y atractivas
- 📊 Manejar grandes volúmenes de datos
- ⚡ Optimizar UX con carga asíncrona

---

## ✨ Características Principales

### 🔍 **Búsqueda Avanzada**
- Búsqueda instantánea por título
- Autocompletado con sugerencias
- Filtros por género, año, calificación
- Resultados paginados y optimizados
- Historial de búsquedas

### 🎭 **Información Detallada**
- Datos completos de cada película
- Sinopsis, reparto y equipo técnico
- Calificaciones y reseñas de usuarios
- Trailers y videos promocionales
- Imágenes en alta calidad

### 🎨 **Interfaz Moderna**
- Diseño tipo Netflix/streaming
- Cards responsivas con efectos hover
- Modo claro/oscuro
- Animaciones suaves
- Loading states elegantes

### 🌟 **Funcionalidades Extra**
- ❤️ Lista de películas favoritas
- 🎲 Película aleatoria del día
- 📊 Top películas por categoría
- 🔥 Películas populares y tendencias
- 📱 Completamente responsive

---

## 🛠️ Tecnologías Utilizadas

<div align="center">

| Frontend | API & Data | Herramientas |
|----------|------------|--------------|
| ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) | ![TMDB API](https://img.shields.io/badge/TMDB%20API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white) | ![VS Code](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white) |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![Fetch API](https://img.shields.io/badge/Fetch%20API-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white) | ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white) | ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) |

</div>

---

## 📂 Estructura del Proyecto

```
Buscador-Peliculas-API/
├── 📁 assets/
│   ├── 📁 css/
│   │   ├── style.css
│   │   ├── components.css
│   │   └── responsive.css
│   ├── 📁 js/
│   │   ├── app.js
│   │   ├── api.js
│   │   ├── search.js
│   │   ├── favorites.js
│   │   └── utils.js
│   └── 📁 images/
│       ├── logo.png
│       └── placeholder.jpg
├── 📁 components/
│   ├── movie-card.html
│   ├── movie-detail.html
│   └── search-bar.html
├── index.html
├── favorites.html
├── movie-detail.html
├── config.js
└── README.md
```

---

## 🚀 Instalación y Uso

### Prerequisitos
- Navegador web moderno
- Conexión a internet
- API Key de TMDB (gratuita)

### Pasos para ejecutar

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Fernando-urb/Buscador-Peliculas-API.git
   ```

2. **Navega al directorio**
   ```bash
   cd Buscador-Peliculas-API
   ```

3. **Obtén tu API Key**
   - Regístrate en [The Movie Database](https://www.themoviedb.org/settings/api)
   - Solicita una API Key gratuita
   - Copia tu API Key

4. **Configura la API Key**
   ```javascript
   // En config.js
   const API_KEY = 'tu-api-key-aqui';
   const BASE_URL = 'https://api.themoviedb.org/3';
   ```

5. **Abre la aplicación**
   ```bash
   # Abre index.html en tu navegador
   # O usa un servidor local como Live Server
   ```

6. **¡A explorar películas!**

---

## 🎥 Demo

> **¡Próximamente!** - Demo en vivo disponible pronto

---

## 📊 API Utilizada

Esta aplicación utiliza **[The Movie Database (TMDB) API](https://developers.themoviedb.org/3)**, una de las APIs más completas de información cinematográfica:

### Endpoints principales:
```javascript
// Buscar películas
GET /search/movie?api_key={api_key}&query={query}

// Película popular
GET /movie/popular?api_key={api_key}

// Detalles de película
GET /movie/{movie_id}?api_key={api_key}

// Géneros
GET /genre/movie/list?api_key={api_key}

// Videos/Trailers
GET /movie/{movie_id}/videos?api_key={api_key}

// Créditos (reparto)
GET /movie/{movie_id}/credits?api_key={api_key}
```

### Datos disponibles:
- 📋 Base de datos de 500,000+ películas
- 🖼️ Posters y backdrops en alta calidad
- 🎬 Trailers y videos promocionales
- ⭐ Calificaciones de usuarios y críticos
- 🎭 Información completa de reparto
- 📅 Fechas de estreno y duración
- 🌍 Disponibilidad por país

---

## 🎮 Funcionalidades Detalladas

### 🏠 **Página Principal**
- Slider de películas populares
- Categorías destacadas
- Barra de búsqueda prominente
- Películas trending del día

### 🔍 **Sistema de Búsqueda**
- Búsqueda instantánea mientras escribes
- Sugerencias automáticas
- Filtros avanzados:
  - 🎭 Por género
  - 📅 Por año de estreno
  - ⭐ Por calificación
  - 🎬 Por popularidad

### 📱 **Vista de Detalles**
- Información completa de la película
- Galería de imágenes
- Trailer integrado de YouTube
- Reparto principal con fotos
- Películas relacionadas
- Botón para agregar a favoritos

### ❤️ **Sistema de Favoritos**
- Agregar/quitar de favoritos
- Persistencia con localStorage
- Página dedicada a favoritos
- Contador de películas guardadas

### 🎲 **Descubrimiento**
- Película aleatoria
- Top películas por género
- Estrenos próximos
- Películas mejor valoradas

---

## 🎨 Diseño y UX

### 🌈 **Esquema de Colores**
```css
:root {
  /* Modo Claro */
  --primary-color: #e50914;
  --secondary-color: #564d4d;
  --background: #ffffff;
  --card-bg: #f8f9fa;
  --text-primary: #000000;
  
  /* Modo Oscuro */
  --dark-primary: #e50914;
  --dark-secondary: #831843;
  --dark-background: #141414;
  --dark-card: #2f2f2f;
  --dark-text: #ffffff;
}
```

### 📱 **Responsive Breakpoints**
- **Móvil:** < 768px (1-2 columnas)
- **Tablet:** 768px - 1024px (3-4 columnas)
- **Desktop:** 1024px+ (4-6 columnas)
- **4K:** > 1440px (6+ columnas)

### ✨ **Animaciones**
- Hover effects en cards
- Loading skeletons
- Transiciones suaves entre páginas
- Animaciones de entrada escalonadas

---

## ⚡ Optimizaciones de Rendimiento

- 🚀 **Lazy Loading:** Imágenes cargadas bajo demanda
- 💾 **Caché Inteligente:** Datos almacenados localmente
- 🔄 **Paginación:** Carga gradual de resultados
- ⏱️ **Debouncing:** Optimización en búsquedas
- 🖼️ **Image Optimization:** Múltiples resoluciones
- 📦 **Minificación:** CSS y JS optimizados

---

## 🎯 Características Técnicas

### 🔒 **Seguridad**
- API Key protegida
- Validación de entrada
- Sanitización de datos
- Rate limiting awareness

### ♿ **Accesibilidad**
- ARIA labels y roles
- Navegación por teclado
- Alt text en imágenes
- Contraste adecuado
- Screen reader friendly

### 🌐 **SEO y Performance**
- Meta tags dinámicos
- Schema markup para películas
- Sitemap XML
- Optimización Core Web Vitals

---

## 📊 Estados y Manejo de Errores

```javascript
// Estados de la aplicación
const AppStates = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
  NO_RESULTS: 'no_results'
};

// Manejo de errores
function handleAPIError(error) {
  if (error.status === 404) {
    showMessage('Película no encontrada');
  } else if (error.status === 429) {
    showMessage('Demasiadas peticiones, intenta más tarde');
  } else {
    showMessage('Error al cargar datos');
  }
}
```

---

## 🤝 Contribuciones

¡Tu colaboración es bienvenida! Para contribuir:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### Ideas para contribuir:
- 🎨 Mejorar diseño y UX
- 🔍 Añadir más filtros de búsqueda
- 📊 Implementar estadísticas de usuario
- 🎮 Añadir modo juego/quiz
- 🌍 Soporte multi-idioma
- 📱 PWA capabilities
- 🔔 Sistema de notificaciones

---

## 🎭 Géneros Soportados

La aplicación maneja todos los géneros de TMDB:

| Acción | Aventura | Animación | Comedia |
|--------|----------|-----------|---------|
| Crimen | Documental | Drama | Familia |
| Fantasía | Historia | Terror | Música |
| Misterio | Romance | Ciencia Ficción | Thriller |
| Guerra | Western | TV Movie | | 

---

## 📚 Recursos y Referencias

- 🔗 [TMDB API Documentation](https://developers.themoviedb.org/3)
- 🎬 [The Movie Database](https://www.themoviedb.org/)
- 🎨 [Material Design Guidelines](https://material.io/design)
- 📱 [Responsive Images Guide](https://web.dev/responsive-images/)
- ⚡ [JavaScript Performance Best Practices](https://developer.mozilla.org/en-US/docs/Web/Performance)

---

## 🏆 Características Destacadas

- **Búsqueda Inteligente:** Algoritmo de búsqueda optimizado
- **UX Fluida:** Transiciones y animaciones cuidadas  
- **Performance:** Carga rápida y eficiente
- **Responsive:** Perfecto en cualquier dispositivo
- **Accessible:** Cumple estándares WCAG
- **Modern Stack:** JavaScript ES6+ y APIs modernas

---

## 👨‍💻 Autor

**Fernando Urbano**

[![GitHub](https://img.shields.io/badge/GitHub-Fernando--urb-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fernando-urb)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ufer2025-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ufer2025)
[![Email](https://img.shields.io/badge/Email-fernando__urbano%40outlook.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fernando_urbano@outlook.com)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=Fernando-urb&color=red&style=flat-square&label=Visitas+al+repositorio"/>
</div>

<div align="center">
  
  **"El cine es un sueño que se comparte"** 🎬✨
  
</div>

---

⭐ **¡Si te gustó este proyecto, dale una estrella!** ⭐
