"USE STRICT"
// №1⊗jsPmDmPm

// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// let elem = document.querySelector('input');
// let result = document.querySelector('p');
// elem.addEventListener('blur', ()=>{
//     result.textContent += elem.value;
// })
// /////////////////////////////////////////
// <!-- №2⊗jsPmDmPm

// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац. -->
// let elems = document.querySelectorAll('.val');
// let btn = document.querySelector('.btn');
// let res = document.querySelector('p')
// for(let elem of elems){
//     btn.addEventListener('click', ()=>{
//         res.textContent = Number(elem.value) + Number(elem.value);
//     });
// }
// //////////////////////////////////////
// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let elems = document.querySelector('input');
// let res = document.querySelector('p');
// function getSum() {
//     let sum = 0;
//     for(let elem of elems.value){
//         sum += +elem;
//     }
//     res.textContent = sum;
// }
// elems.addEventListener('blur', getSum);
///////////////////////////////////////////////////
// Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// let elems = document.querySelector('input');
// let res = document.querySelector('p');
// function getSum() {
//     str = elems.value.split(',');
//     let sum = 0;
//     for(let elem of str){
//         sum += +elem / str.length
//     }
//     res.textContent = sum;
// }
// elems.addEventListener('blur', getSum);
/////////////////////////////////////////
// <!-- №5⊗jsPmDmPm

// Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута. -->
// let enter = document.querySelector('.enterValue');
// let name = document.querySelector('.returnName');
// let surname = document.querySelector('.returnSurName');
// let patronymic = document.querySelector('.returnPatronymic');

// enter.addEventListener('blur', ()=>{
//     let strSurName = enter.value.slice(0,8);
//     surname.value = strSurName;
//     let strName = enter.value.slice(8,18);
//     name.value = strName;
//     let strPatr = enter.value.slice(18)
//     patronymic.value = strPatr;
// });
////////////////////////////////////
// <!-- №6⊗jsPmDmPm

// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте). -->
// let enter = document.querySelector('.enterValue');
// enter.addEventListener('blur', ()=>{
// enter.value.toUpperCase();
   
// })
// let str = 'fffff';
// console.log(str.toUpperCase(1))
///////////////////////////////////////////////
// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let time = document.querySelector('input');

// time.addEventListener('blur', ()=>{
//  let arr2 = [];
// 	let str = time.value;
// 	let arr = str.split('.');
// 	arr2 = arr.reverse();
// 	let str1 = arr2.join('-');
// 	time.value = str1;
// })
// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам)
// let ipt =  document.querySelector('input');
// let btn =  document.querySelector('#but');
// function checkWord(){
//     let str = ipt.value;
//  	let arr = str.split('');
// 	    let arr2 = str.split('').reverse();
//     for(let i = 0; i < arr.value; i++){
//         if(arr[i]!== arr2[i]) {
//             alert('это слово не палиндром');
// 			return;
//     }

//   }
//   alert('это слово палиндром');
//   return;
// }
// btn.addEventListener('click', checkWord);
// let elem = document.querySelector('#num');
// let btn =  document.querySelector('#but');

// function checkWord() {
// 	let str = elem.value;
//  	let arr = str.split('');
// 	let arr2 = str.split('').reverse();
// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[i]!== arr2[i]) { 
// 			alert('это слово не палиндром');
// 			return;
// 		}
//   	}
// 	alert('это слово палиндром');
// 	return;
// }
// btn.addEventListener('click', checkWord);
// №10⊗jsPmDmPm

// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let elem = document.querySelector('#num');
// let btn =  document.querySelector('#but');
// btn.addEventListener('click', ()=>{
// 	let str = elem.value;
// 	let arr = str.split	('');
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] == 3){
// 			alert('это число содержит 3');
// 			return
// 		}
// 	}
// 	alert(('это число не содержит 3'))
// 	return
// })
// <!-- №11⊗jsPmDmPm

// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер. -->
// let elems = document.querySelectorAll('p');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', ()=>{
// 	for(let i = 0; i< elems.length; i++) {
// 		elems[i].innerHTML = elems[i].innerHTML+' '+(i+1);
// 	}
//  });
// <!-- №12⊗jsPmDmPm

// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках -->
// let elems  = document.querySelectorAll('a');
// for(let elem of elems){
// 	elem.addEventListener('click', ()=>{
// 		elem.textContent = elem.href + '(' + elem.href + ')';
// 	});
// }
// №13⊗jsPmDmPm

// Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
// let elems  = document.querySelectorAll('a');
// for(let elem of elems){
// 	elem.addEventListener('click', ()=>{
// 		if (elem.href.indexOf('https://') == 0) {
//  			elem.innerHTML = elem.innerHTML + '&rarr';
// 		}
// 	})
// }
// №14⊗jsPmDmPm

// Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// let elems = document.querySelectorAll('p');
// for(let elem of elems){
// 	elem.addEventListener('click', ()=>{
// 		elem.textContent = +(elem.textContent ** 2)
// 	})
// }
// <!-- ⊗jsPmDmPm

// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату. -->
// let elem = document.querySelector('input');
// let res = document.querySelector('p');
// function getMonthWord(){
// 	let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	let str = elem.value;
// 	let arr  = str.split('.');
// 	let arr2 = arr.reverse();
// 	let str1 = arr2.join(',');
// 	let date = new Date(str1);
// 	let day = date.getDay();
// 	res.textContent =  days[day];
// } 
// elem.addEventListener('blur', getMonthWord)
// №17⊗jsPmDmPm

// Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// let res = document.querySelector('input');
// let elems = document.querySelectorAll('p');
// let sum = 0;
// for(let elem of elems){
// 	elem.addEventListener('click', ()=>{
// 		sum++;
// 		res.value = sum;
// 	})
// }
// <!-- №18⊗jsPmDmPm

//  На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста -->
// let elems = document.querySelectorAll('div');
// let str = '';
// for(let elem of elems){
// 	elem.addEventListener('click', ()=>{
// 		if(elem.textContent.length >= 10){
// 			str = elem.innerHTML.slice(0, 10) + '...'
// 			elem.innerHTML = str;
// 		}
// 	})
// }
// <!-- №19⊗jsPmDmPm

// Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный. -->
// let elem = document.querySelector('input');

// 	elem.addEventListener('click', func)
// 	function func(){
// 		let num = elem.value;
// 		if(num >= 1 && num <= 100){
// 			elem.style.borderColor = 'green';
// 		}else{
// 			elem.style.borderColor = 'red';
// 			}
// 	}
// №20⊗jsPmDmPm

// Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// let elem = document.querySelector('input');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', ()=>{
// 	let str = '';
// 	let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm';
// 	for(var i = 0; i < 8; i++){
// 		str += symbols.charAt(Math.floor(Math.random() * symbols.length));
// 		elem.value = str;
// 	}

// })
// №21⊗jsPmDmPm

// Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// let elem = document.querySelector('input');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', ()=>{
// 	let str = elem.value;
// 	let shuffled = str.split('').sort(()=>{return 0.5-Math.random()}).join('');
	
// 	elem.value = shuffled;
	
// })
// №22⊗jsPmDmPm

// Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
// let f = document.querySelector('input');
// let btn = document.querySelector('.btn');
// let c = document.querySelector('p');
// btn.addEventListener('click', ()=>{
// c.textContent = (+f.value - 32)/1.8000;
// })
// №23⊗jsPmDmPm

// Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
// let f = document.querySelector('input');
// let btn = document.querySelector('button');
// let res = document.querySelector('p')
  
// btn.addEventListener('click', function factorial(n){
// 	 n = +f.value;
// 	for( let i  = n - 1; i > 1; --i){
// 		n *= i;
// 	}
// 	return res.textContent = n;
// })
// №24⊗jsPmDmPm

// Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
// let a = document.querySelector('.firstKoef');
// let b = document.querySelector('.secondKoef');
// let c = document.querySelector('.thirdKoef');
// let btn = document.querySelector('button');
// let res  = document.querySelector('p');
// let getsQrt = () =>{
// 	let sqrt1 = '';
// 	let sqrt2 = '';
// 	if(a.value == 0)
// 	return res.textContent = 'квадратное уравнение не имеет корней';
// 	let d = (+b.value)**2 - (4 * (+a.value) * (+c.value));
// 	if(d < 0){
// 		return res.textContent = 'квадратное уравнение не имеет корней';
// 	}
// 	if(d == 0){
// 		res.textContent = ((+(-b.value)) + Math.sqrt(d)) / (2 * (+a.value));
// 	}
// 	else if(d > 0){
//         sqrt1 = ((+(-b.value)) + Math.sqrt(d)) / (2 * (+a.value));
// 		sqrt2 = ((+(-b.value)) - Math.sqrt(d)) / (2 * (+a.value));
		
// 	}
// 	return res.textContent = +sqrt1 + ' ' + (+sqrt2);
// }
// btn.addEventListener('click', getsQrt)
