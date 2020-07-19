'use strict'
/*
    CRUD no Adonis
    store: Criar um resgistro
    index: listar resgistros
    show: Exibir resgistro
    destroy: Remover resgistro
    update: Alterar resgistro
*/

const NewsController = require('../app/Controllers/Http/NewsController')

const Route = use('Route')

Route.get('/', () => {
    return { greeting: 'Serviço Ativo, Hello world in JSON' }
})
//proteção de todas as rotas do login para evitar acessos externos
Route.group(() => {

    // Rotas de cadastro de Usuário CRUD
    Route.post('/users','UserController.store')
    Route.get('/users','UserController.index')
    Route.delete('/users/:id','UserController.destroy')
    Route.get('/users/:id','UserController.show')
    Route.put('/users/:id','UserController.update')

}).middleware(['auth'])

// Rotas de envio de email POSTs, GETs
Route.post('/contacts','ContactController.store')

Route.group(() => {

    Route.get('/contacts','ContactController.index')
    Route.get('/contacts/:id','ContactController.show')
    Route.delete('/contacts/:id','ContactController.destroy')
    Route.put('/contacts/:id','ContactController.update')

}).middleware(['auth'])

Route.group(() => {

    // Rotas de cadastro de Notícias CRUD
    Route.post('/news','NewsController.store')
    // Route.get('/news','NewsController.index')
    // Route.get('/news/:id','NewsController.show')
    Route.delete('/news/:id','NewsController.destroy')
    Route.put('/news/:id','NewsController.update')
    
    //Rota para o arquivo upload
    Route.post('/news/:id/images', 'NewsController.upload')

}).middleware(['auth'])

Route.get('/news','NewsController.index')
Route.get('/news/:id','NewsController.show')
Route.get('/news/images/:filename', 'NewsController.showImg')

Route.group(() => {
    // Rotas de cadastro de Práticas CRUD
    Route.post('/practices','PracticeController.store')
    // Route.get('/practices','PracticeController.index')
    Route.get('/practices/:id','PracticeController.show')
    Route.delete('/practices/:id','PracticeController.destroy')
    Route.put('/practices/:id','PracticeController.update')
}).middleware(['auth'])

Route.get('/practices','PracticeController.index')

Route.group(() => {
    // Rotas de cadastro de Serviços CRUD
    Route.post('/services','ServicesController.store')
    // Route.get('/services','ServicesController.index')
    Route.get('/services/:id','ServicesController.show')
    Route.delete('/services/:id','ServicesController.destroy')
    Route.put('/services/:id','ServicesController.update')
}).middleware(['auth'])

Route.get('/services','ServicesController.index')


Route.group(() => {
    // Rotas de cadastro da Sobre CRUD - about
    Route.post('/abouts','AboutController.store')
    // Route.get('/abouts','AboutController.index')
    Route.get('/abouts/:id','AboutController.show')
    Route.delete('/abouts/:id','AboutController.destroy')
    Route.put('/abouts/:id','AboutController.update')
}).middleware(['auth'])

Route.get('/abouts','AboutController.index')

// Rotas de Autenticação do Usuário
Route.post('/login','AuthController.login')
