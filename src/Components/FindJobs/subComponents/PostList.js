import React from 'react'
import JobPreviewComponent from '../../JobComponents/JobPreviewTileComponent/JobPreviewComponent'
import JobSeekerComponent from '../../JobComponents/JobPreviewTileComponent/JobSeekerComponent'
import SkeletonJobPost from '../../Skeleton/SkeletonJobPost'

const PostList = () => {
  return (
    <div>
      <JobPreviewComponent/>
      <br/>
     <JobSeekerComponent/>
     <br/>
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
