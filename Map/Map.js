//Why you need Map in JavaScript?

// Map is a collection of keyed Data items, just like an object.But The main different is Map __allow keys of any data types__.Method and propertyies are:new Map().map.map.set(key,value) store the values by the keys.

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Map() constructor>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 1=> Difinition
// The map() constructor create a Map object.

// 2=>Syntax:
// new Map()
// new Map(iterable)
// if use only Map() given a types Error.
// note:Map() constructed only with new, Wihtout new throw a TypeError.

// 3.Paramertes
// An Arrray and other iterable object with the elements key-value pairs(for example -[["a",1],["b",2]] each value are add a new Map())

//4.Example
// How are create a new Map?.

// const map1 = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ]);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Map.prototype.clear()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 1.Difinitions
// The clear() method of map object remove all elements form this map().

//let'see

//first of all create a  Map becuse use a many time then we store a one time in map1 varibles and use many times

//create a new Map instance
const map1 = new Map();

//Add key-value pair to the Map
map1.set("bar", "bar");
map1.set(1, "foo");

//excutes this map
console.log(map1);

//remomove all elements in map.
map1.clear();
console.log(map1);

//2.sntax:-
// clear()

//3.Paramertes
//None.

//4.Return value
// None(undfined).

//Example
//let's see the more example to more understanding.

//add a elements
map1.set("bar", "bar");
map1.set(1, 1);

//use the has method to check the elements in myMap persent or not.
console.log(map1.has("bar")); //true

//remove all elements is here.
map1.clear();

//check one agians this time answer is false because line number 84 remove all elemetns in myMap
console.log(map1.has("bar")); //false

//<<<<<<<<<<<<<<<<<<<<<<<<<<Map.prototype.delete()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//The delete() method of Map instance removes the specified elements form this map by keys.

map1.set("a", 1);

console.log(map1.delete("a"));

console.log(map1.has("a"));

console.log(map1);

//2.syntax:-
//mapInstance.delete(key)

//3.Paramertes
// The key of the object remove form the Map object.

//4.Return value
//true if an elements existed in Map object,otherwise false.

//5.Example
// Using this method for delete elmenets in Map Object

map1.set("bar", "foo");

//delete the "bar" elements (means actully delete specified key in the Map Object)
console.log(map1.delete("bar")); //true
//Successfully removed.

//check the key exists and not
console.log(map1.has("foo"));

console.log(map1);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Map.Prototype.entries()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//1.Difintion
//The entries() method of Map object instance return a Map iterator Object that constains [key,value]pair for each elemetns in this Map object insertion order.

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1.entries();

console.log(iterator1);

console.log(iterator1.next().value); //['0','foo']

console.log(iterator1.next().value); //[1,'bar']

//2.syntax:-
// entries()

//3.Paramertes
// None

//4.Return value
//A new iterables iterator object.

//5.Example
//let's see the example to more understanding
map1.set("0", "foo");
map1.set(1, "bar");
map1.set({}, "baz");

const mapIter = map1.entries();

//Excutes all key-value pair is here
console.log(mapIter.next().value);
console.log(mapIter.next().value);
console.log(mapIter.next().value);

//<<<<<<<<<<<<<<<<<<<<<<<Map.prototype.forEach()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//The forEach method of object instance excutes a provide function once for each key/values pair in this map to insertion order.

// Let's see how it is  a work
function logMapElements(value, key, map) {
  console.log(`m[${key}],[${value}]`);
}

new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);

//2.synatax:
// forEach(callbackFn)
// forEach(callbackFn,thisArg)

//3.Parameters
//callbackFn
// A function excutes for each entry in this Map.The function call with the following agruments.

//Value
// value for each iteration.

// key
// key for each iteration.

//map
//The map being iterate.

//thisArg
//A value to use as this when exctuing callbackFn.

//Return value
//None(undefined)

//<<<<<<<<<<<<<<<<<<<<<<<Object.prototype.get()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//1.Difinition
//The get method() of Map object to retrieve the value associated with a specified key.The method allow to acces value for the given keys.

//let's see

//Add key-value pair to the Map
map1.set("name", "Alice");
map1.set("age", 30);

