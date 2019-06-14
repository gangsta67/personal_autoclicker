/// Script for personal use to ease my web experience


// the following if else statement allows for google search shortcuts
if (window.location.href.indexOf("&q=il&ie=utf-8&oe=utf-8") > -1) {
  window.location.assign("https://ilias.studium.kit.edu");
} else if (window.location.href.indexOf("&q=fm&ie=utf-8&oe=utf-8") > -1) {
  window.location.assign("https://www.google.com/search?q=fmovies&ie=utf-8&oe=utf-8");
}

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