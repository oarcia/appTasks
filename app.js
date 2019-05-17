//**esta practica es un pre de como manejar con js los elemento html para despues usar REACT */
//para ver el formulario en consola console.log(ocument.getElementById('formTask'))
document.getElementById('formTask').addEventListener('submit', saveTask)
//minuto 18
function saveTask (e)  {
   // console.log(e) ves el formulario y el 
    //alert('envia formulario')
    //console.log(document.getElementById('title').value)//obtenemos el valor y lo consologiamos
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    //console.log(title,description); consologeas los valores

    const task = {
       title,//emc5 title: title,
        description//emc5 description : description
    }
    if(localStorage.getItem('tasks')=== null){
        let tasks = [];//si el arreglo de tareas esta vacio 
        tasks.push(task);//agrega  las tareas
        localStorage.setItem('tasks', JSON.stringify(tasks));//almacena en el localstorage
    }else{
        let tasks = JSON.parse(localStorage.getItem('tasks'));//si ya hay tareas en el localstora
        tasks.push(task);//agrega las tareas
        localStorage.setItem('tasks',JSON.stringify(tasks))//si el local storage conviertelo en una cade
    }
    //*********************Session de Commits para saber como funciona el Local Storage */
    //con el JSON.stringify te convierte UN DATO EN CADENA
    //localStorage.setItem('task', JSON.stringify(task));//almacenar cosas en el local storage es como almacenar algun dato  en el cache del navegador
    //console.log(JSON.parse(localStorage.getItem('task')))
    //console.log(task)lo que trae el objeto
    getTask();
    document.getElementById('formTask').reset();
    e.preventDefault();

}

function getTask(){// recorremos las tareas que tenemos en la consola
   let tasks = JSON.parse(localStorage.getItem('tasks'));
   let tasksView= document.getElementById('tasks');

   tasksView.innerHTML= "";
   for(let i = 0; i < tasks.length; i++ ){//recorremos el arreglo para ver si esta vacio
    //console.log(tasks[i]);
    let title = tasks[i].title;// guardamos el indice del for en una variable
    let description = tasks[i].description;//gurdamos la desrpcion igual de la variable
    //cada tarea que se metio se va listar en el documento que creaste creando una seccion de html
    tasksView.innerHTML += `<div class="card mb-3"> 
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">Delete</a>

            </div>

    </div>`

   }
}

function deleteTask(title){
    //console.log(title) verificamos que estemos teniedo almacenado el titulo
    let tasks = JSON.parse(localStorage.getItem('tasks'));// guardar el archivo para borrar
    for(let i = 0; i <  tasks.length; i++){ //haces un recorrido donde tareas es menor a cero
        if(tasks[i].title == title){// si el indice esta en el local storage
            tasks.splice(i, 1);//lo quitas del local storage y solo quita 1 dato que apretaste
        }
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));//y este es para volver a poner un dato
    getTask();
}
getTask();
