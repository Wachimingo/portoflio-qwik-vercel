import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./button.css?inline";

export const LinkButton = component$(({ link, info, error, success, extendedClass, ...props }: any): any => {
  useStylesScoped$(styles);
  let type = "success";
  if (success) type = "success";
  if (info) type = "info";
  if (error) type = "error";

  return (
    <a class={`button ${type} ${extendedClass ?? ""}`} href={link} {...props}>
      <Slot />
    </a>
  );
});

export default LinkButton;
