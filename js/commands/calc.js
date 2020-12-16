export function Calc(expr) {
    const availableCharacters = '01234567890+-/*()' // список доступных символов
    let valid = true;
    expr.replace(/\s/g, '').split('').map(c => {

        // replace - метод заменяет все пробелы на пустую строку
        // split - метод разделяет

        if (!availableCharacters.includes(c)) {
            valid = false;
        }
    })

    if (valid) {
        return eval(expr);
    } else {
        return 0;
    }
}