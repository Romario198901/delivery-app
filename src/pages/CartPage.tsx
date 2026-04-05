import { useMutation, useQueryClient } from "@tanstack/react-query";
import CartItem from "../components/CartItem/CartItem";
import OrderForm, {
  type OrderFormValues,
} from "../components/OrderForm/OrderForm";
import { useCartStore } from "../store/cartStore";
import { calcTotal } from "../utils/calcTotal";
import css from "./CartPage.module.css";
import { createOrder } from "../api/orders";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    setQuanttity,
    removeFromCart,
    clearCart,
  } = useCartStore();
  const total = calcTotal(items);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const createMutation = useMutation({
    mutationFn: createOrder,
    onSuccess: async () => {
      toast.success("Order created");
      await queryClient.invalidateQueries({ queryKey: ["orders"] });
      clearCart();
      navigate("/");
    },
    onError: () => {
      toast.error("Failed to create order");
    },
  });
  const handleSubmitOrder = async (values: OrderFormValues) => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    createMutation.mutate({
      customerName: values.customerName,
      email: values.email.trim().toLowerCase(),
      phone: values.phone.trim(),
      address: values.address,
      items: items.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice: total,
    });
    clearCart();
  };
  return (
    <section className={css.page}>
      <div className={css.layout}>
        <div>
          <OrderForm
            onSubmit={handleSubmitOrder}
            isSubmitting={createMutation.isPending}
          />
        </div>
        <div>
          {items.length === 0 ? (
            <div className={css.empty}>Your cart is empty.</div>
          ) : (
            <>
              <ul className={css.cartList}>
                {items.map((item) => (
                  <CartItem
                    key={item._id}
                    item={item}
                    updateQuantity={setQuanttity}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </ul>

              <div className={css.summary}>
                <p className={css.total}>Total: {total} ₴</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
