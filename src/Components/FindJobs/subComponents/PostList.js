import React from 'react'
import SkeletonJobPost from '../../Skeleton/SkeletonJobPost'

const PostList = () => {
  return (
    <div>
      {
        [1, 2, 3, 5, 6].map(post => {
          return (
            <div key={ post }>
              <SkeletonJobPost type="mdWidth" />
            </div>
          )
        })
      }
    </div>
  )
}

export default PostList
