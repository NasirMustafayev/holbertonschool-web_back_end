#!/usr/bin/env node

function signUpUser(firstName, lastName) {
    return Promise.resolve({
        firstName : firstName,
        lastName : lastName
    })
}

export default signUpUser