import Cookies from 'js-cookie'

export function setCookies(
    name:string,
    value:string,
    options?:Cookies.CookieAttributes
){
    Cookies.set(name, value, options );

}
export function getCookie(name:string){
    return Cookies.get(name);
}

export function deleteCookie(name: string){
    Cookies.remove(name);
}

