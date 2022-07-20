# Javascript Coding Cheat Sheet

## Variables
Declare variable with `let` or `var` to make variables that can be modified.
Declare variable with `const` to make it non-changeable.

### Operations on Variables
`add`: can add numbers similar to math with +. For strings, the + will append them together
```
let myString = "text"
myString = myString + " hello" //this will give you the string "text hello"
```
- For numbers, can add 1 by using ++, or we can add any number by using + or +=
```
let num = 1
num += 1
num = num + 1
num++
++num
```

- Subtract (-), Mulitply (*), divide (/)
- Modulus (%) divides the two numbers and returns the remainder, so 10 % 2 = 0, while 10/2 = 5


## Conditions
booleans are true/false values
Can use the if, else if, else chains
```
if(condition)
{
    
}
else if (condition)
{
    
}
else
{
    
}
```
Operators we can use include: 
| Operation | Function   |
|--|--|
| > ||
| < ||
| >= ||
| <= ||
| == | are equal |
| != | not equal |
| &&  | AND, means if we combine two conditions, BOTH must be true for the whole thing to be true|
| `||`  | OR, means if we combine two conditions, ONLY must be true for the whole thing to be true|


## Arrays
Very large variables that store mutlple values with square brackets []
To get value from an array, call the name of teh array, then [index]. The "first" index number in an array is 0
```
let skittles = ["Lemon", "Orange", "Coffee", "Caramel", "Grape"]
//to get coffee, we access index 2
skittles[2]
```

Arrays can have multiple dimensions as well, so we may need to use extra []
```
let skittles = [["Lemon", 5], ["Orange", 8], ["Coffee",6], ["Caramel",4], ["Grape",9]]
//to get the number of grape skittles:
skittles[4][1]
```

Functions we can call using the dot operator (array.functionName)
| Operation | Purpose   | Example Use |
|--|--|--|
| length | returns how many things are in array (number, not funciotn)| `array.length`|
| push | addes element to end of array | `array.push(2) //add 2 to the end of the array`

## Functions

### Callback Functions

#### ForEach

#### Filter

## Loops

### While Loops

### For Loops

