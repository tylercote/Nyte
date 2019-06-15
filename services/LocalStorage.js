import {AsyncStorage} from 'react-native';

export async function _storeData(key, item) {
    try {
        await AsyncStorage.setItem(key, item);
    } catch (error) {
        // Error saving data
    }
}

export async function __retrieveData(key) {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            return value;
        }
    } catch (error) {
        // Error retrieving data
    }
}