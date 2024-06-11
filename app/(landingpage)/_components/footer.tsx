import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-2 justify-between border-t px-4 py-6 sm:flex-row md:px-8">
      <p className="text-xs text-foreground">
        &copy; NextSepran 2024. All rights reserved.
      </p>
      <nav className="flex items-center gap-x-2">
        <Link
          href={"/"}
          className="text-xs text-foreground hover:text-blue-500"
        >
          Terms of Service
        </Link>
        <Link
          href={"/"}
          className="text-xs text-foreground hover:text-blue-500"
        >
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}
