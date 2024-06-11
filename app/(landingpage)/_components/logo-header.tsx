import Link from "next/link";

export default function LogoHeader() {
  return (
    <Link href={"/"}>
      <h1 className="text-xl font-bold">
        Next
        <span className="ml-1 text-background rounded-md bg-gradient-to-br from-violet-400 to-cyan-500 p-1">
          Sepran
        </span>
      </h1>
    </Link>
  );
}
