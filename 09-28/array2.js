let students = [
    {
        name: "문지영", 
        age: 19,
    },
    {
        name:"임다영",
        age: 19
    },
    {
        name:"신현성",
        age: 18
    },
    {
        name:"임성민",
        age: 18
    },
    {
        name:"류한서",
        age: 15
    },
    {
        name:"강유림",
        age: 17
    }
];



let aGroup = [];
let bGroup = [];

for(let i = 0; i<students.length; i++){
    if (students[i].age >= 18){
        aGroup.push(students[i].name);
    }
    else{
        bGroup.push(students[i].name);
    }

}
console.log('18세 미만: ',bGroup, '18세 이상: ',aGroup)


