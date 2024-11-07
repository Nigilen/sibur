import { Header } from "@/components/layout/header/header";
import { Hero } from "@/components/sections/hero/hero";
import { Project } from "@/components/sections/project/project";
import { Projects } from "@/components/sections/projects/projects";
import { About } from "@/components/sections/about/about";
import { Contacts } from "@/components/sections/contacts/contacts";
import { Footer } from "@/components/layout/footer/footer";
// import { Cookies } from "@/ui-kit/cookies/cookies";
import styles from "./page.module.css";
// import { Modal } from "@/ui-kit/modal/modal";
import { Form } from "@/ui-kit/form/form";
import { PastLesson } from "@/src/components/sections/past-lesson/past-lesson";
import { getGallery, getProjects, getSettings } from "@/src/api/internal";
import { ModalReact } from "@/ui-kit/modalR/modal-react";

export default async function Home() {
  

  let settings = null;
  let gallery = null;
  let projects = null;
  
  try {
    settings = await getSettings().then(data => data.data[0]);
    gallery = await getGallery().then(data => data.data);
    projects = await getProjects().then(data => data.data);
  } catch (e) {
    console.error(e);
  }

  return (
    <>
      <Header />

      <main className={styles.main}>
        <h1 className="visually-hidden">Проекты компании Сибур</h1>
        
        <Hero />
        
        <Project />

        <About />

        <Projects projects={projects} />

        <PastLesson dataSlider={gallery} />

        <Contacts tg_sibur={settings.tg_sibur} tg_career={settings.tg_career} vk_sibur={settings.vk} />
        
      </main>

      <Footer policy={settings.policy} />

      {/* <Modal>
        <Form policy={settings.policy} participation={settings.participation} />
      </Modal> */}

      <ModalReact>
        <Form policy={settings.policy} participation={settings.participation} />
      </ModalReact>

      {/* <Cookies isOpen={true}/> */}
    </>
  );
}