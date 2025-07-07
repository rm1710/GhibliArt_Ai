<h1 align="center">GhibliArt</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/rm1710/ghibliart?color=56BEB8">
  <img alt="Github language count" src="https://img.shields.io/github/languages/count/rm1710/ghibliart?color=56BEB8">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/rm1710/ghibliart?color=56BEB8">
  <img alt="License" src="https://img.shields.io/github/license/rm1710/ghibliart?color=56BEB8">
</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0;
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/rm1710" target="_blank">Author</a>
</p>
<br>
<h1 align="center">Images</h1>
<img src="GhibliArt_Frontend/src/assets/UI1.png />
<img src="GhibliArt_Frontend/src/assets/UI2.png />
<br>

## :dart: About ##

GhibliArt is an AI-powered web application that generates beautiful Studio Ghibli-inspired artwork using advanced image generation technology. Users can create stunning anime-style art by providing text descriptions or uploading photos to be transformed into Ghibli-style masterpieces. The application features a modern React frontend and a robust Spring Boot backend integrated with Stability AI's image generation API.

## :sparkles: Features ##

:heavy_check_mark: **Text-to-Image Generation** - Create Ghibli-style artwork from text descriptions
:heavy_check_mark: **Image-to-Image Transformation** - Upload photos and transform them into Ghibli-style art
:heavy_check_mark: **Multiple Ghibli Styles** - Choose from various Studio Ghibli movie styles
:heavy_check_mark: **Real-time Generation** - AI-powered artwork creation with Stability AI
:heavy_check_mark: **Responsive Design** - Beautiful UI that works on desktop and mobile
:heavy_check_mark: **Download Generated Art** - Save your created artwork to your device
:heavy_check_mark: **Interactive Gallery** - Browse and view generated artworks

## :rocket: Technologies ##

### Frontend
- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling Framework
- [Lucide React](https://lucide.dev/) - Icon Library
- [Axios](https://axios-http.com/) - HTTP Client

### Backend
- [Spring Boot](https://spring.io/projects/spring-boot) - Java Framework
- [Spring Cloud OpenFeign](https://spring.io/projects/spring-cloud-openfeign) - HTTP Client
- [Maven](https://maven.apache.org/) - Build Tool
- [Lombok](https://projectlombok.org/) - Java Library
- [Stability AI API](https://stability.ai/) - Image Generation

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have the following installed:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [Java](https://www.oracle.com/java/technologies/downloads/) (Java 17 or higher)
- [Maven](https://maven.apache.org/) (for building the backend)
- [Stability AI API Key](https://stability.ai/) (for image generation)

## :checkered_flag: Starting ##

### Backend Setup

```bash
# Clone this project
$ git clone https://github.com/rm1710/ghibliart

# Access the backend folder
$ cd ghibliart/GhibliArt_Backend

# Configure your Stability AI API key
# Create application.properties in src/main/resources/ and add:
# stability.api.key=your_stability_ai_api_key_here

# Build and run the Spring Boot application
$ ./mvnw spring-boot:run

# The backend will be running at http://localhost:8080
```

### Frontend Setup

```bash
# Access the frontend folder
$ cd ghibliart/GhibliArt_Frontend

# Install dependencies
$ npm install

# Start the development server
$ npm run dev

# The frontend will be running at http://localhost:5174
```

### Production Build

```bash
# Build the frontend for production
$ cd GhibliArt_Frontend
$ npm run build

# Build the backend for production
$ cd GhibliArt_Backend
$ ./mvnw clean package
```

## :memo: License ##

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

Made with :heart: by <a href="https://github.com/rm1710" target="_blank">rm1710</a>

&#xa0;

<a href="#top">Back to top</a>

