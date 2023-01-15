import React,{useState} from 'react'
import Header from '../Components/Header'
import BookContext from '../Hook/BookContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Button, Form} from 'react-bootstrap'
function UpdateNote() {
  const  navigate = useNavigate()
  const {id, notes} = React.useContext(BookContext)
  const [formData, setFormData] = useState({
            note:"",
            title:""
           })
           const { note,title} = formData
           const onChange = (e) => {
             setFormData((prevState) => ({
               ...prevState,
               [e.target.id] : e.target.value,
             }))
            }           
           const onSubmit = (e) => {
             e.preventDefault();
            axios
            .put(`http://localhost:3000/notes/${id}`, {note,title})
            .then((response) => {
             notes(response.data)
            })
            navigate('/')
          }
return(
<>
<Header />
<Form className='form'>
      <Form.Group  className="mb-3">
            <Form.Label>Heading</Form.Label>
            <Form.Control type="text" value={title} id="title" placeholder="Enter heading" 
              onChange={onChange}
            />
        </Form.Group>
        <Form.Group  className="mb-3">
            <Form.Label>Note</Form.Label>
            <Form.Control as="textarea"  id="note" rows={5} value={note}
             onChange={onChange}/>
        </Form.Group>
      <Button onClick={onSubmit} className="ml-10">Update</Button>
</Form>
</>
)
}
export default UpdateNote
