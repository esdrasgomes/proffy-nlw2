// Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses } = require('./pages')
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