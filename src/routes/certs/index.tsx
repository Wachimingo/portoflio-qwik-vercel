import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CertCard } from "~/components/certs";
import { Div, Main } from "~/components/containers";
import DatabaseServer from "~/utils/db/mongodb/dbConfig";

export default component$(() => {
  const certsStore = useStore({
    docs: undefined
  });
  const certsResource = useResource$(async ({ track, cleanup }) => {
    DatabaseServer.getInstance();
    track(() => certsStore.docs);
    const controller = new AbortController();
    cleanup(() => controller.abort());
    try {
      const result = await DatabaseServer.getDocuments("certifications", { locale: "en" }, undefined, 5);
      return result;
    } catch (error) {
      return error;
    }
  });

  return (
    <>
      <Main>
        <h1>Certifications</h1>
        <Div row>
          <Resource
            value={certsResource}
            onPending={() => <>Loading...</>}
            onRejected={(error) => {
              console.log(error);
              return <>Error</>;
            }}
            onResolved={(certs: any) => {
              return certs?.map((cert: any) => {
                return (
                  <div class={"hidden"}>
                    <CertCard cert={cert} />
                  </div>
                );
              });
            }}
          />
        </Div>
      </Main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Certifications",
  meta: [
    {
      name: "Portfolio - Certifications",
      content: "List of Certifications"
    }
  ]
};
