function navigateTo(location) {
    document.location = "/" + location;
}

function keyupLinking(e) {
    e = e || window.event;

    switch (e.key) {
        case "h":
            navigateTo("index");
            break;

        case "a":
            navigateTo("about");
            break;

        case "b":
            navigateTo("blog");
            break;

        case "d":
            navigateTo("docs");
            break;
    }
}

function keydownLinking(e) {
    e = e || window.event;

    switch (e.key) {
        case "h":
            document.getElementById("home-link").classList.add("key-selected");
            break;

        case "a":
            document.getElementById("about-link").classList.add("key-selected");
            break;

        case "b":
            document.getElementById("blog-link").classList.add("key-selected");
            break;

        case "d":
            document.getElementById("docs-link").classList.add("key-selected");
            break;
    }
}

document.onkeydown = keydownLinking;
document.onkeyup = keyupLinking;
