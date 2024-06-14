import React from 'react'
import { Link } from 'react-router-dom'

function Addproduct() {
  return (
    <div className='container-fluid px-4 py-3'>
        <div className='pt-4'>
            <p className='d-flex align-items-center'><span class="material-symbols-outlined pe-3" style={{fontSize:'16px'}}>public</span> / <span className='px-3 '>products</span> / <span className='ps-3'><strong>Add</strong></span></p>
        </div>
        <div className="">
            <h1>Add Product</h1>
            <p>Add product for your customer</p>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="border p-3 shadow mb-4 bg-white" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Basic Information</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Product name</label>
                        <div className="mb-3 bg-transparent">
                        <input type="text" className='w-100 py-1 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}} placeholder='name' />
                        </div>
                        <label htmlFor="" className='bg-transparent text-secondary'>Product description</label>
                        <div className="bg-transparent">
                        <input type="text" className='w-100 py-4 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}} placeholder='description' />
                        </div>
                    </div>
                </div>
                <div className="border p-3 shadow bg-white mb-4" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Brand</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Brand name</label>
                        <div className="mb-3 bg-transparent">
                        <input type="text" className='w-100 py-1 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}} placeholder='brand' />
                        </div>
                    </div>
                </div>
                <div className="border p-3 shadow bg-white" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Category</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Category name</label>
                        <div className="mb-3 bg-transparent">
                        <select name="" id="" className='form-control'>
                            <option value="" className='text-secondary'>Choose a Category</option>
                        </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="border p-3 shadow bg-white mb-4" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Product Image</p>
                    <div className="">
                        <img src="https://i.postimg.cc/k5VzKryG/file-1.png" alt="" style={{width:'100%'}} />
                    </div>
                    <div className="p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Upload image</label>
                        <div className="mb-3 bg-transparent">
                        <input type="file" className='w-100 py-1 px-3 bg-transparent text-secondary' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}}/>
                        </div>
                    </div>
                </div>
                <div className="border p-3 shadow bg-white mb-4" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Price</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Product price</label>
                        <div className="mb-3 bg-transparent">
                        <input type="number" className='w-100 py-1 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}} placeholder='price' />
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <button className="btn btn-success w-100 me-3 py-2">Submit</button>
                    <button className="btn btn-secondary w-100 py-2"><Link className='text-decoration-none bg-transparent text-light'>Cancel</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addproduct