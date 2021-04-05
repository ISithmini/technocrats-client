import React, { useEffect, useState } from 'react'
import './MyFavourites.scss'
import JobPreviewComponent from '../JobComponents/JobPreviewTileComponent/JobPreviewComponent'
import { getSavedPosts } from '../../api/userApi/userApi';

const MyFavourites = ({
    user
}) => {
    const [fevAds, setfevAds] = useState([]);
    
    useEffect(() => {
        getSavedPosts({_id: user.id})
        .then(res => {
            console.log(res);
        });
    }, []);
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

export default MyFavourites
