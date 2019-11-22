// only works for multiple choice, but that's all we need.
var pollInterval = 1000;
var timeRandomization = 2000;
var buttonClass = "component-response-multiple-choice__option";

window.onload = pollSite;

var lastAnswer;
function pollSite(){
    // check our site again in pollInterval milliseconds plus the time randomization so it looks less like a bot.
    setTimeout(pollSite, pollInterval + Math.random() * timeRandomization);

    // only click if we don't have an answer or if our answer is no longer on the poll.
    if(!lastAnswer || !document.body.contains(lastAnswer)){
        lastAnswer = false;
        var buttons = document.getElementsByClassName(buttonClass);
        if(buttons.length > 0){
            lastAnswer = buttons[Math.floor(Math.random()*buttons.length)];
            lastAnswer.click();
        }
    }
}
