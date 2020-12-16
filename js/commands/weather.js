export function Weather(name) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://rickandmortyapi.com/api/character/?name=" + name, false);
    xhr.send();
    return JSON.parse(xhr.responseText).results;
}
