import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosCloseCircleOutline } from "react-icons/io";
import { addACategory, addASubCategory, getCategories, getSubCategories } from '../../../api/categoryApi/categoryApi';
import '../style/ManageCategories.scss'

const ManageCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Web Designing');
  const [categories, setCategoris] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isCategoryChanged, setisCategoryChanged] = useState(true);
  const [isDataReceived, setisDataReceived] = useState(false);
  const [newCategory, setnewCategory] = useState('');
  const [newSubCategory, setnewSubCategory] = useState('');

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

  const addSubCategory = (e, _id) => {
    e.preventDefault();
    addASubCategory({ categoryId: _id, name: newSubCategory})
    .then(res => {
      setisCategoryChanged(!isCategoryChanged);
      e.target.reset();
    })
  }
  
  return (
    <div className="ManageCategories" >
      <div className="ManageCategoriesTitle" >Categories</div>
      <div className="categoryList">
        {
          categories.map(category => {
            return(
              
                <div className="category" key={ category._id } onClick={() => {setSelectedCategory(category.title)}}>
                  <IoIosArrowDown className={selectedCategory === category.title? "categoryItem dropDownIcon selected": "categoryItem dropDownIcon"}/>
                  <div className="categoryItem">{ category.title }</div>
                  <IoIosCloseCircleOutline className="categoryItem closeBtn">{}</IoIosCloseCircleOutline>
               
                { 
                  <div className={selectedCategory === category.title? "subCategorySec show": "subCategorySec"}>
                    {
                      subCategories.filter(subCategory => {
                        return subCategory.category === category._id;
                      }).map(selectedSubCategory => {
                        return(
                          <div className="subCategory" key={ selectedSubCategory.name } >{ selectedSubCategory.name }</div>
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

      <div className="AddCategorySec">
        <form onSubmit={addCategory}>
          <input className="form-control addCategoryFormItem" onChange={(e) => setnewCategory(e.target.value)} type="text" placeholder="Enter a new Category"/>
          <button className="toggleFindButton addCategoryFormItem">ADD CATEGORY</button>
        </form>
      </div>

    </div>
  )
}

export default ManageCategories
