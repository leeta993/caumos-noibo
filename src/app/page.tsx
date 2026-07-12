import type { Metadata } from "next";
import Roadmap from "@/components/Roadmap";

export const metadata: Metadata = {
  title: "Lộ trình thử việc 2 tháng — Caumos Marketing",
};

export default function Home() {
  return <Roadmap />;
}
