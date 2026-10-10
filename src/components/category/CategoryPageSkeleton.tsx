const CategoryPageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="mb-6 flex items-center gap-4 rounded-2xl border border-[#E1E8E1] bg-componentColor p-5.25">
        <div className="size-14 rounded-xl bg-gray-200" />
        <div className="space-y-2">
          <div className="h-6 w-32 rounded bg-gray-200" />
          <div className="h-4 w-52 rounded bg-gray-200" />
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="h-4 w-44 rounded bg-gray-200" />
        <div className="h-8 w-36 rounded-lg bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-base-300 bg-componentColor p-4"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="size-12 shrink-0 rounded-xl bg-gray-200" />
              <div className="space-y-2">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-3 w-16 rounded bg-gray-200" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div className="space-y-2">
                <div className="h-3 w-16 rounded bg-gray-200" />
                <div className="h-6 w-24 rounded bg-gray-200" />
              </div>
              <div className="h-5 w-14 rounded-full bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPageSkeleton;