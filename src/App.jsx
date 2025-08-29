import React from "react";
import "./App.css";

// Importa tus imágenes
import perroImg from './assets/perro.jpg'; // Asegúrate que el nombre del archivo sea perro.jpg
import gatoImg from './assets/gato.jpg';   // Asegúrate que el nombre del archivo sea gato.jpg
import mixImg from './assets/mix.jpg';     // Asegúrate que el nombre del archivo sea mix.jpg

function App() {
  return (
    <div className="font-sans">
      {/* Header / Navbar */}
      <header>
        <nav className="container">
          <h1 className="logo">🐾 Dieta BARF</h1>
          <ul className="nav-links">
            <li><a href="#beneficios">Beneficios</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title">Alimentación Natural para Perros y Gatos</h2>
        <p className="hero-subtitle">
          Con la dieta BARF tu mascota tendrá más energía, mejor salud y una vida más feliz.
        </p>
        <a href="#contacto" className="hero-button">
          ¡Quiero más información!
        </a>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="beneficios-section">
        <h3 className="section-title">✨ Beneficios de la dieta BARF</h3>
        <div className="beneficios-grid">
          <div className="beneficio-card">
            <span className="beneficio-icon">🦷</span>
            <h4 className="beneficio-text">Dientes y encías sanos</h4>
          </div>
          <div className="beneficio-card">
            <span className="beneficio-icon">🛡️</span>
            <h4 className="beneficio-text">Mejora el sistema inmune</h4>
          </div>
          <div className="beneficio-card">
            <span className="beneficio-icon">✨</span>
            <h4 className="beneficio-text">Pelo más brillante</h4>
          </div>
          <div className="beneficio-card">
            <span className="beneficio-icon">⚖️</span>
            <h4 className="beneficio-text">Control de peso</h4>
          </div>
          <div className="beneficio-card">
            <span className="beneficio-icon">🍖</span>
            <h4 className="beneficio-text">100% Natural</h4>
          </div>
          <div className="beneficio-card">
            <span className="beneficio-icon">❤️</span>
            <h4 className="beneficio-text">Más energía y vitalidad</h4>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="productos-section">
        <h3 className="section-title">🥩 Nuestros Productos</h3>
        <div className="productos-grid">
          <div className="producto-card">
            <img src={perroImg} alt="Perros" className="producto-img" /> {/* Usando la imagen importada */}
            <h4 className="producto-title">BARF para Perros</h4>
            <p className="producto-desc">Nutrición completa y balanceada para todas las razas.</p>
          </div>
          <div className="producto-card">
            <img src={gatoImg} alt="Gatos" className="producto-img" /> {/* Usando la imagen importada */}
            <h4 className="producto-title">BARF para Gatos</h4>
            <p className="producto-desc">Proteínas y vitaminas esenciales para felinos felices.</p>
          </div>
          <div className="producto-card">
            <img src={mixImg} alt="Natural" className="producto-img" /> {/* Usando la imagen importada */}
            <h4 className="producto-title">Mix Natural</h4>
            <p className="producto-desc">Mezcla fresca de vegetales y carnes de alta calidad, ¡con sabor de la región Huilense!</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="contacto-section">
        <h3 className="section-title">📲 Contáctanos 3107610211</h3>
        <p className="contacto-text">Haz tu pedido por WhatsApp y dale a tu mascota lo mejor.</p>
        <a href="https://wa.me/573107610211" target="_blank" rel="noopener noreferrer" className="contacto-button">
          Enviar mensaje
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Dieta BARF - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;