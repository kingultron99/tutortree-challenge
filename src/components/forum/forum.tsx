import { AnimatePresence,} from "framer-motion";
import { ForumProps } from "../../types/types"
import Post from "./posts/post";

/**
 * Defines the base container that holds all the post elements and their replies.
 */
export default function Forum({ posts, replyPostID, setShowReplyModal }: ForumProps) {

    return (
        <section id="forum">

            <div className="post-container">
                {/* Crawl through all the posts */}
                <AnimatePresence>
                {posts != [] ? 
                    posts.map((post, key) => {
                        return(
                            <Post key={key} keynum={key} post={post} replyPostID={replyPostID} showReplyModal={setShowReplyModal}/>
                        )
                    })
                 : null}
                 </AnimatePresence>
            </div>

        </section>
    )
}