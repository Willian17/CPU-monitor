module.exports = getInfo = processes => {
    return {
        name: processes.name.substring(0 , 12), // para a tabela não ficar desproporcional
        cpu: processes.pcpu.toFixed(2),
        memoria: processes.pmem.toFixed(2),
        time: processes.started.split(' ')[1], // pegar a hora
        pid: processes.pid

    }
}