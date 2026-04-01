import { type ReactNode} from 'react'
import css from './ProductList.module.css'
import type { Product } from "../../types/product";
interface ProductListProps {
children: ReactNode;
products: Product [];
}
export default function ProductList ({children, products}: ProductListProps) {

    return (
        <div className={css.wrapper}>
        <div className={css.controls}>
            <ul className={css.grid}>
                {products.map((product) => (<li key={product._id}> {children}</li>))}
               
            </ul>
            </div>
            </div>
    )
}