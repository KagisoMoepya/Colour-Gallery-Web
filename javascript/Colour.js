export class Colour {

    constructor() {
        this.types = ['rgb',  'rgba', 'hsl', 'hsla', '#']
    }

    get getTypes() {
        return this.types
    }
}