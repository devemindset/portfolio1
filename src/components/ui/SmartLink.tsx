// components/ui/SmartLink.tsx
'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import { MouseEvent } from "react";

interface SmartLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function SmartLink({ href, children, className }: SmartLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    NProgress.start();
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
