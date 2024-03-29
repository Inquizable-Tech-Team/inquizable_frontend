import { List, Datagrid, TextField, NumberField, ReferenceField, EditButton, NumberInput, TextInput, Edit, SimpleForm, ReferenceInput, SelectInput } from 'react-admin';

/* List to list all Users */

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nickname" />
            <NumberField source="points" />
            <NumberField source="answered" />
            <NumberField source="correct" />
            <EditButton />
        </Datagrid>
    </List>
);
/* List to list all Questions */
export const QuestionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="type" />
            <TextField source="difficulty" />
            <TextField source="question" />
            <TextField source="correct_answer" />
            <TextField source="incorrect_answers" />
            <NumberField source="approved" />
            <ReferenceField source="users_id" reference="users"><TextField source="nickname" /></ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);
/* List to edit a single Question */
export const QuestionEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="type" />
            <TextInput source="category" />
            <TextInput source="difficulty" />
            <TextInput source="question" />
            <TextInput source="correct_answer" />
            <TextInput source="incorrect_answers" />
            <NumberInput source="approved" />
            <ReferenceInput source="users_id" reference="users"><SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

/* List to edit a single user */
export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="nickname" />
            <TextInput source="email" />
            <NumberInput source="points" />
            <NumberInput source="answered" />
            <NumberInput source="correct" />
        </SimpleForm>
    </Edit>
);