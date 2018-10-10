var x = 0;
alert("HAPPY BIRTHDAY SIVAN!")
var intervalID = setInterval(function () {

  document.querySelectorAll('*').forEach(e=>
    e.style.background='#'+Math.floor(Math.random()*16777215).toString(16)
  )

   if (++x === 30) {
       window.clearInterval(intervalID);
       prompt("Make a wish")
   }
}, 200);
