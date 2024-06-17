import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {getProduct} from "../service/Api"
import { addProduct } from '../service/Api';

function Addproduct() {
    const [preview, setPreview] = useState("");
    const [category,setCategory] = useState([])
    const [addProduct,setAddProduct]= useState({
        title:"",description:"",barand:"",category:"",price:"",image:null
    })


    useEffect(()=>{
        setAddProduct()

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
    },[])

    useEffect(() => {
        if (addProduct && addProduct.image) {
            setPreview(URL.createObjectURL(addProduct.image));
        }
    }, [addProduct]);

    // console.log(addProduct);

    const handleAddProduct=async()=>{
        if(!addProduct.title || !addProduct.description || !addProduct.barand || !addProduct.category || !addProduct.price || !addProduct.image){
            alert("Enter value to every filed!")
        }else{
            const productData=new FormData()
            productData.append('title',addProduct.title)
            productData.append('description',addProduct.description)
            productData.append('barand',addProduct.barand)
            productData.append('category',addProduct.category)
            productData.append('price',addProduct.price)
            productData.append('product_Image',addProduct.image)
            console.log(productData);
        }
    }

  return (
    <div className='container-fluid px-4 py-3'>
        <div className='pt-4'>
            <p className='d-flex align-items-center'><span class="material-symbols-outlined pe-3" style={{fontSize:'16px'}}>public</span> / <span className='px-3 '>products</span> / <span className='ps-3'><strong>Add</strong></span></p>
        </div>
        <div className="">
            <h1>Add Product</h1>
            <p>Add product for your customer</p>
        </div>
        <form >
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="border p-3 shadow mb-4 bg-white" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Basic Information</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Product name</label>
                        <div className="mb-3 bg-transparent">
                        <input type="text" onChange={(e)=>setAddProduct({...addProduct,title:e.target.value})}  className='w-100 py-1 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}} placeholder='name' />
                        </div>
                        <label htmlFor="" className='bg-transparent text-secondary'>Product description</label>
                        <div className="bg-transparent">
                        <textarea rows={4} type="text" onChange={(e)=>setAddProduct({...addProduct,description:e.target.value})} className='w-100 py-2 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}}   placeholder='description' ></textarea>
                        </div>
                    </div>
                </div>
                <div className="border p-3 shadow bg-white mb-4" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Brand</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Brand name</label>
                        <div className="mb-3 bg-transparent">
                        <input type="text" onChange={(e)=>setAddProduct({...addProduct,barand:e.target.value})} className='w-100 py-1 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}} placeholder='brand' />
                        </div>
                    </div>
                </div>
                <div className="border p-3 shadow bg-white" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Category</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Category name</label>
                        <div className="mb-3 bg-transparent">
                        <select name="" id="" className='form-control' onChange={(e)=>setAddProduct({...addProduct,category:e.target.value})}>
                        <option value="" selected className="text-secondary">
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
                        <img src={preview ? preview : "https://i.postimg.cc/k5VzKryG/file-1.png"} alt="" className='p-5 px-3' style={{width:'70%'}} />
                    </div>
                    <div className="p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Upload image</label>
                        <div className="mb-3 bg-transparent">
                        <input type="file" onChange={(e)=>setAddProduct({...addProduct,image:e.target.files[0]})} className='w-100 py-1 px-3 bg-transparent text-secondary' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}}/>
                        </div>
                    </div>
                </div>
                <div className="border p-3 shadow bg-white mb-4" style={{borderRadius:'10px'}}>
                    <p className='bg-transparent'>Price</p>
                    <div className="border p-3 bg-transparent" style={{borderRadius:'10px'}}>
                        <label htmlFor="" className='bg-transparent text-secondary'>Product price</label>
                        <div className="mb-3 bg-transparent">
                        <input type="number" onChange={(e)=>setAddProduct({...addProduct,price:e.target.value})} className='w-100 py-1 px-3 bg-transparent' style={{borderRadius:'7px',outline:'none',border:'2px solid #bfbdbd'}} placeholder='price' />
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <button className="btn btn-success w-100 me-3 py-2" onClick={handleAddProduct}>Submit</button>
                    <button className="btn btn-secondary w-100 py-2"><Link className='text-decoration-none bg-transparent text-light'>Cancel</Link></button>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Addproduct