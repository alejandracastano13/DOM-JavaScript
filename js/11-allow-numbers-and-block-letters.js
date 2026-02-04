
document.querySelector(".campo__field").addEventListener("keydown", (e) => {
    if(
        e.key === "Backpace"||
        e.key === "Tab"||
        e.key === "Enter"||
        e.key === "ArrowLeft"||
        e.key === "ArrowRight"

    ){
        return;
    };
    if(e.key < "0" || e.key > "9"){
        e.preventDefault();
        console.log("solo se permiten numeros");
    }
});