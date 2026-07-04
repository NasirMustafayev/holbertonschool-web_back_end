class Currency {
    constructor(code, name){
        this._name = name
        this._code = code
    }
    
    get name(){
        return this._name
    }
    set name(value){
        if(typeof value !== 'string'){
            throw new TypeError('Name must be string')
        }
        this._name = value
    }

    get code(){
        return this._code
    }
    set code(value){
        if(typeof value !== 'string'){
            throw new TypeError('Code must be string')
        }
        this._code = value
    }

    displayFullCurrency(){
        return `${this.name} (${this.code})`
    }
}

export default Currency
