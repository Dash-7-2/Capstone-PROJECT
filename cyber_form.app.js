var timer=document.getElementById("timer");
var time = 10;
var timerId;

function startTimer() {
    time = 10;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./index.html";
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();

function submitButton() {

    const  userAns = document.getElementById("AF3");
   
        if (userAns.checked) {
            alert("You need help! Click OK to continue");
            window.location.href = 'https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety#:~:text=%20Some%20general%20triggers%3A%20%201%20Adopt%20cognitive,meals%2C%20getting%20enough%20sleep%2C%20and%20staying...%20More%20';

        } 
        else {
            alert('You have been affected not very greatly or not at all by cyber bullying. But if you need help, go to our what you can do page.');
            location.href = './what_you_can_do.html';

        }
    
    
}









