const modalContainerElem = document.getElementById('modal-toggler');
const openModalBtn = document.getElementById('open-modal');

// Open modal
openModalBtn.onclick = () => {
    modalContainerElem.classList.add('modal-container--show-modal');
};

// Close modal
modalContainerElem.onclick = (event) => {
    if (
        event.target.id == 'modal-toggler' ||
        event.target.className == 'close-modal'
    ) {
        modalContainerElem.classList.remove('modal-container--show-modal');
    }
};
