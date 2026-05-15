import { NavLink } from "react-router";
import { useAuth } from "../store/authStore";

function Home() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <p className="hero-label">Welcome to MyBlog</p>
        <h1 className="hero-title">
          Share Your Ideas.<br />
          Inspire the World.
        </h1>
        <p className="hero-subtitle">
          A simple space for writers, thinkers, and creators to publish stories
          that matter. Write freely, read endlessly.
        </p>
        {!isAuthenticated && (
          <div className="hero-actions">
            <NavLink to="/register" className="hero-btn-primary">
              Get Started
            </NavLink>
            <NavLink to="/login" className="hero-btn-secondary">
              Sign In
            </NavLink>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <span className="feature-icon">✍️</span>
          <h3 className="feature-title">Write Articles</h3>
          <p className="feature-desc">
            Craft and publish your thoughts with our clean, distraction-free editor.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">📖</span>
          <h3 className="feature-title">Read & Explore</h3>
          <p className="feature-desc">
            Discover articles across technology, programming, AI, and web development.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">💬</span>
          <h3 className="feature-title">Engage & Discuss</h3>
          <p className="feature-desc">
            Comment on articles, share feedback, and connect with fellow readers.
          </p>
        </div>
      </section>

      {/* Motto/Quote */}
      <section className="motto-section">
        <blockquote className="motto-quote">
          "Every great story starts with a single word."
        </blockquote>
        <p className="motto-author">— MyBlog</p>
      </section>
    </div>
  );
}

export default Home;