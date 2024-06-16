import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {getProduct } from "../service/Api"


function Editproduct() {
    const [preview, setPreview] = useState("");
    const [product, setProduct] = useState(null); 
    const [category,setCategory] = useState([])
    const { id } = useParams(); 
    // console.log(id); 

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProduct(); 
                if (res.status === 200) {
                    const foundProduct = res.data.find(item => item._id === id);
                    setProduct(foundProduct || null);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
        const getCategory = async () => {
            try {
              const res = await getProduct();
              if (res.status === 200) {
                const products = res.data;
                const uniqueCategories = [...new Set(products.map(product => product.category))];
                setCategory(uniqueCategories);
              }
            } catch (error) {
              console.error('Error fetching product:', error);
            }
          };
      
          getCategory();
    },[id])
 

console.log(category);

  return (
    <div className='container-fluid px-4 py-3'>
        <div className='pt-4'>
            <p className='d-flex align-items-center'><span class="material-symbols-outlined pe-3" style={{fontSize:'16px'}}>public</span> / <span className='px-3 '>products</span> / <span className='ps-3'><strong>Edit</strong></span></p>
        </div>
        <div className="">
            <h1>Edit Product</h1>
            <p>Edit your product</p>
        </div>
        <form action="">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="border p-3 shadow mb-4 bg-white" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Basic Information</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Product name</label>
                        <div className="mb-3 bg-transparent">
                        <input type="text" defaultValue={product?.title} className='w-100 py-1 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}}  placeholder='name' />
                        </div>
                        <label htmlFor="" className='bg-transparent text-secondary'>Product description</label>
                        <div className="bg-transparent">
                        <textarea rows={4} type="text" defaultValue={product?.description} className='w-100 py-2 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}}   placeholder='description' ></textarea>
                        </div>
                    </div>
                </div>
                <div className="border p-3 shadow bg-white mb-4" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Brand</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Brand name</label>
                        <div className="mb-3 bg-transparent">
                        <input type="text" defaultValue={product?.barand}  className='w-100 py-1 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}}  placeholder='brand' />
                        </div>
                    </div>
                </div>
                <div className="border p-3 shadow bg-white" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Category</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Category name</label>
                        <div className="mb-3 bg-transparent">
                        <select name="category" id="category-select" className="form-control" defaultValue={product?.category || ''}>
                            <option value="" disabled className="text-secondary">
                                Choose a Category
                            </option>
                                {category.map((cat, index) => (
                                    <option key={index} value={cat}>
                                    {cat}
                            </option>
                            ))}
                        </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="border p-3 shadow bg-white mb-4" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Product Image</p>
                    <div className="w-100 d-flex justify-content-center">
                        <img
                        //  src="https://i.postimg.cc/k5VzKryG/file-1.png"
                        src={preview? preview : `${product?.image}`}
                         className="img-fluid bg-transparent"
                          alt="" style={{width:'200px'}} />
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
                        <input type="number" defaultValue={product?.price}  className='w-100 py-1 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}}  placeholder='price' />
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <button className="btn btn-danger w-100 me-3 py-2">Submit</button>
                    <button className="btn btn-secondary w-100 py-2"><Link className='text-decoration-none bg-transparent text-light'>Cancel</Link></button>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Editproduct