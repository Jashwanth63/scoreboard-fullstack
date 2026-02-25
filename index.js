let home_score = document.getElementById("home-total-score")
let guest_score = document.getElementById("guest-total-score")

function do_math(element, score_to_add){
    let score = Number(element.textContent)
    score += score_to_add
    element.textContent = score
}

function add_one(team){
    let score_to_add = 1
    if(team == "home"){
        do_math(home_score, score_to_add) 
    }
    if(team == "guest"){
        do_math(guest_score, score_to_add)
    }
}

function add_two(team){
    let score_to_add = 2
    if(team == "home"){
        do_math(home_score, score_to_add) 
    }
    if(team == "guest"){
        do_math(guest_score, score_to_add)
    }
}

function add_three(team){
    let score_to_add = 3
   if(team == "home"){
        do_math(home_score, score_to_add) 
    }
    if(team == "guest"){
        do_math(guest_score, score_to_add)
    } 
}

function reset_score(){
    home_score.textContent = 0
    guest_score.textContent = 0
}