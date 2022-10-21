/**
 * Add the event listener on Help click
 */

const help_button = document.querySelector('#help_button')
const help_modal = document.querySelector('#help_modal')
const help_info_container = document.querySelector('#help_info_container')

help_button.addEventListener('click', e => {
    help_modal.style.left = '0%'

})

help_modal.addEventListener('click', e =>  {
    help_modal.style.left = '-100%'
})

help_info_container.addEventListener('click', e =>  {
    e.stopPropagation()
})

