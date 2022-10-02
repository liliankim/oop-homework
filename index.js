const inquirer = require('inquirer');
const fs = require('fs');

const managerQuestion = [{
    name: 'name',
    type: 'input',
    message: 'enter the name'
},{
    name: 'id',
    type:'input',
    message: 'enter the id'
},{
    name: 'email',
    type: 'input',
    message: 'enter the email address'
},{
    name: 'officenumber',
    type: 'input',
    message: 'enter the office number'
}]

const engineerQuestion = [{
    name: 'name',
    type: 'input',
    message:'enter the name'
},{
    name: 'id',
    type: 'input',
    message: 'enter the id'
},{
    name: 'email',
    type:'input',
    message: 'enter the email'
},{
    name: 'github',
    type: 'input',
    message: 'enter github name'
}]


const internQuestion = [{
    name: 'name',
    type: 'input',
    message: 'enter the name'
},{
    name: 'id',
    type: 'input',
    message: 'enter the id'
},{
    name: 'email',
    type: 'input',
    message:'enter the email'
},{
    name: 'school',
    type: 'input',
    message:'enter the school name'
}]
