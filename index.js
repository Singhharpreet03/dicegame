var randomnumer1= Math.floor(Math.random()*6)+1;
var randomnumer2= Math.floor(Math.random()*6)+1;
// console.log(randomnumer1);
// console.log(randomnumer2);
// if(randomnumer1===1){
//     const img1= document.querySelector(".img1");
//     img1.setAttribute("src","images/dice1.png");  
// }
// else if (randomnumer1===2) {
// const img1= document.querySelector(".img1");
//    img1.setAttribute("src","images/dice2.png");    
// }   
 
// else if (randomnumer1===3) {
//     const img1= document.querySelector(".img1");
//     img1.setAttribute("src","images/dice3.png");      
// }
// else if (randomnumer1===4) {
//     const img1= document.querySelector(".img1");
//     img1.setAttribute("src","images/dice4.png");     
// }
// else if (randomnumer1===5) {
//     const img1= document.querySelector(".img1");
//     img1.setAttribute("src","images/dice5.png");     
// }
 
// else {
//     const img1= document.querySelector(".img1");
//     img1.setAttribute("src","images/dice6.png");     
// }
// //img 2
// if(randomnumer2===1){
//     const img2= document.querySelector(".img2");
//     img2.setAttribute("src","images/dice1.png");  
// }
// else if (randomnumer2===2) {
// const img2= document.querySelector(".img2");
//    img2.setAttribute("src","images/dice2.png");    
// }   
 
// else if (randomnumer2===3) {
//     const img2= document.querySelector(".img2");
//     img2.setAttribute("src","images/dice3.png");      
// }
// else if (randomnumer2===4) {
//     const img2= document.querySelector(".img2");
//     img2.setAttribute("src","images/dice4.png");     
// }
// else if (randomnumer2===5) {
//     const img2= document.querySelector(".img2");
//     img2.setAttribute("src","images/dice5.png");     
// }
 
// else {
//     const img2= document.querySelector(".img2");
//     img2.setAttribute("src","images/dice6.png");     
// }

document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomnumer1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomnumer2+".png");
//title change
if(randomnumer1>randomnumer2){
    const t=document.querySelector("#title");
    t.textContent="🚩Player 1 wins";
}
else if (randomnumer1<randomnumer2) {
    const t=document.querySelector("#title");
    t.textContent="Player 2 wins🚩";
    
} else {
    const t=document.querySelector("#title");
    t.textContent="Draw";
}