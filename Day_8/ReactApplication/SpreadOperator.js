let ages = [23,24,25,26];
let salary = [1000,2000,3000,4000];
let abc = [ages,salary];
console.log(abc);                       //[ [ 23, 24, 25, 26 ], [ 1000, 2000, 3000, 4000 ] ]

//FlatMap in Java
let abc1 = [...ages,...salary];
console.log(abc1);                      // [
                                        //     23,   24,   25,  26, 
                                        //     1000, 2000, 3000, 4000
                                        // ]        