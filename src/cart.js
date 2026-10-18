function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const existed = cart.find((item) => item.id === product.id);
  const totalQuantity = (existed ? existed.quantity : 0) + quantity;
  if (totalQuantity > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  if (existed) {
    existed.quantity = totalQuantity;
  } else {
    cart.push({ ...product, quantity });
  }
  return cart;
}
function changeQuantity(cart, id, quantity) { 
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const existed = cart.find((item) => item.id === id);
  if (!existed) {
    return cart;
  }

  if (quantity > existed.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  existed.quantity = quantity;
  return cart;
}
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
