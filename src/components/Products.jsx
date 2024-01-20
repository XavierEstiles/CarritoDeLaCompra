import './Products.css'
import { AddToCartIcon } from './icons'

export function ProductList ({ products }) {
    return(
        <main className='products'>
            <ul id='products'>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div className="card-content">
                            <strong>{product.title}</strong>
                        </div>
                        <div className="card-footer">
                            <button><AddToCartIcon/></button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}