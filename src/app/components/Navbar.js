"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const changeLocale = (locale) => {
    const segments = pathname.split("/");
    segments[1] = locale; 
    return segments.join("/") || "/";
  };

  return (
    <nav className="w-full h-20 flex items-center fixed bg-transparent justify-between px-8 z-30">
      {/* Logo */}
      <Image src="/logo.png" alt="logo" width={143} height={32} />

      {/* Menü */}
      <ul className="flex items-center gap-6 text-sm font-medium">
        <li>{t("home")}</li>
        <li>{t("about")}</li>
        <li>{t("services")}</li>
        <li>{t("team")}</li>
        <li>{t("contact")}</li>

        {/* Dil değiştirici */}
        <li className="flex items-center gap-2">
          <Link href={changeLocale("en")}>
            <span className="cursor-pointer">🇬🇧</span>
          </Link>
          <Link href={changeLocale("tr")}>
            <span className="cursor-pointer">🇹🇷</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
