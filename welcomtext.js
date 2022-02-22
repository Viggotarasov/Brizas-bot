const welcome = (number, groupname) => {
    return `Hola @${number}. Bienvenido a ${groupname}`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adiós @${number}. estaremos mejor sin tí 👋`
}
exports.bye = bye
