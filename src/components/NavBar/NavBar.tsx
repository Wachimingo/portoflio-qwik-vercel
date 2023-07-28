import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./navbar.css?inline";

const NavBar = component$(() => {
  useStyles$(styles);
  return (
    <nav class='menu'>
      <input id='menu-toggle' type='checkbox' />
      <label class='hamburger' for='menu-toggle'>
        <div class='ham-divs' />
        <div class='ham-divs' />
        <div class='ham-divs' />
      </label>
      <div id='menu-container' class='menu-container'>
        <Link href='/' class='menu-container-link'>
          Home
        </Link>
        <Link class='menu-container-link' href='/projects'>
          Projects
        </Link>
        <Link class='menu-container-link' href='/skills'>
          Skills
        </Link>
        <Link class='menu-container-link' href='/certs'>
          Certifications
        </Link>
      </div>
    </nav>
  );
});

export default NavBar;
