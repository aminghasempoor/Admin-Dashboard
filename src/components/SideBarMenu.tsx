import { menuItems } from "@/lib/MenuItems";
import Image from "next/image";
import Link from "next/link";

const SideBarMenu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menuItem) => (
        <div className="flex flex-col gap-2" key={menuItem.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {menuItem.title}
          </span>
          {menuItem.items.map((subMenuItem) => {
            if (subMenuItem.visible.includes("customer")) {
              return (
                <Link
                  href={subMenuItem.href}
                  key={subMenuItem.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={subMenuItem.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{subMenuItem.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default SideBarMenu;
