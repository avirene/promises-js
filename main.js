const makePromise = (message) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => Math.random() > 0.1 ? resolve(message) : reject(Error('')),
      Math.random()*1000 + 500);
  });
};

const fetchUserData = makePromise('Fetch User Data');
const getFavourites = makePromise('Get favourites');
const getNotifications = makePromise('Get notifications');

Promise.all([
  fetchUserData,
  getFavourites,
  getNotifications
]).then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log('Promise was rejected');
});
