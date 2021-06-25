import React from 'react'
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest'
import { UserList, QuestionList, QuestionEdit, UserEdit } from './Lists'
require('dotenv').config()
const endpoint = process.env.REACT_APP_ENDPOINT

const dataProvider = simpleRestProvider(endpoint);

const AdminPannel = () => {
    return (
        <>
            <Admin dataProvider={dataProvider}>
                <Resource name="users" list={UserList} edit={UserEdit} />
                <Resource name="questions" list={QuestionList} edit={QuestionEdit} />
            </Admin>
        </>
    )
}

export default AdminPannel
