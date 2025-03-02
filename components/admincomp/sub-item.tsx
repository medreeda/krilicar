"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";

interface ISubItem {
  name: string;
  path: string;
}

const SubMenuItem = ({ item, isMini }: { item: ISubItem; isMini?: boolean }) => {
  const { name, path } = item;
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    router.push(path);
  };

  const isActive = useMemo(() => path === pathname, [path, pathname]);

  return (
    <div
      className={`${
        isMini
          ? "flex items-center justify-center"
          : "text-sm hover:text-sidebar-active hover:font-semibold"
      } cursor-pointer ${
        isActive
          ? isMini
            ? "text-sidebar-active"
            : "text-sidebar-active font-semibold"
          : ""
      }`}
      onClick={onClick}
    >
      {isMini ? (
        <span className="text-lg">•</span> // نقطة للإشارة إلى العنصر النشط
      ) : (
        name
      )}
    </div>
  );
};

export default SubMenuItem;