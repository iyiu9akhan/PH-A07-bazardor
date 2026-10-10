export default function ProductDetailsSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl animate-pulse px-4 py-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-4 w-10 rounded bg-gray-200" />
        <div className="h-3 w-3 rounded bg-gray-200" />
        <div className="h-4 w-16 rounded bg-gray-200" />
        <div className="h-3 w-3 rounded bg-gray-200" />
        <div className="h-4 w-20 rounded bg-gray-200" />
      </div>

      <div className="mb-6 rounded-2xl border border-[#E1E8E1] bg-componentColor p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="h-24 w-24 shrink-0 rounded-2xl bg-gray-200" />

          <div className="flex-1 space-y-3">
            <div className="h-7 w-40 rounded bg-gray-200" />
            <div className="h-4 w-32 rounded bg-gray-200" />
            <div className="h-4 w-56 max-w-full rounded bg-gray-200" />
          </div>

          <div className="space-y-3 rounded-2xl bg-gray-100 p-5 sm:min-w-32">
            <div className="mx-auto h-4 w-20 rounded bg-gray-200" />
            <div className="mx-auto h-8 w-16 rounded bg-gray-200" />
            <div className="mx-auto h-4 w-14 rounded bg-gray-200" />
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-[#E1E8E1] bg-componentColor p-5">
        <div className="mb-5 h-6 w-44 rounded bg-gray-200" />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="space-y-4 rounded-2xl border border-[#E1E8E1] p-5"
            >
              <div className="h-4 w-20 rounded bg-gray-200" />
              <div className="h-7 w-28 rounded bg-gray-200" />
              <div className="h-4 w-32 max-w-full rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#E1E8E1] bg-componentColor p-5">
        <div className="mb-5 h-6 w-48 rounded bg-gray-200" />

        <div className="overflow-hidden rounded-xl border border-[#E1E8E1]">
          <div className="grid grid-cols-5 gap-4 border-b border-gray-200 p-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-4 rounded bg-gray-200"
              />
            ))}
          </div>

          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="grid grid-cols-5 gap-4 border-b border-gray-100 p-4 last:border-b-0"
            >
              {[1, 2, 3, 4, 5].map((cell) => (
                <div
                  key={cell}
                  className="h-4 rounded bg-gray-200"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
