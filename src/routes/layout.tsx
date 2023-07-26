import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString()
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <NavBar />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
