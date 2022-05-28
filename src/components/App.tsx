import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { post } from '../types/types'
import Footer from './footer/footer'
import Forum from './forum/forum'
import Header from './header/header'
import PostModal from './modals/postModal'
import ReplyModal from './modals/replyModal'


function App() {
  const [posts, setPosts] = useState<post[]>([])

  // this is used purely for referencing the post that should a reply appended
  // postID gets passed to the reply modal and setPostID gets passed to the Post element via forum.
  const [postID, setPostID] = useState<post | null>(null)
  // Sets whether the modal to create a post should be shown
  const [showPostModal, setShowPostModal] = useState(false)
  // Sets whether the modal to create a reply should be shown
  const [showReplyModal, setShowReplyModal] = useState(false)

  /**
   * Appends a new post to posts
   * @param i of type `post` takes a an object containing a username, message content, number of votes, and the replies
   */
  const addPost = (i: post) => {
    setPosts([...posts, { username: i.username, content: i.content, votes: i.votes, replies: i.replies }])
  }
  /**
   * Appends a reply to a post
   */
  const addReply = (i: post) => {
    console.log(posts.map(el => el === postID ? { ...el, replies: [...el.replies, i] } : el))
    setPosts(posts.map(el => el === postID ? { ...el, replies: [...el.replies, i] } : el))
  }

  return (
    <div>
      <AnimatePresence>
        {showPostModal ? <PostModal addPost={addPost} showModal={showPostModal} setModalState={setShowPostModal} /> : null}
        {showReplyModal ? <ReplyModal addReply={addReply} showModal={showReplyModal} setModalState={setShowReplyModal} /> : null}
      </AnimatePresence>
      <Header setShowModalState={setShowPostModal} />
      <Forum posts={posts} setShowReplyModal={setShowReplyModal} replyPostID={setPostID} />
      <Footer />
    </div>
  )
}

export default App
