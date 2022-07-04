import { argv } from 'node:process';
import clipboard from 'clipboardy';

let password = [];
let pass_length;

function generate_password(length) {
    let rule_object = !argv.includes('opt_symb') ? 
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    :
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890' + '_-+!?*)(<>';
    let i = 0;

    while (i < length) {
        password.push(rule_object.split('')[Math.floor(Math.random() * (62 - 0))]);
        i++
    }

    return password.join('')
}

function copy2clipboard(length) {
    let joined_password = generate_password(length);
    clipboard.writeSync(`${joined_password}`);
    return joined_password
}

function check_vals() {
    if (argv.length === 3) {
        if (Number(argv[2])) {
            return argv[2];
        } else {
            return Error('Длинна пароля должна быть числом')
        }
    } 
}

console.log(check_vals())
// console.log(check_vals)