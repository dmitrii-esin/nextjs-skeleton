import { GetServerSideProps, NextPage } from "next";
import { Post as PostFeature } from "features/post";
import { PageDefault } from "components/layouts/page-default";
import { IPost } from "types/post";

export type IProductPageType = React.FC<{ post: IPost }> &
    NextPage & {
        layout: typeof PageDefault;
    };

const Product: IProductPageType = (props) => {
    const { post } = props;

    return <PostFeature post={post} />;
};

Product.layout = PageDefault;

export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
    //TODO: implement fetch by fetch wrapper func
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${context.params.postId}`);

    const hasError = !result.ok;

    //TODO: fix to centralized mechanism
    // see: https://nextjs.org/docs/advanced-features/custom-error-page
    if (hasError) {
        const error = await result.json();

        return {
            props: {
                error: { statusCode: error.status, message: error.title },
            },
        };
    }

    if (!hasError) {
        const data = await result.json();

        return {
            props: {
                post: data,
            },
        };
    }
};
