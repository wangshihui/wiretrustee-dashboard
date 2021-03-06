import {getConfig} from "../config";

const {apiOrigin} = getConfig();

export const callApi = async (method, headers, body, getAccessTokenSilently, endpoint) => {
    console.log("getAccessTokenSilently....")
    // const token = await getAccessTokenSilently();
    if (!headers) {
        headers = {}
    }
    // headers.Authorization = `Bearer ${token}`
    var userName = window.localStorage.getItem("wt_user")
    if(!userName){
        userName=""
    }
    console.log("get user from local "+userName)
    const requestOptions = {
        method: method,
        headers: headers,
        body: body
    };

    const response = await fetch(`${apiOrigin}${endpoint}?user=${userName}`, requestOptions);
    return await response.json();
};

export const getSetupKeys = async (getAccessTokenSilently) => {
    return callApi("GET", {}, null, getAccessTokenSilently, "/api/setup-keys")
}

export const revokeSetupKey = async (getAccessTokenSilently, keyId) => {
    return callApi(
        "PUT",
        {'Content-Type': 'application/json'},
        JSON.stringify({Revoked: true}),
        getAccessTokenSilently,
        "/api/setup-keys/" + keyId)
}


export const renameSetupKey = async (getAccessTokenSilently, keyId, newName) => {
    return callApi(
        "PUT",
        {'Content-Type': 'application/json'},
        JSON.stringify({Name: newName}),
        getAccessTokenSilently,
        "/api/setup-keys/" + keyId)
}


export const createSetupKey = async (getAccessTokenSilently, name, type, expiresIn) => {
    return callApi(
        "POST",
        {'Content-Type': 'application/json'},
        JSON.stringify({Name: name, Type: type, ExpiresIn: expiresIn}, (key, value) => {
            if (value !== null) return value
        }),
        getAccessTokenSilently,
        "/api/setup-keys")
}

export const getPeers = async (getAccessTokenSilently) => {
    return callApi("GET", {}, null, getAccessTokenSilently, "/api/peers")
}

export const deletePeer = async (getAccessTokenSilently, peerId) => {
    return callApi(
        "DELETE",
        {},
       null,
        getAccessTokenSilently,
        "/api/peers/" + peerId)
}