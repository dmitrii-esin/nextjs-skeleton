import { IPost } from "types/post";

interface IProps {
    post: IPost;
}

export const Post: React.FC<IProps> = (props) => {
    const { post } = props;

    return (
        <div>
            {post.id} - {post.title}
        </div>
    );
};

export default Post;
