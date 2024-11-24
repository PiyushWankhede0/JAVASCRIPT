
// here we selected all btn from the box and save in (block)
let block = document.querySelectorAll('.btn');


// player0  is playing first 
let Player0 = true;


// this is the pattern of winning condition 
const myarr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];


// want to reset the game by button to make empty the buttons 
// but instant of that i refresh the webpage by clicking the button 


let reset = document.getElementById("reset");
reset.addEventListener("click" , ()=>{
    location.reload();
})

// we select the blocks element one by one from (btn)
// and when we click on every (btn) we can get the value we want 
let click =  block.forEach((btn) => {

    // for (let res of block){
    //     let reset = document.getElementById("reset");
    //     reset.addEventListener("click" , ()=> {
    //      btn.innerText = "";
    //      Player0 = true;
    //      click();
    //     })
    //     }

   btn.addEventListener("click", () => {
        // console.log("cliked")

        
     


        // here we get the value of each button 

        // if player one is playing the value is 0 
        if (Player0) {
          
            btn.innerText = "O"
            btn.innerText.className = "char"
            
            Player0 = false;
          
        }

        // here player two is playing and value is x 
        else {
            btn.innerText = "X"
            Player0 = true;

        }

        // after putting one value in one box we have prevent to get another value in that box
        btn.disabled = true;



        winner();


       
        
           
            
            


    })
})


// we give the array element one by one in obj of (pattern)
const winner = () => {
    for (let pattern of myarr) {
        // console.log(pattern);


       

        // we choose all buttons and from that we get 0th 1st and 2nd index value 
        // to conform the pattern of winning 
        let first = block[pattern[0]].innerText;
        let second = block[pattern[1]].innerText;
        let third = block[pattern[2]].innerText;

        // apply the condition it will start when index in nonempty

        if (first != "" && second != "" && third != "") {


            // condition for conferming all value are same or not 
            if (first === second && first === third) {
                let winnername = document.getElementById("winner")


                // we are giving the winner name 

                winnername.innerText = "Winner is " + third


                // here we disable the input from user when winner is difined
                for (let btn of block) {
                    btn.disabled = true;
                }

            }



        }


    }
};





