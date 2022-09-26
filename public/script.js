var firstClick = false;

const showJoke = () => {
    const punchlineElement = document.getElementById("punchline");
    punchlineElement.style.display = "block";
    firstClick = true;

    const buttonElement = document.getElementById("button");
    buttonElement.style.display = "none";
}

const nextJoke = () => {
    if(firstClick == true){
        window.location.reload();
    }
}