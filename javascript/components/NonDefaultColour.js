import { Colour } from "./Colour.js"

export class NonDefaultColour extends Colour {

    constructor(valid_css_colour) {
        super(valid_css_colour)
        this.version = 'non-default'
    }

    get getColourVersion() {
        return this.version
    }
}