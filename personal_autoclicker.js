/// Script for personal use to ease my web experience

// the following switch statement allows for javascript injections on certain pages
switch (window.location.href) {
  case "https://1337x.to/":
    window.location.assign("https://1337x.to/home/");
    break;
  case "https://www.netflix.com/browse":
    clickButtonByClass("profile-icon", 2);
    break;
  case "https://simplenote.com/":
    window.location.assign("https://app.simplenote.com/");
    break;
  case "https://app.simplenote.com/login/":
    clickButtonByValue("Log in");
    break;
  case "https://de.scalable.capital/en":
    window.location.assign("https://de.scalable.capital/en/login");
    break;
  case "https://de.scalable.capital/en/login":
    clickButtonByClass("btn btn-primary");
    break;
}



function clickButtonById(id) {
  console.log("clicking Button with id: ", id);
  document.getElementById(id).click();
}

function clickButtonByClass(className, index = 0) {
  console.log("clicking Button with class name: ", className, "\nand index: ", index);
  document.getElementsByClassName(className)[index].click();
}

function clickButtonByName(name, index = 0) {
  document.getElementsByName(name)[index].click();
}

function selectOption(OptionName, NewValue) {
  var element = document.getElementsByName(OptionName)[0];
  element.value = NewValue;
}

function clickButtonByValue(value) {
  var els = document.getElementsByTagName('input');

  for (var i = 0, length = els.length; i < length; i++) {
      var el = els[i];

      if (el.type.toLowerCase() == 'button' && el.value.toLowerCase() == value.toLowerCase()) {
        console.log("clicking Button with value: ", value);
        el.click();
        break;
      }
  }
}