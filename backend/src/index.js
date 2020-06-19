const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const si = require('systeminformation')

const getInfo = require('./function')


io.on('connection', async socket => {
    const cpuInfo = {}
    await si.cpu(cpu => {
        cpuInfo.model = `${cpu.manufacturer} ${cpu.brand}`
    })
    await si.processes(proccess => {
        cpuInfo.processes = proccess.list.map(getInfo).reverse()
    }) 
    

    socket.emit("CPU", cpuInfo)
})

const porta = 3333
server.listen(porta, () => {
    console.log('servidor ligado na porta ' + porta)
})