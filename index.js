//box1
document.getElementById("continueactualbox").addEventListener("mouseover",function()
{
    document.getElementById("rightarrow").style.display = "block";
    document.getElementById("leftarrow").style.display = "block";
    document.getElementById("rightarrow").addEventListener("click",function(){
        Scroll(document.getElementById("continueactualbox"),'right',25,100,20);
    })
    document.getElementById("leftarrow").addEventListener("click",function(){
        Scroll(document.getElementById("continueactualbox"),'left',25,100,20);
    })
});
document.getElementById("continueactualbox").addEventListener("mouseleave",function()
{
    document.getElementById("rightarrow").style.display = "none";
    document.getElementById("leftarrow").style.display = "none";
});
//box2
document.getElementById("continueactualbox1").addEventListener("mouseover",function()
{
    document.getElementById("rightarrow1").style.display = "block";
    document.getElementById("leftarrow1").style.display = "block";
    document.getElementById("rightarrow1").addEventListener("click",function(){
        Scroll(document.getElementById("continueactualbox1"),'right',25,100,20);
    })
    document.getElementById("leftarrow1").addEventListener("click",function(){
        Scroll(document.getElementById("continueactualbox1"),'left',25,100,20);
    })
});
document.getElementById("continueactualbox1").addEventListener("mouseleave",function()
{
    document.getElementById("rightarrow1").style.display = "none";
    document.getElementById("leftarrow1").style.display = "none";
});
//box3
document.getElementById("continueactualbox3").addEventListener("mouseover",function()
{
    document.getElementById("rightarrow2").style.display = "block";
    document.getElementById("leftarrow2").style.display = "block";
    document.getElementById("rightarrow2").addEventListener("click",function(){
        Scroll(document.getElementById("continueactualbox3"),'right',25,100,20);
    })
    document.getElementById("leftarrow2").addEventListener("click",function(){
        Scroll(document.getElementById("continueactualbox3"),'left',25,100,20);
    })
});
document.getElementById("continueactualbox3").addEventListener("mouseleave",function()
{
    document.getElementById("rightarrow2").style.display = "none";
    document.getElementById("leftarrow2").style.display = "none";
});
//function
function Scroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
//otherjavacode
window.addEventListener("scroll",function(){
    if(this.scrollY==0)
    {   this.document.getElementById("navbar").style.transition = "450ms"
        document.getElementById("navbar").style.backgroundColor = "transparent";
       
    }
    else
    {     
        document.getElementById("navbar").style.backgroundColor = "black";
        this.document.getElementById("navbar").style.transition = "450ms"
    }
})
document.getElementById("imagehero").addEventListener("ended",e=>{
    document.getElementById("imagehero").setAttribute("src","");
    document.getElementById("imagehero").setAttribute("poster","Resources/newnew.jpg");
    document.getElementById("audiooff").style.display = "none";
    document.getElementById("audioon").style.display = "none";
})
document.getElementById("audiooff").addEventListener("click",function(){
    document.getElementById("imagehero").muted = false;
    document.getElementById("audioon").style.display = "block";
    document.getElementById("audiooff").style.display = "none";

})
document.getElementById("audioon").addEventListener("click",function(){
    document.getElementById("imagehero").muted = true;
    document.getElementById("audioon").style.display = "none";
    document.getElementById("audiooff").style.display = "block";

})
  

   


