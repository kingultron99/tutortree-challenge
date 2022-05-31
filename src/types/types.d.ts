/**
 * A recursive type for handling nested comments.
 * votes should be initialised as `0`
 */
export type post = {
    username: string,
    content: string,
    votes: number,
    replies: post[],
}

/**
 * The base types for the modal
 */

export type ModalProps = {
    setModal: () => void,
    buttonTitle: string,
    buttonClick: () => void,
    children: any[]
}


/*
 * Forum component props 
 */
export type ForumProps = {
    posts: post[],
    replyPostID: React.Dispatch<React.SetStateAction<post | null>>, 
    setShowReplyModal: React.Dispatch<React.SetStateAction<boolean>>
}

/*
 * Types for top level posts and replies/comments
 */
export type PostProps = {
    post: post,
    replyPostID: React.Dispatch<React.SetStateAction<post | null>>,
    keynum: number,
    showReplyModal: React.Dispatch<React.SetStateAction<boolean>>
}
export type ReplyProps = {
    post: post,
    parent: post
    replyPostID: React.Dispatch<React.SetStateAction<post | null>>,
    keynum: number,
    showReplyModal: React.Dispatch<React.SetStateAction<boolean>>
}