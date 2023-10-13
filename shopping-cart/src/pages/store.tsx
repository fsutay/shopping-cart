import { Col, Row } from "react-bootstrap"
import { getProduct } from "../service/product-servise"
import { useEffect, useState } from "react"
import StoreItems from "../components/store-item";
import { Product } from "../interface/interface";


const Store :React.FC= () => {
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
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
      {products.map((product) =>
       (<Col key={product.id}><StoreItems {...product} /></Col>))}
    </Row>
  </>
  )
}

export default Store