import Head from "next/head";
import { favicon } from "common/constants";
import { Header } from "components/header";
import { BreadCrumbs } from "components/breadcrumbs";
import styles from "./page-default.module.scss";

interface IProps {
    children: React.ReactNode;
}

export const PageDefault: React.FC<IProps> = (props) => {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href={favicon} />
                <title>Red Cross Application</title>
            </Head>
            <Header />
            <BreadCrumbs />
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};
