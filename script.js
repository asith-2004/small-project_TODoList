let todoList =JSON.parse(localStorage.getItem('mainList'))||[];


function checkKey(caller=0){
        const textInputElement = document.querySelector('.js-text-input');
        const dateInputElement = document.querySelector('.js-date-input');
        if(caller==1 && textInputElement.value){
            if(event.key==='Enter' && dateInputElement.value){
                addList();
            }
        }
        else if(caller==2 && textInputElement.value){
            if(event.key==='Enter' || dateInputElement.value){
                addList();
            }
            else{
                alert("Fill all");
            }
        }
        
}

function addList(){
    const textInputElement = document.querySelector('.js-text-input');
    const dateInputElement = document.querySelector('.js-date-input');
    console.log(todoList);
    todoList.push({name:textInputElement.value,date:dateInputElement.value});
    textInputElement.value='';
    dateInputElement.value='';
    renderHTML();
    
    
}
function renderHTML(){

    let allTextHTML ='';

    for (let i =0;i<todoList.length;i++){
        
        const {name,date} = todoList[i];
        allTextHTML += `<hr><div class="output-wrapper"><div class="js-output-row">
        <div class="js-text-output"><p>${name}</p></div>
        <div class="js-date-output">${date}</div>
        <button class="js-delete-button" onclick="todoList.splice(${i},1);renderHTML()">Delete</button></div></div>
        `
        
    }
    localStorage.setItem('mainList',JSON.stringify(todoList));
    const outputDiv = document.querySelector('.new');
    outputDiv.innerHTML = allTextHTML;
    console.log(allTextHTML);
}