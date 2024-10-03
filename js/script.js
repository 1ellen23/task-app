// * Selecionar as TAGS

const inputText = document.getElementById('task');
const taskList = document.getElementById('task-List');
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', function(){
    addTask();
})

function addTask(){
    if(inputText.value == ''){
        alert("Voce precisa adicionar a descrição da tarefa");
    }
else{
    // * CRIANDO UMA TAG E SALVANDO EM UMA VARIAVEL
    // * createElement() CRIA UMA TAG
    //* um novo LI = uma nova tarefa
    let li = document.createElement("li");
    //* o conteudo do li recebe o que a pessoa digitou
    li.innerHTML = inputText.value;
    //* appendChild = adiciona uma tag dentro de outra
    //* no caso o novo <li> é colocado dentro do <ul> taskList
    taskList.appendChild(li);

    }

    inputText.vallue = '';

 }

 
