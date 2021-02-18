import React, { useEffect, useState } from 'react'
import { getCategories, getTimeCategories } from '../../../api/categoryApi/categoryApi';
import '../style/SearchFilters.scss';
import { MdWork } from 'react-icons/md';
import { RiTimerFill } from 'react-icons/ri';

const SearchFilters = () => {


  const [didCategoryChanged, setdidCategoryChanged] = useState(true);
  const [fieldCategories, setfieldCategories] = useState([]);
  const [timeCategories, settimeCategories] = useState([])

  useEffect(() => {
    getCategories()
    .then(res => {
      setfieldCategories(res.data.categories);
      console.log(fieldCategories);
    }) 
    .catch(err => {
      console.log(err);
    })

    getTimeCategories()
    .then(res => {
      settimeCategories(res.data.timeCategories);
      console.log(timeCategories);
    })
    .catch(err => {
      console.log(err);
    })
  }, [didCategoryChanged])

  return (
    <div>
      
      <div className="filterSection">
        <div className="FilterHead" >
          <MdWork className="FilterHeadItem"/>
          <div className="FilterHeadItem">
            Field Based Filters
          </div>
        </div>
        <div>
          {
            fieldCategories.map(fieldCategory => {
              return(
                <div key={ fieldCategory._id } className="CategoryItem FieldBased" >{ fieldCategory.title }</div>
              )
            })
          }
        </div>
      </div>

      <div className="filterSection">
        <div className="FilterHead" >
        <RiTimerFill className="FilterHeadItem icon"/>
          <div className="FilterHeadItem">
            Time Based Filters
          </div>
        </div>
        <div>
          {
            timeCategories.map(timeCategory => {
              return(
                <div key={ timeCategory._id } className="CategoryItem TimeBased" >{ timeCategory.name }</div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default SearchFilters
