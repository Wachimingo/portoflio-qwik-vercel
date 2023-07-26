import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./container.css?inline";

export const Div = component$(({ children, row, extendedClassName, ...props }: any) => {
  useStylesScoped$(styles);
  return (
    <div class={`container-flex ${row ? "container-row" : "container-column"} ${extendedClassName ?? ""}`} {...props}>
      <Slot />
    </div>
  );
});

export default Div;
