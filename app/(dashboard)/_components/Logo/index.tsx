import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image height={33} width={180} src="/logo.svg" alt="Logo" />
    </Link>
  );
}

export default Logo;
