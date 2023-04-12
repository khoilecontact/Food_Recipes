import { Dimensions } from "react-native"

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

// Async storage
const USER_NAME = 'user_name'
const USER_EMAIL = 'user_email'

export const CONST = {
    screenWidth,
    screenHeight,
    USER_NAME,
    USER_EMAIL,
}