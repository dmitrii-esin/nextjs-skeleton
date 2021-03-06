import { NextPage } from "next";
import { PageDefault } from "components/layouts/page-default";

export type IIndexPageType = React.FC &
    NextPage & {
        layout: typeof PageDefault;
    };

const Index: IIndexPageType = () => {
    return <div>index page</div>;
};

Index.layout = PageDefault;

export default Index;
