import { motion } from "framer-motion";
import { CaretDown, CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { PostProps, ReplyProps } from "../../../types/types";


/**
 * Post defines the post element used for displaying top level posts
 */
export default function Post({ post, replyPostID, keynum, showReplyModal}: PostProps) {
    const [counter, setCounter] = useState<number>(post.votes)
    const postvariants = {
        init: {
            opacity: 0,
            x: 40,
        },
        anim: {
            opacity: 1,
            x: 0,
        }
    }
    return (
        <div>
            <motion.div key={keynum} variants={postvariants} initial="init" animate="anim" className="post">
                <div className="vote">
                    <CaretUp onClick={() => setCounter(counter + 1)} />
                    {counter}
                    <CaretDown onClick={() => setCounter(counter - 1)} />
                </div>
                <h3>{post.username}</h3>
                <p>{post.content}</p>
                <motion.button whileTap={{scale: 0.95}} onClick={() => {
                    replyPostID(post)
                    showReplyModal(true)
                    }}>Reply</motion.button>
            </motion.div>

            {/* The following acts as an iterator of sorts. 
              * It will essentially recursively call itself
              * for every reply that exists on the post. 
              * 
              * Nesting is technically infinite here, however,
              * due to some of my current limitations with styling
              * (and how this is set up), there will reach a point 
              * where the element will be way too small for practical 
              * use (each reply is 10% smaller than the parent). 
              * 
              * I *could* set a minimum width, however that would create 
              * confusion for nested replies after a certain point.
              * 
              * additionaly, this implementation has a few drawbacks.
              * it will be difficult to say, limit the number of replies
              * that render. Though I suppose you could set an iteration 
              * counter on the parent and check if that counter matches
              * a certain value to prevent further replies from rendering,
              * but with that comes the issue of rendering the rest of the
              * replies on user request, but I digress.
              */}

            {/* The "reply" div will and its contents will only be created
              * if there are replies present on the post.
              */}
            {post.replies != [] ? (
                <div className="reply">
                    {
                        post.replies.map((reply, key) => {
                            var key = Number.parseInt(`${keynum}${key}`)
                            return (
                                <Reply keynum={key} key={key} post={reply} parent={post} replyPostID={replyPostID} showReplyModal={showReplyModal} />
                            )
                        })
                    }
                </div>) : null}
        </div>
    )
}

/*
 * Assuming you read the giant comment block above, this was going to have recursive comment nesting.
 * I however, cannot for the life of me, figure out how to get the target state object via recursion
 * and append to its replies. It makes sense in my head, but doesnt correlate to anything usable.
 * 
 * Due to this, I have capped the comments to 1 level deep. with a bit of tweeking nested comments ARE
 * doable. it just requires some funky state stuff. 
 * 
 * You also may have noticed that Reply and Post look remarkably similar!
 * well, thats because they are. I decided to keep them separate, as particular functions I had in mind
 * for the comments would have also applied to Posts if I had it use itself to generate the reply component
 * thus I separated them to keep things easier to manage.
 */



/**
 * Defines all posts/comments that exist under a top level post
 */

function Reply({ post, parent, replyPostID, keynum, showReplyModal }: ReplyProps) {
    const [counter, setCounter] = useState<number>(post.votes)

    const postvariants = {
        init: {
            opacity: 0,
            x: 40,
        },
        anim: {
            opacity: 1,
            x: 0,
        }
    }

    return (
            <motion.div key={keynum} variants={postvariants} initial="init" animate="anim" className="post">
                <div className="vote">
                    <CaretUp onClick={() => setCounter(counter + 1)} />
                    {counter}
                    <CaretDown onClick={() => setCounter(counter - 1)} />
                </div>
                <h3>{post.username}</h3>
                <p>{post.content}</p>
                <button onClick={() => {
                    replyPostID(parent)
                    showReplyModal(true)
                    }}>Reply</button>
            </motion.div>
    )
}