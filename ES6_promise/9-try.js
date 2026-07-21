#!/usr/bin/env node

function guardrail(mathFunction){
    let queue = []
    try{
        let returnedvalue = mathFunction()
        queue.push(returnedvalue)
    }
    catch (error){
        queue.push(error.toString())
    }
    finally{
        queue.push("Guardrail was processed")
    }
    return queue
}

export default guardrail
