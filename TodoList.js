
    let tasks = [
        {
            "title":"read book1",
            "date":"10/10/2022",
            "isDone": false
        },
        {
            "title":"read book2",
            "date":"10/10/2022",
            "isDone": false
        },
        {
            "title":"read book3",
            "date":"10/10/2022",
            "isDone": true
        },
        {
            "title":"read book4",
            "date":"10/10/2022",
            "isDone": false
        }
    ]

    function getTasksFormStorage(){
        let retrievedTasks = JSON.parse(localStorage.getItem("tasks"))
        if(retrievedTasks == null){
            tasks = []
        }else{
            tasks = retrievedTasks
        }
        // ==================== autre methode =======================
        //  tasks = retrievedTasks ?? []

    }
    getTasksFormStorage()

    

    function fillTask(){
        document.getElementById("tasks").innerHTML = ""
        let index = 0 
        for(task of tasks)
        {
            let content = ` 
            <!--TASK-->
            <div class="task ${task.isDone ? "done" : ""}">
                <!--TASKs INFO-->
                <div style="width: 70%;">
                    <h2>${task.title}</h2>
                    <div>
                        <span class="material-symbols-outlined">
                            calendar_month
                        </span>
                        <span>${task.date}</span>
                    </div>
                </div>
                <!--// TASKs INFO //-->
                <!--TASKS ACTIONS-->
                <div style="display: flex; justify-content: space-between; align-items: center; width: 20%;">
                    <button onclick="deleteTask(${index})" class="circular"  style="background-color: brown; color:white;" >
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                    ${task.isDone ? `
                    <button onclick="toggelTaskCompletion(${index})" class="circular"  style="background-color: rgb(118, 0, 101);; color:white;" >
                        <span class="material-symbols-outlined">
                            cancel
                        </span>
                    </button>
                    ` : `
                    <button onclick="toggelTaskCompletion(${index})" class="circular"  style="background-color: green; color:white;" >
                        <span class="material-symbols-outlined">
                            check
                        </span>
                    </button>
                    `}
                    
                    <button onclick="editTask(${index})" class="circular"  style="background-color: blue; color:white;" >
                        <span class="material-symbols-outlined">
                            edit
                        </span>
                    </button>
                </div>
                <!--// TASKS ACTIONS //-->
            </div>
            <!-- TASK //-->
        `
        document.getElementById("tasks").innerHTML += content
        index++
        }
    }

    fillTask()

    document.getElementById("add-btn").addEventListener("click",function(){
        let taskTitle = prompt("Add Task")
        let now = new Date()
        let date = now.getDate() + "/" + (now.getMonth()+1) +"/"+ now.getFullYear() +" | "+now.getHours() +":"+now.getMinutes()
        if(taskTitle)
        {
            let taskObj = {
                "title":taskTitle,
                "date":date,
                "isDone": false
            }
            tasks.push(taskObj)
            storeTasks()
            fillTask()
        }
     }) 


     function deleteTask(index){
        let task = tasks[index]
        let isConfirmed = confirm("do you want delete this task : " + task.title)
        if(isConfirmed){
            tasks.splice(index, 1)
            storeTasks()
            fillTask()
        }
     }

     function editTask(index){
        let task = tasks[index]
        let newTaskTitle = prompt("do you want edit this task ",task.title)
        if(newTaskTitle)
        {
            task.title = newTaskTitle
            storeTasks()
            fillTask()
        }

     }

     function toggelTaskCompletion(index){
        let task = tasks[index]
        task.isDone = !task.isDone

        storeTasks()    
        fillTask()
     }
   

     // ================ Store Tasks ====================//
     function storeTasks(){
        let tasksString = JSON.stringify(tasks)
        localStorage.setItem("tasks",tasksString)
     }

     // ================// Store Tasks //====================//