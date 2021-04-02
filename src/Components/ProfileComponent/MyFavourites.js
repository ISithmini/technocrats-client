import React from 'react'
import './MyFavourites.scss'
import JobPreviewComponent from '../JobComponents/JobPreviewTileComponent/JobPreviewComponent'

export default function MyFavourites() {
    return (
        <div className="myads-container">
            <h3 className="myads-info-title">My Favourites</h3>
            <div className="mypro-fav-container">
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
