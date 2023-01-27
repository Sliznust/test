"use strict"
// №1⊗jsPmPrEChT

//     Дан массив. Выведите его элементы в виде списка ul.
// №2⊗jsPmPrEChT

// Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.
// №3⊗jsPmPrEChT

// Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.
// №4⊗jsPmPrEChT

// Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.
// №5⊗jsPmPrEChT

// Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.
// let ul = document.querySelector('ul');
// let arr = [1, 2, 3, 4, 5];
// for(let elem of arr) {
//     let li = document.createElement('li')
//     li.textContent = elem;
//     ul.appendChild(li);
//     let aDel = document.createElement('a');
//         aDel.href = '';
//         aDel.text = 'remove ';
//         ul.appendChild(aDel);
//         aDel.addEventListener('click', function(e){
//             aDel.remove();
//             li.remove();
//             e.preventDefault();
//         })
//         let line = document.createElement('a');
//         line.href = '';
//         line.text = ' line';
//         ul.appendChild(line);
//         line.addEventListener('click', function(e){
//             li.classList.toggle('underline');
//             e.preventDefault();
//         })
// 	li.addEventListener('click', function func(){
//         let input = document.createElement('input');
//         input.value = li.textContent;
//         li.textContent = '';
//         li.appendChild(input);
//         input.addEventListener('blur', function() {
//             li.textContent = this.value;
//             li.addEventListener('click', func);
//         });
//         li.removeEventListener('click', func);
//     })
// }
// ul.insertAdjacentHTML('afterend', '<input>');
// let newInput = document.querySelector('input');
// newInput.addEventListener('blur', ()=>{
//   let newLi = document.createElement('li');
//   newLi.textContent = newInput.value;
//   ul.appendChild(newLi);
//   newLi.addEventListener('click', function func2(){
//     let newLiInput = document.createElement('input');
//     newLiInput.value = newLi.textContent;
//     newLi.textContent = '';
//     newLi.appendChild(newLiInput);
//     let aDel = document.createElement('a');
//         aDel.href = '';
//         aDel.text = 'remove ';
//         ul.appendChild(aDel);
//         aDel.addEventListener('click', function(e){
//             aDel.remove();
//             li.remove();
//             e.preventDefault();
//         });
//         let line = document.createElement('a');
//         line.href = '';
//         line.text = ' line';
//         ul.appendChild(line);
//         line.addEventListener('click', function(e){
//             newLi.classList.toggle('underline');
//             e.preventDefault();
//         })
//     newLiInput.addEventListener('blur', function(){
//         newLi.textContent = this.value;
//         newLi.addEventListener('click', func2); 
//     })
//     newLi.removeEventListener('click', func2)
//   })
// })

