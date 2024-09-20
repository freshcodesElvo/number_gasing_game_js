let get_started_btn = document.querySelector(".get-started-btn");

let input_box;
let submit_btn;
let computer_random_number;
let upper_bound_number;
let upper_bound_btn;
let upper_bound_body;
let upper_bound_input_box;
let main_game_container;
let check_btn;

upper_bound_function()

function submit_btn_handler(){

    submit_btn.addEventListener("click", ()=>{
        input_box = document.querySelector(".input-box").value;
        input_box = Number(input_box)
        console.log(typeof(input_box))
    })

}
function upper_bound_function(){
    get_started_btn.addEventListener("click", ()=>{
        document.querySelector(".intro").style.display = 'none'
        upper_bound_body = document.createElement("div");
        upper_bound_body.classList.add("upper-bound-div");
        upper_bound_body.innerHTML =
        `
            <h2>Enter your upper bound</h2>
            <input class="upper-bound-input-box" type="number">
            <button class="get-started-btn upper-bound-btn">Enter</button>
        `
        document.querySelector("main").appendChild(upper_bound_body);
        upper_bound_btn = document.querySelector(".upper-bound-btn");
        main_game()               
    })

}
function main_game(){
    upper_bound_btn.addEventListener("click", ()=>{
        upper_bound_input_box = document.querySelector(".upper-bound-input-box").value;
        upper_bound_input_box = Number(upper_bound_input_box)
        computer_random_number = Math.floor(Math.random()*upper_bound_input_box)+1;
        console.log("random number = ", computer_random_number);

        if(upper_bound_input_box !=''){
            upper_bound_body.style.display= 'none'
            main_game_container = document.createElement("div");
            main_game_container.classList.add("main-game");
            main_game_container.innerHTML=
            `
                <h1>Guess the number</h1>
                    <p class="score">Score:12</p>
                    <input class="input-box" type="number">
                    <button class="check-btn">Check</button>
                    <p class="verdict">Correct!!</p>
            `
            document.querySelector("main").appendChild(main_game_container)
            
            check_btn = document.querySelector(".check-btn")
            play_game()

        }
        else{
            prompt("wee")
        }
       
    })
}
function play_game(){
    check_btn.addEventListener("click", ()=>{
        input_box = document.querySelector(".input-box").value;
        input_box = Number(input_box)

        if(input_box == computer_random_number){
            console.log("you got it")
        }
        else{
            if(input_box> computer_random_number){
                console.log("you are above")
            }
            else{
                console.log("you are bleow")
            }
        }
       
    })    
}
