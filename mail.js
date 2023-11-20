const firebaseConfig = {
    apiKey: "AIzaSyDfl1IDNli0z3JWngNH8cS0IKlBw5T_B-4",
    authDomain: "deseitos.firebaseapp.com",
    databaseURL: "https://deseitos-default-rtdb.firebaseio.com",
    projectId: "deseitos",
    storageBucket: "deseitos.appspot.com",
    messagingSenderId: "255306964249",
    appId: "1:255306964249:web:60c7d3726542e97096b988",
    measurementId: "G-KTM288H1RE"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};