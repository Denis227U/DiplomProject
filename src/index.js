'use strict';

import btnMore from './modules/btnMore';
import accordionQuest from './modules/accordionQuest';
import togglePopUp from './modules/togglePopUp';
import accordionCalc from './modules/accordionCalc';
import sendForms from './modules/sendForms';



// кнопка Больше
btnMore();

//акардеон секция с вопросами
accordionQuest();

// all popUps
togglePopUp();

// аккардеон-калькулятор
accordionCalc();

// отправка форм
sendForms(accordionCalc());