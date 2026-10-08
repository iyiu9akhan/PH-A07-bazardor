export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] w-full">
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: "#05893E", borderTopColor: "transparent" }}
        ></div>
        <p className="text-sm font-medium" style={{ color: "#05893E" }}>
          লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
        </p>
      </div>
    </div>
  );
}
