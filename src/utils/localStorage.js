export const getFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}

export const setLocalStorageItem = (key, data) => {
    localStorage.setItem(key, data);
}
