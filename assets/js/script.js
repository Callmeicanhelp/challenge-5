const time_div = $("#currentDay")
time_div.text (moment ().format ("dddd, MMMM DO, m"));

const nineAm = $("#9am")
const tenAm = $("#10am")
const elevenAm = $("#11am")
const twelvePm = $("#12pm")
const onePm = $("#1pm")
const twoPm = $("#2Pm")
const threePm = $("#3pm")
const fourPm = $("#4pm")
const fivePm = $("#5pm")

var timeArray = [
    nineAm,
    tenAm,
    elevenAm,
    twelvePm,
    onePm,
    twoPm,
    threePm,
    fourPM,
    fivePM
]


let textArea=$(".text-area")
// console.log(textArea.val());

let button = $("#save_button")

function getFromLocalstorage() {
    textArea.text = localstorage.getItem("")
}

function init() {
    getFromLocalstorage()

for (let i = 0; i < timeArray.length; i++) {
    const element = timeArray[i];
    //console.log(element);
    $(element).on("click", function(event){
        //console.log(event.target.className);
        if(event.target.className == "col-mb-2 save_button") {
            //console.log("click");
            var eventBlock = $(event.target).siblings()
            //console.log(eventBlock[1].value)
            var timeKey = $(event.target).parent().parent().attr("id")
            // console.log(timeKey)
            localStorage.setItem(timeKey, eventBlock[1].value)
        }
    })
    // $("#" + timeKey).children().children().siblings();
    console.log($("#" + timeKey).children().children().siblings())
    localStorage.getItem(timeKey)

    //use timeArray instead of timeKey
}
}

init()