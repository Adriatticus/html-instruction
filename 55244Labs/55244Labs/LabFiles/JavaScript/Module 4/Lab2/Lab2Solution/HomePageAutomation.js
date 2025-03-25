/* 
  Author: Mike
  Date: 3/14/17
  Used by: home.html
  Notes:
    Creates a new <style> block to slowly move the image off of the page.
    Add an event handler to hide the image after the animation.
*/

  var styletext = "\n\
  @keyframes flyaway {  \n\
  0% {  \n\
      transition: 5s ease-in;  \n\
    }  \n\
    100% {  \n\
      transform: translate(350px, 100px); \n\
    }  \n\
  }  \n\
  \n\
  #airplane1 {  \n\
    animation: flyaway 10s ease-in forwards;  \n\
    -moz-animation-iteration-count: 1;  \n\
    animation-iteration-count: 1;   \n\
  }  \n\
  "
  var newStyleBlock = document.createElement("style");
  newStyleBlock.textContent = styletext;
  document.head.appendChild(newStyleBlock);

  var airplane = document.getElementById("airplane1");
  airplane.addEventListener("animationend", function() { airplane.style.display="none" }, false);
