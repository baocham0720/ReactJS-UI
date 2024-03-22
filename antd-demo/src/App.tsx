import { Button, Flex } from 'antd';
import FormAntd from './Component/FormAntD';
import TableAntd from './Component/TableAntD';

//import './App.css'

function App() {

  return (
    <>
    <TableAntd/>
    <hr/>
     <h1> Hello AntD</h1>
    <Flex gap="small" wrap="wrap">
    <Button>Login</Button>
    <Button type="primary">Primary</Button>
    </Flex>
    <hr/>
    <FormAntd/>

    </>
  )
}

export default App
