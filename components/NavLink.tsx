'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({ href, children, prefetch }) {
	const pathname = usePathname();
	if(pathname === href) {
		return (
			<span className="text-orange-300">{children}</span>
		)
	}
  return (
    <Link
      className="text-orange-300 hover:underline"
      prefetch={prefetch}
      href={href}
    >
      {children}
    </Link>
  );
}
