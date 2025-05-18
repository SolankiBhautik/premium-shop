import { Suspense } from 'react';
import Link from 'next/link';
import { getProducts } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

async function FeaturedProducts() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                    Premium Shopping Experience
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Discover our curated collection of premium products. From fashion to electronics,
                    we bring you the best quality items at competitive prices.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      href="/products"
                      className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      Shop Now
                    </Link>
                    <Link
                      href="/categories"
                      className="text-sm font-semibold leading-6 text-foreground"
                    >
                      Browse Categories <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Shopping experience"
            />
          </div>
        </div>

        {/* Featured products section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Check out our handpicked selection of premium products
              </p>
            </div>

            <div className="mt-16">
              <Suspense fallback={<div>Loading...</div>}>
                <FeaturedProducts />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
