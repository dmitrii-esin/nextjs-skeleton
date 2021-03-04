import styles from "./page-manager.module.scss";

interface Props {
    children: React.ReactNode;
}

export const PageManager: React.FC<Props> = (props) => {
    return <div className={styles.container}>{props.children}</div>;
};
