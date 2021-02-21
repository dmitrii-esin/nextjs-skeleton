import Divider from "@material-ui/core/Divider";
import styles from "./product.module.scss";

const Product: React.FC = () => {
    return (
        <>
            <Divider />
            <div className={styles.container}>Product page</div>
        </>
    );
};

export default Product;
