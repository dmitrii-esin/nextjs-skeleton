import { NextPage } from "next";
import { PageDefault } from "components/layouts/page-default";

export type ICartPageType = React.FC &
    NextPage & {
        layout: typeof PageDefault;
    };

const Cart: ICartPageType = () => {
    return <div>cart page</div>;
};

Cart.layout = PageDefault;

export default Cart;
