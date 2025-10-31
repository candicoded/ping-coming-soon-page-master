import "./App.css";

function App() {
  const validateForm = (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('input[type="email"]');
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      emailInput.classList.add("error");
      if (!document.querySelector(".error-message")) {
        const errorMessage = document.createElement("p");
        errorMessage.className = "error-message";
        errorMessage.textContent = "Please provide a valid email address";
        emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);
      }
    } else {
      emailInput.classList.remove("error");
      const existingErrorMessage = document.querySelector(".error-message");
      if (existingErrorMessage) {
        existingErrorMessage.remove();
      }
      // Here you can add further actions for a valid email, like sending it to a server
      alert("Thank you for subscribing!");
      emailInput.value = ""; // Clear the input field
    }
  }

  return (
    <>
      <main>
        <img src="./src/assets/images/logo.svg" alt="Ping logo" className="logo" />

        <p className="launching">We are launching <span className="soon">soon!</span>
        </p>

        <p className="subscribe">Subscribe and get notified</p>

        <input type="email" placeholder="Your email address..." />
        <button type="submit" onClick={validateForm}>Notify Me</button>

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
