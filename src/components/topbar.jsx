"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopBar() {
  var list = ["Home", "Contact", "Blog", "Projects"];
  var linklist = ["/", "/contact", "/blog", "/projects"];
  return (
    <div className="flex justify-start bg-gray-800">
      {list.map((x, i) => {
        var c = "text-base m-0 px-6 py-3 border-cyan-400 text-gray-100 hover:bg-gray-700 transition-colors";
        if (linklist[i] == usePathname()) {
          c += " bg-gray-700";
        }
        return <Link href={linklist[i]} key={x} className={c}>{x}</Link>;
      })}
    </div>
  )
}