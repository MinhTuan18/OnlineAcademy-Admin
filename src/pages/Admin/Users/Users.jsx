import { React } from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  Show,
  SimpleShowLayout,
  DisabledInput,
  Edit,
  Filter,
  TextInput,
  BooleanField,
  ReferenceArrayField,
  SelectInput,
  Create,
  BooleanInput, required, minLength, email,
  EmailField, ChipField, ShowButton
} from 'admin-on-rest';

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

const Title = ({ record }) => (
  <span>
    User
    { ' ' }
    {record ? `${record.email}` : '' }
  </span>
);

const validateUserCreation = (values) => {
  const errors = {};
  if (!values.email) {
      errors.email = ['User email is required'];
  }
  if (!values.password) {
    errors.password = ['User password is required'];
}
  return errors
};

const validateName = [required];
const validateEmail = [required, email];
const validatePassword = [
  required, 
  minLength(6), 
  // regex(/^(?=.*?[a-z])$/, 'Password must contain at least one lower case letter'),
  // regex(/^(?=.*?[A-Z])$/, 'Password must contain at least one upper case letter'),
  // regex(/^(?=.*?[0-9])$/, 'Password must contain at least one number'),
]

export const UserCreate = (props) => (
  <Create {...props} validate={validateUserCreation}>
      <SimpleForm redirect="show">
      <TextInput type="email" source="email" validate={validateEmail}/>
      <TextInput label="Password" source="password" validate={validatePassword}/>
      <TextInput source="name" validate={validateName}/>
      <BooleanInput label="Is Activated?" source="isActivated" defaultValue={true}/>
      <BooleanInput label="Is Blocked?" source="isBlocked" defaultValue={false}/>
      <SelectInput label="Role" source="role" choices={[
                { id: 'user', name: 'Student' },
                { id: 'instructor', name: 'Instructor' },
                { id: 'admin', name: 'Admin' },
            ]} defaultValue={'instructor'}/>
    </SimpleForm>
  </Create>
);

export const UserList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <EmailField source="email" />
      <TextField source="name" />
      <BooleanField source="isActivated" label='Is Activated'/>
      <BooleanField source="isBlocked" label="Is Blocked" />
      
      <ShowButton label="Show"/>
      <EditButton lable="Edit"/>

    </Datagrid>
  </List>
);

export const UserShow = (props) => (
  <Show title={<Title />} {...props}>
    <SimpleShowLayout>
      <EmailField source="email" />
      <TextField source="fullName" />
      <TextField source="role" />
      <BooleanField source="isActivated" label="Is Activated"/>
      <BooleanField source="isBlocked" label="Is Blocked" />
      <ReferenceArrayField label="Registered Courses" reference="courses" source="registeredCourses">
        <Datagrid>
        <TextField label="Title" source="title" />
        <ChipField label="Sub Category" source="subCategory.name" />
        <TextField label="Status" source="status" />
        <EditButton label="Edit" />
        </Datagrid>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);

export const UserEdit = (props) => (
  <Edit title={<Title />} {...props}>
    <SimpleForm redirect="show">
      <DisabledInput label="Id" source="id" />
      <DisabledInput source="email" />
      <TextInput source="name" validate={validateName}/>
      <BooleanInput label="Is Activated?" source="isActivated" />
      <BooleanInput label="Is Blocked?" source="isBlocked" />
      
    </SimpleForm>
  </Edit>
);
