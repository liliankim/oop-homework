const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employee = [];

const managerQuestion = [
  {
    name: "name",
    type: "input",
    message: "enter the manager's name",
  },
  {
    name: "id",
    type: "input",
    message: "enter the manager's id",
  },
  {
    name: "email",
    type: "input",
    message: "enter the manager's email address",
  },
  {
    name: "officenumber",
    type: "input",
    message: "enter the manager's office number",
  },
];

const engineerQuestion = [
  {
    name: "name",
    type: "input",
    message: "enter the engineer's name",
  },
  {
    name: "id",
    type: "input",
    message: "enter the engineer's id",
  },
  {
    name: "email",
    type: "input",
    message: "enter the engineer's email",
  },
  {
    name: "github",
    type: "input",
    message: "enter the engineer's github name",
  },
];

const internQuestion = [
  {
    name: "name",
    type: "input",
    message: "enter the intern's name",
  },
  {
    name: "id",
    type: "input",
    message: "enter the intern's id",
  },
  {
    name: "email",
    type: "input",
    message: "enter the intern's email",
  },
  {
    name: "school",
    type: "input",
    message: "enter the intern's school name",
  },
];
const menu = () => {
  inquirer
    .prompt({
      name: "selection",
      type: "list",
      choices: ["Engineer", "Intern", "Finish"],
    })
    .then((answer) => {
      if (answer.selection === "Engineer") {
        addEngineer();
      }

      if (answer.selection === "Intern") {
        addIntern();
      }

      if(answer.selection === "Finish"){
        createHTML();
      }
    });
};

const addEngineer = () => {
  inquirer.prompt(engineerQuestion).then((answer) => {
    const engineer = new Engineer(
      answer.name,
      answer.id,
      answer.email,
      answer.github
    );
    employee.push(engineer);
    menu();
  });
};

const addIntern = () => {
  inquirer.prompt(internQuestion).then((answer) => {
    const intern = new Intern(
      answer.name,
      answer.id,
      answer.email,
      answer.school
    );
    employee.push(intern);
    menu();
  });
};

const createHTML = () => {
    console.log(employee)
}

const start = () => {
  inquirer.prompt(managerQuestion).then((answer) => {
    const manager = new Manager(
      answer.name,
      answer.id,
      answer.email,
      answer.officenumber
    );
    employee.push(manager);
    menu();
  });
};
start();
