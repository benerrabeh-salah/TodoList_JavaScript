
    let tasks = [
        {
            "tatle":"read book1",
            "date":"10/10/2022",
            "isDone": false
        },
        {
            "tatle":"read book2",
            "date":"10/10/2022",
            "isDone": false
        },
        {
            "tatle":"read book3",
            "date":"10/10/2022",
            "isDone": false
        },
        {
            "tatle":"read book4",
            "date":"10/10/2022",
            "isDone": false
        }
    ]

    function fillTask(){
       document.getElementById("tasks").innerHTML = ""

        for(task of tasks)
        {
            let content = ` 
            <!--TASK-->
            <div class="task">
                <!--TASKs INFO-->
                <div style="width: 70%;">
                    <h2>${task.tatle}</h2>
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
                    <button class="circular"  style="background-color: brown; color:white;" >
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                    <button class="circular"  style="background-color: green; color:white;" >
                        <span class="material-symbols-outlined">
                            check
                        </span>
                    </button>
                    <button class="circular"  style="background-color: blue; color:white;" >
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

        }
    }

    fillTask()

    document.getElementById("add-btn").addEventListener("click",function(){
        let taskName = prompt("Add Task")
        let now = new Date()
        let date = now.getDate() + "/" + (now.getMonth()+1) +"/"+ now.getFullYear() +" | "+now.getHours() +":"+now.getMinutes()
        if(taskName)
        {
            let taskObj = {
                "tatle":taskName,
                "date":date,
                "isDone": false
            }
            tasks.push(taskObj)
            fillTask()
        }
     }) 
   