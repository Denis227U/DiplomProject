const btnMore = () => {
    const shadowBlock = document.querySelectorAll('.sentence .row > div'),
        more = document.querySelector('.add-sentence-btn');


    more.addEventListener('click', (event) => {
        shadowBlock.forEach((item) => {            
            item.classList.remove('hidden', 'visible-sm-block');
        });
        more.style.display = 'none';
    });
};

export default btnMore;