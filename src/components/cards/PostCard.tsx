import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {useRemovePostMutation} from '../../store/post/post.api'
import {useRemoveProductMutation} from '../../store/product/product.api'
import {PostType} from '../../types/post.type'
import MutateModal from '../modals/MutateModal'

interface PostCardProps {
  post: PostType
}
const PostCard: React.FC<PostCardProps> = ({post}) => {
  const [removePost] = useRemovePostMutation()
  const [cover] = post.gallery

  return (
    <div className="col-md-3" style={{cursor: 'pointer'}}>
      <MutateModal title="Remove product?" onAccept={removePost} _id={post._id} />

      <div className="card h-100 position-relative">
        <img
          src={cover ? cover.imgUrl : '/placeholder.jpg'}
          alt={post?.title}
          style={{height: '65%', objectFit: 'cover'}}
        />

        <div className="card-body">
          <h6 className="mb-1"> {post.title.toUpperCase()}</h6>
          <p className="card-text">{post.body}</p>
        </div>

        <span
          className="position-absolute file-rmv"
          style={{top: '5px', right: '8px'}}
          data-bs-toggle="modal"
          data-bs-target="#mutate-modal"
        >
          <FaTimes />
        </span>
      </div>
    </div>
  )
}

export default PostCard
