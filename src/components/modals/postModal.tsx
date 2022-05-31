import { motion } from "framer-motion";
import { useState } from "react";
import { post } from "../../types/types";
import ModalBase from "./base";


/**
 * Defines the modal to use for posting messages
 */
export default function PostModal(props: { addPost: (i: post) => void, showModal: boolean, setModalState: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [username, setUsername] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState("")

    const component = {
        init: {
            opacity: 0,
        },
        anim: {
            opacity: 1,
        }
    }

    const handleSubmit = () => {
        
        console.log(username)

        if (username !== "" && content !== "") {
            props.addPost({username: username, content: content, votes: 0, replies: []})
            setUsername("")
            setContent("")
            setError("")
            props.setModalState(false)
        } else {
            setError("Pseudonym or message is empty!")
        }
    }
    return (
        <>
            {props.showModal ? (<ModalBase setModal={() => props.setModalState(false)} buttonClick={() => handleSubmit()} buttonTitle="Post">
                <motion.textarea variants={component} placeholder="Write your post...." value={content} onChange={(e) => setContent(e.target.value)}/>
                <motion.input variants={component} type="text" placeholder="Enter your psuedonym" value={username} onChange={(e) => setUsername(e.target.value)}/>
                {error ? <div className="error">{error}</div> : null}
            </ModalBase>) : null}
        </>
    )
}