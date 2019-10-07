module.exports = function (app, pool) {

    app.get('/create/cpf=:cpf&nome=:nome&rg=:rg&endereco=:endereco&obs=:obs', createUser);

    function createUser(request, response) {

        pool.
    }
}


