//export keyword is needed to be able to export this module
export class Car {
    constructor(id) {
        this.id = id;
    }

    identify() {
        return `Car Id: ${this.id}`;
    }
}