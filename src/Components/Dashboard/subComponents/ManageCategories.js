import React, { useState } from 'react'
import { IoIosArrowDropdown, IoIosCloseCircleOutline } from "react-icons/io";
import '../style/ManageCategories.scss'

const ManageCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Web Designing');

  const [categories, setCategoris] = useState([
    { _id: 1, title: 'Web Designing' },
    { _id: 2, title: 'Teaching' },
    { _id: 3, title: 'Graphic Designing' },
    { _id: 4, title: 'Driving' }
  ]);

  const [subCategories, setSubCategories] = useState([
    { category: 1, name: 'React Js' },
    { category: 1, name: 'Node Js' },
    { category: 2, name: 'A/L' },
    { category: 2, name: 'O/L' },
    { category: 3, name: 'Illustrator' },
    { category: 3, name: 'After Effects' },
    { category: 4, name: 'Passenger Vehicle' }
  ])
  
  return (
    <div className="ManageCategories" >
      <div className="categoryList">
        {
          categories.map(category => {
            return(
              <div>
                <div className="category" key={ category._id } onClick={() => {setSelectedCategory(category.title)}}>
                  <IoIosArrowDropdown className={selectedCategory === category.title? "categoryItem dropDownIcon selected": "categoryItem dropDownIcon"}>{}</IoIosArrowDropdown>
                  <div className="categoryItem">{ category.title }</div>
                  <IoIosCloseCircleOutline className="categoryItem closeBtn">{}</IoIosCloseCircleOutline>
                </div>

                { selectedCategory === category.title &&
                  <div>
                    {
                      subCategories.filter(subCategory => {
                        return subCategory.category === category._id;
                      }).map(selectedSubCategory => {
                        return(
                          <div className="subCategory" key={ selectedSubCategory.name } >{ selectedSubCategory.name }</div>
                        )
                      })
                    }
                    <div className="subCategory">
                      <form>
                        <input className="form-control form-control-sm addSubCategoryFormItem" type="text" placeholder="Enter a new Sub-Category"/>
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
        <form>
          <input className="form-control addCategoryFormItem" type="text" placeholder="Enter a new Category"/>
          <button className="toggleFindButton addCategoryFormItem">ADD CATEGORY</button>
        </form>
      </div>

    </div>
  )
}

export default ManageCategories
