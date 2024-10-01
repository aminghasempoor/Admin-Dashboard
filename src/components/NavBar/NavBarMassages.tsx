import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBarMassages() {
  return (
    <Link href={"/massages"}>
      <div>
        <Image src="/message.png" alt="" width={20} height={20} />
        <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-primary text-white rounded-full text-xs">
          3
        </div>
      </div>
    </Link>
  );
}

export default NavBarMassages;
