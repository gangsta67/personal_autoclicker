/// Script for personal use to ease my web experience

// the following switch statement allows for javascript injections on certain pages
switch (window.location.href) {
  case "https://1337x.to/":
    window.location.assign("https://1337x.to/home/");
    break;
  case "https://ma-vv.math.kit.edu/sso/select":
    // select numerische Mathematik
    selectOption("id", 208);
    // click Vorlesung wählen button
    clickButtonByName("submit");
    break;
}


function clickButtonById(id) {
  document.getElementById(id).click();
}

function clickButtonByClass(className) {
  document.getElementsByClassName(className)[0].click();
}

function clickButtonByName(name) {
  document.getElementsByName(name)[0].click();
}

function selectOption(OptionName, NewValue) {
  var element = document.getElementsByName(OptionName)[0];
  element.value = NewValue;
}