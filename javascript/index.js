import { form } from "./add_colour.js"
import { ColoursController } from "./components/ColoursController.js"
import { DefaultColour } from "./components/DefaultColour.js"
import { NonDefaultColour } from "./components/NonDefaultColour.js"

const colours_controller = new ColoursController()
const colours_container = document.querySelector('#colours_container')

/**
 * Adding the default colours first
 */
colours_controller.defaultColours.forEach(colour => {

    const new_colour = new DefaultColour(colour)
    new_colour.setColourName = new_colour.getValidCssName
    new_colour.setKey = colours_controller.getColoursList.length
    colours_container.innerHTML += new_colour.colourHtml
    colours_controller.setColoursList = new_colour
    onColourHover()
    onColourClick()
})

/**
 * Add a form effect that changes the input border if colours is valid
 */
 form.addEventListener('input', e => {

    const formData = new FormData(form)
    const valid_css_colour = formData.get('valid_css_colour')
    const colour_name = formData.get('colour_name')
    const support_validation = colours_controller.validateCssSupport(valid_css_colour)
    const format_validation = colours_controller.validateCssFormat(valid_css_colour) ? viewColourNameInput(true, support_validation, valid_css_colour) : viewColourNameInput(false, support_validation, valid_css_colour)
})

/**
 * Add a form effect when user submits form
 */
form.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(form)
    const valid_css_colour = formData.get('valid_css_colour')
    const colour_name = formData.get('colour_name')
    const support_validation = colours_controller.validateCssSupport(valid_css_colour)
    const colour_name_validation = colour_name === '' ? valid_css_colour : colour_name

    if(support_validation) {
        const new_colour = new NonDefaultColour(valid_css_colour)
        new_colour.setColourName = colour_name_validation
        new_colour.setKey = colours_controller.getColoursList.length
        colours_container.innerHTML += new_colour.colourHtml
        colours_controller.setColoursList = new_colour
        resetInputBorder()
        removeColourEvent()
        onColourHover()
        onColourClick()
        console.log(colours_controller.colours_list);
        form.reset()
    }
})

const validCssInput = document.querySelectorAll('.input_wrappers').item(0)
const colourNameInput = document.querySelectorAll('.input_wrappers').item(1)
const cssInput = validCssInput.querySelector('input')
const nameInput = colourNameInput.querySelector('input')

/**
 * Shows the view of the colour name input based on whether the user enters a specific colour format
 * @param {*} bool 
 * @param {*} support_validation 
 * @param {*} css_colour 
 * @returns 
 */
function viewColourNameInput(bool, support_validation, css_colour) {

    if (bool) {
        nameInput.setAttribute('required', '')
        colourNameInput.style.height = '100%'

        /**
         * Change border-bottom on correct colour input
         */
        if(support_validation) {
            cssInput.style.borderBottom = `2px solid ${css_colour}`
            nameInput.style.borderBottom = `2px solid ${css_colour}`
        } else {
            cssInput.style.borderBottom = `2px solid #adadad`
            nameInput.style.borderBottom = `2px solid #adadad`
        }
    } else {
        nameInput.removeAttribute('required')
        colourNameInput.style.height = '0'

        /**
         * Change border-bottom on correct colour input
         */
        if(support_validation) {
            cssInput.style.borderBottom = `2px solid ${css_colour}`
        } else {
            cssInput.style.borderBottom = `2px solid #adadad`
        }
    }
    return bool
}

/**
 * Resets the border of the form inputs
 */
function resetInputBorder() {
    cssInput.style.borderBottom = `2px solid #adadad`
    nameInput.style.borderBottom = `2px solid #adadad`
}

/**
 * On colour hover the colour background must change
 */
function onColourHover() {
    const colour_wrapper = colours_container.querySelectorAll('.colour_wrapper')
    
    colour_wrapper.forEach(colour => {
        colour.addEventListener('mouseover', e => {
            const css_colour = colour.getAttribute('value')
            colour.style.backgroundColor = css_colour
            colour.style.border = `3px solid ${css_colour}`
        })
        colour.addEventListener('mouseout', e => {
            const css_colour = colour.getAttribute('value')
            colour.style.backgroundColor = `transparent`
            colour.style.border = `3px solid white`
        })
    })
}

/**
 * On colour click the body background must change
 */

function onColourClick() {
    const body = document.querySelector('body')
    const colour_wrapper = colours_container.querySelectorAll('.colour_wrapper')
    
    colour_wrapper.forEach(colour => {
        colour.addEventListener('click', e => {
            const css_colour = colour.getAttribute('value')
            body.style.backgroundColor = css_colour
        })
    })
}

/**
 * Add remove colour functionality for non-default colours
 */

function removeColourEvent() {
    const colour_wrapper = colours_container.querySelectorAll('.colour_wrapper')
    
    colour_wrapper.forEach(colour => {
        if(colour.childElementCount === 2) {
            const remove_colour = colour.querySelector('.remove_colour')
            const key = colour.getAttribute('key')

            remove_colour.addEventListener('click', e => {
                e.stopPropagation()
                colour.remove()
                colours_controller.removeColour(parseInt(key))
            })
        }
    })
} 