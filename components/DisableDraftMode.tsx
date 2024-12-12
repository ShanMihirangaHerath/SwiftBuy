"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";

const DisableDraftMode = () => {
  const environment = useDraftModeEnvironment();
  const router = useRouter();

  // Show the button only when environment is "live" or "unknown"
  if (environment === "live" || environment === "unknown") {
    return null;
  }

  const handleClick = async () => {
    try {
      await fetch("/draft-mode/disable");
      router.refresh();
    } catch (error) {
      console.error("Failed to disable draft mode:", error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-gray-50 px-4 py-2 z-50 rounded shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      aria-label="Disable Draft Mode"
    >
      Disable Draft Mode
    </button>
  );
};

export default DisableDraftMode;
