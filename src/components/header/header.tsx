import { post } from "../../types/types"

/**
 * Defines the header of the forum.
 * contains the page title and ability to make a new post
 */

export default function Header() {
    return(
        <nav className="navbar">
            <div className="nav-content">
                <h1>Maths For 'em</h1>
                <button>New Post</button>
            </div>
        </nav>
    )
}