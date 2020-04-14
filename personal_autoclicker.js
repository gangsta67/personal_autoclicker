/// Script for personal use to ease my web experience

// the following switch statement allows for javascript injections on certain pages
switch (window.location.href) {
  case "https://1337x.to/":
    window.location.assign("https://1337x.to/home/");
    break;
  case "https://www.netflix.com/browse":
    clickButtonByClass("profile-icon", 2);
    break;
}


function clickButtonById(id) {
  document.getElementById(id).click();
}

function clickButtonByClass(className, index = 0) {
  document.getElementsByClassName(className)[index].click();
}

function clickButtonByName(name, index = 0) {
  document.getElementsByName(name)[index].click();
}

function selectOption(OptionName, NewValue) {
  var element = document.getElementsByName(OptionName)[0];
  element.value = NewValue;
}