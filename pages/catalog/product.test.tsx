import { render } from "@testing-library/react";
import Product from "./product";

describe("Product", () => {
    it("renders correctly", () => {
        const { container } = render(<Product />);
        expect(container).toMatchSnapshot();
    });
});
