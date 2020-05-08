// Open a terminal and type node challenge.js... it works!

const employees = [{
    name: "Brian Murdock",
    department: "Engineering",
    jobTitle: "Developer",
},
{
    name: "Chris Evans",
    department: "Production",
    jobTitle: "Actor",
},
{
    name: "Joss Whedon",
    department: "Production",
    jobTitle: "Director",
},
{
    name: "Zak Penn",
    department: "Writing",
    jobTitle: "Writer",
},
{
    name: "Scarlett Johansson",
    department: "Production",
    jobTitle: "Actor",
},
{
    name: "Jann Engel",
    department: "Art",
    jobTitle: "Art Director",
},
];

//const = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

answer = employees.reduce((unique, item) => {
console.log(item.department, unique, unique.includes(item.department),
unique.includes(item.department) ? unique : [...unique, item.department],
);
return unique.includes(item.department) ? unique : [...unique, item.department]
},
[]);
console.log('The answer is: ', answer);