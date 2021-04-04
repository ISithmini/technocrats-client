import React from 'react'
import './MyFavourites.scss'
import JobPreviewComponent from '../JobComponents/JobPreviewTileComponent/JobPreviewComponent'

export default function MyFavourites() {
    return (
        <div className="">
            {/* <h3 className="">My Favourites</h3> */}
            <div className="">
                <div className="mypro-fav-content">
                <JobPreviewComponent/>
                <JobPreviewComponent/>
                <JobPreviewComponent/>
                <JobPreviewComponent/>
                </div>
            </div>
        </div>
    )
}
