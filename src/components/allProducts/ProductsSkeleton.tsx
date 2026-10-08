const SkeletonCard = () => (
  <div className="bg-componentColor rounded-xl p-4 border border-primaryText/5 animate-pulse">
    <div className="flex items-center gap-3 mb-4">
      <div className="size-12 rounded-xl bg-primaryText/10" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-2/3 rounded bg-primaryText/10" />
        <div className="h-3 w-1/3 rounded bg-primaryText/10" />
      </div>
    </div>
    <div className="h-3 w-16 rounded bg-primaryText/10 mb-2" />
    <div className="flex items-end justify-between">
      <div className="h-6 w-24 rounded bg-primaryText/10" />
      <div className="h-6 w-16 rounded-full bg-primaryText/10" />
    </div>
  </div>
);

const SkeletonSection = ({ count }: { count: number }) => (
  <div className="max-w-6xl mx-auto px-4 mb-10">
    <div className="h-6 w-40 rounded bg-primaryText/10 animate-pulse mb-4" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </div>
);

const ProductsSkeleton = () => {
  return (
    <div role="status" aria-live="polite" className="pt-2">
      <div className="flex items-center justify-center gap-2 py-4 text-primaryText/70">
        <div className="size-4 animate-spin rounded-full border-2 border-brand/30 border-t-brand" />
        <p className="text-[14px] font-medium">
          নিত্যপণ্যের দরদাম যাচাই করা হচ্ছে...
        </p>
      </div>

      <SkeletonSection count={6} />
      <SkeletonSection count={6} />
      <SkeletonSection count={9} />
    </div>
  );
};

export default ProductsSkeleton;