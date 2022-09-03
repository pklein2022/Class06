let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

//Hi Pete
//if you move line 9 to line 6, then it will say Hi John
