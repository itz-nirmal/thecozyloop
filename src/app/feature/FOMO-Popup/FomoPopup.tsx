"use client";

import { useEffect, useState } from "react";
import { ToastContainer, Slide } from "react-toastify";
import { useFomoNotifications } from "./useFomoNotifications";

import "react-toastify/ReactToastify.css";

export interface FomoPopupProps {
  /**
   * Enable or disable the FOMO notifications
   * @default true
   */
  enabled?: boolean;

  /**
   * Maximum number of notifications to show
   * @default 20
   */
  maxNotifications?: number;

  /**
   * Delay in milliseconds before first notification
   * @default 5000 (5 seconds)
   */
  initialDelay?: number;
}

/**
 * FOMO (Fear Of Missing Out) Marketing Popup Component
 * 
 * Displays recent purchase notifications to create urgency and social proof.
 * Uses exponential backoff pattern for notification timing.
 * 
 * @example
 * ```tsx
 * <FomoPopup enabled={true} maxNotifications={20} />
 * ```
 */
export const FomoPopup = ({
  enabled = true,
  maxNotifications = 20,
}: FomoPopupProps) => {
  const [isClient, setIsClient] = useState(false);

  // Initialize the FOMO notifications hook
  useFomoNotifications({
    enabled,
    maxNotifications,
  });

  // Ensure we're on the client side to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything on server-side
  if (!isClient) {
    return null;
  }

  return (
    <ToastContainer
      position="bottom-left"
      autoClose={4500}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss={true}
      draggable={false}
      pauseOnHover={true}
      transition={Slide}
      limit={1}
      style={{
        bottom: "20px",
        left: "20px",
      }}
      toastStyle={{
        background: "#ffffff",
        color: "#1a1a1a",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        fontSize: "14px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "12px 16px",
        minWidth: "280px",
        maxWidth: "320px",
      }}
    />
  );
};

export default FomoPopup;
