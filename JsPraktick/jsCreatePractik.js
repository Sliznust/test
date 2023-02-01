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
// №6⊗jsPmPrEChT

// Дан следующий массив с работниками:

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите этих работников в HTML таблице.
let employees = [
{name: 'employee1', age: 30, salary: 400},
{name: 'employee2', age: 31, salary: 500},
{name: 'employee3', age: 32, salary: 600},
];
let table = document.querySelector('#table');
const name = document.querySelector('.name');
const age = document.querySelector('.age');
const salary = document.querySelector('.salary');
const button = document.querySelector('button');
for(let employ of employees){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
	td1.textContent = employ.name;
	tr.appendChild(td1);

    let td2 = document.createElement('td');
	td2.textContent = employ.age;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = employ.salary;
	tr.appendChild(td3);
	
	table.appendChild(tr);
    td1.addEventListener('click', function func1(){
        let input = document.createElement('input');
        input.value = td1.textContent;

        td1.textContent = '';
        td1.appendChild(input);

        input.addEventListener('blur', function() {
            td1.textContent = this.value;
            td1.addEventListener('click', func1);
        }); 
        td1.removeEventListener('click', func1);  
    });
    td2.addEventListener('click', function func1(){
        let input = document.createElement('input');
        input.value = td2.textContent;
    
        td2.textContent = '';
        td2.appendChild(input);
    
        input.addEventListener('blur', function() {
            td2.textContent = this.value;
            td2.addEventListener('click', func1);
        }); 
        td2.removeEventListener('click', func1);  
    });
    td3.addEventListener('click', function func1(){
        let input = document.createElement('input');
        input.value = td3.textContent;
    
        td3.textContent = '';
        td3.appendChild(input);
    
        input.addEventListener('blur', function() {
            td3.textContent = this.value;
            td3.addEventListener('click', func1);
        }); 
        td3.removeEventListener('click', func1);  
    });
   
        let newTd = document.createElement('td');
        let aDel = document.createElement('a');
        aDel.href = '';
        aDel.text = 'remove';
        tr.appendChild(newTd);
        newTd.appendChild(aDel);
        aDel.addEventListener('click', (e)=>{
            tr.remove();
            e.preventDefault();
        })
    }
    button.addEventListener('click', function func4(){
    const newRow = document.createElement('tr');
    let nameTd = document.createElement('td');
    nameTd.textContent = name.value;
     newRow.appendChild(nameTd);
     nameTd.addEventListener('click', function func5(){
        let editName = document.createElement('input');
        editName.value = nameTd.textContent;
        editName.value = '';
        nameTd.appendChild(editName);
        
        editName.addEventListener('blur',function(){
            nameTd.textContent = this.value;
            nameTd.addEventListener('click', func5)
            });
        nameTd.removeEventListener('click', func5);
     });
     let ageTd = document.createElement('td');
     ageTd.textContent = age.value;
     newRow.appendChild(ageTd);
     ageTd.addEventListener('click', function func6(){
        let editAge = document.createElement('input');
        editAge.value = ageTd.textContent;
        editAge.value = '';
        ageTd.appendChild(editAge);
        
        editAge.addEventListener('blur',function(){
            ageTd.textContent = this.value;
            ageTd.addEventListener('click', func6)
            });
            ageTd.removeEventListener('click', func6);
     });
    let salaryTd = document.createElement('td');
     salaryTd.textContent = salary.value;
     newRow.appendChild(salaryTd);
     salaryTd.addEventListener('click', function func7(){
        let editSalary = document.createElement('input');
        editSalary.value = salaryTd.textContent;
        editSalary.value = '';
        salaryTd.appendChild(editSalary);
        
        editSalary.addEventListener('blur',function(){
            salaryTd.textContent = this.value;
            salaryTd.addEventListener('click', func7)
            });
            salaryTd.removeEventListener('click', func7);
     });
    table.appendChild(newRow)
    })
    
