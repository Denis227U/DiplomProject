const sendForms = (obj) => {

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const mainForm = document.querySelector('.main-form'),        
        formConsultation = document.querySelector('.popup-consultation form'),
        inputQuestion = document.querySelector('.director .director-form input'),
        btnDirect = document.querySelector('.consultation-btn'),
        popUp = document.querySelector('.popup-consultation'),        
        formsCapture = document.querySelectorAll('.capture-form'),
        disctBtn = document.getElementById('discountBtn'),
        popUpDisc = document.querySelector('.popup-discount'),
        formCalc = document.querySelector('.popup-discount .capture-form');

    const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: red;';
    
    // валидация форм
    const formValid = () => {
        const inputsTel = document.querySelectorAll('input.phone-user');

        inputsTel.forEach((item) => {
            item.addEventListener('input', () => {
                event.target.value = event.target.value.replace(/[^+\d]/g, '');
            });
        });    
        
    };
    formValid();

    //  form main
     mainForm.addEventListener('submit', (event) => {
        event.preventDefault();
        mainForm.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(mainForm);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then(successData)
            .catch(errorsData)
            .finally(finalyData(mainForm));
    });

    // calcForm    
    let calcStore = obj;

    disctBtn.addEventListener('click', () => {
        event.preventDefault();            
        popUpDisc.style.display = 'block';
    });
    
    popUpDisc.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popUpDisc.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if (!target) {
                popUpDisc.style.display = 'none';
            }
        }
    });

    formCalc.addEventListener('submit', (event) => {
        event.preventDefault();
        formCalc.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(formCalc);
        formData.forEach((val, key) => {
            calcStore[key] = val;
        });

        postData(calcStore)
            .then(successData)
            .catch(errorsData)
            .finally(finalyData(formCalc));
    });

    // Form Consultation
    let formStore = {};        

    btnDirect.addEventListener('click', ()=> {
        event.preventDefault();

        popUp.style.display = 'block';

        formStore.userQuest = inputQuestion.value;
    });   

    formConsultation.addEventListener('submit', (event) => {
        event.preventDefault();
        formConsultation.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(formConsultation);
        formData.forEach((val, key) => {
            formStore[key] = val;
        });

        postData(formStore)
            .then(successData)
            .catch(errorsData)
            .finally(finalyData(formConsultation, inputQuestion));
    });

    // other forms
    formsCapture.forEach((item, index) => {
        if (index !== formsCapture.length - 1 && index !== 2) {
            item.addEventListener('submit', (event) => {
                event.preventDefault();
                item.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(item);
                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });
        
                postData(body)
                    .then(successData)
                    .catch(errorsData)
                    .finally(finalyData(item));
            });
        }        
    });


    const successData = (response) =>{
        if (response.status !== 200) {
            throw new Error('status network not 200');
        }
        statusMessage.textContent = successMessage;            
    };
    const errorsData = () =>{
        statusMessage.textContent = errorMessage;
        console.error(error);
    };
    const finalyData = (form, input) =>{
        form.querySelectorAll('input').forEach(item => item.value = '');
        if (input) {
            input.value = '';
        }
    };

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForms;