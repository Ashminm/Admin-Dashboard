import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

<div>
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <p className='text-uppercase'>Brand</p>
      <p>Category</p>
      <p className='h3'>price</p>
      <p>date</p>
     <div className="d-flex justify-content-between align-items-center">
     <button className='btn btn-dark w-100 me-3 d-flex justify-content-center align-items-center'><span class="material-symbols-outlined bg-transparent btn-dark">edit_note</span></button>
     <button className='btn btn-outline-danger w-100 d-flex justify-content-center align-items-center' onClick={handleShow}><span class="material-symbols-outlined bg-transparent btn-outline-danger">cancel</span></button>
      <Modal show={show} onHide={handleClose} animation={false} centered dialogClassName="modal-sm-custom"
            aria-labelledby="delete-confirmation-modal" style={{backgroundColor:'transparent',height:'40%'}}>
          <div className="px-5 py-3 d-flex justify-content-center align-items-center">
          <span class="material-symbols-outlined text-center" style={{fontSize:'50px'}}>warning</span>
          </div>
        <div className="p-5 pt-0 text-center">
        <p>Are you sure you want to delete this product?</p>
        <button className='btn btn-dark me-4 my-3' onClick={handleClose}>No, Cancel</button>
        <button className='btn btn-danger'>Yes, i'm sure</button>
        </div>
      </Modal>
     </div>
    </Card.Body>
  </Card>
</div>
  )
}

export default Dashboard