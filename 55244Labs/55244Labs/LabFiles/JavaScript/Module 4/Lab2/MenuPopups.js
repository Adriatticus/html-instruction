var popdiv = document.createElement("div");
popdiv.id = "menumessage";
popdiv.textContent = "default text for testing";
popdiv.style.color = "orange";
popdiv.style.border = "1pc solid white";
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
    SowPopup(this);
  };
  tab.onmouseleave = function () {
    HidePopup();
  };
}

var popdiv = document.getElementById("menumessage");
popdiv.style.left = "30px";
popdiv.style.top = "110px";
popdiv.style.display = "block";
