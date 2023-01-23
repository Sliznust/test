"use strict"
// №1⊗jsPmTmrPr

// Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// btn.addEventListener('click', ()=>{
// setInterval(()=>{
//     p.textContent++;
// }, 1000)
// })
/////////////////////////////
// №2⊗jsPmTmrPr

// Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.
// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// btn.addEventListener('click', ()=>{
//     let timerId = setInterval(()=>{
//     let i = +p.textContent --;
//     if (i == 1) {
//         clearInterval(timerId);
//     }
// }, 1000)
// })
// №3⊗jsPmTmrPr

// Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
// let input = document.querySelector('input');
// setInterval(()=>{
//     input.value++;
//     input.value = input.value ** 2;
// }, 1000);
//////////////////////////////////////
// №4⊗jsPmTmrPr

// Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.
// let input = document.querySelector('input');
// let p = document.querySelector('p');
// let idInterval;
// input.addEventListener('blur', func);
 
//  function func() {
//      p.textContent = input.value;
//      idInterval = setInterval(timer, 1000);
//  }
 
// function timer() {
//     p.textContent = p.textContent - 1;
//     if (p.textContent === '0') {
//         clearInterval(idInterval);
//     }
// }
// №5⊗jsPmTmrPr

// Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.
// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let idInterval;
// btn.addEventListener('click', func);
// function func() {
//     p.textContent = input.value;
//     idInterval = setInterval(timer, 1000);
// }
// function timer() {
//     p.textContent = p.textContent - 1;
//     if (p.textContent === '0') {
//         clearInterval(idInterval);
//     }
// }
// №6⊗jsPmTmrPr

// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let res = document.querySelector('p');
// let timerId;
// start.addEventListener('click', function func(){
//   timerId = setInterval(function() {
// 		res.textContent++;
// 	}, 1000);
//     this.removeEventListener('click', func);
// })
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
///////////////////////////////////////
// №7⊗jsPmTmrPr

// Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
// let text = document.querySelector("p");
// text.style.color="red";

// setInterval(function(){
//  if(text.style.color == "red"){
//     text.style.color="blue";
//  } else {
//     text.style.color="red";
//  }
// },1000);
///////////////////////////////////
// №8⊗jsPmTmrPr

// Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце:

// window.onload = function(){
//     window.setInterval(function(){
//          let now = new Date();
//           let clock = document.getElementById("clock");
//         clock.innerHTML = now.toLocaleTimeString();
//     }, 1000);
//    };




