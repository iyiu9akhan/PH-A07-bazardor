async function CategoryContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/categories/${id}`
  );

  const data = await res.json();
  console.log(data)

  return (
    <div>
      <h1>{data.nameBn}</h1>
    </div>
  );
}

export default CategoryContent;