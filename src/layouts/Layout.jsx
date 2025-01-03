import { FaSun, FaMoon } from "react-icons/fa6";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const [theme, setTheme] = useState(getTheme());

  function getTheme() {
    if (localStorage.getItem("theme") === null) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return localStorage.getItem("theme");
  }

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  }

  useEffect(
    function () {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    },
    [theme]
  );

  return (
    <div>
      <header className="is-flex is-justify-content-flex-end">
        <button className="button" onClick={handleTheme}>
          <span className="icon">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </span>
        </button>
      </header>

      <main>
        <div className="hero is-fullheight">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="box is-flex is-flex-direction-column is-align-items-center mt-6  has-shadow">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Layout;
