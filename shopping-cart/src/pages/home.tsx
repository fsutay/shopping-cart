import { Col, Container, Row } from "react-bootstrap"
import { getProduct } from "../service/product-servise"
import { useEffect, useState } from "react"
import StoreItems from "../components/store-item";
import { Product } from "../interface/interface";
import img from  "../assest/img.webp"

const Home :React.FC= () => {
  const [products, setProducts] = useState<Product[]>([])
  const loadData = async () => {

    try {
      const response = await getProduct();
      setProducts(response.products)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
  <>
<Container>
   <div className="mt-5">
    <img src={img} alt="" style={{width:"100%",maxHeight:"500px",marginTop:"30px"}} />
   </div>
    <Row md={2} xs={1} lg={3}  className="g-3 mt-1">
      {products.map((product) =>
       (<Col key={product.id}><StoreItems {...product} /></Col>))}
    </Row>
    </Container>
  </>
  )
}

export default Home