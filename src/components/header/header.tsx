import { post } from "../../types/types"

/**
 * Defines the header of the forum.
 * contains the page title and ability to make a new post
 */

export default function Header(props: {setShowModalState: React.Dispatch<React.SetStateAction<boolean>>}) {
    return(
        <nav className="navbar">
            <div className="nav-content">
                <h1>Maths For 'em</h1>
                <button onClick={() => props.setShowModalState(true)}>New Post</button>
            </div>
        </nav>
    )
}