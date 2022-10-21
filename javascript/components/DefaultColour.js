import { Colour } from "./Colour.js"

export class DefaultColour extends Colour {

    constructor(valid_css_colour) {
        super(valid_css_colour)
        this.version = 'default'
    }

    get getColourVersion() {
        return this.version
    }
}