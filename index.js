$(document).ready(function(){
    $(".text").keypress(function(){
        let count = document.getElementsByClassName("text")[0];
        let thing = count.value;
        let length = thing.length;
        console.log(length);
        document.getElementsByClassName("left")[0].textContent =  length;
        document.getElementsByClassName("right")[0].textContent = 50 - length;
        if(length === 50){
            alert("Maximum Limit reached !!");
        }
    });
});