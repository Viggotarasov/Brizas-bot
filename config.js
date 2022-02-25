const ownerNumber = ["51931263982@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '51931263982' 
// mude para seu numero

const callbotmsgs = ['orion', 'brizas']

var gimagenotregister = false
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = false
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'El nuevo anti chat está activado y no eres mi dueño, por lo que serás bloqueado'
//mensagem do antinewchat

const urlaudiomenu = 'https://b.top4top.io/m_19923zx481.mp3'
// link direto da url do audio

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
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adiós  ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname, bat) => {
    return `MENU ✟𝐊𝐀𝐍𝐈𝐄𝐋 𝐎𝐔𝐓𝐈𝐒✟ +400CMD, BATERIA %${bat}`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BIENVENIDO'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '⭕۩✟𝐊𝐀𝐍𝐈𝐄𝐋 𝐎𝐔𝐓𝐈𝐒✟۩⭕\n' 
// texto do simbolo de verificado

const prefix = '#'
// prefixo

const blockedmsg = '🚫🥷🏻 *Estimado señor(a), ha sido bloqueado por mi jefe, no me envíe más comandos si no quiere tener una visita* 🥷🏻🚫'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '🚫 *Este comando está bloqueado, comuníquese con el propietario del bot para averiguar por que* 🚫'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Corra miembro común, ban hasta próximo* 🥷🏻🥷🏻🥷🏻'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `O sistema de contagem de mensagens é por grupo e consiste em rankear, listar, remover pessoas de acordo
com a frequência de mensagens no grupo, veja abaixo os comandos para administrar as mensagens do grupo:

checkativo (marcar) - El sistema de conteo de mensajes es por grupo y consiste en jerarquizar, enumerar, eliminar personas según
rankativo - rankea as pessoas mais ativas do grupo
banativos (num) - remove membros com uma certa qnt de numeros de msg pra baixo
filtroativo (num) - lista membros com uma certa qnt de numeros de msg pra baixo]
atividade - lista a atividade de todos membros do grupo

Obs: O número de mensagens pode estar impreciso devido a contagem ser pelo bot.`

const adminmsgtype = '*Bueno, bueno, parece que alguien envió un mensaje prohibido, hora del castigo* 🩸🥷🏻🥷🏻🥷🏻🩸'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm pornozinho con antiporno activado, ya sabes ELIMINACIÓN...🥷🏻🥷🏻🥷🏻'
// mensagem de ban no antiporn

const adminmsgporn = '*Bueno, bueno, parece que alguien envió un mensaje prohibido, hora del castigo* 🩸🥷🏻🥷🏻🥷🏻🩸'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = '*Acá está Prohibido enviar enlaces, ban hastá próximo🥷🏻🥷🏻🥷🏻...*'
// mensagem de ban no antilink

const adminmsglink = 'Este es un enlace Putin...evita ser baneado🥷🏻🥷🏻🥷🏻'
// mensagem de quando adm manda link

const adminmsgpalavra = 'esto está en la lista de palabras prohibidas por el bot'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palabra prohibida!!! ya sabes ELIMINACIÓN 🕵🏻🥷🏻⚔️'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Buenos días mi Sr., hoy es un hermoso día ¿no crees?'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Buenas tardes señor, ¿como le fue hoy?`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Buenas noches mi Señor, mejor prepárate para el siguiente día de tu vida'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Dio error, intente nuevamente :/'
// mensagem de erro

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

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=51931263982:+51 931 263 982\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`

const votohelp = `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`

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
