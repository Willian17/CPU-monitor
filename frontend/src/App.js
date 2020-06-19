import React , {useState , useEffect} from 'react';
import socketIoClient from 'socket.io-client'
import TableContent from './TableContent'
import {Table} from 'react-bootstrap'
import './App.css';

const baseUrl = 'http://127.0.0.1:3333'

function App() {
  const [cpuInfo, setCpuInfo] = useState('')
  const [processes , setProcesses] = useState([])
  useEffect(()=>{
    const socket = socketIoClient(baseUrl)
    socket.on("CPU" , cpuData => {
      setCpuInfo(cpuData.model)
      setProcesses(cpuData.processes)
    })
  })

  return (
    <div className="App">
     <h1 className="title">{cpuInfo}</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>PID</th>
            <th>Nome</th>
            <th>CPU</th>
            <th>Memória</th>
            <th>Excutado</th>
          </tr>
        </thead>
        <tbody>
          {processes.map(proces => (            
           <TableContent proces={proces} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
