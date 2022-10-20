export class Colour {

    constructor(valid_css_colour) {
        this.valid_css_colour = valid_css_colour
        this.name = null
        this.type = null
        this.description = null
    }

    get getValidCssName() {
        return this.valid_css_colour
    }

    get getColourName() {
        return this.name
    }

    /**
     * @param {any} colour_name
     */
    set setColourName(colour_name) {
        this.name = colour_name
    }

    get getColourType() {
        return this.type
    }

    /**
     * @param {any} colour_type
     */
    set setColourType(colour_type) {
        this.type = colour_type
    }

    get getColourVersion() {
        return this.version
    }

    get getColourDescription() {
        this.description
    }

    /**
     * @param {any} colour_description
     */
    set setColourDescription(colour_description) {
        this.description = colour_description
    }
}