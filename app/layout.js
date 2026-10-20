
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav className="flex items-center justify-between bg-slate-900 px-8 py-5 text-white shadow-lg">
          <h1 className="text-xl font-bold tracking-wide">
            <span className="text-blue-400">CEC</span> | College of Engineering Chengannur
          </h1>

          <div className="flex items-center gap-8 font-sans text-base font-medium tracking-wide">
            <Link href="/" className="transition hover:text-blue-400">
              Home
            </Link>

            <Link href="/weather" className="transition hover:text-blue-400">
              Weather
            </Link>

            <Link href="/time" className="transition hover:text-blue-400">
              Time
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
