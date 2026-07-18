/**
 * CRASH COURSE JAVASCRIPT LAB FOR CS STUDENT
 * 
 * Instructions: Fill in the code below each TODO comment.
 * Run the file to verify your logic against the console logs.
 */

// ==========================================
// TASK 1: THE TRIPLE EQUALS & COERCION
// ==========================================

function testCoercion(valA, valB) {
    // TODO: Return an object with two properties:
    // 1. 'loose': the result of comparing valA and valB using loose equality (==)
    // 2. 'strict': the result of comparing valA and valB using strict equality (===)

    const result = {
        loose: valA == valB,
        strict: valA === valB
    };

    return result;
}

console.log("--- Task 1: Equality ---");
console.log(testCoercion(5, "5"));     // Expected: { loose: true, strict: false }
console.log(testCoercion(null, undefined)); // Expected: { loose: true, strict: false }


// ==========================================
// TASK 2: TRUTHY AND FALSY IDENTIFICATION
// ==========================================

function evaluateTruthiness(value) {
    // TODO: Use a standard if/else conditional statement.
    // If the value evaluates as truthy, return the string "Truthy".
    // If the value evaluates as falsy, return the string "Falsy".

    if (value) {
        return "Truthy";
    }
    else {
        return "Falsy";
    }

}

console.log("\n--- Task 2: Truthiness ---");
console.log(evaluateTruthiness([]));        // Expected: "Truthy" (Empty arrays are objects!)
console.log(evaluateTruthiness(""));        // Expected: "Falsy"
console.log(evaluateTruthiness(0));         // Expected: "Falsy"
console.log(evaluateTruthiness({}));        // Expected: "Truthy"


// ==========================================
// TASK 3: RESTRUCTURING ARRAYS (ARROW FUNCTIONS)
// ==========================================

const inventory = [
    { id: 1, name: "Laptop", price: 1200, tags: ["electronics", "work"] },
    { id: 2, name: "Coffee Mug", price: 15, tags: ["kitchen", "home"] },
    { id: 3, name: "Mechanical Keyboard", price: 150, tags: ["electronics", "gaming"] },
    { id: 4, name: "Desk Mat", price: 25, tags: ["home", "work"] }
];

function processInventory(items) {
    // TODO: Write a single functional chain using array methods (.filter and .map).
    // 1. Filter out items that do NOT include the tag "electronics".
    // 2. Map the matching items into a new object containing only 'name' and an 'expensive' boolean.
    //    'expensive' should be true if the price is greater than 500, false otherwise.
    // Hint: Use arrow functions exclusively.

    return items
        .filter(item => item.tags.includes("electronics"))
        .map(item => ({ name: item.name, expensive: item.price > 500 }));
}

console.log("\n--- Task 3: Array Methods ---");
console.log(processInventory(inventory));
/* Expected Output:
[
  { name: 'Laptop', expensive: true },
  { name: 'Mechanical Keyboard', expensive: false }
]
*/


// ==========================================
// TASK 4: VALUE VS REFERENCE MUTATION
// ==========================================

function mutateData() {
    const primitiveNum = 10;
    const originalObject = { score: 90 };

    // TODO 4a: Create a shallow copy of originalObject named 'copiedObject' using the spread operator (...).
    const copiedObject = { ...originalObject }; // Change this

    // TODO 4b: Modify a property inside 'copiedObject'.
    copiedObject.score = 100;

    // TODO 4c: Attempt to reassign primitiveNum to 20 (Observe what error occurs when running it).
    // Note: Wrap it in a try/catch block so the script doesn't crash completely.
    try {
        primitiveNum = 20;
    } catch (error) {
        console.log("error:", error.message);
    }

    return { originalObject, copiedObject };
}

console.log("\n--- Task 4: References ---");
console.log(mutateData());
// Ensure your originalObject score property was NOT mutated by changes to the copy!


// ==========================================
// TASK 5: DYNAMIC BAG OF PROPERTIES (OBJECT MANIPULATION)
// ==========================================

function playWithBags() {
    const dynamicMap = {};

    // TODO 5a: Add a string key "status-code" (with a hyphen) dynamically to the object and set it to 200.
    // Hint: You cannot use dot notation for keys with special characters.
    dynamicMap["status-code"] = 200;

    // TODO 5b: Attach an array directly to a key named 'data'.
    dynamicMap.data = [];

    // TODO 5c: Attach a method (function) named 'summary' that returns a string interpolation:
    // "Status: [status-code] with [data.length] records."
    // Hint: Use traditional function syntax here so 'this' correctly references dynamicMap.
    dynamicMap.summary = function () {
        return `Status: ${this["status-code"]} with ${this.data.length} records.`;
    };

    return dynamicMap;
}

console.log("\n--- Task 5: Dynamic Objects ---");
const myBag = playWithBags();
if (myBag && typeof myBag.summary === 'function') {
    myBag.data = [10, 20, 30];
    console.log(myBag.summary()); // Expected: "Status: 200 with 3 records."
}


// ==========================================
// TASK 6: THE EVENT LOOP & ASYNC/AWAIT
// ==========================================

// Mocking a slow database transaction
const mockDbQuery = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 42) {
                resolve({ id: 42, username: "git_hub_user", role: "admin" });
            } else {
                reject(new Error("User not found"));
            }
        }, 1000); // 1-second background thread simulation
    });
};

// TODO: Convert this into an async function
async function getUserDashboard(userId) {
    console.log("1. Starting transaction...");

    // TODO: Use await to resolve the data from mockDbQuery(userId). 
    // Wrap this operation in a try/catch block to properly trap the Promise rejection.
    // Print "2. Data fetched successfully" inside the try block if it passes.
    // Print the error message inside the catch block if it fails.

    try {
        const data = await mockDbQuery(userId);
        console.log("2. Data fetched successfully", data);
    } catch (error) {
        console.log("Error fetching data:", error.message);
    }

    console.log("3. Transaction completed.");
}

console.log("\n--- Task 6: Asynchronous Control Flow ---");
getUserDashboard(42);
// Expected order of print logs: 
// "1. Starting transaction..."
// "3. Transaction completed." -> (Wait, why does 3 run before 2? Think about the Event Loop!)
// "2. Data fetched successfully"