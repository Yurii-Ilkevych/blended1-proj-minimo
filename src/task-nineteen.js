// Task 19 - Book Table Modal window
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-table]"),
      closeModalBtn: document.querySelector("[data-modal-close-table]"),
      modal: document.querySelector("[data-modal-table]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden-t");
    }
  })();