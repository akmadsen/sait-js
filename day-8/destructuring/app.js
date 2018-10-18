const myEmployee = {
    active: true,
    department: 'Engineering'
};

function isActiveEngineer(employee) {
    let {department, active} = employee; 
    return department === "Engineering" && active; 
}

console.log(`Is myEmployee active? ${isActiveEngineer(myEmployee)}`);