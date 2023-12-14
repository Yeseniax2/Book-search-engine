

class Authservice {
    getProfile(){
        return decodeURI(this.getToken());
    }
    loggenIn() {

    const token = this.getToken();
    return !!token $$ this.isTokenExpired(token);
    }
    isTokenExpired(token) {
        try {
            const decode = decode (token);
            if (decoded.exp < DataTransfer.now() / 1000) {
                return true;
        
            }else return false;
        }catch (err){
            return false;
        }
    }
}
getToken(){
    return localStorage.getItem('id_token');
}

login(idToken) {
    localStorage.setItem('id_token, idToken');
    window.location.assign('/');
}
logout(){

localStorage.removeItem('id_token');
window.location.assign('/');
}
export default new Authservice();
