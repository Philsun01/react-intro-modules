import React from 'react';
import {users, companies}from './data';

const Users = () => {
    return (
        <div>
            <h2> Users ({users.length})</h2>
            <ul>
                {
                users.map(user => {
                    const company = companies.find( comp => {
                        return comp.id === user.companyId;
                    })
                    return (
                        <li key = {user.id}>
                            <h3>{user.name}</h3>
                            <b>Location:</b> {user.state}<br/>
                            <b>Company:</b> {company.name}
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Users;