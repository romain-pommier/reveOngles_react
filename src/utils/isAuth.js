export function isAuth() {
    if (localStorage.getItem("user")) {
        const currentUser = JSON.parse(localStorage.getItem("user"))
        return !currentUser.expires_date * 1000 < Date.now()
    }
    return false
}
