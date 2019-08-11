const accordionCalc = () => {
    const panelGroup = document.getElementById('accordion'),
        panelHead = panelGroup.querySelectorAll('.panel-heading'),
        panelContent = panelGroup.querySelectorAll('.panel-collapse'),
        nextBtn = document.querySelectorAll('.constructor .panel-collapse .button'); 

    let calcStore = {
        storageBox: 'Однокамерный',
        firstSump: ['1.4 метра', '1 штука'],
        secondSump: [],
        bilge: 'Есть',
        distance: 0,
        cost: 0
    };


    // переключение табов
    const togglePanelContent = (index) => {
        for (let i = 0; i < panelContent.length; i++) {
            if (index === i) {
                panelContent[i].classList.add('in');
            } else {
                panelContent[i].classList.remove('in');
            }
        }
    };

    panelGroup.addEventListener('click', (event) => {

        let target = event.target;
        target = target.closest('.panel-heading, .construct-btn');

        if (target) {
            event.preventDefault();
            panelHead.forEach((item, i) =>{
                if (item === target) {
                    togglePanelContent(i);
                }
            });

            nextBtn.forEach((item, i) => {
                if (item === target) {
                    if (i < nextBtn.length -1 ) {
                        panelContent[i].classList.remove('in');
                        panelContent[i+1].classList.add('in');
                    }
                }
            });
        }
    });


    // калькулятор
    const calc = () => {
        const calcBlock = document.getElementById('accordion'),
            myonoffswitchCheck = document.getElementById('myonoffswitch'),
            selectBox = document.querySelectorAll('.constructor .select-box select'),
            myonoffswitchCheckTwo = document.getElementById('myonoffswitch-two'),
            collapseFourInput = document.querySelector('#collapseFour input'),
            calcResult = document.getElementById('calc-result');

        const titleTwoSump = document.querySelectorAll('.title-text'),
            selectTwoSump = document.querySelectorAll('.select-box');

        let total = 0;
        let newTotal = 0;


        if (myonoffswitchCheck.checked === true) {
            titleTwoSump[1].style.display = 'none';
            selectTwoSump[2].style.display = 'none';
            selectTwoSump[3].style.display = 'none';

            total = 10000;
        }
        
        myonoffswitchCheck.addEventListener('change', (event) => {
            if (myonoffswitchCheck.checked === true) {
                titleTwoSump[1].style.display = 'none';
                selectTwoSump[2].style.display = 'none';
                selectTwoSump[3].style.display = 'none';

                total = 10000;

                calcStore.storageBox = 'Однокамерный';
                calcStore.secondSump = [];

            } else if (myonoffswitchCheck.checked === false){
                titleTwoSump[1].style.display = 'block';
                selectTwoSump[2].style.display = 'inline-block';
                selectTwoSump[3].style.display = 'inline-block';

                total = 15000;

                calcStore.storageBox = 'Двухкамерный';
                calcStore.secondSump = ['1.4 метра', '1 штука'];
            }
        });
        

        const countSum = (target) => {
            const diamValue = selectBox[0].options[selectBox[0].selectedIndex].value,
                ringsValue = selectBox[1].options[selectBox[1].selectedIndex].value,
                diamTwoValue = selectBox[2].options[selectBox[2].selectedIndex].value,
                ringsTwoValue = selectBox[3].options[selectBox[3].selectedIndex].value;

            
            if (total === 10000) {

                total = total * diamValue * ringsValue;
                newTotal = total;
                total = 10000;

                if (!myonoffswitchCheckTwo.checked) {
                    newTotal -= 1000;
                }

            } else if (total === 15000) {

                total = total * diamValue * ringsValue * diamTwoValue * ringsTwoValue;
                newTotal = total;
                total = 15000;

                if (!myonoffswitchCheckTwo.checked) {
                    newTotal -= 2000;
                }

            }
            calcResult.value = newTotal;

            calcStore.cost = newTotal;            
            calcStore.distance = +collapseFourInput.value;

            if (myonoffswitchCheckTwo.checked) {
                calcStore.bilge = 'Есть';
            } else if (!myonoffswitchCheckTwo.checked) {
                calcStore.bilge = 'Нет';
            }


            for (let i = 0; i < 2; i++) {
                calcStore.firstSump[i] = selectBox[i].options[selectBox[i].selectedIndex].textContent;
            }

            if (calcStore.secondSump.length > 0) {
                for (let i = 2; i < 4; i++) {
                    calcStore.secondSump[i - 2] = selectBox[i].options[selectBox[i].selectedIndex].textContent;
                }
            }
            
            console.log('calcStore: ', calcStore);
            
        };

        calcBlock.addEventListener('change', (event) => {
            let target = event.target;

            if (target.matches('#myonoffswitch') || target.matches('.constructor .select-box select') || target.matches('#myonoffswitch-two') || target.matches('#collapseFour input')) {
                countSum(target);
            }
        });

    };
    calc();

    return calcStore;
    

};

export default accordionCalc;