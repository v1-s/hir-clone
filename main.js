var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #334}";
    document.body.appendChild(css);
};






function d1() {
    document.getElementById('jt1-div').classList.add("active");
    document.getElementById('jt11').classList.add("active");
    document.getElementById('jt1-div').classList.remove("not-active");
    document.getElementById('jt12').classList.add("active");
    document.getElementById('jt1').style.borderBottom = "2px solid rgb(233, 99, 12)";
    document.getElementById('jt1').style.color = "rgb(233, 99, 12)";
    document.getElementById('jt2').style.borderBottom = "none"
    document.getElementById('jt2').style.color = "black";
    document.getElementById('jt2-div').classList.add("not-active");
    document.getElementById('jt2-div').classList.remove("active");
    document.getElementById('jt3').style.borderBottom = "none"
    document.getElementById('jt3').style.color = "black";
    document.getElementById('jt3-div').classList.add("not-active");
    document.getElementById('jt3-div').classList.remove("active");
    document.getElementById('jt4').style.borderBottom = "none"
    document.getElementById('jt4').style.color = "black";
    document.getElementById('jt4-div').classList.add("not-active");
    document.getElementById('jt4-div').classList.remove("active");
    document.getElementById('jt5').style.borderBottom = "none"
    document.getElementById('jt5').style.color = "black";
    document.getElementById('jt5-div').classList.add("not-active");
    document.getElementById('jt5-div').classList.remove("active");
    document.getElementById('jt6').style.borderBottom = "none"
    document.getElementById('jt6').style.color = "black";
    document.getElementById('jt6-div').classList.add("not-active");
    document.getElementById('jt6-div').classList.remove("active");
};

function d2() {
    document.getElementById('jt2-div').classList.add("active");
    document.getElementById('jt21').classList.add("active");
    document.getElementById('jt22').classList.add("active");
    document.getElementById('jt2').style.color = "rgb(233, 99, 12)";
    document.getElementById('jt2').style.borderBottom = "2px solid rgb(233, 99, 12)";
    document.getElementById('jt2-div').classList.remove("not-active");
    document.getElementById('jt1-div').classList.add("not-active");
    document.getElementById('jt1-div').classList.remove("active");
    document.getElementById('jt1').style.borderBottom = "none";
    document.getElementById('jt1').style.color = "black";
    document.getElementById('jt3-div').classList.add("not-active");
    document.getElementById('jt3-div').classList.remove("active");
    document.getElementById('jt3').style.borderBottom = "none";
    document.getElementById('jt3').style.color = "black";
    document.getElementById('jt4-div').classList.add("not-active");
    document.getElementById('jt4-div').classList.remove("active");
    document.getElementById('jt4').style.borderBottom = "none";
    document.getElementById('jt4').style.color = "black";
    document.getElementById('jt5-div').classList.add("not-active");
    document.getElementById('jt5-div').classList.remove("active");
    document.getElementById('jt5').style.borderBottom = "none";
    document.getElementById('jt5').style.color = "black";
    document.getElementById('jt6-div').classList.add("not-active");
    document.getElementById('jt6-div').classList.remove("active");
    document.getElementById('jt6').style.borderBottom = "none";
    document.getElementById('jt6').style.color = "black";


};


function d3() {
    document.getElementById('jt3-div').classList.add("active");
    document.getElementById('jt31').classList.add("active");
    document.getElementById('jt32').classList.add("active");
    document.getElementById('jt3').style.color = "rgb(233, 99, 12)";
    document.getElementById('jt3').style.borderBottom = "2px solid rgb(233, 99, 12)";
    document.getElementById('jt3-div').classList.remove("not-active");
    document.getElementById('jt1-div').classList.add("not-active");
    document.getElementById('jt1-div').classList.remove("active");
    document.getElementById('jt1').style.borderBottom = "none";
    document.getElementById('jt1').style.color = "black";
    document.getElementById('jt2-div').classList.add("not-active");
    document.getElementById('jt2-div').classList.remove("active");
    document.getElementById('jt2').style.borderBottom = "none";
    document.getElementById('jt2').style.color = "black";
    document.getElementById('jt4-div').classList.add("not-active");
    document.getElementById('jt4-div').classList.remove("active");
    document.getElementById('jt4').style.borderBottom = "none";
    document.getElementById('jt4').style.color = "black";
    document.getElementById('jt5-div').classList.add("not-active");
    document.getElementById('jt5-div').classList.remove("active");
    document.getElementById('jt5').style.borderBottom = "none";
    document.getElementById('jt5').style.color = "black";
    document.getElementById('jt6-div').classList.add("not-active");
    document.getElementById('jt6-div').classList.remove("active");
    document.getElementById('jt6').style.borderBottom = "none";
    document.getElementById('jt6').style.color = "black";


};

function d4() {
    document.getElementById('jt4-div').classList.add("active");
    document.getElementById('jt41').classList.add("active");
    document.getElementById('jt42').classList.add("active");
    document.getElementById('jt4').style.color = "rgb(233, 99, 12)";
    document.getElementById('jt4').style.borderBottom = "2px solid rgb(233, 99, 12)";
    document.getElementById('jt4-div').classList.remove("not-active");
    document.getElementById('jt1-div').classList.add("not-active");
    document.getElementById('jt1-div').classList.remove("active");
    document.getElementById('jt1').style.borderBottom = "none";
    document.getElementById('jt1').style.color = "black";
    document.getElementById('jt3-div').classList.add("not-active");
    document.getElementById('jt3-div').classList.remove("active");
    document.getElementById('jt3').style.borderBottom = "none";
    document.getElementById('jt3').style.color = "black";
    document.getElementById('jt2-div').classList.add("not-active");
    document.getElementById('jt2-div').classList.remove("active");
    document.getElementById('jt2').style.borderBottom = "none";
    document.getElementById('jt2').style.color = "black";
    document.getElementById('jt5-div').classList.add("not-active");
    document.getElementById('jt5-div').classList.remove("active");
    document.getElementById('jt5').style.borderBottom = "none";
    document.getElementById('jt5').style.color = "black";
    document.getElementById('jt6-div').classList.add("not-active");
    document.getElementById('jt6-div').classList.remove("active");
    document.getElementById('jt6').style.borderBottom = "none";
    document.getElementById('jt6').style.color = "black";


};


