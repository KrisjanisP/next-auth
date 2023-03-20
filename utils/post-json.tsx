export async function postJson(url:string, json:string) {
    let options:RequestInit = {};
    options.method = 'POST';
    options.headers = {'Content-Type':'application/json'};
    options.body = json;
    let result = fetch("/api/login",options);
    return result;
}