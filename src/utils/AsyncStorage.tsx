import AsyncStorage from "@react-native-async-storage/async-storage"

const save = (key: string, value: any) => {
    return AsyncStorage.setItem(key, value)
    .then(() => {
        // Save successfully 
    })
    .catch((error) => {
        throw(error)
    })
}

const get = (key: string) => {
    return AsyncStorage.getItem(key)
    .then(value => value)
    .catch((error) => {
        throw error
    })
}

export const AsyncStorageManager = {
    save, 
    get
}