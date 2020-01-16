import React from 'react';
import {companies} from  './data'

const Companies = () => {
    return (
        <div>
            <h2> Companies ({companies.length})</h2>
            <ul>
                {
                    companies.map(company => {
                        return (
                            <li key = {company.id}>
                                <h3>{company.name}</h3>
                                <div>{company.state}</div>
                            </li>
                        )
                    })
                }
            </ul>
        
        </div>
    )
}

export default Companies;