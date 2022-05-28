import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { post } from "../../types/types"
import ModalBase from "./base"

export default function ReplyModal(props: {addReply: (i: post) => void,showModal: boolean, setModalState: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [username, setUsername] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = () => {

        if (username !== "" && content !== "") {
            props.addReply({username: username, content: content, votes: 0, replies: []})
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
            {props.showModal ? (<ModalBase setModal={() => props.setModalState(false)} buttonClick={() => handleSubmit()} buttonTitle="Reply">
                <textarea placeholder="Write your reply...."value={content} onChange={(e) => setContent(e.target.value)}/>
                <input type="text" placeholder="Enter your psuedonym" value={username} onChange={(e) => setUsername(e.target.value)}/>
                {error ? <div className="error">{error}</div> : null}
            </ModalBase>) : null}
        </>
    )
}