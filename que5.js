//Que: Differences between let, const, and var in javascript. provide examples illustrating their use cases and limitations

// var:
// - var has function scope. It can only be accessed inside the fuction whre it is declared.
// - Values can be reassigned.
// - Variables declared with var are hoisted on top where they have been declared with value undefined.
// - Variables declared with var can be redeclared.

var age1 = 10;
function validate1(age){
    var status;
    if(age<18){
       var status = "invalid";
       console.log("Var Inside: "+status); //Correct result
    }
    console.log("Var Outside: "+status); //Correct result
}
validate1(age1);

// let:
// - let has block scope. It can be accessed within the block where it is declared.
// - values can be reassigned.
// - Variables declared with let are hoisted on top where they have been declared but not initialized.
// - Variables declared with let can not be redeclared in same scope;

let age2 = 10;
function validate2(age){
    let status;
    if(age<18){
       let status = "invalid";
       console.log("Let Inside: "+status); //Correct result
    }
    console.log("Let Outside: "+status); //Incorrect result
}
validate2(age2);

// const:
// - const has block scope.
// - values can not be reassigned.
// - hoisted on top where they have been declared but not initialized.
// - const can not be redeclared in same scope;

const age3 = 10;
function validate3(age){
    const status = "valid";
    if(age<18){
        const status = "invalid";
    //    status = "invalid"; //error as can not be reassigned
        console.log("Const Inside: "+status); //correct result
    }
    console.log("Const Outside: "+status); //incorrect result
}
validate3(age3);


// Limitations:
// -var can lead to unexpected behavior due to its function-scoping and hoisting.
// -let and const are not hoisted until their declaration, and using them before declaration results in error.
// -While const prevents reassignment, it does not make objects or arrays immutable. The properties of objects or elements of arrays can still be modified.





