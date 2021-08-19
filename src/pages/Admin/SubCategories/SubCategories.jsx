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
  required, ChipField, DeleteButton, ReferenceInput, SelectInput, BooleanField, NumberField
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
      <ReferenceField source="category" reference="categories">
        <ChipField label="Category" source="name" />
      </ReferenceField>
      <EditButton label="Edit" />
      <DeleteButton label="Delete"/>
    </Datagrid>
  </List>
);

export const SubCategoryShow = (props) => (
  <Show title="Sub Category Details" {...props}>
    <SimpleShowLayout>
      <TextField label="Name" source="name" />
      <ReferenceField source="category" reference="categories">
        <ChipField label="Category" source="name" />
      </ReferenceField>
      <ReferenceArrayField label="Courses" reference="courses" source="courses">
        <Datagrid>
        <TextField label="Title" source="title" />
        <TextField label="Instructor" source="instructor.name" />
        <ChipField label="Sub Category" source="subCategory.name" />
        <TextField label="Status" source="status" />
        <BooleanField label="Is blocked" source="isBlocked"/>
        <NumberField label="Rating" source="averageRating" />
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
      <ReferenceInput label="Category" source="category" reference="categories">
        <SelectInput optionText="name" validate={validateName}/>
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const SubCategoryCreate = (props) => (
  <Create title="Create Sub Category" {...props}>
    <SimpleForm>
      <TextInput label="Name" source="name" validate={validateName}/>
      <ReferenceInput label="Category" source="category" reference="categories">
        <SelectInput optionText="name" validate={validateName}/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
