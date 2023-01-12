"USE STRICT"
// let elem = document.querySelector('input');
// let res = document.querySelector('p');
// elem.addEventListener('keypress', (event)=> {
// 	if(event.code == 'NumpadEnter' || event.code == 'Enter'){
// 		res.textContent = elem.value;
// 		elem.value = '';
// 	}
	
// });
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	if (event.ctrlKey) {
// 		elem.style.color = 'red';
// 	}
	
// 	if (event.altKey) {
// 		elem.style.color = 'green';
// 	}
	
// 	if (event.shiftKey) {
// 		elem.style.color = 'yellow';
// 	}
// });
// let elems = document.querySelectorAll('#elem li');
// for(let elem of elems){
// 	elem.addEventListener('click', (event)=>{
// 		if(event.ctrlKey){
// 			elem.textContent += 1;
// 		}
// 		if(event.shiftKey){
// 			elem.textContent += 2;
// 		}
// 	})
// }
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	elem.innerHTML += elem.href;
// });
// let input1 = document.querySelector('.i1');
// let input2 = document.querySelector('.i2');
// let res = document.querySelector('p');
// let btn = document.querySelector('a');

// btn.addEventListener('click', (e)=>{
// 	e.preventDefault();
// 		res.textContent = +input1.value + +input2.value;
// })
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// elem1.addEventListener('click', function() {
// 	alert('зеленый');
// });
// elem2.addEventListener('click', function() {
// 	alert('голубой');
// });
// elem3.addEventListener('click', function() {
// 	alert('красный');
// });
let div = document.querySelector('div');

div.addEventListener('click', function(event) {
	if (event.target.tagName === 'UL') {
		let ul = document.querySelector('ul')
		let li = document.querySelector('li');
		li.innerHTML = 'пункт';
		ul.appendChild(li);

	}
	if (event.target.tagName === 'LI') {
		event.target.innerHTML += '!';
	}
});