document.getElementById("currYear").innerHTML = new Date().getFullYear();
/* ==============HANDLING REGISTER======*/
let toast = document.getElementById("toast-success");
let toast_msg = document.getElementById("toast-msg");
const notify = (msg) => {
  toast_msg.innerHTML = msg;
  toast.classList.add("flex");
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
    toast.classList.remove("flex");
  }, 3000);
};
const getVal = (id) => document.getElementById(id).value;
let getRanID = () => Math.random().toString(36).slice(2);
let getTime = () => {
  let HH = new Date().getHours();
  let MM = new Date().getMinutes();
  return `${HH}:${MM}`;
};

let users = [];

const handleRegister = () => {
  event.preventDefault();
  let userName = getVal("userName");
  const user = {
    userName,
    email: getVal("email"),
    password: getVal("password"),
    uid: getRanID(),
    createdAt: getTime(),
  };
  let duplicateUSer = users.find((el) => el.email === user.email);
  if (duplicateUSer) {
    notify("Already registered");
  } else {
    users.push(user);
    notify("Registered successfully");
  }
};

const handleLogin = () => {
  event.preventDefault();
  let email = getVal("lEmail");
  let password = getVal("lPassword");
  console.log("email,password :>> ", email, password);
  let user = users.find((user) => user.email === email);

  if (!user) {
    notify("Email not found");
  } else if (user.password !== password) {
    notify("Incorrect password.");
  } else {
    let firstName = user.firstName;
    let email = user.email;
    localStorage.setItem("email", email);
    localStorage.setItem("firstName", firstName);
    notify("Login successful!");
    window.location.href = "app.html";
  }
};
