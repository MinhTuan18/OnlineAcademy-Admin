import { Admin, jsonServerRestClient, fetchUtils, Resource, Delete } from 'admin-on-rest';
import React from 'react';
import Auth from './SignIn/SignIn';
import { API_PORT } from '../../utils/constants';
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from './Categories/Categories';
import CategoryIcon from '@material-ui/icons/Category';
import { UserCreate, UserEdit, UserList, UserShow } from './Users/Users';
import { InstructorCreate, InstructorEdit, InstructorList, InstructorShow } from './Instructors/Instructors';
import { CourseEdit, CourseList, CourseShow } from './Courses/Courses';
import { SubCategoryCreate, SubCategoryEdit, SubCategoryList, SubCategoryShow } from './SubCategories/SubCategories';

const httpClient = (url, options = {}) => {
  const tempOptions = options;
  if (!tempOptions.headers) {
    tempOptions.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  tempOptions.headers.set('x-access-token', `${token}`);
  return fetchUtils.fetchJson(url, tempOptions)
};
                    

const AdminComponent = () => (
  <>
    <Admin title="Table Planner Admin" restClient={jsonServerRestClient(`${API_PORT}`, httpClient)} authClient={Auth}>
      <Resource name="categories" list={CategoryList} show={CategoryShow} edit={CategoryEdit} icon={CategoryIcon} create={CategoryCreate} remove={Delete}/>
      <Resource name="subCategories" list={SubCategoryList} edit={SubCategoryEdit} show={SubCategoryShow} create={SubCategoryCreate} remove={Delete}/>
      <Resource name="students" list={UserList}  edit={UserEdit} show={UserShow} create={UserCreate}/>
      <Resource name="instructors" list={InstructorList} edit={InstructorEdit} create={InstructorCreate} show={InstructorShow}/>
      <Resource name="courses" list={CourseList} edit={CourseEdit} show={CourseShow}/>
    </Admin>
  </>
);

export default AdminComponent;
