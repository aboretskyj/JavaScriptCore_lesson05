//The task:
//Create object "EmployeeSalaries" containing salaries of employees.
//Wright a code, wich will display sum of all salaries of employees.
//if the object is empty, the result must be 0.


var EmployeeSalaries = { 
    'Jack': 200,
    'Hanna': 360,
    'Mary': 300,
    'Rojer': 800,
};

var sum = 0;

for (var key in EmployeeSalaries) {
    sum += EmployeeSalaries[key];
}

show(sum);

// Functions
function show(data){
    console.log(data);
}