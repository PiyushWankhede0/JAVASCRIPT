


function submit(){
var input = document.getElementById("input");
var submit = document.getElementById("create");
// let display = document.getElementById()
var newtask = document.getElementById("newtask");
const  task = document.createElement("p");

task.className = "task"

var inputval = input.value;

newtask.prepend(task);

if(inputval!==''){

task.textContent=inputval;
}
else{
    alert("input needed!")
    task.textContent=''
}


}
// alert("jsdbkj")
// const  delet = document.createElement("button");
// delet.className="btn"
// delet.onclick.del();
// delet.textContent="delet"
// task.append(delet);

// const  update = document.createElement("button");
// update.className = "btn"
// delet.onclick.cre();
// update.textContent="update"
// task.append(update)

// let delet = task.onclick();

// var del = document.getElementsByClassName(task);
// var  delet = onclick()
// function delet(){
//     alert("kjhkj")
// }










// document.addEventListener("kahipan", () => {


//     var submit = document.getElementById("create");



//     const input = document.getElementById("input");
//     // const submit = document.getElementById("create");
//     // let display = document.getElementById()
//     const newtask = document.getElementById("newtask");
//     const task = document.createElement("p");

//     submit.addEventListener(onclick, () => {

    

//         task.className = "task"

//         const inputval = input.value;

//         newtask.after(task);

//         if (inputval !== '') {

//             task.textContent = inputval;
//         }
//         else {
//             alert("input needed!")
//         }
//     })

// })






