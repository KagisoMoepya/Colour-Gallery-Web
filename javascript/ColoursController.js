class ColoursController {

    constructor() {
        this.colours_list = []
    }

    get getColoursList() {
        return this.colours_list
    }

    set setColoursList(new_colour) {
        this.colours_list.push(new_colour)
    }
}