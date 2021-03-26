
document.getElementsByClassName("content_challenge__post-more")[0].addEventListener('click', function() {
    document.getElementsByClassName("content_challenge__post-texts")[0].classList.toggle("content_challenge__post-notexpanded")    
})

document.getElementsByClassName("content_banner")[0].addEventListener('click', function () {
    window.open('https://www.bit.ly/perempuanmusisiidolaku', '_blank');
})

// Set the date we're counting down to
var countDownDate = new Date("Apr 4, 2021 23:59:58").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

var day = days < 10 ? `0${days}` : days;
var hour = hours < 10 ? `0${hours}` : hours
var minute = minutes < 10 ? `0${minutes}` : minutes;
var second = seconds < 10 ? `0${seconds}` : seconds

    document.getElementById("days").innerText =  day;
    document.getElementById("hours").innerText =  hour;
    document.getElementById("minutes").innerText =  minute;
    document.getElementById("seconds").innerText =second;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);



window.onload = function () {
  console.log("hallo");
  console.log(window.location);
}

document.getElementById("gotoplayer").addEventListener('click', function () {
  location.href = `window.location.origin/PBIQrteUrP.html`;
})