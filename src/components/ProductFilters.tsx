"use client"

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FunnelIcon } from '@heroicons/react/24/outline';

interface ProductFiltersProps {
  categories: string[];
}

const sortOptions = [
  { name: 'Most Popular', value: 'popular' },
  { name: 'Best Rating', value: 'rating' },
  { name: 'Newest', value: 'newest' },
  { name: 'Price: Low to High', value: 'price-asc' },
  { name: 'Price: High to Low', value: 'price-desc' },
];

export default function ProductFilters({ categories }: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const selectedCategory = searchParams.get('category') || '';
  const selectedSort = searchParams.get('sort') || 'popular';

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === selectedCategory) {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', sort);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h2>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FunnelIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="lg:block"
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Categories</h3>
            <div className="mt-2 space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    id={`category-${category}`}
                    name="category"
                    type="checkbox"
                    checked={category === selectedCategory}
                    onChange={() => handleCategoryChange(category)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Sort by</h3>
            <div className="mt-2 space-y-2">
              {sortOptions.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={`sort-${option.value}`}
                    name="sort"
                    type="radio"
                    checked={option.value === selectedSort}
                    onChange={() => handleSortChange(option.value)}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`sort-${option.value}`}
                    className="ml-3 text-sm text-gray-600 dark:text-gray-400"
                  >
                    {option.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 
 