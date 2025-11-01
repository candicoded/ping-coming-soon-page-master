import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please provide a valid email address");
    } else {
      setError("");
      alert("Thank you for subscribing!");
      setEmail(""); // clear input
    }
  };

  return (
    <>
      <main>
        <img
          src="./src/assets/images/logo.svg"
          alt="Ping logo"
          className="logo"
        />

        <p className="launching">
          We are launching <span className="soon">soon!</span>
        </p>

        <p className="subscribe">Subscribe and get notified</p>

        <form onSubmit={validateForm} noValidate>
          <input
            id="email"
            type="email"
            placeholder="Your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? "error" : ""}
            aria-invalid={!!error}
            aria-describedby={error ? "email-error" : undefined}
          />
          {error && (
            <p id="email-error" className="error-message" aria-live="polite">
              {error}
            </p>
          )}
          <button type="submit">Notify Me</button>
        </form>

        <img
          src="./src/assets/images/illustration-dashboard.png"
          alt="Illustration of a dashboard"
          className="dashboard-illustration"
        />

        <div className="social-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </main>

      <footer>
        <p>&copy; Copyright Ping. All rights reserved.</p>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Candice</a>.
      </footer>
    </>
  );
}

export default App;
