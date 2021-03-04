import { render } from "@testing-library/react";
import { Post } from "./";

const MOCK_PROPS = {
    post: {
        title: "ttile",
        id: 1,
    },
};

describe("Post", () => {
    it("renders correctly", () => {
        const { container } = render(<Post {...MOCK_PROPS} />);
        expect(container).toMatchSnapshot();
    });
});
