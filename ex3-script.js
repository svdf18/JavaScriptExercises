window.addEventListener("load", start);

function start(){
    console.log("start");
    document.querySelector("#orange_container").classList.add("move");
    document.querySelector("#orange_container").addEventListener("click", paused);
    document.querySelector("#orange_sprite").addEventListener("click", jump);
}

function paused(){
    console.log("paused");
    document.querySelector("#orange_container").removeEventListener("click", paused);
    document.querySelector("#orange_container").classList.add("paused");
}

function jump(){
    console.log("jump");
    document.querySelector("#orange_sprite").removeEventListener("click", jump)
    document.querySelector("#orange_sprite").classList.add("jump");
}



