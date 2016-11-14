var home = document.body.scrollTop + document.getElementById("home").getBoundingClientRect().top;
var code = document.body.scrollTop + document.getElementById("code").getBoundingClientRect().top;
var briefcase = document.body.scrollTop + document.getElementById("briefcase").getBoundingClientRect().top;
var contact = document.body.scrollTop + document.getElementById("contact").getBoundingClientRect().top;

window.onscroll = function() {
  opacityControl();
};

function opacityControl() {
  if (document.body.scrollTop < code) {
    opacitySlider("home", "code");
  } else if (document.body.scrollTop >= code && document.body.scrollTop < briefcase) {
    opacitySlider("code", "briefcase");
  } else if (document.body.scrollTop >= briefcase && document.body.scrollTop < contact) {
    opacitySlider("briefcase", "contact");
  } else if (document.body.scrollTop >= contact) {
    opacitySlider("contact", null);
  }
}

function opacitySlider(input1, input2) {
  if (input2 != null) {
    var percentage1 = document.getElementById(input1).getBoundingClientRect().bottom / document.getElementById(input1).getBoundingClientRect().height;
    var percentage2 = 1 - (document.getElementById(input1).getBoundingClientRect().bottom / document.getElementById(input1).getBoundingClientRect().height);
    document.getElementById("icon-" + input1).style.opacity = 0.25 + percentage2;
    document.getElementById("icon-" + input2).style.opacity = 0.25 + percentage1;      
  } else {
    var percentage2 = 1 - (document.getElementById(input1).getBoundingClientRect().bottom / document.getElementById(input1).getBoundingClientRect().height);
    document.getElementById("icon-" + input1).style.opacity = 0.25 + percentage2;
  }
}