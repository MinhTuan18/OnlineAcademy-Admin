import { React } from 'react';
import {
  List,
  Datagrid,
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
  required, DeleteButton
} from 'admin-on-rest';

const validateName = [required];

const CategoryFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const CategoryList = (props) => (
  <List {...props} filters={<CategoryFilter />} perPage={10}>
    <Datagrid>
      <TextField label="Name" source="name" />
      <EditButton/>
      <DeleteButton/>
    </Datagrid>
  </List>
);

export const CategoryShow = (props) => (
  <Show title="Category Details" {...props}>
    <SimpleShowLayout>
      <TextField label="Name" source="name" />
      <ReferenceArrayField label="Sub Categories" reference="subCategories" source="subCategories">
        <Datagrid>
          <TextField label="Name" source="name" />
          <EditButton label="Edit" />
        </Datagrid>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);

export const CategoryEdit = (props) => (
  <Edit title="Edit Category" {...props}>
    <SimpleForm>
      <TextInput label="Name" source="name" />
    </SimpleForm>
  </Edit>
);

export const CategoryCreate = (props) => (
  <Create title="Create Category" {...props}>
    <SimpleForm>
      <TextInput label="Name" source="name" validate={validateName}/>
    </SimpleForm>
  </Create>
);
