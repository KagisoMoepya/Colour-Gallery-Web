export class Colour {

    constructor(valid_css_colour) {
        this.valid_css_colour = valid_css_colour
        this.key = null
        this.name = null
    }

    get getValidCssName() {
        return this.valid_css_colour
    }

    get getColourName() {
        return this.name
    }

    get getKey() {
        return this.key
    }

    /**
     * Sets the colour name in accordance to the user specification
     * @param {any} colour_name
     */
    set setColourName(colour_name) {
        this.name = colour_name
    }

    /**
     * Sets the id of the colour entry
     * @param {any} key
     */
    set setKey(key) {
        this.key = key
    }
}