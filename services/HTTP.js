const BASEURL = "https://cryptvest-be.vercel.app/api/v1";

async function Get(endpoint){
    var res = {};
    await fetch(`${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            // "client": "betweysure",
            // "api_key": "betweysure_f3ae3547d1374eaacaf345"
        },
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        res = data;
    })
    .catch(err => {
        res = err;
    })
    return res;
}

async function Post(endpoint,data){
    var res = {};
    await fetch(`${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            // "client": "betweysure",
            // "api_key": "betweysure_f3ae3547d1374eaacaf345"
        },
        body: JSON.stringify(data),
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        res = data;
    })
    .catch(err => {
        res = err;
    })
    return res;
}

const HTTPRequest = {
    Get, Post, BASEURL
}

export {HTTPRequest}