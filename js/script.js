


//js for projectinformation
let spantext = document.getElementById('hiddentext1');
let closeButton = document.getElementById('close1');
let openProject = document.getElementById('projectinfo1');

let spantext2 = document.getElementById('hiddentext2');
let closeButton2 = document.getElementById('close2');
let openProject2 = document.getElementById('projectinfo2');

let spantext3 = document.getElementById('hiddentext3');
let closeButton3 = document.getElementById('close3');
let openProject3 = document.getElementById('projectinfo3');

let show = function (){
    spantext.style.visibility = 'visible';
    closeButton.style.visibility = 'visible';
};

let hide = function (){
    spantext.style.visibility = 'hidden';
    closeButton.style.visibility = 'hidden';
};
let show2 = function (){
    spantext2.style.visibility = 'visible';
    closeButton2.style.visibility = 'visible';
};

let hide2 = function (){
    spantext2.style.visibility = 'hidden';
    closeButton2.style.visibility = 'hidden';
};

let show3 = function (){
    spantext3.style.visibility = 'visible';
    closeButton3.style.visibility = 'visible';
};

let hide3 = function (){
    spantext3.style.visibility = 'hidden';
    closeButton3.style.visibility = 'hidden';
};

openProject.addEventListener('click',show);
closeButton.addEventListener('click', hide);

openProject2.addEventListener('click',show2);
closeButton2.addEventListener('click', hide2);

openProject3.addEventListener('click',show3);
closeButton3.addEventListener('click', hide3);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
