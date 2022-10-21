import { form } from "./add_colour.js"
import { ColoursController } from "./components/ColoursController.js"
import { DefaultColour } from "./components/DefaultColour.js"
import { NonDefaultColour } from "./components/NonDefaultColour.js"

const colours_controller = new ColoursController()
const colours_container = document.querySelector('#colours_container')

/**
 * Focuses on the inside of the colour container
 */

function containerChildCount() {
    return colours_container.childElementCount === 0
}

function noColoursMessage() {
    const h1 = document.createElement('h2')
    h1.textContent = 'Add New Colours!'
    h1.style.textAlign = 'center'
    h1.style.whiteSpace = 'nowrap'
    h1.style.translate = '0 7.5rem'
    colours_container.append(h1)
}

if(containerChildCount()) {
    noColoursMessage()
}

/**
 * Add a form effect that changes the input border if colours is valid
 */

 form.addEventListener('input', e => {

    const formData = new FormData(form)
    const valid_css_colour = formData.get('valid_css_colour')
    const colour_name = formData.get('colour_name')
    const support_validation = colours_controller.validateCssSupport(valid_css_colour)
    const format_validation = colours_controller.validateCssFormat(valid_css_colour) ? viewColourNameInput(true) : viewColourNameInput(false)
})

form.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(form)
    const valid_css_colour = formData.get('valid_css_colour')
    const colour_name = formData.get('colour_name')

    console.log({valid_css_colour, colour_name});
})

function viewColourNameInput(bool) {
    const colourNameInput = document.querySelectorAll('.input_wrappers').item(1)
    const input = colourNameInput.querySelector('input')

    if (bool) {
        input.setAttribute('required', '')
        colourNameInput.style.height = '100%'
    } else {
        input.removeAttribute('required')
        colourNameInput.style.height = '0'
    }
    return bool
}

function addNewDefaultColour(valid_css_colour) {
    const colour = new DefaultColour(valid_css_colour)
    colour.setColourName = colour.getValidCssName
    colour.setKey = colours_controller.getColoursList.length
    colours_controller.setColoursList = valid_css_colour
}

function addNewNonDefaultColour(valid_css_colour, colour_name) {
    const colour = new DefaultColour(valid_css_colour)
    colour.setColourName = colour_name
    colour.setKey = colours_controller.getColoursList.length
    colours_controller.setColoursList = colour
}