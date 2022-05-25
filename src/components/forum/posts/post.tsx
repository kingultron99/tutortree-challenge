import { CaretDown, CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { post } from "../../../types/types";


/**
 * Post defines the 
 * @param props all props passed by the parent element
 */
export default function Post(props: { post: post, keynum: number }) {
    const [counter, setCounter] = useState<number>(props.post.votes)
    return (
        <div>
            <div className="post">
                <div className="vote">
                    <CaretUp onClick={() => console.log(setCounter(counter + 1))} />
                    {counter}
                    <CaretDown onClick={() => setCounter(counter - 1)} />
                </div>
                <h3>{props.post.username}</h3>
                <p>{props.post.content}</p>
                <button>Reply</button>
            </div>

            {/* The following acts as an iterator of sorts. 
              * It will essentially recursively call itself
              * for every reply that exists on the post. 
              * 
              * Nesting is technically infinite here, however,
              * due to some of my current limitations with styling
              * (and how this is set up), there will reach a point 
              * where the element will be way too small (each reply 
              * is 10% smaller than the parent). I *could* set a 
              * minimum width, however that would create confusion 
              * for nested replies after a certain point.
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
            {props.post.replies != [] ? (
                <div className="reply">
                    {
                        props.post.replies.map((reply, key) => {
                            var key = Number.parseInt(`${props.keynum}${key}`)
                            return (
                                <Post keynum={key} key={key} post={reply} />
                            )
                        })
                    }
                </div>) : null}
        </div>
    )
}