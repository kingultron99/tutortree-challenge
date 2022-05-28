import { useEffect, useState } from 'react'
import { post } from '../types/types'
import Footer from './footer/footer'
import Forum from './forum/forum'
import Header from './header/header'
import PostModal from './modals/postModal'
import ReplyModal from './modals/replyModal'


function App() {
  const [posts, setPosts] = useState<post[]>([])

  /*
   * the following states feel super redundant and can probably be setup way more effectively.
   * though it should be enough for this usage.
   */

  // Sets whether the modal to create a post should be shown
  const [showPostModal, setShowPostModal] = useState(false)
  // Sets whether the modal to create a reply should be shown
  const [showReplyModal, setShowReplyModal] = useState(false)

  const addPost = (i: post) => {
    setPosts([...posts, { username: i.username, content: i.content, votes: 0, replies: i.replies }])
  }

  console.log(posts)
  return (
    <div>
      {showPostModal ? <PostModal addPost={addPost} showModal={showPostModal} setModalState={setShowPostModal}/> : null}
      {showReplyModal ? <ReplyModal showModal={showReplyModal} setModalState={setShowReplyModal}/> : null}
      <Header setShowModalState={setShowPostModal}/>
      <Forum posts={posts} setShowReplyModal={setShowReplyModal}/>
      <Footer />
    </div>
  )
}

export default App