function d5() {
    document.getElementById('jt5-div').classList.add("active");
    document.getElementById('jt51').classList.add("active");
    document.getElementById('jt52').classList.add("active");
    document.getElementById('jt5').style.color = "rgb(233, 99, 12)";
    document.getElementById('jt5').style.borderBottom = "2px solid rgb(233, 99, 12)";
    document.getElementById('jt5-div').classList.remove("not-active");
    document.getElementById('jt1-div').classList.add("not-active");
    document.getElementById('jt1-div').classList.remove("active");
    document.getElementById('jt1').style.borderBottom = "none";
    document.getElementById('jt1').style.color = "black";
    document.getElementById('jt3-div').classList.add("not-active");
    document.getElementById('jt3-div').classList.remove("active");
    document.getElementById('jt3').style.borderBottom = "none";
    document.getElementById('jt3').style.color = "black";
    document.getElementById('jt4-div').classList.add("not-active");
    document.getElementById('jt4-div').classList.remove("active");
    document.getElementById('jt4').style.borderBottom = "none";
    document.getElementById('jt4').style.color = "black";
    document.getElementById('jt2-div').classList.add("not-active");
    document.getElementById('jt2-div').classList.remove("active");
    document.getElementById('jt2').style.borderBottom = "none";
    document.getElementById('jt2').style.color = "black";
    document.getElementById('jt6-div').classList.add("not-active");
    document.getElementById('jt6-div').classList.remove("active");
    document.getElementById('jt6').style.borderBottom = "none";
    document.getElementById('jt6').style.color = "black";


};

function d6() {
    document.getElementById('jt6-div').classList.add("active");
    document.getElementById('jt61').classList.add("active");
    document.getElementById('jt62').classList.add("active");
    document.getElementById('jt6').style.color = "rgb(233, 99, 12)";
    document.getElementById('jt6').style.borderBottom = "2px solid rgb(233, 99, 12)";
    document.getElementById('jt6-div').classList.remove("not-active");
    document.getElementById('jt1-div').classList.add("not-active");
    document.getElementById('jt1-div').classList.remove("active");
    document.getElementById('jt1').style.borderBottom = "none";
    document.getElementById('jt1').style.color = "black";
    document.getElementById('jt3-div').classList.add("not-active");
    document.getElementById('jt3-div').classList.remove("active");
    document.getElementById('jt3').style.borderBottom = "none";
    document.getElementById('jt3').style.color = "black";
    document.getElementById('jt4-div').classList.add("not-active");
    document.getElementById('jt4-div').classList.remove("active");
    document.getElementById('jt4').style.borderBottom = "none";
    document.getElementById('jt4').style.color = "black";
    document.getElementById('jt5-div').classList.add("not-active");
    document.getElementById('jt5-div').classList.remove("active");
    document.getElementById('jt5').style.borderBottom = "none";
    document.getElementById('jt5').style.color = "black";
    document.getElementById('jt2-div').classList.add("not-active");
    document.getElementById('jt2-div').classList.remove("active");
    document.getElementById('jt2').style.borderBottom = "none";
    document.getElementById('jt2').style.color = "black";


};



function card1() {
    document.getElementById('btn-card1').classList.remove("job-but1");
    document.getElementById('btn-card1').classList.add("job-but2");




}

function cardn1() {
    document.getElementById('btn-card1').classList.add("job-but1");
    document.getElementById('btn-card1').classList.remove("job-but2");
}

function card2() {

    document.getElementById('btn-card2').classList.add("job-but2");

    document.getElementById('btn-card2').classList.remove("job-but1");


}

function cardn2() {
    document.getElementById('btn-card2').classList.add("job-but1");
    document.getElementById('btn-card2').classList.remove("job-but2");
}

function card3() {

    document.getElementById('btn-card3').classList.add("job-but2");

    document.getElementById('btn-card3').classList.remove("job-but1");


}

function cardn3() {
    document.getElementById('btn-card3').classList.add("job-but1");
    document.getElementById('btn-card3').classList.remove("job-but2");
}
// ----------------------------------------
    // Function to scroll to the top of the page
    // const scrollupButton = document.querySelector(".scrollup-button ");

    // scrollupButton.addEventListener('click', () => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    //   });
    // });

    const scrollupButton = document.querySelector('.scrollup-button');
    const pageHeight = document.documentElement.scrollHeight; // Get full page height
    
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;  // Get current scroll position
    
      // Show button when scrolled down past a certain threshold (adjust as needed)
      if (scrollPosition > pageHeight /2) {  // Show after 50% of page height scrolled
        scrollupButton.classList.add('show');
      } else {
        scrollupButton.classList.remove('show');
      }
    });
    scrollupButton.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        })
    




//    diversity -Conscious page  // 
// const buttons = document.querySelectorAll('.btn-diversity');
// const items = document.querySelectorAll('.diversity-item');

// let currentItem = 0;

// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     buttons[currentItem].classList.remove('active');
//     button.classList.add('active');
//     items[currentItem].classList.remove('active');
//     currentItem = index;
//     items[currentItem].classList.add('active');
//   });
// });
// ------------------------Login.js---------------------------
