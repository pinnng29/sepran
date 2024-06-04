import Image from "next/image";
import Link from "next/link";

export default function LogoHeader() {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-x-2">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={35}
          height={35}
        />
        <h1 className="text-2xl font-semibold ml-2.5 rounded-lg bg-gradient-to-br from-violet-400 to-cyan-500 p-1 text-foreground">
          Sepran
        </h1>
      </div>
    </Link>
  );
}
