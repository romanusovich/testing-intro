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

function removeFromCart(cart, id) {
  const index = cart.findIndex((item) => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  return cart;
}

function calculateCartSubtotal(cart) {
  return cart.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
}

function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
