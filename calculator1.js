let displayScreeen=document.getElementById("displayScreen");
let answer = document.getElementById("result");

answer.addEventListener("click", ()=>{
    let screenText=displayScreeen.value;
    let sol=eval(screenText);
    displayScreeen.value=sol;
    // console.log(sol); 
    //debbuging purpose
});