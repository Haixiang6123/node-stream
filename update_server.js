const http = require("http")
const fs = require('fs')
const server = http.createServer()

server.on('request', (request, response) => {
    // 文件流
    const stream = fs.createReadStream('./big_file.txt')
    // 将文件流传到 response，response 也是一个流
    stream.pipe(response)
})

server.listen(8888)
