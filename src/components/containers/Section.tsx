import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./container.css?inline";

export const Section = component$(({ row, extendedClassName, ...props }: any) => {
  useStylesScoped$(styles);
  return (
    <section class={`container-flex ${row ? "container-row" : "container-column"} ${extendedClassName ?? ""}`} {...props}>
      <Slot />
    </section>
  );
});
export default Section;
