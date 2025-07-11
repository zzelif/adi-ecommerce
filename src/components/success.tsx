"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function SuccessBanner() {
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setShow(true);

      // Auto-hide after 3 seconds (optional)
      setTimeout(() => setShow(false), 3000);
    }
  }, [searchParams]);

  if (!show) return null;

  return (
    <div className="alert alert-success mb-4 shadow-lg">
      <span>✅ Product added successfully!</span>
    </div>
  );
}
