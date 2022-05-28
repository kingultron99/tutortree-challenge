import { useEffect } from "react"
import { post } from "../../types/types"
import Post from "./posts/post";

export default function Forum(props: { posts: post[], setShowReplyModal: React.Dispatch<React.SetStateAction<boolean>> }) {

      

    return (
        <section id="forum">

            <div className="post-container">
                {/* Crawl through all the posts and their replies */}
                {props.posts != [] ? 
                    props.posts.map((post, key) => {
                        return(
                            <Post key={key} keynum={key} post={post} showReplyModal={props.setShowReplyModal}/>
                        )
                    })
                 : <p>No posts yet</p>}
            </div>

        </section>
    )
}