// * Selecionar as TAGS

const inputText = document.getElementById('task');
const taskList = document.getElementById('task-List');
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', function(){
    addTask();
})

inputText.addEventListener('keydown', function(){
    // * Se o que for pressionado é ENTER
    if (e.code == "Enter")
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

    // * criando um span com X 
    let span = document.createElement('span');
    // * \u007 representa um X em unicode
    span.innerHTML = '\u00d7';
    // * ^ Adicionando o span DENTRO do <li> que acabou de ser criado
    li.appendChild(span);

    }

    inputText.vallue = ''; 
    saveData();

  }

 // * 03/10/2024

 taskList.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
       e.target.classList.toggle('checked');
       saveData();
    }

 

// Se não foi o <li> o <span> que foi clicado? o X 
else if (e.target.tagName == 'SPAN'){
    // * parentElement = Pegamos o que foi clicado e acessamos o seu PAI

    // ^ e pagamos o seu pai (o <LI>)
    //* e.target = tagSpan
    e.target.parentElement.remove();
    saveData();
   }

})

//* Salvando informação no navegador, para não perder as tarefas ao fechar o site.

function saveData(){
    // * LocalStorage = armazenamento local do navegador
    //* setItem = adiciona uma 'variavel' chamada "task_data"
    //* taskList.innerHTML = todos os <li>
    localStorage.setItem("task_data", taskList.innerHTML);
}

function loadData(){
    //* Ao carregar o site de nvo, o <ul> taskList vai iniciar vazio
    //* então escrevemos o sei innerHTML (Seu conteudo) com a informação salva no localStorage
    taskList.innerHTML = localStorage.getItem('task_data');
}
// ^ Chamando a função fora = chama ela ao carregar o site
// * Então ao abrir o site ele carrega os <li> salvos no localStorage
loadData();