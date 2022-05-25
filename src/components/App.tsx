import { useEffect, useState } from 'react'
import Footer from './footer/footer'
import Forum from './forum/forum'
import Header from './header/header'
import { post } from '../types/types'


function App() {
  const [posts, setPosts] = useState<post[]>([])

  /*
   * the following states feels super redundant and can probably be setup way more effectively.
   * its enough for this usage.
   */

  // Sets whether the modal to create a post should be shown
  const [showPostModal, setShowPostModal] = useState(false)
  // Sets whether the modal to create a reply should be shown
  const [showReplyModal, setShowReplyModal] = useState(false)

  const addPost = (i: post) => {
    setPosts([...posts, { username: i.username, content: i.content, votes: 0, replies: i.replies }])
  }

  useEffect(() => addPost({
    username: "yeet!",
    content: "test post with reply!",
    votes: 0,
    replies: [
      { username: "someone", content: "woo!", votes: 0, replies: [] },
      {
        username: "someone2", content: "woo!!", votes: 0, replies: [
          {
            username: "more replies!",
            content: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow’s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper .",
            votes: 0,
            replies: []
          }
        ]
      }
    ]
  }), [])

  console.log(posts)
  return (
    <div>
      {showPostModal ? <PostModal /> : null}
      {showReplyModal ? <ReplyModal /> : null}
      <Header />
      <Forum posts={posts} />
      <Footer />
    </div>
  )
}

export default App
