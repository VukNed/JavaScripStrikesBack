// we are setting variable for function here, that will only be used in variable aka parameter
function greet(name, surname){
    console.log("Hello " + name + " " + surname);
}

// and we set value for the above mentioned variable aka argument
greet('Marko', 'Markovic');
greet('Nikola', 'Nikolic');

// number in this case is refrencing it self in its own function and thus I can use it again later on

function square(number) {
    return number * number;
}

// i even havbe to define it here since its not refrenced outside the function "square"
// let number = square(2);
// console.log(number);

console.log(square(2));
