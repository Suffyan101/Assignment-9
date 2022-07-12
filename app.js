// Question 1
// document.getElementById("Q1").innerHTML = new Date()

// Question 2
// var a = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
// var b =  new Date().getMonth();
// console.log(b)
// var c = a[b]
// alert(c)

// Question 3
// var b = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var a  = new Date().getDay()
// alert(b[a])


// Question 4

// var a = new Date().getDay()

// if(a === 0 || a === 6){
//     document.write("Its Fun Day..!")
// }
// else{
//     document.write("Working Day")
// }

// Question 5

// var a = new Date().getDate();

// if(a<=15){
//     document.write("First Fifteen days of the month")
// }
// else{
//     document.write(a)
// }


// Question 6

// var a = new Date().getTime();
// var b = a/1000/60
// document.write("Current Date: "+ new Date()+"<br>")
// document.write("Elapsed milliseconds since January 1, 1970: "+ a+"<br>");
// document.write("Elapsed minutes since January 1, 1970: "+ b);

// Question 7

// var a = new Date().getHours()

// if(a<=12){
//     document.write("It's "+ a + ":00 AM")
// }
// else{
//     document.write("It's "+ a + " PM")
// }

// Question 8

// var laterDate = new Date("12 31 2022")
// console.log("later Date: "+laterDate)

// Question 9

// var a = new Date("06 18 2015").getTime();

// var b = new Date().getTime();

// var c = b - a;

// var d = c/1000/60/60/24
// var e = d.toFixed()
// document.write(e+" days have passed since 1st Ramadan, 2015")


// Question 10

// var a = new Date("01 01 2015")
// document.write("On refrence date "+ a+ "<br>")
// var b = a.getTime()
// var c = new Date().getTime()
// var d = c - b
// var e = d.toFixed()
// document.write(d+ " Seconds had passed since begining of 2015")


// Question 11

// var a = new Date();
// var b = new Date().getHours();
// document.write("Current date: "+ a + "<br>")
// document.write(b+" hour ago, it was "+ a)

// // Question 12
// var a= new Date()
// var b = new Date("07 07 1922")
// document.write("Current Date: "+a+"<br>")
// document.write("100 years back, it was "+ b)

// Question 13 
// function myfunction(){
//     var a = new Date().getTime();
//     var b = document.getElementById("demo").value;
//     var c = new Date(b).getTime();
//     var d = a-c
//     var e = d/1000/60/60/24/365
//     var f = new Date().getFullYear()
//     var g = f - h;
//     var h = e.toFixed()
//     document.getElementById("demo1").innerHTML = "Your age is "+ h
//     document.getElementById("demo2").innerHTML ="Your birth year is "+ g
// }

// Question 14

// function billgenerate(){
    
// var a = document.getElementById("demo").value;
// var b = document.getElementById("demo1").value;
// var c = document.getElementById("demo2").value;
// var d = document.getElementById("demo3").value;
// var e = 350
// var f = e + parseInt(c*d)
// document.getElementById("demo4").innerHTML = "Customer Name: "+a
// document.getElementById("demo5").innerHTML = "Month: "+b;
// document.getElementById("demo6").innerHTML = "Net Amount Payable (Within Due Date): "+ c*d
// document.getElementById("demo7").innerHTML = "Late payment surcharge: "+e;
// document.getElementById("demo8").innerHTML = "Gross Amount Payable (After Due Date): "+ f


// }
