/**
 * Add the event listener on Help click
 */

export const form = document.querySelector('form')
const add_button = document.querySelector('#add_button')
const form_modal = document.querySelector('#form_modal')

add_button.addEventListener('click', e => {
    form_modal.style.left = '0%'
})

form_modal.addEventListener('click', e =>  {
    form_modal.style.left = '-100%'
    form.reset()
})

form.addEventListener('click', e =>  {
    e.stopPropagation()
})