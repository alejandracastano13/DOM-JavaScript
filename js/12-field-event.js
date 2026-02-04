const userName = document.querySelector(".campo__field---user-name");
const userPhone = document.querySelector(".campo__field--email");
const userEmail= document.querySelector(".campo__field--message");
const userMessage = document.querySelector(".campo__field--email");

// userName.addEventListener("input",(e)=>{
//     console.log(e.target.value);
// });
// userPhone.addEventListener("input",(e)=>{
//      console.log(e.target.value);
// });
// userEmail.addEventListener("input",(e)=>{
//      console.log(e.target.value);
// });
// userMessage.addEventListener("input",(e)=>{
//      console.log(e.target.value);
// });

// REFACTOTORING

userName.addEventListener("input", readText)
userPhone.addEventListener("input", readText)
userEmail.addEventListener("input", readText)
userMessage.addEventListener("input", readText)

function readText (e){
    console.log(e.target.value)
}
