const signin = (request, response, next) => {

    response.send("signin")
}

const logoff = (request, response, next) => {

    response.send("logoff")
}

module.exports = { signin, logoff }