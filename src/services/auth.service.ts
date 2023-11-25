import { authKey } from "@/constants/storageKey"
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = ({accessToken}:{accessToken: string}) => {
    return setToLocalStorage(authKey, accessToken)
}

export const getUserInfo = () => {
    const authLocalStorageData = getFromLocalStorage(authKey);
    // console.log(authLocalStorageData);

    if(authLocalStorageData){
        const decodedData =
    }
}