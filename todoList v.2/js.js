window.onload = function () {
        animations();
        taskLoader();

        addTask.onclick = function () {
            let text = document.getElementById('taskInput').value;
            let arr = [];
            let localArr = localStorage.getItem('arr');
            if (localArr != null) {
                arr = JSON.parse(localArr);
            } //если localStorahe нее пустой то присвоить этому массиву, массив из ls
            if (text != "") {
                let obj = {};
                obj.task = text;
                arr.push(obj); //добавил в массив новый обьект
                localStorage.setItem('arr', JSON.stringify(arr)); //Засунул массив в LocalStorage
                taskLoader(); // обновление списка заданий в DOM (Стереть всё, после вставить)
                document.getElementById('taskInput').value = "";
            } else {
                alert('Поле не может быть пустым!')
            }
        }
        function taskLoader() {
            document.getElementById('output').innerHTML = (''); //очистил список заданий
            let arr = [];
            let localArr = localStorage.getItem('arr');
            if (localArr != null) {
                arr = JSON.parse(localArr);
            }
            for (let i = 0; i < arr.length; i++) {
                let output = document.getElementById('output');
                let div = document.createElement('div');
                let p = document.createElement('p');
                let remove = document.createElement('div');
                div.className = 'task';
                remove.className = 'remove';
                p.innerHTML = arr[i].task;
                div.appendChild(p);
                div.appendChild(remove);
                output.appendChild(div);
                remover();
            }
        }
        function remover() {
            let els = document.getElementsByClassName('remove');
            for (let i = 0; i < els.length; i++) {
                els[i].addEventListener('click', function () {
                        let arr = [];
                        let localArr = localStorage.getItem('arr');
                        if (localArr != null) {
                            arr = JSON.parse(localArr);
                        } //если localStorahe нее пустой то присвоить этому массиву, массив из ls
                        arr.splice(i , 1)
                            localStorage.setItem('arr', JSON.stringify(arr)); //Засунул массив в LocalStorage
                            taskLoader();
                        });
                }
            }

        } //window.onload fnct
        clear.onclick = function (content) {
            localStorage.clear();
            document.getElementById('output').innerHTML = ('');
        }
        function animations() {
            document.getElementById('toDoList').style.transform = 'translateY(0)';
            setTimeout(() => document.getElementById('toDoList').style.opacity = '1', 1000);
            document.getElementById('title').style.transform = 'rotate(0deg)';
            document.getElementById('line1').style.transform = 'rotateY( 180deg)';
            document.getElementById('line2').style.transform = 'rotateY( 180deg)';
            document.getElementById('line1').style.boxShadow = "0 0 20px pink";
            document.getElementById('line2').style.boxShadow = "0 0 20px pink";
        }