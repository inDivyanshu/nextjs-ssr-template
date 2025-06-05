import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="mb-6">Next.js SSR Template</h1>
      <p className="mb-4 main-content">Welcome! This template follows strict architecture and theming rules for enterprise-grade Next.js apps.</p>
      <Link href="/theme-demo" className="button-blue">
        View Theme Demo Page
      </Link>
      <p className="mt-8 text-sm text-gray-400">Edit <code>src/app/page.tsx</code> to customize this landing page.</p>
    </div>
  );
}
