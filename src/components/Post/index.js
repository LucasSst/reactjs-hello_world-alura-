import './Post.css'
import { Route, Routes, useParams } from "react-router-dom";
import posts from 'json/posts.json'
import ModelPost from "components/ModelPost";
import Markdown from "react-markdown";
import NotFound from "components/NotFound";
import DefaultPage from "components/DefaultPage";
import styles from "./Post.module.css"
import PostCard from 'components/PostCard';

const Post = () => {
    const parameters = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parameters.id);
    })

    if (!post) {
        return <NotFound />
    }

    const recommendedPosts = posts
    .filter((post) => post.id !== Number(parameters.id))
    .sort((a,b) => b.id - a.id)
    .slice(0, 4)

    console.log(recommendedPosts)

    return (
        <Routes>
            <Route path="*" element={<DefaultPage />}>
                <Route index element={
                    <ModelPost
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <Markdown>
                                {post.texto}
                            </Markdown>
                        </div>
                    
                    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar:
                    </h2>
                    
                    <ul className={styles.postsRecomendados}>
                        {recommendedPosts.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post}/>
                            </li>
                        ))}
                    </ul>

                    </ModelPost>
                } />
            </Route>
        </Routes>
    )
}
export default Post;