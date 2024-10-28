import { Header } from "@/components/layout/header/header";
import { Hero } from "@/components/sections/hero/hero";
import { Project } from "@/components/sections/project/project";
import { Projects } from "@/components/sections/projects/projects";
import { About } from "@/components/sections/about/about";
import { Contacts } from "@/components/sections/contacts/contacts";
import { Footer } from "@/components/layout/footer/footer";
// import { Preloader } from "@/src/preloader/preloader";
import styles from "./page.module.css";
import { Modal } from "@/ui-kit/modal/modal";
import { Form } from "@/ui-kit/form/form";
// import { PastLesson } from "@/components/sections/past-lesson/past-lesson";
// import { Cookies } from "@/ui-kit/cookies/cookies";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <h1 className="visually-hidden">Проекты компании Сибур</h1>
        
        <Hero /> 
        
        <Project />

        <About />

        <Projects />

        {/* <PastLesson /> */}

        <Contacts />
        
      </main>

      <Footer />

      <Modal>
        <Form />
      </Modal>

      {/* <Cookies isOpen={true}/> */}

      {/* <Preloader /> */}
    </>
  );
}