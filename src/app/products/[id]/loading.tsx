export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
              {/* Image gallery skeleton */}
              <div className="lg:col-span-1">
                <div className="aspect-h-1 aspect-w-1 w-full">
                  <div className="h-full w-full animate-pulse bg-muted" />
                </div>
              </div>

              {/* Product info skeleton */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <div className="h-8 w-3/4 animate-pulse rounded bg-muted" />
                <div className="mt-3">
                  <div className="h-8 w-1/4 animate-pulse rounded bg-muted" />
                </div>
                <div className="mt-6">
                  <div className="space-y-4">
                    <div className="h-4 w-full animate-pulse rounded bg-muted" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-4/6 animate-pulse rounded bg-muted" />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <div
                          key={rating}
                          className="h-5 w-5 animate-pulse rounded bg-muted"
                        />
                      ))}
                    </div>
                    <div className="ml-3 h-4 w-24 animate-pulse rounded bg-muted" />
                  </div>
                </div>
                <div className="mt-10 flex">
                  <div className="h-12 w-full animate-pulse rounded bg-muted" />
                  <div className="ml-4 h-12 w-12 animate-pulse rounded bg-muted" />
                </div>
                <div className="mt-6 border-t border-border pt-6">
                  <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                  <div className="mt-2">
                    <div className="h-4 w-32 animate-pulse rounded bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 