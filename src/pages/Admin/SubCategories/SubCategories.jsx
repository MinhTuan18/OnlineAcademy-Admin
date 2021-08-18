import { React } from 'react';
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  Show,
  SimpleShowLayout,
  SimpleForm,
  TextInput,
  Edit,
  Filter,
  ReferenceArrayField,
  Create,
  required, ChipField, DeleteButton
} from 'admin-on-rest';

const validateName = [required];

const SubCategoryFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const SubCategoryList = (props) => (
  <List {...props} filters={<SubCategoryFilter />} perPage={10}>
    <Datagrid>
      <TextField label="Name" source="name" />
      <ChipField label="Category" source="category.name" />
      
      <EditButton label="Edit" />
      <DeleteButton label="Delete"/>
    </Datagrid>
  </List>
);

export const SubCategoryShow = (props) => (
  <Show title="Sub Category Details" {...props}>
    <SimpleShowLayout>
      <TextField label="Name" source="name" />
      <ReferenceArrayField label="Courses" reference="courses" source="courses">
        <Datagrid>
          <TextField label="Title" source="title" />
          <ReferenceField source="instructor" reference="instructors">
            <TextField label="Instructor" source="name" />
          </ReferenceField>
          <TextField label="Status" source="status" />
          <EditButton label="Edit" />
        </Datagrid>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);

export const SubCategoryEdit = (props) => (
  <Edit title="Edit Sub Category" {...props}>
    <SimpleForm>
      <TextInput label="Name" source="name" />
    </SimpleForm>
  </Edit>
);

export const SubCategoryCreate = (props) => (
  <Create title="Create Sub Category" {...props}>
    <SimpleForm>
      <TextInput label="Name" source="name" validate={validateName}/>
    </SimpleForm>
  </Create>
);
