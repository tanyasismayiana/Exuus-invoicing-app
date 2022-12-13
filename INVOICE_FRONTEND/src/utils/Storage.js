export const getItem =  (key) => {
    try {
        return  window.localStorage.getItem(key);
    } catch (error) {
        return null;
    }
};

export const setItem =  (key, value) => {
    try {
        window.localStorage.setItem(key, value);
    } catch (error) {}
};

export const removeItem =  (key) => {
    try {
        window.localStorage.removeItem(key);
    } catch (error) {}
};

export const clear =  () =>  localStorage.clear();