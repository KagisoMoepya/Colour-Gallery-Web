import { Colour } from "./Colour.js"

export class NonDefaultColour extends Colour {

    constructor(valid_css_colour) {
        super(valid_css_colour)
        this.version = 'non-default'
    }

    get getColourVersion() {
        return this.version
    }

    get colourHtml() {
        return `
            <div class="colour_wrapper" key="${this.key}" value="${this.valid_css_colour}">
                <div class="colour_name">${this.name}</div>
                <div class="remove_colour"><b>&times;</b></div>
            </div>
        `
    }
}