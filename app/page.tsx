import { Header } from "@/components/layout/header/header";
import { Hero } from "@/components/sections/hero/hero";
import { Project } from "@/components/sections/project/project";
import { Projects } from "@/components/sections/projects/projects";
import { About } from "@/components/sections/about/about";
import { Contacts } from "@/components/sections/contacts/contacts";
import { Footer } from "@/components/layout/footer/footer";
// import { Preloader } from "@/src/preloader/preloader";
// import styles from "./page.module.css";
// import cn from "classnames";

export default function Home() {
  return (
    <>

      <Header />

      <main>
        <h1 className="visually-hidden">Проекты компании Сибур</h1>
        
        <Hero /> {/* TODO: сделать */}
        
        <Project /> {/* TODO: сделать */}

        <About /> {/* TODO: сделать */}

        <Projects /> {/* TODO: сделать */}

        <Contacts /> {/* TODO: сделать */}
        
      </main>

      <Footer />

      {/* <Preloader /> */}
    </>
  );
}