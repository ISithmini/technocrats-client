import React, { useState, useEffect } from 'react'
import '../style/TimeBasedCategories.scss'
import { FaTrashAlt } from 'react-icons/fa';
import { RiEdit2Fill } from 'react-icons/ri';
import { addATimeCategory, editTimeCategory, getTimeCategories, removeTimeCategory } from '../../../api/categoryApi/categoryApi';
import SkeletonTimeCategory from '../../Skeleton/SkeletonTimeCategory';

const TimeBasedCategories = () => {


  const [timeCategories, settimeCategories] = useState([]);

  const [newCategoryName, setnewCategoryName] = useState('');
  const [newCategoryDescription, setnewCategoryDescription] = useState('');
  const [isCategoryChanged, setisCategoryChanged] = useState(true)
  const [editClickOn, seteditClickOn] = useState('');
  const [deleteClickOn, setdeleteClickOn] = useState('');

  useEffect(() => {
    //setTimeout(() => {
      getTimeCategories()
      .then(res => {
        settimeCategories(res.data.timeCategories);
      })
    //}, 5000);
    
  }, [isCategoryChanged])

  const addTimeCategory = (e) => {
    e.preventDefault();
    addATimeCategory({ name: newCategoryName , description: newCategoryDescription })
    .then(res => {
      setisCategoryChanged(!isCategoryChanged);
      e.target.reset();
    })
    .catch(err => {
      console.log(err);
    })
  }

  const editCategory = (e, _id) => {
    e.preventDefault();
    editTimeCategory({ _id, name: newCategoryName, description: newCategoryDescription })
    .then(res => {
      setisCategoryChanged(!isCategoryChanged);
      e.target.reset();
    })
  }

  const deleteCategory = (_id) => {
    removeTimeCategory({ _id })
    .then(res => {
      setisCategoryChanged(!isCategoryChanged);
    })
  }

  return (
    <div className="TimeBasedCategories" >
      <div className="AddtimeCategoryForm" >
        <form onSubmit={addTimeCategory} >
          <input 
            type="text" className="form-control inputField" 
            placeholder="Enter new Time Based Category name" 
            required={true} onChange={(e) => {setnewCategoryName(e.target.value)} } />
          <textarea 
            className="form-control inputField" 
            placeholder="Enter Description" 
            required={true} onChange={(e) => {setnewCategoryDescription(e.target.value)}}/>
          <button className="toggleFindButton inputButton">Add Category</button>
        </form>
      </div>
      <div>
      { timeCategories.length > 0 &&
        timeCategories.map(timeCategory => {
          return(
            <div key={ timeCategory._id } className="timeCategoryItem">

              <div className="timeCategoryItemHead">
                <div className="headItem" >{ timeCategory.name }</div>
                <FaTrashAlt onClick={() => {setdeleteClickOn(timeCategory._id)}} className="headItem icon" title="Delete" />
                <RiEdit2Fill onClick={() => {seteditClickOn(timeCategory._id)}} className="headItem icon" title="Edit" />
              </div>

              <div className="timeCategoryItemDescription">
                { timeCategory.description }
              </div>

              { deleteClickOn === timeCategory._id &&
                    <div>
                      <div className="deleteTimeCategoryMsg">
                        <div>Do you want to delete this user permanently?</div>
                        <button className="toggleFindButton deleteYesNoButton"onClick={() => {deleteCategory(timeCategory._id)}}>YES</button>
                        <button className="toggleFindButton deleteYesNoButton" onClick={() => {setdeleteClickOn('')}} >No</button>
                      </div>
                    </div>
                  }

              { editClickOn === timeCategory._id &&
                <div className="AddtimeCategoryForm edit" >
                <form onSubmit={(e) => { seteditClickOn('');editCategory(e,timeCategory._id)}} >
                  <input 
                    type="text" className="form-control inputField" 
                    placeholder="Enter new Time Based Category name" 
                    defaultValue= { timeCategory.name }
                    required={true} onChange={(e) => {setnewCategoryName(e.target.value)} } />
                  <textarea 
                    className="form-control inputField" 
                    placeholder="Enter Description" 
                    defaultValue={ timeCategory.description }
                    required={true} onChange={(e) => {setnewCategoryDescription(e.target.value)}}/>
                  <button 
                    className="toggleFindButton inputButton" 
                      disabled={(newCategoryName || newCategoryDescription)?false:true} 
                      onClick={() => {
                        if (!newCategoryName) 
                          setnewCategoryName(timeCategory.name);
                        if(!newCategoryDescription)
                          setnewCategoryDescription(timeCategory.description)
                      }} >Edit Category</button>
                </form>
                <button className="toggleFindButton inputButton" onClick={() => {seteditClickOn('')}}>Cancel</button>
              </div>
              }

            </div>
          )
        })
      }
      { timeCategories.length === 0 &&
        <div>
          <SkeletonTimeCategory />
          <SkeletonTimeCategory />
          <SkeletonTimeCategory />
          <SkeletonTimeCategory />
        </div>
      }
      </div>
    </div>
  )
}

export default TimeBasedCategories
