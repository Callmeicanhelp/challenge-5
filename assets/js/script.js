const time_div = $("#currentDay")

time_div.text (moment ().format ("dddd, MMMM DO, m"));

let textArea=$(".text-area")
console.log(textArea.val());

let button = $("#save_button")
button.on("click", function(){
    console.log("button click")
    localStorage.setItem(1, textArea.val())
});

function getFromLocalstorage() {
    textArea.text = localstorage.getItem("1")
}
getFromLocalstorage();