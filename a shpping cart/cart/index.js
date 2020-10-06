const Heart = document.querySelectorAll('.fa-heart')
const plus = document.querySelectorAll(".fa-plus")
const moins = document.querySelectorAll(" .fa-minus")
var deletebuttons = document.querySelectorAll('.far')
var price =document.querySelector('#ntotal')




Array.from(deletebuttons).map(el=>{
    el.addEventListener("click",()=>{
        el.parentElement.parentElement.remove()
    });
});

Array.from(Heart).map(el=>{
    el.addEventListener("click",()=>{
        el.classList.toggle("like")
    });
});

Array.from(plus).map(el=>{
    el.addEventListener("click",()=>{
        el.nextElementSibling.innerHTML= parseInt(el.nextElementSibling.innerHTML)+1;
        var Total = el.parentElement.previousElementSibling.innerHTML.replace("£","")
        price .innerHTML = parseInt(price.innerHTML.replace("£","")) + parseInt(Total) +"£";
    });
});


Array.from(moins).map(el=>{
    el.addEventListener("click",()=>{
        if (el.previousElementSibling.innerHTML>1) {
        el.previousElementSibling.innerHTML= parseInt(el.previousElementSibling.innerHTML)-1
        var Total = el.parentElement.previousElementSibling.innerHTML.replace("£","")
        price .innerHTML = parseInt(price.innerHTML.replace("£","")) - parseInt(Total) +"£";
    ; }
    });
});