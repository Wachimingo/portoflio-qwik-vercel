import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LinkButton } from "~/components/buttons";
import { CertCard } from "~/components/certs";
import { Div, Main, Section } from "~/components/containers";
import SkillBubble from "~/components/skills/bubble/Bubble";
import DatabaseServer from "~/utils/db/mongodb/dbConfig";

export default component$(() => {
  const certsStore = useStore({
    docs: undefined
  });
  const skillsStore = useStore({
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
      <Main extendedClassName='hidden'>
        <Div row id='welcome' class='welcome'>
          <h1>Welcome</h1>
          <br />
          <img class='profile-pic' src='/assets/profile/profile-pic.webp' alt='profile' loading='lazy' />
        </Div>
      </Main>
      <br />
      <br />
      <br />
      <br />
      <Section id='skills_section' extendedClassName='hidden'>
        <h2>Checkout some of the skills and technologies I handle:</h2>
        <br />
        <Div row>
          <Resource
            value={skillsResource}
            onPending={() => <>Loading...</>}
            onRejected={() => <>Error</>}
            onResolved={(skills: any) => {
              return skills?.map((skill: any) => {
                return (
                  <div key={skill.name} class={"hidden"}>
                    <SkillBubble skill={skill} />
                  </div>
                );
              });
            }}
          />
        </Div>
        <br />
        <br />
        <h2>And there a plenty more you can look at here:</h2>
        <LinkButton info id='see_more_skills' link='/skills'>
          Want to see more?
        </LinkButton>
      </Section>
      <br />
      <br />
      <br />
      <Section id='cert_section' extendedClassName='hidden'>
        <h2>This is my learning path for continuos development:</h2>
        <br />
        <Div row>
          <Resource
            value={certsResource}
            onPending={() => <>Loading...</>}
            onRejected={() => <>Error</>}
            onResolved={(certs: any) => {
              return certs?.map((cert: any) => {
                return (
                  <div key={cert.name} class={"hidden"}>
                    <CertCard cert={cert} />
                  </div>
                );
              });
            }}
          />
        </Div>
        <br />
        <h2>And there a plenty more you can look at here:</h2>
        <br />
        <LinkButton info id='see_more_skills' link='/skills'>
          Want to see more?
        </LinkButton>
      </Section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Wachimingo",
  meta: [
    {
      name: "Portfolio",
      content: "Portfolio of my many projects using different tecnologies"
    }
  ]
};
