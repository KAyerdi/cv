import Image from "next/image";
import LangButton from "./langButton";
import styles from "./sideData.module.css";

const SideData = ({ interests, intereses, setLang, lang }) => {

  /* English */
  return lang == "en" ? (
    <div className={styles.sideContainer}>
      <div className={styles.containerProfilePicture}>

        <div className={styles.frontPicture}>
          <Image
            priority
            src="/images/profilePic.jpeg"
            className={styles.profilePicture}
            height={300}
            width={300}
            alt={"Kevin Ayerdi profilefront pic"}
          />
        </div>


        <div className={styles.backPicture}>
          <Image
            priority
            src="/images/profileBack.png"
            className={styles.secondProfilePicture}
            height={300}
            width={300}
            alt={"Kevin Ayerdi profileback pic"}
          />
        </div>
      </div>

      <section className={styles.heading}>
        <h1 className={styles.headingTitle}>Kevin Ayerdi</h1>
        <p>Web Developer · Full Stack</p>
        <LangButton lang={lang} setLang={setLang} />
        <p className={styles.interestDescription}>{interests}</p>
      </section>

      <section className={styles.section}>
        <p>
          <b className={styles.boldPersonalInfo}>Location</b>
          <br />
          Buenos Aires - Salto, Argentina
        </p>
        <p>
          <b className={styles.boldPersonalInfo}>Phone</b>
          <br />
          <a href="tel:+5492474460086" className={styles.linkedInfo}>
            (+54) 92474460086
          </a>
        </p>
        <p>
          <b className={styles.boldPersonalInfo}>Email</b>
          <br />
          <p>
            kevin.ayerdi@hotmail.com
          </p>
        </p>
        <div className={styles.socialLinksContainer}>
          <a href="https://github.com/KAyerdi" target="_blank">
            <Image
              priority
              src="/images/github.svg"
              height={24}
              width={24}
              alt={"github"}
            />
          </a>
          <a href="https://www.linkedin.com/in/kevin-perticarari-ayerdi-94968412b/" target="_blank">
            <Image
              priority
              src="/images/linkedIn.svg"
              height={24}
              width={24}
              alt={"linkedIn"}
            />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.titleInfo}>Languages</h2>
        <p style={{cursor: "pointer"}} onClick={() => setLang("en")}>English</p>
        <p style={{cursor: "pointer"}} onClick={() => setLang("es")}>Spanish</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.titleInfo}>Skills</h2>
        <p>ReactJS</p>
        <p>NextJS</p>
        <p>JavaScript</p>
        <p>Typescript</p>
        <p>Figma
          <a className={styles.cvButton} href='https://www.figma.com/files/user/1168325930890384448?fuid=1168325930890384448' target="_blank">
          CV
          </a>
        </p>
        <p>HTML / CSS</p>
        <p>Git</p>
        <p>Agile and SCRUM methodologies</p>
      </section>
    </div>

  ) : (

    /* Español */
    <div className={styles.sideContainer}>
      <div className={styles.containerProfilePicture}>
        <div className={styles.frontPicture}>
            <Image
              priority
              src="/images/profilePic.jpeg"
              className={styles.profilePicture}
              height={300}
              width={300}
              alt={"Kevin Ayerdi profile pic"}
            />
        </div>
      </div>

      <section className={styles.heading}>
        <h1 className={styles.headingTitle}>Kevin Ayerdi</h1>
        <p>Web Developer · Full Stack</p>
        <LangButton lang={lang} setLang={setLang} />
        <p className={styles.interestDescription}>{intereses}</p>
      </section>

      <section className={styles.section}>
        <p>
          <b className={styles.boldPersonalInfo}>Locación</b>
          <br />
          Buenos Aires - Salto, Argentina
        </p>
        <p>
          <b className={styles.boldPersonalInfo}>Telefono</b>

          <br />
          <a href="tel:+5492474460086" className={styles.linkedInfo}>
            (+54) 92474460086
          </a>
        </p>
        <p>
          <b className={styles.boldPersonalInfo}>Email</b>
          <br />
          <p>
            kevin.ayerdi@hotmail.com
          </p>
        </p>
        <div className={styles.socialLinksContainer}>
          <a href="https://github.com/KAyerdi" target="_blank" className={styles.socialButton}>
            <Image
              priority
              src="/images/github.svg"
              height={24}
              width={24}
              alt={"github"}
            />
          </a>
          <a href="https://www.linkedin.com/in/kevin-perticarari-ayerdi-94968412b/" target="_blank" className={styles.socialButton}>
            <Image
              priority
              src="/images/linkedIn.svg"
              height={24}
              width={24}
              alt={"linkedIn"}
            />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.titleInfo}>Lenguajes</h2>
        <p style={{cursor: "pointer"}} onClick={() => setLang("en")}>Ingles</p>
        <p style={{cursor: "pointer"}} onClick={() => setLang("es")}>Español</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.titleInfo}>Skills</h2>
        <p>ReactJS</p>
        <p>NextJS</p>
        <p>JavaScript</p>
        <p>Typescript</p>
        <p>Figma 
          <a className={styles.cvButton} href='https://www.figma.com/file/22dODX0ZQ8vu1JZhtCQM5y/CV?type=design&node-id=576%3A149&mode=design&t=G0jlLjheQZ8cwVvm-1' target="_blank">
            CV
          </a>
        </p>
        <p>HTML / CSS</p>
        <p>Git</p>
        <p>Agile y SCRUM methodologies</p>
      </section>
    </div>
  );
};

export default SideData;
