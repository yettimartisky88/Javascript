console.log ("Halo Lubuklinggau ! External JS")

document.getElementById('heading2') .innerHTML = "Tobe D Winner by Learning JS";
document.getElementById('heading3') .innerHTML = " Learning JavaScript ";
document.getElementById('heading4') .innerHTML = " Hari ke 3 ";
var name ="John";
console.log(name);

var lastName ="Doe";
console.log(lastName);

var age = 30;
console.log(age);

var fullName = name +' '+lastName;
console.log(fullName);

var job ="Trainer";
console.log(job);

var bio =" My name is " + " " + fullName + " , " +"my age is" + " " + age + " , " + "I'm doing for life as" + " " + job;
console.log(bio);

/** Penambahan */

var x = parseInt('5');
var y = parseInt('10');
var z = x + y;
var w ="a = " + x + y;
console.log(z);
console.log(w);

/** Perkalian */
var a = 5;
var b = 10;
var c = a*b;
console.log(c);

/**
 * == equal to value
 * == equal to value & equal to tyoe
 * != not equal
 * !== not equal value or not equal type
 * > greater than.
 * < less than.
 * >= greater than or equal to
 * <= small than or wqual to
 * ? ternary operator
 */

 /**
  * == equal to value
  * *&& and
  * || or
  * ! not
  */

  /** OF ELSE STATEMENT */

  var name = "John";
  var age = 30;
  var isYoung = "Yes";

  if (isYoung=="No")
    { console.log(name + " he still young ")}
  else 
    { console.log ("He is mature enough"); }

var hour = 18;
if (hour <=18) {
    console.log("Yes");
} else {
    console.log("No");
}

// Operatot Ternary.
var car ="black";
if (car == 'red' ? console.log("is my car") : console.log ("is not"));
car =='red'? console.log("is my car") : console.log("is not");

/** Tipe Data */
    
// Data Primitive (Not Object)
/** 
 * 1. Number: Float, Decimal, integer.
 * 2. String: Char, Text.
 * 3. Boolean: True dan False
 * 4. Undefinded: Var yang belum memiliki nilai.
 * 5. Null: Non-existent, memiliki nilai -> null.
 * */

 /** Debugging Tools
  * 1. console.log(),
  * 2. alert(),
  * 3. prompt ().
  */

  //var name = prompt("What is your name")  
  //console.log(name);

  var name = prompt ("what is your name")
  alert (name);
  console.log(name);

  /** SWITCH CONDITION */

  var job ='Gojek';

  switch(job) 
  {
        case 'Trainer':
            console.log('John is Trainer');
            break;
        case 'Driver':
            console.log('John is Driver');
            break;
        case 'Doctor' :
            console.log('John is Doctor');
            break;
        default:
            console.log('Not all');

  }