
let $btnOpenModal = document.querySelector('[data-js="btn-modal-open"]')
let $btnCloseModal = document.querySelector('[data-js="btn-modal-close"]')
let $modal = document.querySelector('[data-js="modal"]')

$btnOpenModal.addEventListener('click', openModal)
$btnCloseModal.addEventListener('click', closeModal)

function openModal() {
    $modal.style.display = 'block'
}

function closeModal() {
    $modal.style.display = 'none'
}