const accordionQuest = () => {
    const panelGroup = document.getElementById('accordion-two'),
        panelHead = panelGroup.querySelectorAll('.panel-heading'),
        panelContent = panelGroup.querySelectorAll('.panel-collapse');

    panelContent[0].style.maxHeight = panelContent[0].scrollHeight + "px";
    const togglePanelContent = (index) => {
        for (let i = 0; i < panelContent.length; i++) {
            panelContent[i].classList.add('in');
            
            if (index === i) {                
                panelContent[i].style.maxHeight = panelContent[i].scrollHeight + "px";
            } else {
                panelContent[i].style.maxHeight = null;
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