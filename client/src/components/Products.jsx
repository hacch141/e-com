import styled from "styled-components"
import {popularProducts} from '../data'
import Product from "./Product"
import axios from "axios"
import {useState, useEffect} from "react"

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {

  console.log(cat, filters, sort)

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat 
          ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch(err) {}
    }
    getProducts();
  }, [cat]);

  useEffect(()=> {
    cat && 
      setFilteredProducts(
        products.filter((item) => 
          Object.entries(filters).every(([key,value]) => 
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(()=> {
    if(sort === "newest") {
      console.log("newwww")
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt = b.createdAt)
      );
    } else if(sort === "asc") {
      console.log("asceeee")
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      );
    } else {
      console.log("desccc")
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => b.price - a.price)
      );
    }
  }, [sort])

  return (
    <Container>
        {cat 
            ? filteredProducts.map((item, index) => (<Product item={item} key={index} />))
            : products.slice(0,8).map((item, index) => (<Product item={item} key={index} />))
        }
    </Container>
  )
}

export default Products