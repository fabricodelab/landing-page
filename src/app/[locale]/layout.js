import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import "../globals.css";

export const dynamic = "force-static"; // Turbopack için gerekli
export const generateStaticParams = async () => [{ locale: "en" }, { locale: "tr" }];

export default function LocaleLayout({ children, params }) {
  const locale = params?.locale;

  if (!locale) notFound();

  let messages;
  try {
    messages = require(`../../messages/${locale}.json`);
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
