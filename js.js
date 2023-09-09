document.addEventListener('DOMContentLoaded', () => {
    
    const inputcar = document.querySelector(".input_car")
    const buttoncar = document.querySelector(".button_car")
    const divcar = document.querySelector(".taskcar")
    const buttons = document.querySelector(".buttons")
    const divtask = document.querySelectorAll(".task")
    const button = document.querySelectorAll(".buttonmain")
   

    buttons.addEventListener("click", function(event){
        event.preventDefault()
        button.forEach((item)=>{
            item.classList.remove("button_active")
            item.classList.add("button_inactive")
        })

        const target = event.target
        
        if (target && target.classList.contains("buttonmain"))
        {
            button.forEach((item, i) => {
                
                if (item == target){
                    divtask.forEach((div) => {
                        div.classList.add("inactive")
                        item.classList.add("button_active")
                        item.classList.remove("button_inactive")
                    })
                    divtask[i].classList.add("active")
                    divtask[i].classList.remove("inactive")
                    
                }
            })
        }
    })

    //task 1 (Обои) 
    const input_heightwall = document.querySelector(".input_heightwall");
    const input_widthwall = document.querySelector(".input_widthwall");
    const input_ceiling = document.querySelector(".input_ceiling");
    const input_color = document.querySelector('.input_color')
    const input_wallpaper = document.querySelector('input_wallpaper');
    const input_widthwallpaper = document.querySelector('input_widthwallpaper');
    const input_heightwallpaper = document.querySelector("input_heightwallpaper");
    const input_spendcolor = document.querySelector(".input_spendcolor")
    const result = document.querySelector(".result")
    const buttonCalculate = document.querySelector(".buttonCalculate");



    const peremetr = (input_heightwall.value + input_widthwall.value) * 2
    const square = peremetr * input_ceiling.value
    console.log(square)
    const squarewallpaper = input_widthwallpaper.value * input_heightwallpaper.value
    console.log(squarewallpaper)
    const digitwallpaper = square / squarewallpaper
    const wallpaperall = digitwallpaper * input_wallpaper.value

    const spendcolorall = square * input_spendcolor.value
    const colorall = spendcolorall * input_color.value

    buttonCalculate.addEventListener("click", (event)=>{
        event.preventDefault()
        result.innerHTML = `<div>${wallpaperall} - стоимость обоев</div>
        <div>${digitwallpaper} - количество обоев</div>
        <div>${peremetr} - периметр</div>
        <div>${square} - площадь</div>

        <div>${spendcolorall} - количество краски потраченной</div>
        <div>${colorall} - количество краски стоимость</div>
        `
    })



 //task_2 (speed car)

    buttoncar.addEventListener("click", (event)=>{
        console.log("ТестТест")
        event.preventDefault()
        checkspeed()
    })

    function checkspeed(){
        const maxspeed = 90
        const speed = inputcar.value;
        console.log("Тест")
        if (speed >= maxspeed + 20 && speed<=40 + maxspeed){
            divcar.innerHTML = `Скорость ${speed}, штраф равен 500 рублей`;
        }
        if (speed >= maxspeed+ 40 && speed<=maxspeed + 60){
            divcar.innerHTML = `Скорость ${speed}, штраф равен 1500 рублей`;
        }
        if (speed >= maxspeed+ 60 && speed<=maxspeed+80){
            divcar.innerHTML = `Скорость ${speed}, штраф равен 2500 рублей и лишение прав на 4 месяца`;
        }
        if (speed >= maxspeed + 80){
            divcar.innerHTML = `Скорость ${speed}, штраф равен 5000 рублей и лишение прав на пол года`;
        }
    }

    //task_3
    const input_student = document.querySelector(".input_student");
    const button_pullup = document.querySelector(".button_pullup");
    const taskpullup = document.querySelector(".taskpullup");

    button_pullup.addEventListener("click", (event)=>{
        event.preventDefault();
        checkPullup()
       
    })

    function checkPullup(){
        const students = input_student.value;
        let htmlresult = ""
        let studentClass = []
        let student3 = 0;
        let student4 = 0;
        let student5 = 0;

      
        for (let i = 1; i<=students; i++){
            let pullup = 0;
            while (pullup >= 20 || pullup <=10){
                pullup = Math.ceil(Math.random() * 100)
                console.log("Тест")

            }
            if (pullup >= 12 && pullup <=13){
                student3 += 1;
            }
            if (pullup >= 14 && pullup <=15){
                student4 += 1;
            }
            if (pullup >= 16){
                student5 += 1;
            }
            const person = {name: `Студент${i}`, pullup_text: pullup}
            studentClass.push(person);
            console.log(studentClass)
            htmlresult = htmlresult +`<div>Имя: ${person.name} Подтягиваний: ${person.pullup_text}</div>`

            function checkMax(){
                let max = 0
                studentClass.forEach((item)=>{
                    if (max<item.pullup_text){
                        max = item.pullup_text;
                    }
                
                })
                return max
            }
            function checkMin(){
                let min = 100
                studentClass.forEach((item)=>{
                    if (min>item.pullup_text){
                        min = item.pullup_text;
                    }
                
                })
                return min
            }
        }
        taskpullup.innerHTML = htmlresult + `<div>Получило 3: ${student3}<div>`
        + `<div> Получило 4: ${student4}<div>`
        + `<div> Получило 5: ${student5}<div>`
        + `<div>Максимальное подтягивание: ${checkMax()}<div>`
        + `<div>Минимальное подтягивание: ${checkMin()}<div>`
    }


    //task 4
    const inputword = document.querySelector(".input_word")
    const button_maxword = document.querySelector(".button_maxword");
    const taskmaxword = document.querySelector(".taskmaxword");


    button_maxword.addEventListener("click", (event) =>{
        event.preventDefault()
        const words= inputword.value
        const word = words.replace(/[^a-zа-яё\s]/gi, '')
        list_words = word.split(" ")
        let maxWordDigit = 0;
        let maxWord = '';
        list_words.forEach((word) =>{
            if (word.length > maxWordDigit){
                maxWordDigit = word.length
                maxWord = word;
            }
            
        })
        console.log(maxWord)
        taskmaxword.innerHTML = `Самое длинное слово: ${maxWord}`
    })


    //task 5
    const input_password = document.querySelector(".input_password");
    const button_password = document.querySelector(".button_password");
    const taskpassword = document.querySelector(".taskpassword");

    button_password.addEventListener("click", (event)=> {
        event.preventDefault()
        checkPassword()
    })

    function checkPassword(){
        const textPassword = input_password.value;
        const textPasswordList = textPassword.split('')
        let x = true;
        if (!/[a-z]/.test(textPassword)){
            console.log(textPassword)
            console.log(!/[a-z][A-Z]/.test(textPassword))
            alert("Пароль должен содержать минимум 1 строчную латинскую букву");
            x = false;
        }
        if (!/[0-9]/.test(textPassword)){
            console.log(!/[0-9]/.test(textPassword))
            alert("Пароль должен содержать минимум 1 цифру");
            x = false;
        }
        if(!/[A-Z]/.test(textPassword)){
            alert("Пароль должен содержать минимум 1 заглавную латинскую букву");
            x = false;
        }
        console.log(textPassword.length)
        if(textPassword.length < 6){
            alert("Пароль должен быть больше 6 символов");
            x = false;
        }
        if(textPassword.length > 12){
            alert("Пароль должен быть меньше 12 символов");
            x = false;
        }
        if(!/[!@#$%^&*]/.test(textPassword)){
            alert("Должен быть один спец символ");
            x = false;
        }
        taskpassword.innerHTML = `<div class="True">${x}</div>`

    }

})
