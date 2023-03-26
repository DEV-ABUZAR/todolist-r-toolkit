import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, deleteTodo } from '../features/todoSlice';

function BasicExample() {
    const useselector = useSelector((state) => state.todos)
    const d = useDispatch()
  return (
    <>
    <div className="container">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h2>TO-DO LIST</h2></Form.Label>
        <Form.Control type="text" placeholder="ENTER TO-DO" />
     
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => {
    e.preventDefault(); 
    d(addTodo())
}}>
    addTodo
</Button>

      <Button variant="primary" type="submit" onClick={()=>
            e.preventDefault(); 
            d(deleteTodo ())} className="butons">
      delete
      </Button>
    </Form>
    </div>
    </>
  );
}

export default BasicExample;