"use client";

import Image from "next/image";

// IFM (Institute for Functional Medicine) Certified Practitioner Badge
export function CertificationBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-block overflow-hidden rounded-lg ${className}`}>
      <Image
        src="/images/ifm-certified-practitioner.jpg"
        alt="The Institute for Functional Medicine - Certified Practitioner"
        width={400}
        height={200}
        className="w-full h-auto"
        quality={90}
      />
    </div>
  );
}

// Compact version for tight spaces
export function CertificationBadgeCompact({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`inline-block overflow-hidden rounded-md ${className}`}>
      <Image
        src="/images/ifm-certified-practitioner.jpg"
        alt="The Institute for Functional Medicine - Certified Practitioner"
        width={200}
        height={100}
        className="w-full h-auto"
        quality={85}
      />
    </div>
  );
}
