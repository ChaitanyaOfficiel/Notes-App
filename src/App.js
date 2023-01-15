import React from 'react'
import BookContext from './Hook/BookContext'
import { Link} from "react-router-dom"
import loading from './assets/loading.gif';
import Header from './Components/Header'
import { Button, Card } from 'react-bootstrap';
function App() {
  const {notes, isloading, delRequest,setId } = React.useContext(BookContext) 
  return  isloading ? (
    <img className="image" src={loading} alt="loading"/>
  ): (
    <>
     <Header />
     
    <div className='container'>
      {notes.map((note) => (
<Card key={note.id} className='card'>
  <Card.Header>{note.title}</Card.Header>
  <Card.Body>
    <Card.Text>{note.note}</Card.Text>
  </Card.Body>
 <div className='flex'>
 <Button variant="primary" onClick={() => delRequest(note.id)}>Delete</Button>
  <Link to={`/${note.id}`} className="link" onClick={() => setId(note.id)}>Edit</Link>
 </div>
</Card>
      ))}
    </div>

    </>
  )
}

export default App;