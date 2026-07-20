
// I. TypeScript -> JS w type-notation:
let name_: string = "Alice";
let age: number = 20;
let isStudent: boolean = true;
let city = "London"; // auto inf.

// II. arrays
let numbers: number[] = [1, 2, 3];
let mixed: (string | number)[] = ["Bob", 25];

// III. objects
interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "John",
    age: 22
};


// IV. functions:
function greet(name: string): string {
    return `Hello &{name}`;
}
console.log(greet("Bob"));

// Basically
// -> ts: javascript with type-notation, needed because js is dynamically typed and type conflicts can break stuff
// -> tsx: ts with html like syntax - used in webdev to avoid this .showElement() and every-single complonenet on the site + 
// much easier to write code since websites are tree-based in a sense of header - menu - stuff - footer etc - html follows this form. 


