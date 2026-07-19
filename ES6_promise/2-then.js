function handleResponseFromAPI(promise) {
  return promise.then((response) => {
    console.log(response);
  });
}

export default handleResponseFromAPI;
