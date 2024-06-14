import React,{useState,useEffect} from 'react'
import {getProduct } from "../service/Api"
import useMediaQuery from '@mui/material/useMediaQuery';
import Table from 'react-bootstrap/Table';
import './Allproducts.css'
import Card from 'react-bootstrap/Card';
import userImage from '../assets/person.jpg';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

function Allproduct() {
    const [products,setProducts]=useState([])
    const isLargeScreen = useMediaQuery('(min-width:790px)');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const res = await getProduct();
                if (res.status === 200) {
                    setProducts(res.data);
                } else {
                    console.error('Failed to fetch products', res.status);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    },[])

    console.log(products);
  return (
    <div>
      {isLargeScreen ? (
        <div className="">
            <div className="px-5 pt-4 d-flex">
                <div className=" border py-3 px-4 d-flex shadow" style={{border:'1px solid back',borderRadius:'25px',backgroundColor:'#FFF',width:'82%'}}>
                <span class="material-symbols-outlined bg-transparent">search</span>
                    <input type="search" className='w-100 border-0 ps-2 bg-transparent' style={{outline:'none'}} placeholder='Search your products...' />
                </div>
                <div className=" ms-5 border py-2 px-2 d-flex shadow" style={{border:'1px solid back',borderRadius:'25px',backgroundColor:'#FFF',width:'18%'}}>
                    <div className="bg-transparent d-flex align-items-center">
                    <img src={userImage} alt="User" className='bg-transparent' style={{width:'40px',height:'40px',objectFit:'cover',borderRadius:'50%'}} />
                    <p className='m-0 ps-2 h6 bg-transparent'>Welcome Ashmin!</p>
                    </div>
                </div>
            </div>
            <div className="p-5 ">
            <Table className='shadow rounded'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Created at</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>(
                    <tr className="align-middle">
                    <td className='ps-3'>{product.id}</td>
                    <div className="d-flex justify-content-start align-items-center py-3">
                    <span><img 
                      src={product.image} 
                      alt={product.name} 
                      style={{ width: '100%', height: '70px', objectFit: 'cover' }} 
                    /></span>
                    <span className='bg-transparent'>{product.title}</span>
                    </div>
                  <td>{product.barand}</td>
                  <td>{product.category}</td>
                  <td>₹{product.price}</td>
                  <td>{new Date(product.date).toLocaleDateString()}</td>
                  <td>
                    <div className="d-flex justify-content-around align-items-center bg-transparent">
                      <span className="material-symbols-outlined bg-transparent" style={{ cursor: 'pointer' }}>edit</span>
                      <span className="material-symbols-outlined bg-transparent text-danger" style={{ cursor: 'pointer' }}>cancel</span>
                    </div>
                  </td>
                    </tr>
                    ))}
                    
                </tbody>
            </Table>
            </div>
        </div>
        


      ) : (
        <div className="">
            <div className="px-4 pt-4 d-flex">
                <div className=" border py-3 px-4 d-flex shadow" style={{border:'1px solid back',borderRadius:'25px',backgroundColor:'#FFF',width:'100%'}}>
                <span class="material-symbols-outlined bg-transparent">search</span>
                    <input type="search" className='w-100 border-0 ps-2 bg-transparent' style={{outline:'none'}} placeholder='Search your products...' />
                </div>
                <div className=" ms-3 border py-2 px-2 d-flex shadow" style={{border:'1px solid back',borderRadius:'25px',backgroundColor:'#FFF'}}>
                    <div className="bg-transparent d-flex align-items-center">
                    <img src={userImage} alt="User" className='bg-transparent' style={{width:'40px',height:'40px',objectFit:'cover',borderRadius:'50%'}} />
                    </div>
                </div>
            </div>
            <div className="row p-4">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
          <Card style={{ width: '100%' }} className="shadow px-4">
            <p className='m-0 pt-3 bg-transparent'>{product.id}</p>
            <Card.Img variant="top" src={product.image} />
          <div className="py-3 bg-transparent">
              <h1 className='bg-light bg-transparent'>{product.title}</h1>
              <p className="h3 mb-3 bg-transparent">{product.description.slice(0,100)}...</p>
              <p className="text-uppercase h3 mb-3 bg-transparent">{product.barand}</p>
              <p className="h3 mb-3 bg-transparent">{product.category}</p>
              <p className="h1 mb-3 bg-transparent">₹{product.price}</p>
              <p className="h4 mb-3 bg-transparent">
                {new Date(product.date).toLocaleDateString()}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <Button className="btn btn-dark w-100 me-3 d-flex justify-content-center align-items-center">
                  <span className="material-symbols-outlined bg-transparent">edit_note</span>
                </Button>
                <Button
                  className="btn btn-danger w-100 d-flex justify-content-center align-items-center"
                  onClick={handleShow}
                >
                  <span className="material-symbols-outlined bg-transparent">cancel</span>
                </Button>
              </div>
            </div>
          </Card>
          <Modal
            show={show}
            onHide={handleClose}
            animation={false}
            centered
            dialogClassName="modal-sm-custom"
            aria-labelledby="delete-confirmation-modal"
            backdropClassName="custom-modal-backdrop" 
          >
            <div className="custom-modal-content px-5 py-3 d-flex justify-content-center align-items-center">
              <span className="material-symbols-outlined text-center" style={{ fontSize: '50px' }}>
                warning
              </span>
            </div>
            <div className="p-5 pt-0 text-center">
              <p>Are you sure you want to delete this product?</p>
              <Button className="btn btn-dark me-4 my-3" onClick={handleClose}>
                No, Cancel
              </Button>
              <Button className="btn btn-danger">Yes, I'm sure</Button>
            </div>
          </Modal>
        </div>
      ))}
    </div>
        </div>
      )}
    </div>
  )
}

export default Allproduct