import { FaRProject } from "react-icons/fa"
import { api } from '../api';

//////////////////////////////////////////////////////////////////////////////////////////////

export const getCategories = () => {
  return api.get('/category/get_all_categories');
}


export const addACategory = ({ title }) => {
  return api.post('/category/add_a_category', { title: title })
}


export const removeCategory = ({ _id }) => {
  return api.delete('/category/delete_a_category', {
    params: {
      _id: _id
    }
  })
}
//////////////////////////////////////////////////////////////////////////////////////////////


export const getSubCategories = () => {
  return api.get('/category/get_all_sub_categories');
}


export const addASubCategory = ({ categoryId, name }) => {
  return api.post('/category/add_a_sub_category', { categoryId: categoryId, name: name });
}


export const removeSubCategory = ({ _id }) => {
  return api.delete('/category/delete_a_sub_category', {
    params: {
      _id: _id
    }
  })
}

////////////////////////////////////////////////////////////////////////////////////////////////

export const getTimeCategories = () => {
  return api.get('/timecategory/get_all_timecategories');
}


export const addATimeCategory = ({ name, description }) => {
  return api.post('/timecategory/add_a_timecategory', { name, description });
}

export const editTimeCategory = ({ _id, name, description }) => {
  return api.patch('/timecategory/edit_a_timecategory', { _id, name, description });
}


export const removeTimeCategory = ({ _id }) => {
  return api.delete('/timecategory/delete_a_timecategory', {
    params: {
      _id: _id
    }
  })
}