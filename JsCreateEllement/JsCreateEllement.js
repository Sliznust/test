"use strict"
// let parent = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', ()=>{
//     let li = document.createElement('li');
//     li.textContent = 'item';
//     parent.appendChild(li);
//     li.addEventListener('click', ()=>{
//         li.textContent += '!';
//     })
// })
/////////////////////////////////////////////////
// let parent = document.querySelector('ul');
// for(let i = 1; i <= 10; i++){
//     let li = document.createElement('li');
// 	li.textContent = i;
	
// 	parent.appendChild(li);
// }
// let parent = document.querySelector('.parent');
// let res = document.querySelector('p');
// for (let i = 1; i <= 5; i++){
//     let input = document.createElement('input');
//     parent.appendChild(input);
//     input.addEventListener('blur', ()=>{
//         res.textContent = input.value;
//     })
// }
// let elems = document.querySelectorAll('ul li');
// for(let elem of elems){
//     elem.addEventListener('click', ()=>{
//         elem.remove();
//     })
// }
// let elem = document.querySelector('#parent');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', ()=>{
//     elem.removeChild(elem.lastElementChild);
// })
///////////////////////////////////////////////////
// let elem =  document.querySelector('#elem');
// let li = document.createElement('li');
// li.innerHTML = 'finish';
// elem.append(li);
// let li1 = document.createElement('li');
// li1.innerHTML = 'start';
// elem.prepend(li1);
///////////////////////////////////////////
// let parent = document.querySelector('#parent');
// let before = document.querySelector('#elem');

// let li = document.createElement('li');
// li.innerHTML = 'new';

// parent.insertBefore(li, before);
// li.addEventListener('click', ()=>{
//     li.textContent += '!';
// })
////////////////////////////////////
// let p = document.createElement('p');
// p.innerHTML = '!!!';

// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeBegin', p);
// let p = document.createElement('p');
// p.innerHTML = '!!!';

// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterEnd', p);
///////////////////////////
// let p = document.createElement('p');
// p.innerHTML = '!!!';

// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterBegin', p);
///////////////////////////
// let p = document.createElement('p');
// p.innerHTML = '!!!';

// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeEnd', p);
////////////////////////////////////////////
// let www = document.createElement('div');


// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');
////////////////////////////////
// let inp = document.querySelector('input');
// let btn = document.querySelector('button');
// btn.addEventListener('click', ()=>{
    
// let clone = inp.cloneNode(true);
// inp.parentElement.appendChild(clone);
// })
////////////////////////////////
// №1⊗jsPmMnECh

// Дан элемент:

// <div id="elem" class="www"></div>
// Проверьте, является ли этот элемент элементом с классом www.
// let elem = document.querySelector('#elem');
// console.log(elem.matches('div.www'));
// let elem = document.querySelector('#elem');
// console.log(elem.matches('p'))
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');

// let contains = elem1.contains(elem2);
// console.log(contains);
//////////////////////////////////////////////
// let parent = document.querySelector('#parent');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
	
// 	parent.appendChild(p);
//     p.addEventListener('click', ()=>{
//         p.textContent++;
//     })
// }
// /////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li');
// 	li.textContent = elem;
//     ul.appendChild(li);
//     li.addEventListener('click', ()=>{
//         alert(li.textContent);
//     })
// }
// ////////////////////////////////////
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li');
// 	li.textContent = elem;
//     ul.appendChild(li);
//     li.addEventListener('click', function func(){
//         li.textContent += '!';
//         alert(li.textContent);
//         this.removeEventListener('click', func);
//     })
// }
// ////////////////////////////////////////
// let table = document.querySelector('#table');
// let width = document.querySelector('.width');
// let height = document.querySelector('.height');

// for (let i = 0; i < +width.value; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < +height.value; i++) {
// 		let td = document.createElement('td');
//         td.textContent = 'x';
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
/////////////////////////////////////////////////
// let table = document.querySelector('#table');
// let k = 1; // начальное значение счетчика
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
		
// 		td.textContent = k; // записываем счетчик в ячейку
// 		k++; // увеличиваем счетчик
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
////////////////////////////////////////////////
// let table = document.querySelector('#table');

// let k = 2; // начальное значение счетчика
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
		
// 		td.textContent = k; // записываем счетчик в ячейку
// 		k+=2; // увеличиваем счетчик
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
//////////////////////////////////////////
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for(let subArr of arr){
//     let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
//////////////////////////////
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for(let subArr of arr){
//     let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem **2;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let employ of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = employ.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = employ.age;
//     td2.addEventListener('click', ()=>{
//         td2.textContent++;
//     })
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = employ.salary;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }
////////////////////////////////////////////
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let employ of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = employ.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = employ.age;
//     td2.addEventListener('click', ()=>{
//         td2.textContent++;
//     })
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = +employ.salary;
//     td3.addEventListener('click', ()=>{
//         td3.textContent = +td3.textContent +td3.textContent/(100 * 0.10); 
//     })
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }
////////////////////////////////////////////////////////////
// let table = document.querySelector('#table');
// let btn = document.querySelector('button');
// let k = 1; 
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
		
// 		td.textContent = k; // записываем счетчик в ячейку
// 		k++; // увеличиваем счетчик
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
// btn.addEventListener('click', ()=>{
// let tr1 = document.createElement('tr');

// for (let i = 0; i < 5; i++) {
// 	let td1 = document.createElement('td');
//     td1.textContent = k; 
// 		k++;
// 	tr1.appendChild(td1);
// }

// table.appendChild(tr1);
// })
///////////////////////////////////////////
// let trs = document.querySelectorAll('#table tr');
// let btn = document.querySelector('button');
// btn.addEventListener('click', ()=>{
//     for (let tr of trs) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
// })
////////////////////////////////////////////
// let tds = document.querySelectorAll('#table td');
// let btn = document.querySelector('button');
// btn.addEventListener('click', ()=>{
//     for (let td of tds) {
//         td.textContent = td.textContent ** 2;
//     }
// })

/////////////////////////////////////////