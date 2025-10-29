import "./App.css";

function App() {
  return (
    <>
      <main>
        <img src="./src/assets/images/logo.svg" alt="Ping logo" className="logo" />

        <p className="launching">We are launching <span className="soon">soon!</span>
        </p>

        <p className="subscribe">Subscribe and get notified</p>

        <input type="email" placeholder="Your email address" />
        <button type="submit">Notify Me</button>

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
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Candice</a>.
      </footer>
    </>
  );
}

export default App;
