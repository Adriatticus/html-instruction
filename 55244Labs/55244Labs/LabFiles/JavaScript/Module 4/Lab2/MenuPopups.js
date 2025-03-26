var popdiv = document.createElement("div");
popdiv.id = "menumessage";
popdiv.textContent = "default text for testing";
popdiv.style.color = "orange";
popdiv.style.border = "1px solid white";
popdiv.style.borderRadius = "10px";
popdiv.style.backgroundColor = "black";
popdiv.style.position = "absolute";
popdiv.style.padding = "10px";
popdiv.style.display = "none";
document.body.appendChild(popdiv);

var tabs = document.querySelectorAll("#topNav a");
for (var index = 0; index < tabs.length; index++) {
  var tab = tabs[index];
  tab.onmouseenter = function () {
    ShowPopup(this);
  };
  tab.onmouseleave = function () {
    HidePopup();
  };
}
function ShowPopup(tab) {
  var popdiv =document.getElementById("menumessage");
  popdiv.style.left = tab.offsetLeft + "px";
  popdiv.style.top = (tab.offsetTop +33) + "px";
  //popdiv.style.left = "30px";
  //popdiv.style.top = "110px";
  //popdiv.style.display = "block";
  var popuptext = "";
  switch (tab.textContent) {
    case "Home":
      popuptext = "Return to the home page.";
      break;
    case "Toys":
      popuptext = "See our latest toys, including boats, planes, and cars!";
      break;
    case "Sports":
      popuptext = "See our new line of sporting goods!"
      break;
    default:
      popuptext = "";
      break;
  }
  popdiv.innerHTML = popuptext;
  if (popuptext != "") { //(popuptext != "") ? popdiv.innterHTML = popuptext: popdiv.style.display = "block"; -- the real KING = popdiv.style.display = (popuptext != "") ?"block": "none";
    popdiv.style.display = "block";
  }
}
function HidePopup() {
  var popdiv = document.getElementById("menumessage");
  popdiv.style.display = "none";
}
