"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <aside className="sidebar min-h-full w-64 bg-linear-to-b from-[#3489f8] to-[#10274b] rounded-3xl m-1.5 h-lvh text-white p-6 flex flex-col gap-6 shadow-lg">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center font-bold text-lg">
          A
        </div>
        <div className="text-base font-semibold tracking-wide">TEST</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">

          {/* Dashboard */}
          <li>
            <Link
              href="/"
              className={`rounded-lg px-3 py-2 flex items-center gap-3 font-medium shadow-sm transition
                ${
                  isActive("/")
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM3 21h8v-6H3v6zM13 3v6h8V3h-8z"
                  fill="white"
                />
              </svg>
              Dashboard
            </Link>
          </li>

          {/* Campaigns */}
          <li>
            <Link
              href="/campaigns"
              className={`px-3 py-2 rounded-lg block transition
                ${
                  isActive("/campaigns")
                    ? "bg-white/20 font-medium"
                    : "hover:bg-white/10"
                }`}
            >
              Campaigns
            </Link>
          </li>

          {/* UI-only items */}
          <li className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
            Inbox
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
            Drafts
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
            Playbooks
          </li>

          <li className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
            Settings
          </li>

        </ul>
      </nav>

      {/* Footer */}
      <div className="text-xs text-white/90 bg-white/10 p-3 rounded-lg shadow-inner">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-white/15 rounded-full"></div>
          <span className="font-medium">AURA</span>
        </div>
        <div className="text-white/80">Analyzing your leads...</div>
      </div>

    </aside>
  );
}
