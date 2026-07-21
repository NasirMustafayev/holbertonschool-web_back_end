import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

function handleProfileSignup(firstName, lastName, filename) {
    return Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(filename)
    ]).then((results) => {
    return results.map((result) => {
      if (result.status === 'fulfilled') {
        return {
          status: 'fulfilled',
          value: result.value
        };
      } else {
        return {
          status: 'rejected',
          value: `Error: ${result.reason.message}`
        };
      }
    })
  })
}

export default handleProfileSignup