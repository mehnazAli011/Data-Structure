//                          What a difference between the set and weakSet

1.The first differene the set and weakSet there value must be objects,not primitve values:
let set1 = new Set();
set1.add([1, 2]); //objects
set1.add("x"); //primitve
console.log(set1);

let ws1 = new WeakSet();
ws1.add([1, 2]); //objects
console.log(ws1);
// ws.add("x");// note:primitve values not accpected in weakSet
console.log(ws1);




2.WeakSet dose not support the iteration and size propeties,its support only add(),delete(),has() methods

let set2 = new Set();
set2.add("1");
set2.add(1);
console.log(set2.size); //2

let iteration1 = set2.keys();

console.log(iteration1.next().value);
console.log(iteration1.next().value);

let ws2  = new WeakSet();
ws2.add({1:2});
ws2.add({1:3});
console.log(ws2.size);//undefined

// let wsiteration1 =ws2.keys();//error

console.log(wsiteration1.next().value);
console.log(wsiteration1.next().value);





3.If it use object as the values ,and there is  a no other reference to that  object-the value remove in memory(and form the set) automatically.

//                   set                                        weakSet
//                    |                                             |
//                 set.add(obj1)                               weakSet.add(obj1)
//                    |                                              |
//          name is reference the obj1                  name is reference the obj1 
                      |                                               |
//              obj1=null;                                      obj1=null;
//                    |
// obj1 is no reference (obj1 remove form set)              obj1 is no reference 
//                                                     (obj1 remove form weakset)
//                    |                                              |
//                 memory----Obj1(but still in memory)         memory (obj1 not  in 
//                                                                   memory)
//              beacuse set storngly hold the reference         beacuce weakset is 
//                                                          weakly hold reference

obj1 = {
  name: "john",
};

let ws = new WeakSet();
ws.add(obj1);
obj1 = null;//overwrite the reference

//obj1 is remove form memory!

let set = new Set();
set.add(obj1);
obj1=null;//this time obj1 remove form the set but still in memory  beacuse this reference this strongly hold the values!
console.log(set.has(obj1));//true





