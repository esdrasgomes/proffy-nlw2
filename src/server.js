// Dados
const proffys = [
    {
        name: "Esdras Gomes",
        avatar: "https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-9/99395747_2636624659990507_3261261683959529472_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFWray5WaJc3-35Gx-iKhTnKKkzLLZ7lhMoqTMstnuWE4tTMShkUYXe-TGdGt2SCohqiNgrlYYdobaqHfe4P745&_nc_ohc=fR8q5VMy8UEAX9zunOU&_nc_ht=scontent.frec3-2.fna&oh=22223d291496418659c5e6a22b07709b&oe=601595E3",
        whatsapp: "81999999999",
        bio: "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galé do tipo e embaralhou para fazer um livro de amostra de tipos",
        subject: "Ciência",
        cost: "40", 
        weekday: [0],
        time_from: [720],
        time_to: [1220] 
    },
    {
        name: "Daniela Silva",
        avatar: "https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-9/99395747_2636624659990507_3261261683959529472_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFWray5WaJc3-35Gx-iKhTnKKkzLLZ7lhMoqTMstnuWE4tTMShkUYXe-TGdGt2SCohqiNgrlYYdobaqHfe4P745&_nc_ohc=fR8q5VMy8UEAX9zunOU&_nc_ht=scontent.frec3-2.fna&oh=22223d291496418659c5e6a22b07709b&oe=601595E3",
        whatsapp: "81999999999",
        bio: "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galé do tipo e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado.",
        subject: "Ciência",
        cost: "40", 
        weekday: [1],
        time_from: [720],
        time_to: [1220] 
    },
    {
        name: "Alfred Santiago",
        avatar: "https://avatars0.githubusercontent.com/u/55815494?s=460&u=2eb807beb4d7944342bbc5d0ffb9171652428063&v=4",
        whatsapp: "81999999999",
        bio: "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galé do tipo e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado.",
        subject: "Ciência",
        cost: "40", 
        weekday: [1],
        time_from: [720],
        time_to: [1220] 
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química",
] 

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    // se tiver dados, adicionar
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        
        // adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    } 
    // se não, mostrar a página
    return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

// configurar nunjucks (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// configurar servidor e configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start do servidor
.listen(5500)