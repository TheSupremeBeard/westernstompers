type SocialLink = {
  name: string;
  url: string;
};

const iconClassName = "h-5 w-5";

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={iconClassName}
    >
      <path d="M13 22v-8h3l1-4h-4V8a2 2 0 0 1 2-2h2V2h-3a6 6 0 0 0-6 6v2H5v4h3v8h5Z" />
    </svg>
  ),
  Instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={iconClassName}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  "X (Twitter)": (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={iconClassName}
    >
      <path d="M18.244 2H21l-6.56 7.498L22.2 22h-6.08l-4.76-6.216L5.92 22H3.16l7.02-8.02L2 2h6.24l4.302 5.675L18.244 2Zm-1.066 18h1.684L7.322 3.9H5.52L17.178 20Z" />
    </svg>
  ),
  TikTok: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={iconClassName}
    >
      <path d="M14 3h3a5 5 0 0 0 4 4v3a8 8 0 0 1-4-1.2V14a7 7 0 1 1-7-7h1v3h-1a4 4 0 1 0 4 4V3Z" />
    </svg>
  ),
  YouTube: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={iconClassName}
    >
      <path d="M23 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C19 4.8 12 4.8 12 4.8s-7 0-8.5.4a3 3 0 0 0-2.1 2.1C1 8.8 1 12 1 12s0 3.2.4 4.7a3 3 0 0 0 2.1 2.1c1.5.4 8.5.4 8.5.4s7 0 8.5-.4a3 3 0 0 0 2.1-2.1c.4-1.5.4-4.7.4-4.7ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={iconClassName}
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.3 7a2 2 0 0 0-.05-4ZM20.44 13.43c0-3.42-1.82-5.01-4.24-5.01a3.67 3.67 0 0 0-3.3 1.82V8.5H9.53V20h3.37v-6.03c0-1.59.3-3.12 2.27-3.12 1.94 0 1.97 1.8 1.97 3.23V20h3.38v-6.57Z" />
    </svg>
  ),
};

const socialLinks: SocialLink[] = [
  { name: "Facebook", url: "https://www.facebook.com/groups/620825146361532/" },
  {
    name: "Instagram",
    url: "https://www.instagram.com/westernstompers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@gem.westernstompers?_r=1&_t=ZN-97Cai9xzSre",
  },
];

export default function SocialsPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(80%_80%_at_20%_10%,#f6f0ff_0%,#edf4ff_45%,#f8fafc_100%)] px-5 py-14">
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />

      <main className="relative w-full max-w-2xl rounded-3xl border border-white/70 bg-white/85 p-8 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.45)] backdrop-blur md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Western Stompers
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
          Socials
        </h1>
        <p className="mt-3 text-zinc-600">Find us across social platforms.</p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-white px-4 py-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-zinc-900 group-hover:text-white">
                    {socialIcons[social.name] ?? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                        className={iconClassName}
                      >
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15 15 0 0 1 0 20" />
                        <path d="M12 2a15 15 0 0 0 0 20" />
                      </svg>
                    )}
                  </span>
                  <span className="font-medium text-zinc-800">
                    {social.name}
                  </span>
                </span>
                <span className="text-sm font-medium text-zinc-500 transition-colors group-hover:text-zinc-900">
                  Visit
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
