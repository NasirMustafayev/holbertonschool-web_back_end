import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

function handleProfileSignup(firstName, lastName, filename) {
    return Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(filename)
    ]).then((results) => results.map((result) => ({
        status: result.status,
        value: result.value || result.reason.message
    })));
}

export default handleProfileSignup;
