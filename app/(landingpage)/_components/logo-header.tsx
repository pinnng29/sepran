import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-x-2">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={35}
          height={35}
        />
        <h1 className="text-2xl font-extrabold text-violet-700 tracking-wide">
          Sepran
        </h1>
      </div>
    </Link>
  );
}
