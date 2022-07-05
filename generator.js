import { argv } from 'node:process';
import clipboard from 'clipboardy';

let password = [];
let pass_length = argv[2] && Number(argv[2]) <= 16 ? argv[2] : 16;

function generate_password(pass_length) {
    check_vals();
    let rule_object = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let i = 0;

    while (i < pass_length) {
        password.push(rule_object.split('')[Math.floor(Math.random() * (62 - 0))]);
        i++
    }

    return password.join('')
}

function check_vals() {
    if (argv.length === 3) {
        if (Number(argv[2])) {
            return argv[2];
        } else {
            throw new Error('Длинна пароля должна быть числом')
        }
    } else if (argv.length > 3) {
        throw new Error('Expected 1 argument, got 2')
    }
}

function copy2clipboard() {
    let joined_password = generate_password(pass_length);
    clipboard.writeSync(`${joined_password}`);
    return joined_password
}

console.log(copy2clipboard())
// console.log(check_vals)