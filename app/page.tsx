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
import { Cookies } from "@/ui-kit/cookies/cookies";


// [ ]: наведение, фокус кнопок, ссылок и прочей хуеты
// [ ]: у слайдера проектов высоту задать одинаковую (сбилась)
// [ ]: донаполнить контент данными с макета (текст, изображения)
// [ ]: поправить стили на резинках

// [v]: в контактах нужно обернуть каждый бейдж в ссылку, сейчас только текст
// [v]: разобраться с бейджами hero (прозрачность надо как-то убрать у чисел)
// [v]: перевести в package.json версии в стабильные лямбды (~)
// [v]: задействовать Image компонент
// [v]: якоря повесить
// [ ]: вынести декор в отдельный файл css
// [ ]: разобраться со шрифтом
// [ ]: нужно продумать логику <br> в текстах
// [ ]: имена переменным норм назначить, добавить отсутствующие параметры (заголовок где-то был не тот что на макете)

// [ ]: рефакторинг стилей, разметки

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

        <Contacts />
        
      </main>

      <Footer />

      <Modal>
        <Form />
      </Modal>

      <Cookies isOpen={true}/>

      {/* <Preloader /> */}
    </>
  );
}