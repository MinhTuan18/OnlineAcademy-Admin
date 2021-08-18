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
  ReferenceInput,
  SelectInput,
  ChipField, NumberField, BooleanInput, BooleanField
} from 'admin-on-rest';



const CourseFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="Instructor" source="instructor" reference="instructors">
          <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Sub Category" source="subCategory" reference="subCategories">
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

export const CourseList = (props) => (
  <List {...props} filters={<CourseFilter />}>
    <Datagrid>
      <TextField label="Title" source="title" />
      <TextField label="Instructor" source="instructor.name" />
      <ChipField label="Sub Category" source="subCategory.name" />
      <TextField label="Status" source="status" />
      <BooleanField label="Is blocked" source="isBlocked"/>
      <NumberField label="Rating" source="averageRating" />
      <EditButton/>
    </Datagrid>
  </List>
);

export const CourseShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField label="Title" source="title" />
      <TextField label="Instructor" source="instructor.name" />
      <ChipField label="Sub Category" source="subCategory.name" />
      <TextField label="Status" source="status" />
      <TextField label="Rating" source="averageRating" />
      <BooleanField label="Is blocked" source="isBlocked"/>
      
    </SimpleShowLayout>
  </Show>
);

export const CourseEdit = (props) => (
  <Edit title="Course Edit" {...props}>
    <SimpleForm>
      <TextField label="Title" source="title" />
      <TextField label="Instructor" source="instructor.name" />
      <TextField label="Sub Category" source="subCategory.name" />
      <SelectInput label="Status" source="status" choices={[
                { id: 'Ongoing', name: 'On going' },
                { id: 'Complete', name: 'Complete' },
            ]}/>
      <BooleanInput label="Is Blocked?" source="isBlocked" />
    </SimpleForm>
  </Edit>
);
