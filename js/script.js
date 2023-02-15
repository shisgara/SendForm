// =========== 1. Проверяем DOM  ============ //

window.onload = function () {


    // =========== 2. Запрещаем числа в поле ввода ============ //

    let inputFullName = document.getElementById('forFullName');
    inputFullName.onkeydown = (event) => {
        if (!isNaN(parseInt(event.key))) {
            return false;
        }
    }


    // =========== 3. Запрещаем точки и запятые в поле ввода ============ //

    document.getElementById('forUserName').onkeydown = (event) => {
        if (event.key === ',' || event.key === '.') {
            return false
        }
    }


    // =========== 4. Проверяем чекбокс соглашения ============ //

    let formAgreement = document.getElementById('formAgreement');
    formAgreement.addEventListener('click', function () {
        if (formAgreement.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен')
        }
    })

    // =========== 5. Проверяем Sign Up ============ //



    document.getElementById('submit').onclick = function () {

        if (!(document.getElementById('forFullName').value)) {
            alert('Введите имя и фамилию');
            return;
        }
        if (!(document.getElementById('forUserName').value)) {
            alert('Введите имя пользователя');
            return;
        }
        if (!(document.getElementById('email').value)) {
            alert('Введите E-mail');
            return;
        }

        let password = document.getElementById('password').value;
        let repeatPassword = document.getElementById('repeatPassword').value;

        if (!password) {
            alert('Введите пароль');
            return;
        }
        if (password.length < 2) {
            alert('Введите пароль не менее 8 символов')
            return;
        }

        if (!repeatPassword) {
            alert('Повторите пароль');
            return;
        }

        if (password !== repeatPassword) {
            alert('Пароли не совпадают!')
            return;
        }

        if (!(document.getElementById('formAgreement').checked)) {
            alert('Согласитесь с условиями');
            return;
        }

        document.getElementById('popup').classList.remove('hide');

        let inputs = document.querySelectorAll('#forFullName, #forUserName, #email, #password, #repeatPassword');
        inputs.forEach(input => input.value = '');
    }



    document.getElementById('popup__button').onclick = checkLogin;
    document.getElementById('link').onclick = checkLogin;

        function checkLogin () {
            document.getElementById('popup').classList.add('hide');
            document.getElementById('formTitle').innerText = 'Log in to the system';
            document.getElementById('forFullName').parentElement.remove();
            document.getElementById('repeatPassword').parentElement.remove();
            document.getElementById('email').parentElement.remove();
            document.getElementById('formAgreement').nextSibling.parentElement.remove();
            document.getElementById('submit').innerText = 'Sign In';
            document.getElementsByClassName('have-account')[0].remove();

            document.getElementById('submit').onclick = function () {
                if (!(document.getElementById('forUserName').value)) {
                    alert('Введите имя пользователя');
                    return;
                }
                let password = document.getElementById('password').value;

                if (!password) {
                    alert('Введите пароль');
                    return;
                }
                if (password.length < 8) {
                    alert('Введите пароль не менее 8 символов')
                    return;
                }
                alert('Добро пожаловать, ' + document.getElementById('forUserName').value + '!');
            }
        }



}