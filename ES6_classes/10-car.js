export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // --- GETTERS & SETTERS ---
    get brand() { return this._brand; }
    set brand(val) { this._brand = val; }

    get motor() { return this._motor; }
    set motor(val) { this._motor = val; }

    get color() { return this._color; }
    set color(val) { this._color = val; }

    // --- SYMBOL HINT CONFIGURATION ---
    // Tells JavaScript which constructor blueprint to use when copying this class structure
    static get [Symbol.species]() {
        return this;
    }

    // --- CLONE METHOD ---
    cloneCar() {
        // Uses the Symbol.species reference to dynamically spin up a matching duplicate instance
        const Constructor = this.constructor[Symbol.species] || this.constructor;
        return new Constructor(this._brand, this._motor, this._color);
    }
}
