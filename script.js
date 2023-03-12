// Задание 1
const userName = document.querySelector('#userName');
const avatarLink = document.querySelector('#fileInput');
const textInput = document.getElementById('commentInput');
const form = document.querySelector('#form');
const wrapper = document.querySelector('.messages-wrapper');

const date = document.querySelector('.date');
const checkedInput = document.getElementById('yes');
let now = new Date();

function updateName() {
    let nameText = userName.value.toLowerCase();
    let words = nameText.split(" "); 

    for (let i = 0; i <  words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    const nameFormatted = words.join(" ");
    return nameFormatted; 
}

userName.addEventListener("focusout", function() {
    this.value = updateName();
});

function checkSpam(textInput) {
    let str = textInput.value;
    let newString = str.replace(/viagra|XXX/ig, "***");
    return newString; 
}

function getImage() {
    const random = Math.floor(Math.random() * 5) + 1;   
    return 'img/'+random+'.jpg'
  }

function updateChat() {
    let post = document.createElement('div');
    post.classList.add('post-item'); 
    wrapper.append(post);

    /* добавление аватара */
    const messageAvatar = document.createElement('img');
    if (avatarLink.value !== '' && avatarLink.value.includes(".jpg") || avatarLink.value.includes(".png"))  { 
        messageAvatar.setAttribute('src', avatarLink.value);
    } else {
        messageAvatar.setAttribute('src', getImage());
    }
    post.append(messageAvatar);

    /* добавление имени */
    const messageUserName = document.createElement('p');
    post.append(messageUserName);
    if (checkedInput.checked) { 
        messageUserName.textContent = updateName();
    } else {
        messageUserName.textContent = "Username";
    }
    /* добавление даты */
    const messageDate = document.createElement('div');
    messageDate.classList.add('post-item--date');
    post.append(messageDate);  
    messageDate.textContent = now.toLocaleString();
    
    /* добавление комментария */
    const messageComment = document.createElement('div');
    messageComment.textContent = checkSpam(textInput);
    post.append(messageComment);
}

function clearInputs () {
    userName.value = ""; 
    avatarLink.value = ""; 
    textInput.value = ""; 
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    updateChat();
    clearInputs();
});

// 2 задание
let currentTime = new Date();
let datePassed = new Date();
datePassed.setHours(15, 26);

let secondsPassed = (currentTime - datePassed) / 1000;
let minutesPassed = (currentTime - datePassed) / 1000 / 60;
let hoursPassed = (currentTime - datePassed) / 1000 / 60 / 60;

console.log(secondsPassed, minutesPassed);

function formatDate() {
    if(secondsPassed < 1) {
        console.log("Прямо сейчас");
    } else if (minutesPassed < 1) {
        console.log(`${secondsPassed} сек. назад`);
    } else if (hoursPassed < 1) {
        console.log(`${minutesPassed} минут назад`);
    } else {
        console.log(datePassed.toLocaleString().slice(0,-3));
    }
}

formatDate();