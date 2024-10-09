                                  Data Types In JS
Data types in Javascript=> Data types in js describe different data or kind of types of data you will be work with and storing  in varibles.understanding and correctly using these data types is cirucal for writing effectiy code.If  data is does not sorted in proper format , it can lead  to unexpected result and error to your code.



explain with example to better understanding :-
Without Data types
let age1 = "11";//this is a string ,not a Number.
age1 = age1+1;//  add the number 1(numricle addtions)

console.log(age1);//"111" 
//this is a givene   unexpected result because javascript convert 1 to  string=>"11"+"1"(number become string) ,output is "111".

//With Data types

let age2 = 11;//this is number.
age2=age2+1;// add a number 1(numricle addtions)

console.log(age2);//12 That is a correct output.

//

                                 Data-Types
                                   |
                      _____________|_______________  
                      |                            |
                     Primitve Data types            Non-primitve Data types
                      |                              |
                      Number                        Object
                      String                        Array
                      Boolean                       function
                      Symbol
                      Undefined
                      null
                      BigInt    

In JavaScript ,Data types are categorized into primitive and non-primitve data types Here's the difference between them


premitive Data types:
Definations:
The premitive data types is a basic data types.The represnet a single value and immtutable data types.
immtuble means is value is cannot be  changed once they are created.
Types---------
String
Number
Boolean
Symbol
Bigint
Undefined
Null
Example
let name = "John"//string
let age = 25;//Number
let isStudent = true;//Boolean


Behavior:
When you assin a primive value to a varible , it directly stores the value.

if you change the value of primitve types , the new value dose not effect the original beacuse the are stored separatley.
prmitive types 
let x = 10;
let y =x;
 y= 20;
console.log(x);
console.log(y);


// non-primitve (Reference) Data types:
// Definition:Non-primitve data types are more comlpex and store colleactions of values or more complex entities,They are mutable, meaning can be changed a value once created.

// Behavior:
// Non-primitve types are store by reference , not by value.This means that when you assing non-primitve value to a varible you are actullay
//  assing  a reference  to that value in memory.

// if you changes the value of a non-primitve typoes, it is effects  all refrence to that value.


let arr1 = [1,2,3];
let arr2 = arr1;
arr1.push(4);
console.log(arr1);//[1,2,3,4]
console.log(arr2);//[1,2,3,4]

console.log(typeof 1);//number
console.log(typeof 1.1);//number
console.log(typeof "x");//string
console.log(typeof "ASDD");//String
console.log(typeof 12n);//bigInt
console.log(typeof undefined);//undefined
console.log(typeof 0);//number
console.log(typeof null);//Object
console.log(typeof NaN);//Number
console.log(typeof true);//boolean
console.log(typeof false); //boolean
console.log(typeof (1==1));//boolean

