import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import { Card } from "../card";
import styles from "./certCard.css?inline";
export const CertCard = component$(({ cert, extendedClassName }: any) => {
  useStylesScoped$(styles);
  return (
    <Card key={cert.name} extendedClassName={extendedClassName ?? ""}>
      <img class='cert-card-image' src={cert.icon ? cert.icon : "/assets/skills/default.webp"} alt={cert.name} />
      <h3 class='cert-card-title notranslate'>{cert.name}</h3>
      <Slot />
    </Card>
  );
});

export default CertCard;
