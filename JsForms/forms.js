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
// let div = document.querySelector('div');

// div.addEventListener('click', function(event) {
// 	if (event.target.tagName === 'UL') {
// 		let ul = document.querySelector('ul')
// 		let li = document.querySelector('li');
// 		li.innerHTML = 'пункт';
// 		ul.appendChild(li);

// 	}
// 	if (event.target.tagName === 'LI') {
// 		event.target.innerHTML += '!';
// 	}
// });
// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
// button.addEventListener('click', function(e) {
// 	block.classList.add('active');
// 	e.stopImmediatePropagation();
// });
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });
// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// list.addEventListener('click', function(e) {
// 	let li = e.target.closest('li');
	
// 	if (li) {
// 		li.innerHTML = li.innerHTML + '!';
// 	}
// });
// button.addEventListener('click', function() {
// 		let item = document.createElement('li');
// 		item.innerHTML = 'item';
		
// 		list.appendChild(item);
// 	});
// function handler() {
// 	this.innerHTML = this.innerHTML + '!';
// }

// for (let item of items) {
// 	item.addEventListener('click', handler);
// }
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.innerHTML = 'item';
	
// 	item.addEventListener('click', handler);
	
// 	list.appendChild(item);
// });
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
// 	console.log(this); // выведет ссылку на наш инпут
	
// 	function child() {
// 		console.log(this); // выведет undefined
// 	}
// 	child();
// }
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
	
// 	alert(this.value * this.value);
	
	
// 	let square = () => {
// 		return this.value * this.value;
// 	}
// 	square();
	
// }
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// function func() {
// 	console.log(this.value); 
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);
// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }

// func.call(elem, 'Smit', 'John');
// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func.apply(elem, ['John', 'Smit']);
// let elem = document.getElementById('elem');

// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func = func.bind(elem);
// func('John', 'Smit');
// func('Eric', 'Luis');
// setInterval(() => {
// 	console.log('!');
// }, 3000);
// let i = 100;
// setInterval(() => console.log(--i), 1000)
// let i = 10;
// let timerId = setInterval(() => {
// 	console.log(--i);
// 	if (i == 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);
// let start = document.querySelector('#start');

// start.addEventListener('click',function func(){
// 	let i = 100;
	
// 	let timerId = setInterval(() => {
// 		console.log(--i);
// 		if (i == 0) {
// 		clearInterval(timerId);
// 			}
// 	}, 1000);
// 	this.removeEventListener('click', func);
// });
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	let i = 100;
	
// 	timerId = setInterval(function() {
// 		console.log(--i);
// 		if (i == 0) {
// 			clearInterval(timerId);
// 			}
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function func() {
// 	 timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// 	this.removeEventListener('click', func)
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
	
// });
// let elem = document.querySelector('#elem');
// let timerId = setInterval(() => {
// 			let i = +elem.value;
// 			i = +elem.value --;
// 			if (i === 1) {
// 			clearInterval(timerId);
// 				}
// 		}, 1000);

// setInterval(function() {
// 	elem.value = +elem.value --;
// 	if(elem.value == 0){
// 		clearInterval(elem.value);
// 	}
// }, 1000);
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(()=> +this.value ++, 1000);
// });
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(function(self) {
// 		self.value--;
// 	}, 1000, this);
// });
