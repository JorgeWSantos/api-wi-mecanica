const userExist = (request, response, next) => {

    response.send("userExist")
}

const userList = (request, response, next) => {

    response.send("userList")
}

const userCreate = (request, response, next) => {

    response.send("userCreate")
}

module.exports = { userExist, userList, userCreate }