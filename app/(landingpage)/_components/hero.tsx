"use client";

import Link from "next/link";
import { ChevronRight, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Hero() {
  const { user, isLoaded } = useUser();

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <Badge className="flex items-center gap-2 text-md font-semibold text-zinc-50">
          A simple way to Record
          <ChevronRight className="h-5 w-5" />
        </Badge>
        <h1 className="text-center mx-auto text-3xl sm:text-5xl md:text-6xl font-bold font-serif mt-6 capitalize ">
          Manage your personal finances with ease and Achieve Greater Financial
          Stability
        </h1>
        <p className="mt-8 mb-6 mx-auto text-center sm:px-0 md:text-lg lg:text-md text-muted-foreground">
          Sepran will record your daily incomes, and expenses in a simple way
        </p>
        {user && (
          <h2 className="text-2xl lg:text-4xl py-6 font-serif">
            Welcome Back{isLoaded ? ", " : " "} {user?.firstName}✌️
          </h2>
        )}
        <div className="flex items-center justify-center gap-x-2">
          {user ? (
            <Button asChild>
              <Link
                href={"/dashboard"}
                className="text-zinc-50"
              >
                Dashboard
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link
                href={"/sign-in"}
                className="text-zinc-50"
              >
                Get Started
              </Link>
            </Button>
          )}
          <Button
            asChild
            variant={"outline"}
          >
            <Link
              href={"https://github.com/pinnng29/sepran"}
              target="_blank"
            >
              <Github className="size-4 mr-2" />
              Star on Github
            </Link>
          </Button>
        </div>
        <div className="mt-14 px-5 sm:px-0 flex items-center justify-center">
          <Image
            src={"/sepran-dark.png"}
            alt="sepran"
            height={400}
            width={800}
            className="rounded-sm block dark:hidden"
          />
          <Image
            src={"/sepran.png"}
            alt="sepran"
            height={400}
            width={800}
            className="rounded-sm hidden dark:block"
          />
        </div>
      </div>
    </section>
  );
}
