"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./SiteNav.module.css";

const LINKS = [
  { href: "/", label: "Lộ trình thăng tiến" },
  { href: "/van-hoa", label: "Văn hoá Caumos" },
  { href: "/danh-gia-nang-luc", label: "Đánh giá năng lực" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.brand} aria-label="Caumos — trang chủ">
        <Image
          src="/brand/logo-navy.png"
          alt="Caumos"
          width={110}
          height={20}
          priority
          className={styles.logo}
        />
      </Link>

      <nav className={styles.links} aria-label="Điều hướng chính">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${pathname === link.href ? styles.linkActive : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className={styles.toggle}
        aria-label={open ? "Đóng menu" : "Mở menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
        </svg>
      </button>

      {open && (
        <nav className={styles.sheet} aria-label="Điều hướng (di động)">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.sheetLink} ${pathname === link.href ? styles.linkActive : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
