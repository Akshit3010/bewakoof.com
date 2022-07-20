import {useState} from 'react'
import {Link} from "react-router-dom"


const ProductsHeader = () => {
    const [show ,setShow] = useState(false);
  return (
    <>
    <div>
        <Link to={"/"}>
        Home
        </Link>/

        <Link to={"/"}>
        Buy one get one free
        </Link>

        <Link to={"/"}>
        Men Unisex Buy One Get One Free 
        </Link>

        <h2>Buy one get one free</h2>
        <p>(379)</p>
    </div>

    <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <h2>sort by</h2>
        <p>Popular</p>
       {show &&  <div>
        <p>popular</p>
        <p>new</p>
        <p>Price:High to Low</p>
        <p>Price: Low to High</p>
        </div>}
    </div>
    </>
  )
}

export default ProductsHeader