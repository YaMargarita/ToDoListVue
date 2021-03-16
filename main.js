let app = new Vue({
    el: '#app',
    data: {
        taskTitle: '',
        textInput: '',
        doneTasks: [],
        currentTasks: [],
    },
    methods:{
        addTask(event){
            event.preventDefault();
            if(this.textInput.trim() !== ''){
                this.currentTasks.push({
                    title: this.textInput,
                    taskTitle: this.textInput,
                    id: Math.random(),
                })
                this.textInput = '';

            }
        },
        removeTask(index, type){
            if(type === 'current') this.currentTasks.splice(index, 1);
            else this.doneTasks.splice(index, 1);
        },

        editTask(){
            document.querySelector('.inputTask').disabled = false;
            document.querySelector('.inputTask').classList.add('active');
        },

        changeTask(index, event){
            if(this.currentTasks[index].taskTitle.trim() !== ''){
                event.target.disabled = true;
                event.target.classList.remove('active');
                event.target.classList.remove('wrong');
                document.querySelector('.current_check').disabled = false;
            }
            else {
                event.target.classList.add('wrong');
                document.querySelector('.current_check').disabled = true;
            }
        },

        checkTask(index, type){
            if(type === 'current'){
                let arr = this.currentTasks.splice(index, 1);
                this.doneTasks.push(...arr);
            } else{
                let arr = this.doneTasks.splice(index, 1);
                this.currentTasks.push(...arr);
            }
        }
    }
});

