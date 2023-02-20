window.addEventListener("load", start);

function start(){
    console.log("start");
    document.querySelector("#orange_sprite").addEventListener("click", jumpOnce);
    document.querySelector("#orange_sprite").addEventListener("animationend", enableJump);
}

function jumpOnce(){
    console.log("jumpOnce");
    document.querySelector("#orange_sprite").removeEventListener("click", jumpOnce)
    document.querySelector("#orange_sprite").classList.add("jump-once");
}

function enableJump() {
    console.log("enableJump");
    document.querySelector("#orange_sprite").addEventListener("click", jumpOnce);
    document.querySelector("#orange_sprite").classList.remove("jump-once");
}

