import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./navbar.css?inline";

const NavBar = component$(() => {
  useStylesScoped$(styles);
  return (
    <nav class='menu'>
      <input id='menu-toggle' type='checkbox' />
      <label class='hamburger' for='menu-toggle'>
        <div class='ham-divs' />
        <div class='ham-divs' />
        <div class='ham-divs' />
      </label>
      <div id='menu-container' class='menu-container'>
        <a class='menu-container-link' href='/'>
          Home
        </a>
        <a class='menu-container-link' href='/projects'>
          Projects
        </a>
        <a class='menu-container-link' href='/skills'>
          Skills
        </a>
        <a class='menu-container-link' href='/certs'>
          Certifications
        </a>
      </div>
    </nav>
  );
});

export default NavBar;
