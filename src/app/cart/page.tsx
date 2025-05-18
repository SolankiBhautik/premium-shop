'use client'

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';
import { useCartStore } from '@/store/cart';

function CartItems() {
  const { items, removeItem, updateQuantity } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Your cart is empty
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Start shopping to add items to your cart.
        </p>
        <div className="mt-6">
          <Link
            href="/products"
            className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-border">
          {items.map((item) => (
            <li key={item.id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-foreground">
                    <h3>
                      <Link href={`/products/${item.id}`}>{item.title}</Link>
                    </h3>
                    <p className="ml-4">${item.price}</p>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${item.id}`} className="mr-2 text-muted-foreground">
                      Qty
                    </label>
                    <select
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="rounded-md border border-input bg-background px-2 py-1 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="font-medium text-primary hover:text-primary/90"
                  >
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function OrderSummary() {
  const { items } = useCartStore();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="mt-16 rounded-lg bg-card px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-foreground">Order summary</h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-muted-foreground">Subtotal</dt>
          <dd className="text-sm font-medium text-foreground">${subtotal.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <dt className="text-sm text-muted-foreground">Shipping estimate</dt>
          <dd className="text-sm font-medium text-foreground">${shipping.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <dt className="text-sm text-muted-foreground">Tax estimate</dt>
          <dd className="text-sm font-medium text-foreground">${tax.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <dt className="text-base font-medium text-foreground">Order total</dt>
          <dd className="text-base font-medium text-foreground">${total.toFixed(2)}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <button
          type="button"
          className="w-full rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Shopping Cart
            </h1>

            <Suspense fallback={<div>Loading...</div>}>
              <CartItems />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
              <OrderSummary />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
} 