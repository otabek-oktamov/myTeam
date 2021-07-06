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
  setTimeout(function () { document.querySelector('.header').classList.toggle('header__active') }, 200);
  document.querySelector('.body').classList.toggle('body__sc')
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


document.querySelectorAll('.meet-section__add').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('meet-section__close')
  })
})

let inp = document.querySelectorAll('#name');
function check() {
  inp.forEach(item => {

    item.addEventListener('input', () => {
      if (item.value !== '') {
        item.classList.remove('contact-section__input--red')
        item.classList.add('contact-section__input--blue')
        console.log('kk');
      }
      else if (item.value === '') {
        item.classList.remove('contact-section__input--blue')
        item.classList.add('contact-section__input--red')
      }
    })
  })
}
inp.forEach(item => {

  item.addEventListener('input', () => {
    check()
  })
})


function ValidateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    mail.classList.add('contact-section__input--blue')
    mail.classList.remove('contact-section__input--red')
  }
  else {
    mail.classList.remove('contact-section__input--blue')
    mail.classList.add('contact-section__input--red')
  }
}


let mail = document.querySelector('#mail')
document.querySelector('.contact-section__submit').addEventListener('click', () => {
  inp.forEach(item => {
    if (item.value == '') {
      item.classList.add('contact-section__input--red')
    }
  })
 if(mail.value ==''){
   mail.classList.add('contact-section__input--red')
 }
})




