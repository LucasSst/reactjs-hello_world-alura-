import styles from "./Home.module.css";
import PostCard from "components/PostCard";
import posts from "json/posts.json";

const Home = () => {

    return (
            <ul className={styles.posts}>
                {posts.map(post => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                ))}
            </ul>
    )
}

export default Home;