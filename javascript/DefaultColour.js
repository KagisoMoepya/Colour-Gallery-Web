export class DefaultColour extends Colour {

    constructor(valid_css_colour) {
        super()
        this.valid_css_colour = valid_css_colour
        this.name = null
        this.type = null
        this.description = null
        this.version = 'default'
    }

    get getColourName() {
        return this.name
    }

    set setColourName(colour_name) {
        this.name = colour_name
    }

    get getColourType() {
        return this.type
    }

    set setColourType(colour_type) {
        this.type = colour_type
    }

    get getColourVersion() {
        return this.version
    }

    get getColourDescription() {
        this.description
    }

    set setColourDescription(colour_description) {
        this.description = colour_description
    }
}