import { Calc } from './commands/calc.js';
import { Weather } from './commands/weather.js';

let input = document.querySelector('input');
let resultTag = document.getElementById('results')

let commands = {
    calc: Calc,
    weather: Weather
}


input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        let user_command = e.target.value.split(':')[0]
        // console.log(user_command);
        let user_params = e.target.value.split(':')[1]
        // console.log(user_params);

        const results = commands[user_command](user_params);

        // Замещение 
        // const results = {
        //     calc: Calc,
        //     weather: Weather
        // }[calc]('2+2');

        resultTag.innerHTML = buildResult(results)
    }
});


// Функция проверка на типы данных
function buildResult(results) {
    switch (true) {
        case typeof results === 'string':
        case typeof results === 'number':
        case typeof results === 'boolean':
            return results;
            break;
        case Array.isArray(results):
            return results.map(i => {
                return buildResult(i);
            }).join('<br>')
            break;
        case typeof results === 'object':
            return results.name
            break;
    }
}



