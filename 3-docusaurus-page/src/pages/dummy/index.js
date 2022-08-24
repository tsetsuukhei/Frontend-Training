import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./Dummy.module.css";
import { Section } from "../../components/Section";
import CardPlain from "../../components/Cards/CardPlain";
import Link from "@docusaurus/Link";
import Icon from "../../components/Icon";

const sectionOneCards = [
	{
		title: "Эхний картын гарчиг",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		to: "/",
	},
	{
		title: "Дараагийн картын гарчиг",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		to: "/",
	},
	{
		title: "Гурав дахь картын гарчиг",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		to: "/",
	},
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

function Section1() {
	return (
		<>
			<Section
				subtitle='subtitle'
				title='Дотоод Аудитын Удирдлагын Мэдээллийн Систем (ДАУМС)'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				className='padding-vert--xl'>
				<Link to='/'>
					<button className='button button--primary button--lg'>
						Цааш үзэх →
					</button>
				</Link>
			</Section>
			<section>
				<div className='container'>
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
				subtitle='subtitle'
				title='Дотоод Аудитын Удирдлагын Мэдээллийн Систем (ДАУМС)'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				className='padding-vert--xl'
				imgLeft>
				<Link to='/'>
					<button className='button button--outline button--lg'>
						Цааш үзэх →
					</button>
				</Link>
			</Section>
			<section>
				<div className='container'>
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

export default function Dummy() {
	return (
		<Layout title='Dummy Page' description='Description of the dummy page'>
			<Section1 />
			<Section2 />
			<div className='container'>
				<Icon
					name='chevron-down'
					style={{ width: 30, height: 30 }}
					color='black'
				/>
			</div>
			{/* Icon component ashiglasniig haruulav */}
		</Layout>
	);
}
