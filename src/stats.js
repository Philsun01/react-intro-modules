import React from 'react';
import {users, companies, products} from './data';

const userCount = {};
const companyCount = {};
const materialCount = {};

companies.forEach( company => {
    if(companyCount[company.state]){
        companyCount[company.state]++;
    } else {
        companyCount[company.state] = 1;
    }
})

users.forEach( user => {
    if(userCount[user.state]){
        userCount[user.state]++;
    } else {
        userCount[user.state] = 1;
    }
})

products.forEach( product => {
    if(materialCount[product.material]){
        materialCount[product.material]++;
    } else {
        materialCount[product.material] = 1;
    }
})

const Stats = () => {
    const mostUsers = {state: 'first', count: 0};
    const mostCompanies = {state: 'first', count: 0};
    const mostMaterials = {material: 'first', count: 0};
    
    Object.keys(userCount).forEach( (loc) => {
        if(userCount[loc] > mostUsers.count) {
            mostUsers.state = loc;
            mostUsers.count = userCount[loc]
        }
    } );

    Object.keys(companyCount).forEach((loc)=>{
        if(companyCount[loc] > mostCompanies.count){
            mostCompanies.state = loc;
            mostCompanies.count = companyCount[loc];
        }
    })

    Object.keys(materialCount).forEach((material)=>{
        if(materialCount[material] > mostMaterials.count){
            mostMaterials.material = material;
            mostMaterials.count = materialCount[material];
        }
    })

    return (
        <div>
            <h2> Stats </h2>
            <ul>
                <li> State with most users: {mostUsers.state} at {mostUsers.count} users </li>
                <li>State with most companies: {mostCompanies.state} at {mostCompanies.count}</li>
                <li>Most Common Material: {mostMaterials.material} </li>
            </ul>
            
        </div>
    )
}
export default Stats;