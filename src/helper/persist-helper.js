export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    console.log(error);
  }
};

export const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log("error in get item");
  }
};

export const removerItem = (key) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
