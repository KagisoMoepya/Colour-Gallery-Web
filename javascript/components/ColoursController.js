export class ColoursController {

    constructor() {
        this.types = ['rgb',  'rgba', 'hsl', 'hsla', '#']
        this.colours_list = []
    }

    get getColoursList() {
        return this.colours_list
    }

    set setColoursList(new_colour) {
        this.colours_list.push(new_colour)
    }

    validateCssSupport(colour) {
        return CSS.supports('color', colour)
    }

    validateCssFormat(colour) {
        return this.types.filter(format => colour.includes(format)).length > 0;
    }

    removeColour(key) {
        const filtered_colours_list = this.colours_list.filter(colour => colour.getKey !== key)
        this.colours_list = filtered_colours_list
    }
}