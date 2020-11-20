import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { FaTrashAlt } from 'react-icons/fa';
import { addACategory, addASubCategory, getCategories, getSubCategories, removeCategory, removeSubCategory } from '../../../api/categoryApi/categoryApi';
import '../style/ManageCategories.scss'

const ManageCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Web Designing');
  const [categories, setCategoris] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isCategoryChanged, setisCategoryChanged] = useState(true);
  const [isDataReceived, setisDataReceived] = useState(false);
  const [newCategory, setnewCategory] = useState('');
  const [newSubCategory, setnewSubCategory] = useState('');
  const [isDeleteClicked, setisDeleteClicked] = useState(false);

  useEffect(() => {
    getCategories()
    .then(res => {
      setisDataReceived(true);
      setCategoris(res.data.categories);
    });

    getSubCategories()
    .then(res => {
      setSubCategories(res.data.subCategories);
    });  
  }, [isCategoryChanged])

  const addCategory = (e) => {
    e.preventDefault();
    addACategory({ title: newCategory })
    .then(res => {
      setisCategoryChanged(!isCategoryChanged);
      e.target.reset();
    })
  }

  const deleteCategory = (_id) => {
    setisDeleteClicked(false)
    removeCategory({ _id: _id })
    .then(res => {
      setisCategoryChanged(!isCategoryChanged);
      console.log(res);

    })
  }

  const addSubCategory = (e, _id) => {
    e.preventDefault();
    addASubCategory({ categoryId: _id, name: newSubCategory})
    .then(res => {
      setisCategoryChanged(!isCategoryChanged);
      e.target.reset();
    })
  }

  const deleteSubCategory = (_id) => {
    removeSubCategory({ _id: _id })
    .then(res => {
      setisCategoryChanged(!isCategoryChanged);
      console.log(res);
    })
  }
  
  return (
    <div className="ManageCategories" >

      <div className="AddCategorySec">
        <form onSubmit={addCategory}>
          <input className="form-control addCategoryFormItem" onChange={(e) => setnewCategory(e.target.value)} type="text" placeholder="Enter a new Category"/>
          <button className="toggleFindButton addCategoryFormItem">Add Category</button>
        </form>
      </div>

      <div className="categoryList">
        {
          categories.map(category => {
            return(
              
                <div className="category" key={ category._id } onClick={() => {setSelectedCategory(category.title)}}>
                  <IoIosArrowDown className={selectedCategory === category.title? "categoryItem dropDownIcon selected": "categoryItem dropDownIcon"}/>
                  <div className="categoryItem">{ category.title }</div>
                  { (!isDeleteClicked && selectedCategory === category.title ) &&
                    <FaTrashAlt className="categoryItem closeBtn" onClick={() => {setisDeleteClicked(true)}}>{}</FaTrashAlt>
                  }
                  { (isDeleteClicked && selectedCategory === category.title ) &&
                    <div>
                      <div className="EditByAdminSec">
                        <div>Do you want to delete this user permanently?</div>
                        <button className="toggleFindButton deleteYesNoButton"onClick={() => {deleteCategory(category._id)}}>YES</button>
                        <button className="toggleFindButton deleteYesNoButton" onClick={() => {setisDeleteClicked(false)}} >No</button>
                      </div>
                    </div>
                  }
               
                { 
                  <div className={selectedCategory === category.title? "subCategorySec show": "subCategorySec"}>
                    {
                      subCategories.filter(subCategory => {
                        return subCategory.category === category._id;
                      }).map(selectedSubCategory => {
                        return(
                          <div className="subCategory">
                            <div className="categoryItem" key={ selectedSubCategory.name } >{ selectedSubCategory.name }</div>
                            <IoMdClose className="categoryItem closeBtn" onClick={() => {deleteSubCategory(selectedSubCategory._id)}} />
                          </div>
                        )
                      })
                    }
                    <div className="subCategory InputForm">
                      <form onSubmit={(e) => {addSubCategory(e, category._id)}}>
                        <input className="form-control form-control-sm addSubCategoryFormItem" onChange={(e) => setnewSubCategory(e.target.value)} type="text" placeholder="Enter a new Sub-Category"/>
                        <button className="toggleFindButton addCategoryFormItem">Add Sub-Category</button>
                      </form>
                    </div>
                  </div>
                }
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default ManageCategories
