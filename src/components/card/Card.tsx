import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./card.css?inline";
export const Card = component$(({ extendedClassName, ...props }: any) => {
  useStylesScoped$(styles);
  return (
    <div class={`card ${extendedClassName ?? ""}`} {...props}>
      <div class='card-container'>
        <Slot />
      </div>
    </div>
  );
});
export default Card;
