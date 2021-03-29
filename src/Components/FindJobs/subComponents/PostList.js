import React from 'react'
import JobPreviewComponent from '../../JobComponents/JobPreviewTileComponent/JobPreviewComponent'
import SkeletonJobPost from '../../Skeleton/SkeletonJobPost'

const PostList = () => {
  return (
    <div>
      <JobPreviewComponent/>
      {
        [1, 2, 3, 5, 6].map(post => {
          return (
            <div key={ post }>
              <SkeletonJobPost type="maxWidth" />
            </div>
          )
        })
      }
    </div>
  )
}

export default PostList
