import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export const Footer = component$(() => {
  useStylesScoped$(styles);
  return (
    <footer class='footer-wrapper'>
      <div class='footer-container'>
        <section class='footer-links'>
          <a href='https://www.facebook.com/halex007/' target='_blank' rel='noreferrer' role='button'>
            Facebook
          </a>
          <a href='https://www.linkedin.com/in/joshua-herrera-755143a7/' target='_blank' rel='noreferrer' role='button'>
            LinkedIn
          </a>
          <a href='https://github.com/Wachimingo' target='_blank' rel='noreferrer' role='button'>
            Github
          </a>
        </section>
        <a href='mailto: joshua.herrera2@outlook.com'>joshua.herrera2@outlook.com</a>
      </div>
    </footer>
  );
});

export default Footer;