//retrieve the value
console.log(map1.get("name")); //Alice
console.log(map1.get("age")); //30
console.log(map1.get("job")); //undefined becuase job is a not undefined

//2.Syntax:-
// get(key)

//3.Paramerters
// Key
// The key of element to return the map object.

//4.Return value
//Tha elements associated with  the specified keys .if not a found to map return undefined.

//Example
//see the eaxmple to more understanding
const arr = [];
map1.set("bar", []);

map1.get("bar").push("foo");

console.log(arr); //["foo"]
console.log(map1.get("bar")); //["foo"]

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<Map.Prototype.has()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//1.Difinition
// The has() method of Map return true when the specified key find in this Map otherwise return false.

//let's see
map1.set("a", "apple");
console.log(map1.has("a"));

//syntax-:
// has(key)

//Paramertes
// key
// The key of the elements to test for presence in the Map object.

//Return value
// true if the specified key exist in the given Map,does not exist then return false.

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<Map.prototype.set()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//1.Difiniton
//The set() method of Map adds or update an entry in this map with the specified key and value.

map1.set("b", "boy");
console.log(map1);

//syntax:-
// set(key,value)

//parameters
//keys
//The keys(any data types keys allow) of the element to add the Map object.

//value
//The value(any data types value are allow) of the element to add the Map object.

//Return value
//The Map Object.

//Example
// let's see the example to better understanding
const map2 = new Map();

console.log(map2.set("a", "1").set("b", "2").set("c", "3"));

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Map.prototype.keys()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//The keys() method as a its entries() method one differece the key() method return only elements key.

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<Map.prototypes. values()>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//The values() method as a its entries() method one differece the value() method return only elements values.

// <<<<<<<<<<<<<<<<<<<<<<<<<<<Map.prototype.[symbol.iterator]()>>>>>>>>>>>>>>>>>>>>>
//The [symbol.iteartor]() method as a its work like entries() method.

// =================================================================================
// Note:first read Map , after read WeakMap.
//                                    WeakMap
//1.Difinitions
//A WeakMap is a collection of key/value pairs whose keys must be objects or non-registered symbols,with values of any arbitary JavaScript type,and which dose not create strong references to its keys.

//Why you call a weakMap?
// comparad to  a Map, A weakMap dose not hold the reference to  the object used as a keys.

//1.constructor
// The weakMap() constructor create weakMap objects.

//snytax:-
//new WeakMap()
//new WeakMap(iterable)

//Note:weakMap() can only be constructed wih new.

//Example
//First of all solve this example yourself
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");

console.log(wm1);
console.log(wm1.get(o1));

console.log(wm2);
console.log(wm2.set(o1, o2));
console.log(wm2.set(o3, undefined));
console.log(wm2.set(wm1, wm2));

console.log(wm2.get(o2)); //undefined
console.log(wm2.get(o3)); //undefined

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (even if the value itself is 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false

//2.<<<<<<<<<<<<<<<<<<<<<<WeakMap.Prototype.delete()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//The delete method of WeakMap() remove all specified elements to the weakMap.

const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, 42);

console.log(weakmap1.delete(object1));
// Expected output: true

console.log(weakmap1.has(object1));
// Expected output: false

//3.<<<<<<<<<<<<<<<<<<<<WeakMap.prototype.get()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//The get() method of weakMap instance return a specified elements in form this Map

weakmap1.set(object1, 42);

console.log(weakmap1.get(object1));
// Expected output: 42

console.log(weakmap1.get(object2));
// Expected output: undefined

// 4.<<<<<<<<<<<<<<<<<<<<WeakMap.Prototype.has()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//The has method of weakMap cheak elements persence  to the given map.It is work like to Array includes method

weakmap1.set(object1, "foo");

console.log(weakmap1.has(object1));
// Expected output: true

console.log(weakmap1.has(object2));
// Expected output: false

// 5.<<<<<<<<<<<<<<<<<<<<<<<<<WeakMap.prototype.set()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//The add() method of weakMap add a new  element specified key and value to this Map

weakmap1.set(object1, "foo");
weakmap1.set(object2, "bar");

console.log(weakmap1.get(object1));
// Expected output: "foo"

console.log(weakmap1.get(object2));
// Expected output: "bar"
// ===================================================================================