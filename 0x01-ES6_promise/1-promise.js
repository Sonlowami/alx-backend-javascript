export default function getFullResponseFromAPI (success) {
  const promise = new Promise((resolve, reject) => {
    (success)
      ? resolve({ status: 200, body: 'Success' })
      : reject(Error('The fake API is not working currently'));
  });
  return promise;
}
