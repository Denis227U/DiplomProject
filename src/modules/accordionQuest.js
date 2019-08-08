const accordionQuest = () => {
    const panelGroup = document.getElementById('accordion-two'),
        panelHead = panelGroup.querySelectorAll('.panel-heading'),
        panelContent = panelGroup.querySelectorAll('.panel-collapse');

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
        event.preventDefault();

        let target = event.target;
        target = target.closest('.panel-heading');

        if (target) {
            panelHead.forEach((item, i) =>{
                if (item === target) {
                    togglePanelContent(i);
                }
            });
        }
    });
};

export default accordionQuest;