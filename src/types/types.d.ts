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
    buttonTitle: string,
    buttonClick: () => void,
    children: any[]
}