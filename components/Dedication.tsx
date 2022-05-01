import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { promises as fs } from "fs";
import path from "path";
import styles from "../styles/ded.module.sass"

const Dedication = ({ source }: { source: any }) => {
	return (
		<>
			<MDXRemote {...source} className={styles.mdx} />
		</>
	);
};

export async function getStaticProps() {
	const mdPath = path.join(process.cwd(), "public/markdown/sauce.mdx");
	const rawMarkdown = await fs.readFile(mdPath, "utf8");
	const postMd = await serialize(rawMarkdown);

	return { props: { source: postMd } };
}

export default Dedication;
