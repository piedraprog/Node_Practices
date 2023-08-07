let url = "http://http://example.com/cliente/app/dashboard";

let error = {
    error: {
        link: 'http://example.com/cliente/app/dashboard'
    }
}

const url1 = '/' + error.error.link.split("/").slice(3).join("/");

const url2 = '/' + url.split("/").slice(1).join("/");
console.log(url1);
