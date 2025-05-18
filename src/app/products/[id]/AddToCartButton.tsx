'use client';

import { useState } from 'react';
import { useCartStore } from '@/store/cart';
import { Product } from '@/lib/api';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    setIsLoading(true);
    addItem({
      ...product,
      quantity: 1,
    });
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      className="w-full flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
    >
      <ShoppingCartIcon className="h-5 w-5 mr-2" />
      Add to Cart
    </button>
  );
} 