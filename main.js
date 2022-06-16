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

function changeColor() {
    let sameSameButDifferent = document.getElementsByClassName("sameSameButDifferent")
    for (const iterator of sameSameButDifferent) {
        iterator.style="color:blue"
        iterator.innerText = "hello"
    }
}