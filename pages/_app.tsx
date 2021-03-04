import Error from "next/error";
import { IIndexPageType } from "pages/index";
import { ICartPageType } from "pages/cart";
import { IProductPageType } from "pages/posts/[postId]";
import "styles/globals.scss";

type IPageWithLayoutType = ICartPageType | IIndexPageType | IProductPageType;
interface IProps {
    Component: IPageWithLayoutType;
    pageProps: any;
}

const App: React.FC<IProps> = (props) => {
    const { Component, pageProps } = props;

    const Layout = Component.layout || ((children) => <>{children}</>);

    if (pageProps.error) {
        return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
    }

    return (
        <Layout>
            <Component {...pageProps}></Component>
        </Layout>
    );
};

export default App;
