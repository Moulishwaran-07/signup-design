function demo() {
    let name = document.querySelector('#name').value;
    let regx = /([a-zA-Z0-9]{4,20})/;
    let myinfo = document.querySelector('#info');
    let myinfo1 = document.querySelector('#info1');
    if (regx.test(name)) {
        myinfo.innerHTML = "<img src=\'tick.png\' width=\'20px\'>";
        myinfo.style.position = "relative";
        myinfo.style.left = "-30px";
        myinfo.style.top = "3px";


    } else {
        myinfo.innerHTML = "<img src=\'wrong.png\' width=\'20px\'>";
        myinfo.style.position = "relative";
        myinfo.style.left = "-30px";
        myinfo.style.top = "3px";



    }
    if (regx.test(name)) {
        myinfo1.style.display = "none";

    } else {
        myinfo1.innerHTML = "The Username must be 4-20 characters";
        myinfo1.style.color = "red";
        myinfo1.style.fontSize = "1rem";
        myinfo1.style.display = "block";
        myinfo1.style.marginBottom = "2px";

    }
}
function demo1() {
    let mail = document.querySelector('#email').value;
    let regex = /([A-Za-z0-9]{4,20})+@+([a-zA-Z]{3,15})+\.+([a-zA-Z]{2,10})/;
    let myinfo = document.querySelector('#info2');
    let myinfo1 = document.querySelector('#info3');

    if (regex.test(mail)) {
        myinfo.innerHTML = "<img src=\'tick.png\' width=\'20px\'>";
        myinfo.style.position = "relative";
        myinfo.style.left = "-30px";
        myinfo.style.top = "3px";
        myinfo1.style.display = "none";


    }
    else {
        myinfo.innerHTML = "<img src=\'wrong.png\' width=\'20px\'>";
        myinfo.style.position = "relative";
        myinfo.style.left = "-30px";
        myinfo.style.top = "3px";


        myinfo1.innerHTML = "Enter the correct email address like person@inbox.com"
        myinfo1.style.color = "red";
        myinfo1.style.fontSize = "1rem";
        myinfo1.style.marginBottom = "2px";
        myinfo1.style.display = "block";

    }
}
function demo2() {
    let mail = document.querySelector('#password').value;
    let regex = /([0-9a-zA-Z]{8,15})/
    let myinfo = document.querySelector('#info4');
    let myinfo1 = document.querySelector('#info5');

    if (regex.test(mail)) {
        myinfo.innerHTML = "<img src=\'tick.png\' width=\'20px\'>";
        myinfo.style.position = "relative";
        myinfo.style.left = "-30px";
        myinfo.style.top = "3px";
        myinfo1.style.display = "none";
    }
    else {
        myinfo.innerHTML = "<img src=\'wrong.png\' width=\'20px\'>";
        myinfo.style.position = "relative";
        myinfo.style.left = "-30px";
        myinfo.style.top = "3px";

        myinfo1.innerHTML = "The password must contain 8-15 characters";
        myinfo1.style.display = "block";
        myinfo1.style.marginBottom = "2px";
        myinfo1.style.color = "red";
        myinfo1.style.fontSize = "1rem";
    }
}
















