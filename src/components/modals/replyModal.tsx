import { useState } from "react"
import ModalBase from "./base"

export default function ReplyModal(props: {showModal: boolean, setModalState: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [username, setUsername] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = () => {
        
        console.log(username)

        if (username !== "" && content !== "") {
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
            {props.showModal ? (<ModalBase buttonClick={() => handleSubmit()} buttonTitle="Reply">
                <textarea placeholder="Write your reply...."value={content} onChange={(e) => setContent(e.target.value)}/>
                <input type="text" placeholder="Enter your psuedonym" value={username} onChange={(e) => setUsername(e.target.value)}/>
                {error ? <div className="error">{error}</div> : null}
            </ModalBase>) : null}
        </>
    )
}