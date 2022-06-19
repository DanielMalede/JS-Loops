// function printLastName(myArray) {
//     myArray.forEach(daniel => {
//         if (daniel.age>18) {
//             console.log(daniel.firstName); 
//         }
//         else{
//             console.log(daniel.LastName);
//         }
        
//     });
// }
// let inputt = {
//     age:21,
//     LastName: "msdo",
//     firstName:"vnjke"
// }
// let inputt1 = {
//     age:16,
//     LastName: "msdo",
//     firstName:"vnjke"
// }
// printLastName([inputt,inputt1])


// let allFiveClass = document.getElementsByClassName("sameSame")
// for (const iterator of allFiveClass) {
//     console.log(iterator);
// }

// function changeColor() {
//     let sameSameButDifferent = document.getElementsByClassName("sameSameButDifferent")
//     for (const iterator of sameSameButDifferent) {
//         iterator.style="color:blue"
//         iterator.innerText = "hello"
//     }
// }

// let h3_line = document.getElementById("h3_line")
// let newObject = {
//     myName:"daniel",
//     myLastName:"malede",
//     myPhoneNumber:"052-473-5905",
//     myAddress:"Ben Gavriel",
// }
// for (let key in newObject) {
//     h3_line.innerText += `${key}:${newObject[key]}`+'\n'
// }
let userInput1 = document.createElement("input")
document.body.append(userInput1)
let BTN = document.createElement("button")
document.body.append(BTN)
BTN.innerText= "clack me"
let h1_line = document.createElement("h1")
document.body.append(h1_line)
let newObject = {
    myName:"",
    myLastName:"",
    myPhoneNumber:"",
    myAddress:"",}
let array = []
for (let key in newObject) {
    array.push(key);
}   
let counter = 0;
BTN.onclick=()=>{
    newObject[array[counter]] = userInput1.value;
        h1_line.innerText+= `${array[counter++]} : ${newObject[array[counter]] } \n`
        console.log(newObject);
}

   


