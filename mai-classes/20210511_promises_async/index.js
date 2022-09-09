// Normal Promise
const userStatus = new Promise((resolve, reject) => {
  let hasKids = false;
  let hasDog = true;
  if (hasDog) {
    resolve({
      status: "User is cool",
      facie: "😎",
    });
  } else if (hasKids) {
    resolve({
      status: "User is going crazy",
      facie: "😅",
    });
  } else {
    reject({
      status: "User is alone",
      facie: "🥺",
    });
  }
});

userStatus
  .then((obj) => {
    document.querySelector(
      ".result"
    ).innerHTML = `${obj.status} and he/she is ${obj.facie}`;
  })
  .catch((err) => {
    document.querySelector(
      ".result"
    ).innerHTML = `${err.status} and he/she is ${err.emoji}`;
  });

function stepOne(userName) {
  return new Promise((resolve, reject) => {
    console.log("User data being loaded");
    if (userName == "Zain") {
      resolve("Welcome back");
    } else {
      reject("Sorry IDK you");
    }
  });
}

function secondStep(response) {
  return new Promise((resolve) => {
    console.log("Still loading");
    resolve(`We ve been waiting for you ${response}`);
  });
}

async function startSomething() {
  try {
    const response = await stepOne("Nancy");
    console.log("response just arrived");
    const secondResponse = await secondStep(response);
    console.log(secondResponse);
  } catch (err) {
    console.log(err);
  }
}

startSomething();
