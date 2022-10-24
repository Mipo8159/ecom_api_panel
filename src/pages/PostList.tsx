import React from 'react'
import PostCard from '../components/cards/PostCard'
import Loader from '../components/ui/Loading'
import {useGetPostsQuery} from '../store/post/post.api'

const PostList: React.FC = () => {
  const {isLoading, data: posts} = useGetPostsQuery()

  if (isLoading) {
    return (
      <div className="loader-div">
        <Loader />
      </div>
    )
  }

  return (
    <div className="row">
      {posts && posts.map((p) => <PostCard key={p._id} post={p} />)}
    </div>
  )
}

export default PostList
