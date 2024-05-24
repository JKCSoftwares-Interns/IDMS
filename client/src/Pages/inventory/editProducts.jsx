import { useParams } from 'react-router-dom';
import data from '../../../data.json';

const EditProducts = () => {
  const { productId } = useParams();
  const productData = data.find(product => product.productId === productId);

  return (
    productData ? (
      <div key={productData.productId}>
        <h1 className="border px-4 py-2">{productData.productId}</h1>
        <h1 className="border px-4 py-2">{productData.productName}</h1>
        <h1 className="border px-4 py-2">{productData.category}</h1>
        <h1 className="border px-4 py-2">{productData.packSize}</h1>
        <h1 className="border px-4 py-2">{productData.noOfUnits}</h1>
        <h1 className="border px-4 py-2">{productData.unloadingPrice}</h1>
      </div>
    ) : (
      <div>Product not found</div>
    )
  );
};

export default EditProducts;