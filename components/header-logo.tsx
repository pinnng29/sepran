import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href={"/"}>
      <h1 className="text-2xl font-bold hidden lg:block">
        Next
        <span className="ml-1 text-background rounded-lg bg-gradient-to-br from-violet-400 to-cyan-500 p-1">
          Sepran
        </span>
      </h1>
    </Link>
  );
}
