import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCategories } from '@/lib/api';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

async function CategoriesList() {
  const categories = await getCategories();

  // Map categories to their respective images
  const categoryImages = {
    "electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "jewelery": "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
    "men's clothing": "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "women's clothing": "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80"
  };

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/products?category=${category}`}
          className="group"
        >
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={categoryImages[category as keyof typeof categoryImages]}
                  alt={category}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white capitalize">
                    {category}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200 flex items-center gap-2">
                    Shop Now
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Categories
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse our wide selection of premium products by category
            </p>

            <Suspense fallback={
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardContent className="p-0">
                      <Skeleton className="aspect-square w-full" />
                      <div className="p-6">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="mt-2 h-4 w-1/2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            }>
              <CategoriesList />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
} 