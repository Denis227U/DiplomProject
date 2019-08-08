const togglePopUp = () => {

    const closePopUp = (target, popup) => {
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if (!target) {
                popup.style.display = 'none';
            }
        }
    };

    // popupCall
    const popupCall = () => {
        const callLink = document.querySelectorAll('a.call-btn'),
            popUp = document.querySelector('.popup-call');
    
        callLink.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                
                popUp.style.display = 'block';
            });
        });

        popUp.addEventListener('click', (event) => {
            let target = event.target;
            closePopUp(target, popUp);
        });
        
    };
    popupCall();

    // popup-discount
    const popupDiscount = () => {
        const discountBlock = document.querySelector('.sentence .row'),
            popUp = document.querySelector('.popup-discount');

        discountBlock.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.discount-btn');
            if (target) {
                popUp.style.display = 'block';
            }
        });

        popUp.addEventListener('click', (event) => {
            let target = event.target;
            closePopUp(target, popUp);
        });
    };
    popupDiscount();

    // popup-check 
    const popupCheck = () => {
        const checkBtn = document.querySelector('.check-btn'),
            popUp = document.querySelector('.popup-check');

        checkBtn.addEventListener('click', (event) => {
            popUp.style.display = 'block';
        });

        popUp.addEventListener('click', (event) => {
            let target = event.target;
            closePopUp(target, popUp);
        });
    };
    popupCheck();

    // popup-consultation
    const popupConsultation = () => {
        const consultationBtn = document.querySelector('.consultation-btn'),
            popUp = document.querySelector('.popup-consultation');

        consultationBtn.addEventListener('click', (event) => {
            popUp.style.display = 'block';
        });

        popUp.addEventListener('click', (event) => {
            let target = event.target;
            closePopUp(target, popUp);
        });
    };
    popupConsultation();

};

export default togglePopUp;