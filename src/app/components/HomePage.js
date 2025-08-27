"use client";
import React from "react";
import Button from "./Button";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col justify-center h-full p-10 text-white">
        <h1 className="text-6xl font-archivo font-normal tracking-tight mb-6">
          {t("heading")}
        </h1>

        <div className="flex items-center py-2">
          <Button>{t("button_contact")}</Button>
        </div>

        <div className="py-10 pe-30 flex items-center justify-end">
          <p className="text-2xl font-medium tracking-tight max-w-3xl ">
            {t("description")}
          </p>
        </div>
      </div>
    </div>
  );
}
