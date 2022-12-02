const el = document.querySelector("#text");
const text = "LINGUAGENS";
const interval = 150;

function showText(el, text, interval) {

    const char = text.split("").reverse();
    const type = setInterval(() => {
        
        if(!char.length) {
            return clearInterval(type);
        }

        const next = char.pop();

        el.innerHTML += next;

    }, interval);
}

showText(el, text, interval);

const ek = document.querySelector("#blog_post_title");
const blog_post_title = "SOBRE O AUTOR";
const Interval = 150;

function showText(el, blog_post_title, interval) {

    const char = blog_post_title.split("").reverse();
    const type = setInterval(() => {
        
        if(!char.length) {
            return clearInterval(type);
        }

        const next = char.pop();

        el.innerHTML += next;

    }, interval);
}

showText(ek, blog_post_title, interval);