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
        return this.types.includes(colour)
    }
}