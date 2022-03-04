const ownerNumber = ["51931263982@s.whatsapp.net"] 
// cambie solo el número y no elimine el @s.whatsapp.net

const OriginalOwner = '51931263982' 
// cambiar a su número

const callbotmsgs = ['orion', 'brizas']

var gimagenotregister = false
// cuando no hay ningún comando registrado el bot busca en google image

var sgooglenotregister = false
// cuando no hay ningún comando registrado el bot busca una búsqueda en google

const antinewchatmsg = 'El nuevo anti chat está activado y no eres mi dueño, por lo que serás bloqueado'
//mensaje anti chat nuevo

const urlaudiomenu = 'https://b.top4top.io/m_19923zx481.mp3'
// enlace de URL de audio directo

const antipvmsg = '*🚫 PV BLOQUEADO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const delaystealcmd = 60
//tempo de delay dos comandos steal (medido por segundos)

const delaygamescmd = 60
//tempo de delay dos comandos de games (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `Bienvenido Sea ${numero}\n\nEscreve ${prefix}menu para lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: no pongas el texto largo para que no desaparezca la imagen

const byemsgimg = (numero, groupname) => {
    return `Adiós  ${numero}`
}
//Texto de despedida en la imagen cuando se activa la bienvenida
//Obs: no pongas el texto largo para que no desaparezca la imagen
const menumsgimg = (numero, groupname, bat) => {
    return `MENU KANIEL OUTIS +400CMD, BATERIA %${bat}`
}
//Texto en el menú de la imagen cuando la bienvenida está habilitada
//Obs: no pongas el texto largo para que no desaparezca la imagen

const titlemenumsgimg = 'BIENVENIDO'
//Título no menu da imagem quando welcome esta ativado
//Obs: no pongas el texto largo para que no desaparezca la imagen

const backgroundmenuimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: no pongas el texto largo para que no desaparezca la imagen

const backgroundwelcomeimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: no pongas el texto largo para que no desaparezca la imagen

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: no pongas el texto largo para que no desaparezca la imagen

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// su clave imgbb para activar antiporn y algunos comandos más que necesitan para descargar la imagen

const cr = '⭕۩✟𝐊𝐀𝐍𝐈𝐄𝐋 𝐎𝐔𝐓𝐈𝐒✟۩⭕\n' 
// comprobar el texto del símbolo

const prefix = '!'
// prefixo

const blockedmsg = '🚫🥷🏻 *Estimado señor(a), ha sido bloqueado por mi jefe, no me envíe más comandos si no quiere tener una visita* 🥷🏻🚫'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '🚫 *Este comando está bloqueado, comuníquese con el propietario del bot para averiguar por que* 🚫'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Corra miembro común, ban hasta próximo* 🥷🏻🥷🏻🥷🏻'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `El sistema de conteo de mensajes es por grupo y consiste en jerarquizar, enumerar, eliminar personas según
con la frecuencia de los mensajes en el grupo, vea a continuación los comandos para administrar los mensajes del grupo:

checkativo (marcar) - El sistema de conteo de mensajes es por grupo y consiste en jerarquizar, enumerar, eliminar personas según
rankativo - clasificar a las personas más activas del grupo
banativos (num) - eliminar miembros con una cierta cantidad de números de mensajes hacia abajo
filtroativo (num) - enumerar miembros con una cierta cantidad de números de mensajes hacia abajo]
atividade - enumera la actividad de todos los miembros del grupo

Obs: El número de mensajes puede ser inexacto debido a que el bot lo cuenta.`

const adminmsgtype = '*Bueno, bueno, parece que alguien envió un mensaje prohibido, hora del castigo* 🩸🥷🏻🥷🏻🥷🏻🩸'
// mensaje cuando adm envía tipos de mensajes prohibidos

const banmsgporn = 'Hmmm pornozinho con antiporno activado, ya sabes ELIMINACIÓN...🥷🏻🥷🏻🥷🏻'
// mensaje de prohibición en antiporno

const adminmsgporn = '*Bueno, bueno, parece que alguien envió un mensaje prohibido, hora del castigo* 🩸🥷🏻🥷🏻🥷🏻🩸'
// mensaje cuando el administrador envía pornografía con antiporn habilitado

const banmsglink = '*Acá está Prohibido enviar enlaces, ban hastá próximo🥷🏻🥷🏻🥷🏻...*'
//mensaje de prohibición en antienlace

const adminmsglink = 'Este es un enlace Putin...evita ser castigado 🥷🏻🥷🏻🥷🏻'
// mensaje cuando el administrador envía el enlace

const adminmsgpalavra = 'esto está en la lista de palabras prohibidas por el bot'
// mensaje cuando adm envía una palabra prohibida por el bot

const banmsgpalavra = 'Palabra prohibida!!! ya sabes ELIMINACIÓN 🕵🏻🥷🏻⚔️'
// mensaje de prohibición cuando envía una palabra prohibida por el bot

const qnttravahardroleta = 2
// número de bloqueos en la ruleta rusa dura
// Obs: El valor se multiplica por 12 así que ten cuidado

// MENSAJES DE BUENOS DIAS BUENAS TARDES Y BUENAS NOCHES

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Buenos días mi Sr., hoy es un hermoso día ¿no crees?'
// buenos dias enlace y mensaje

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Buenas tardes señor, ¿como le fue hoy?`
// Buenas tardes link y mensaje

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Buenas noches mi Señor, mejor prepárate para el siguiente día de tu vida'
// buenas noches mensaje y enlace
// ERROR DE MENSAJES

