function firstFunc() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 1000);
  });
}

function secondFunc() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(2);
    }, 1000);
  });
}

function thirdFunc() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(3);
    }, 1000);
  });
}

function forthFunc() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(4);
    }, 1000);
  });
}

function fifthFunc() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(5);
    }, 1000);
  });
}

async function weeklyTask5() {
  try {
    let res = await firstFunc();
    console.log(res);
    res = await secondFunc();
    console.log(res);
    res = await thirdFunc();
    console.log(res);
    res = await forthFunc();
    console.log(res);
    res = await fifthFunc();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
weeklyTask5();