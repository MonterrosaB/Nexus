import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductDetail from '../../components/ProductDetail';

const ProductoPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const [producto, setProducto] = useState(location.state?.producto || null);

  useEffect(() => {
    // Si no se recibió el producto desde navigate, buscarlo por ID
    if (!producto) {
      fetch(`http://localhost:4000/api/products/${id}`)
        .then(res => res.json())
        .then(data => setProducto(data))
        .catch(err => console.error('Error al cargar el producto', err));
    }
  }, [id, producto]);

  if (!producto) return <p className="text-center mt-10">Cargando producto...</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <ProductDetail product={producto} />
    </div>
  );
};

export default ProductoPage;
