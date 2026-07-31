import { Dot } from "lucide-react";
import React from "react";

export default function BulletList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-start">
      <div className="">
        <Dot size={32} className="text-indigo-400" />
      </div>
      {children}
    </div>
  );
}
