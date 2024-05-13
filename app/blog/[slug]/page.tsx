export default async function Blog({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-2xl">Welcome to the blog page: {params.slug} 🗿</p>
        <p>This is my first blog. Help me.</p>
      </div>
    </main>
  );
}
