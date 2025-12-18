import type { ReactNode } from "react";

export function Layout({ avatar, slot02, slot03}: {avatar: ReactNode, slot02: ReactNode, slot03: ReactNode}) {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4 border border-indigo-600">
      <div className="row-span-3 border border-indigo-600">
        {avatar}
      </div>
      <div className="col-span-2 border border-indigo-600">
        {slot02}
        </div>
      <div className="col-span-2 row-span-2 border border-indigo-600">
        {slot03}
      </div>
    </div>
  );
}
