import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href={"/"}>
      <div className="hidden lg:flex items-center">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          height={30}
          width={30}
        />
        <p className="text-2xl font-semibold ml-2.5 rounded-lg bg-gradient-to-br from-violet-400 to-cyan-500 p-1 text-foreground">
          Sepran
        </p>
      </div>
    </Link>
  );
}
