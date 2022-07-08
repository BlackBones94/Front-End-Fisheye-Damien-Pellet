const mainColor = document.querySelector('main');
const headColor = document.querySelector('header');
const modalForm  = document.querySelector('form');

function displayModal() {
    const modal = document.getElementById("contact_modal");  
	modal.style.display = "block";
    mainColor.style.opacity = '0.4';
    headColor.style.opacity = '0.4';
    modalForm.style.opacity = '1';
    window.onscroll = function() {
        window.scrollTo(window.pageYOffset, window.pageXOffset);
        };
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    mainColor.style.opacity = '1';
    headColor.style.opacity = '1';
    window.onscroll = function() {};
}
 

const form = document.getElementById('form');
const submitBtn = document.querySelector('.contact_modal');


function validateForm() {

    const firstName = document.getElementById("first").value;
    const lastName = document.getElementById("last").value;
    const email =document.getElementById("email").value;

    if(firstName == ''){
        return false;
    }
    if(lastName == ''){
        return false;
    }
    if(email == ''){
        return false;
    }

    return true;
}




