import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProduct } from '@/lib/api';
import { StarIcon } from '@heroicons/react/24/solid';
import AddToCartButton from './AddToCartButton';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id);
  
  if (isNaN(productId)) {
    notFound();
  }

  const product = await getProduct(productId).catch(() => null);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{product.title}</h1>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-sm text-muted-foreground">
                {product.rating.rate}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.rating.count} reviews)
            </span>
          </div>

          <div className="h-px bg-border" />

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">${product.price.toFixed(2)}</h2>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
