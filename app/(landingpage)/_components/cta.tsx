import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="container mx-auto max-w-xl py-28">
      <div className="flex flex-col items-center justify-center rounded-md border border-border p-10 shadow-xl">
        <h2 className="text-3xl font-serif font-semibold sm:text-4xl">
          Proudly Open Source
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Next Sepran is open source and available on Github.
        </p>
        <Button
          asChild
          variant={"outline"}
          size={"lg"}
          className="mt-6"
        >
          <Link
            href={"https://github.com/pinnng29/sepran"}
            target="_blank"
          >
            Github Repo
          </Link>
        </Button>
      </div>
    </section>
  );
}
