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
        <div>
            <div className="myads-container">
                <h3 className="myads-info-title">My Favourites</h3>
                <div className="mypro-fav-container">

                {
                    (fevAds == null) || (fevAds.length == 0)  ? <div className="mypro-favs-div"><p className="mypro-nofavs">No favourite posts to display</p></div>
                    : 
                    <div className="mypro-fav-content">
                        {
                            fevAds.map((data,index) =>{
                                return (
                                    <div key={index}>
                                        <JobPreviewComponent
                                            title={data.title}
                                            description = {data.description}
                                            budget = {data.budget}
                                            duedate = {data.duedate}
                                            level = {data.level}
                                            rating = {data.rating}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                }   
                </div>
            </div>
        </div>
    )
}

export default MyFavourites
