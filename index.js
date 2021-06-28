var element = {
    select: document.querySelector(".burger-btn"),
    active: "active",
    className: function () {
      return this.select.className;
    }
  };
  
  element.select.onclick = function () {
    var checker = hasClass(element.select, element.active);
  
    if (checker) {
      removeClass(element.select, element.active);
    } else {
      element.select.className = element.select.className + " active";
    }
    setTimeout(function(){document.querySelector('.header').classList.toggle('header__active') }, 200);
    document.body.classList.toggle('body__scroll')
    document.querySelector('.header__open-nav').classList.toggle('header__open-nav--active')
    
  };
  
  function hasClass(elem, className) {
    return new RegExp(" " + className + " ").test(" " + elem.className + " ");
  }
  
  function removeClass(elem, className) {
    var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
    if (hasClass(elem, className)) {
      while (newClass.indexOf(" " + className + " ") >= 0) {
        newClass = newClass.replace(" " + className + " ", " ");
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, "");
    }
  }
  