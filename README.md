# JS_lesson_5

3) 
let now = new Date(); 
let tomorrow = new Date();

tomorrow.setDate(10);
tomorrow.setHours(0, 0, 0, 0);

console.log((tomorrow - now) / 1000);
