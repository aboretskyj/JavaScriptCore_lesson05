//The task
//1. Create empty object "user". 
//2. Add property "name" with value "ПИЛИП". 
//3. Add property "surname" with value "ШЕВЧЕНКО". 
//4. Change value of "name" to "СЕРГІЙ". 
//5. Delete property "name" from object. 

function show(data){
    console.log(data);
}

//1. Create empty object "user".
var user = {};

//2. Add property "name" with value "ПИЛИП". 
user.name = 'ПИЛИП';

//3. Add property "surname" with value "ШЕВЧЕНКО".  
user.surname = 'ШЕВЧЕНКО';
show(user);

//4. Change value of "name" to "СЕРГІЙ". 
user['name'] = 'СЕРГІЙ';
show(user);

//5. Delete property "name" from object. 
delete user.name;
show(user);