const msgerr = 'Dio error, intente nuevamente :/'
// mensaje de error

const notregister = `*Comando no registrado, escriva ${prefix}menu para ver a lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Muchas gracias, lastima que no puedo decir lo mismo de ti.'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Aparentemente alguien aquí quiere que visite su casa.'
const cadebot = 'Estoy aquí Putin, solo di los comandos'
const botfdp = 'Que falta de respeto!!! Te enseñaré buenos modales más tarde.🥷🏻🥷🏻🥷🏻'
const botgostoso = 'Muchas gracias, lástima que no puedo decir lo mismo'
const botfofo = 'Muchas gracias, lástima que no puedo decir lo mismo'
const botbaianor = 'No me compares con los humanos a menos que te enseñe modales.'
const botcorno = 'Te equivocaste humano, no soy tu tipo, simio humanizado'
const botputa = '¿Alguna vez te has preguntado dónde está tu madre ahora?'
const botgay = 'Las atracciones sexuales, son tan primitivas, propias de un ser humano, ya sal del closet rosquete'
const botviado = 'Las atracciones sexuales, son tan primitivas, propias de un ser humano😡'
const numbotfeio = 'Aparentemente alguien aquí quiere que visite su casa, nunca te haz mirado en el espejo simio!!!'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Aguarde um poco... ⌛',
    success: '✔️ ÉXITO! ✔️',
    error: {
        stick: '❌ Error, se produjo un error al convertir la imagen en una pegatina ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ ¡Desafortunadamente, este comando solo está disponible para grupos, Putin! ❌',
        ownerG: '❌ ¡Este comando solo puede usar mi jefe! ❌',
        ownerB: '❌ ¡Este comando solo puede ser usado por mi jefe!  ❌',
        admin: '❌ SILENCIO MIEMBRO COMÚN NO TIENE MORAL PARA USAR ESTE COMANDO ❌',
        Badmin: '❌ ¡Este comando solo se puede usar cuando el bot se convierte en administrador! ❌'
    }
}

// CONTACTO CREADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=51931263982:+51 931 263 982\n' 
+ 'END:VCARD'
//vcard del propietario, cambie los números de acuerdo con el formato que
//coincide

const gpvotohelp = `El sistema de votación gp consiste en el sistema de votación normal, pero hecho solo para grupos
Vea los comandos y sus funciones a continuación:

${prefix}gpinitvoto
${prefix}gpvotoinit - Empezar a votar en grupo
Ex: ${prefix}gpvotoinit tema | opción 1 | opcion 2
Obs: Puedes añadir tantas opciones como quieras.

${prefix}gpclearvoto
${prefix}gpvotoclear - Borrar todos los votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Ver el estado actual de la votación

${prefix}gpvoto - Vota por una opción
Ex: ${prefix}gpvoto opción1

${prefix}gpvotofinish
${prefix}gpfinishvoto - cerrar la votacion

${prefix}gpbroadvoto
${prefix}gpvotobroad - Difundir el voto a todos los miembros del grupo.`

const votohelp = `El sistema de votación consiste en que todos los usuarios del bot puedan votar y tener una buena
experiencia, hay comandos para administrar esta encuesta. Vea los comandos y sus funciones a continuación:

${prefix}initvoto
${prefix}votoinit - Comienza la votación general
Ex: ${prefix}votoinit tema | opción 1 |opcion 2
Obs: Puedes añadir tantas opciones como quieras.

${prefix}clearvoto
${prefix}votoclear - Borrar todos los votos

${prefix}votostatus
${prefix}statusvoto - Ver el estado actual de la votación

${prefix}voto - Vota por una opción
Ex: ${prefix}voto opción1

${prefix}votofinish
${prefix}finishvoto - cerrar la votacion

${prefix}broadvoto
${prefix}votobroad - Transmita el voto a todos los que usan el bot`

// Nem ouse mexer aqui se n quiser que de erro
exports.delaygamescmd = delaygamescmd
exports.delaystealcmd = delaystealcmd
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.urlaudiomenu = urlaudiomenu
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.callbotmsgs = callbotmsgs
