import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(80%_80%_at_20%_10%,#f6f0ff_0%,#edf4ff_45%,#f8fafc_100%)] px-5 py-14">
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />

      <main className="relative w-full max-w-2xl rounded-3xl border border-white/70 bg-white/85 p-8 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.45)] backdrop-blur md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Western Stompers
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
          Coming Soon
        </h1>
        <p className="mt-3 text-zinc-600">
          See our{" "}
          <Link href="/socials" className="text-blue-500 underline">
            socials
          </Link>{" "}
          for latest events and updates!
        </p>
      </main>
    </div>
  );
}
