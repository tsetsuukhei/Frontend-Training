import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Section } from "../components/Section";
import Icon from "../components/Icon";
import styles from "./index.module.css";
import CardPlain from "../components/Cards/CardPlain";
import List from "../components/List";

const sectionOneCards = [
  // {
  //   title: "Эхний картын гарчиг",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  //   to: "/",
  // },
  // {
  //   title: "Дараагийн картын гарчиг",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  //   to: "/",
  // },
  // {
  //   title: "Гурав дахь картын гарчиг",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  //   to: "/",
  // },
];

const sectionTwoCards = [
  {
    title: "Fast, flexible, and powerful search",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor.",
    to: "/",
    icon: "search",
  },
  {
    title: "Fast, flexible, and powerful search",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor.",
    to: "/",
    icon: "search",
  },
  {
    title: "Fast, flexible, and powerful search",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor.",
    to: "/",
    icon: "search",
  },
];
const sectionThreeCards = [
  {
    title: "Fast, flexible, and powerful search",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor.",
    to: "/",
    icon: "search",
  },
  {
    title: "Fast, flexible, and powerful search",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor.",
    to: "/",
    icon: "search",
  },
  {
    title: "Fast, flexible, and powerful search",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor.",
    to: "/",
    icon: "search",
  },
  {
    title: "Fast, flexible, and powerful search",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor.",
    to: "/",
    icon: "search",
  },
  {
    title: "Fast, flexible, and powerful search",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor.",
    to: "/",
    icon: "search",
  },
];

const sectionFourItems = [
  {
    title: "ТАНИЛЦУУЛГА",
    to: "/",
    icon: "check-circle",
  },
  {
    title: "ХЭРХЭН ЭХЛЭХ ВЭ?",
    to: "/",
    icon: "check-circle",
  },
  {
    title: "ХЭРХЭН АЖИЛЛАХ ВЭ?",
    to: "/",
    icon: "check-circle",
  },
  {
    title: "СИСТЕМИЙН МОДУЛЬ",
    to: "/",
    icon: "search",
  },
  {
    title: "ТҮГЭЭМЭЛ АСУУЛТ, ХАРИУЛТ",
    to: "/",
    icon: "search",
  },
  {
    title: "ХУУЛЬ ЭРХ ЗҮЙ",
    to: "/",
    icon: "search",
  },
  {
    title: "ТОХИРГОО",
    to: "/",
    icon: "search",
  },
  {
    title: "ТАЙЛАН",
    to: "/",
    icon: "search",
  },
];

const sectionFiveItems = [
  {
    title: "ВЕБ СЕРВИС",
    to: "/",
    icon: "check-circle",
  },
  {
    title: "ҮНДСЭН ОЙЛГОЛТ",
    to: "/",
    icon: "check-circle",
  },
  {
    title: "ХЭРХЭН ЭХЛЭХ ВЭ?",
    to: "/",
    icon: "check-circle",
  },
  {
    title: "НУУЦЛАЛ, ЗӨВШӨӨРӨЛ",
    to: "/",
    icon: "check-circle",
  },
  {
    title: "НЭР ТОМЪЁО",
    to: "/",
    icon: "check-circle",
  },
  {
    title: "ӨГӨГДЛИЙН ТӨРӨЛ",
    to: "/",
    icon: "check-circle",
  },
  {
    title: "МЕТА ДАТАТАЙ АЖИЛЛАХ",
    to: "/",
    icon: "check-circle",
  },
  {
    title: "ВЕБ СЕРВИС ТЕСТЛЭХ",
    to: "/",
    icon: "check-circle",
  },
];

function Section1() {
  return (
    <>
      <Section
        subtitle="subtitle"
        title="Дотоод Аудитын Удирдлагын Мэдээллийн Систем (ДАУМС)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        className="padding-vert--xl"
      >
        <Link to="/">
          <button className="button button--primary button--lg">
            Системд нэвтрэх →
          </button>
        </Link>
      </Section>
      <section>
        <div className="container">
          <div className={styles["card-grid-3"]}>
            {sectionOneCards.map((item, index) => {
              return (
                <CardPlain
                  key={index}
                  title={item.title}
                  description={item.description}
                  to={item.to}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Section2() {
  return (
    <>
      <Section
        subtitle="Танилцуулга"
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        className="padding-vert--xl"
        imgLeft
      >
        <Link to="/">
          <button className="button button--outline button--lg">
            Цааш үзэх →
          </button>
        </Link>
      </Section>
      <section>
        <div className="container">
          <div className={styles["card-grid-3"]}>
            {sectionTwoCards.map((i, index) => {
              return (
                <CardPlain
                  key={index}
                  title={i.title}
                  description={i.description}
                  icon={i.icon}
                  to={i.to}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Section3() {
  return (
    <>
      <Section
        subtitle="Системийн онцлог"
        title="Дотоод Аудитын Удирдлагын Мэдээллийн Систем (ДАУМС)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        className="padding-vert--xl"
        imgLeft
      >
        <Link to="/">
          <button className="button button--outline button--lg">
            Цааш үзэх →
          </button>
        </Link>
      </Section>
      <section>
        <div className="container">
          <div className={styles["card-grid-5"]}>
            {sectionThreeCards.map((i, index) => {
              return (
                <CardPlain
                  key={index}
                  title={i.title}
                  description={i.description}
                  icon={i.icon}
                  to={i.to}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Section4() {
  return (
    <>
      <Section
        subtitle="Тусламж"
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        className="padding-vert--xl"
        imgLeft
      >
        <Link to="/">
          <button className="button button--outline button--lg">
            Цааш үзэх →
          </button>
        </Link>
      </Section>
      <section>
        <div className="container">
          <div className={styles["list-container"]}>
            {sectionFourItems.map((i, index) => {
              return (
                <List key={index} title={i.title} to={i.to} icon={i.icon} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Section5() {
  return (
    <>
      <Section
        subtitle="Хөгжүүлэлт интеграл"
        title="Дотоод Аудитын Удирдлагын Мэдээллийн Систем (ДАУМС)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        className="padding-vert--xl"
      >
        <Link to="/">
          <button className="button button--primary button--lg">
            Цааш үзэх →
          </button>
        </Link>
      </Section>
      <section>
        <div className="container">
          <div className={styles["list-container"]}>
            {sectionFiveItems.map((i, index) => {
              return (
                <List key={index} title={i.title} to={i.to} icon={i.icon} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <Layout title="Dummy Page" description="Description of the dummy page">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      <div className="container">
        <div className={styles["contact-container"]}>
          <div className={styles["address"]}>
            <h2>Холбоо барих</h2>
            <h5 className={styles["title"]}>Хаяг</h5>
            <p className={styles["description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis{" "}
            </p>
            <h5 className={styles["title"]}>Утас</h5>
            <p>51-267468</p>
            <h5 className={styles["title"]}>Факс</h5>
            <p>51-267468</p>
          </div>
          <div className={styles["web"]}>
            <h5 className={styles["title"]}>Веб хаяг</h5>
            <a href="www.mof.gov.mn">www.mof.gov.mn</a>
            <h5 className={styles["title"]}>Мэйл хаяг</h5>
            <a href="info@mof.gov.mn">info@mof.gov.mn</a>
            <h5 className={styles["title"]}>Нийгмийн сүлжээ</h5>
            <p className={styles["description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vulputate convallis imperdiet. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
