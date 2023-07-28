import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Div, Main } from "~/components/containers";
import SkillBubble from "~/components/skills/bubble/Bubble";
import DatabaseServer from "~/utils/db/mongodb/dbConfig";

export default component$(() => {
  const skillsStore = useStore({
    docs: undefined
  });
  const skillsResource = useResource$(async ({ track, cleanup }) => {
    DatabaseServer.getInstance();
    track(() => skillsStore.docs);
    const controller = new AbortController();
    cleanup(() => controller.abort());
    try {
      const result = await DatabaseServer.getDocuments("skills", { locale: "en" }, undefined, 5);
      return result;
    } catch (error) {
      return error;
    }
  });

  return (
    <>
      <Main>
        <h1>Skills</h1>
        <Div row>
          <Resource
            value={skillsResource}
            onPending={() => <>Loading...</>}
            onRejected={() => <>Error</>}
            onResolved={(skills: any) => {
              return skills?.map((skill: any) => {
                return (
                  <div class={"hidden"}>
                    <SkillBubble skill={skill} />
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
  title: "Skills",
  meta: [
    {
      name: "Portfolio - Skills",
      content: "List of skills"
    }
  ]
};
