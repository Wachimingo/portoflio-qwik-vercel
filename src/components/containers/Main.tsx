import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./container.css?inline";

export const Main = component$(({ row, extendedClassName, ...props }: any) => {
  useStylesScoped$(styles);
  return (
    <main class={`container-flex ${row ? "container-row" : "container-column"} ${extendedClassName ?? ""}`} {...props}>
      <Slot />
    </main>
  );
});

export default Main;
