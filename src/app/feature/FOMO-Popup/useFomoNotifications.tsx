"use client";

import { useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";

// Indian names list (30+ realistic names)
const INDIAN_NAMES = [
  "Rahul Sharma",
  "Priya Singh",
  "Amit Kumar",
  "Anjali Patel",
  "Vikram Reddy",
  "Sneha Gupta",
  "Rohit Mehra",
  "Kavita Joshi",
  "Sanjay Verma",
  "Meera Nair",
  "Ajay Thakur",
  "Riya Chopra",
  "Deepak Agarwal",
  "Ananya Das",
  "Prateek Mishra",
  "Shweta Iyer",
  "Kunal Shah",
  "Pooja Sharma",
  "Arjun Kapoor",
  "Neha Singh",
  "Siddharth Rao",
  "Divya Menon",
  "Mohit Chauhan",
  "Aisha Khan",
  "Raj Malhotra",
  "Khushi Patel",
  "Aditya Joshi",
  "Samira Ali",
  "Yashwant Singh",
  "Ishita Gupta",
  "Rohan Bhatia",
  "Tara Sharma",
];

// Products list (based on catalog)
const PRODUCTS = [
  "Daisy Keychain",
  "Rose Keychain",
  "Custom Keychain",
  "Sunflower Bouquet",
  "Rose Bouquet",
  "Mixed Flower Arrangement",
  "Handmade Bag",
  "Leather Pouch",
  "Artisan Bookmark",
  "Floral Bookmark",
  "Soft Teddy Bear",
  "Plush Bunny",
  "Gift Set",
  "Curated Collection",
  "Lavender Bouquet",
  "Tulip Arrangement",
  "Customized Bag",
  "Beaded Bookmark",
  "Cuddly Bear",
  "Gift Hamper",
];

// Exponential backoff delays in milliseconds
// 5s, 15s, 45s, 90s (1.5min), 270s (4.5min), 810s (13.5min), 2430s (40.5min)
const DELAY_SEQUENCE = [5000, 15000, 45000, 90000, 270000, 810000, 2430000];

// Maximum number of notifications to show
const MAX_NOTIFICATIONS = 7;

// Get random item from array
const getRandomItem = <T,>(arr: T[]): T => {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === undefined) {
    throw new Error("Array is empty");
  }
  return item;
};

// Generate random time ago (1-10 minutes)
const getRandomTimeAgo = (): string => {
  const minutes = Math.floor(Math.random() * 10) + 1;
  if (minutes === 1) {
    return "1 minute ago";
  }
  return `${minutes} minutes ago`;
};

export interface FomoNotification {
  name: string;
  product: string;
  timeAgo: string;
}

export interface UseFomoNotificationsOptions {
  enabled?: boolean;
  maxNotifications?: number;
}

export interface UseFomoNotificationsReturn {
  showNotification: (notification: FomoNotification) => void;
  isRunning: boolean;
}

/**
 * Custom hook for managing FOMO (Fear Of Missing Out) notifications
 * with exponential backoff timing pattern
 */
export const useFomoNotifications = (
  options: UseFomoNotificationsOptions = {}
): UseFomoNotificationsReturn => {
  const { enabled = true, maxNotifications = MAX_NOTIFICATIONS } = options;

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const notificationCountRef = useRef(0);
  const delayIndexRef = useRef(0);
  const isRunningRef = useRef(false);
  const isMountedRef = useRef(true);

  // Generate random FOMO notification data
  const generateNotification = useCallback((): FomoNotification => {
    return {
      name: getRandomItem(INDIAN_NAMES),
      product: getRandomItem(PRODUCTS),
      timeAgo: getRandomTimeAgo(),
    };
  }, []);

  // Show the notification toast
  const showNotification = useCallback((notification: FomoNotification) => {
    if (!isMountedRef.current) return;

    const message = `${notification.name} purchased ${notification.product} ${notification.timeAgo}`;

    toast(message, {
      position: "bottom-left",
      autoClose: 4500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      style: {
        background: "#ffffff",
        color: "#1a1a1a",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        fontSize: "14px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "12px 16px",
        minWidth: "280px",
        maxWidth: "320px",
      },
      icon: (
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      ),
    });
  }, []);

  // Schedule next notification with exponential backoff
  const scheduleNextNotification = useCallback(() => {
    if (
      !enabled ||
      !isMountedRef.current ||
      notificationCountRef.current >= maxNotifications
    ) {
      isRunningRef.current = false;
      return;
    }

    // Get delay from sequence or calculate next one
    const lastDelay = DELAY_SEQUENCE[DELAY_SEQUENCE.length - 1];
    const delay =
      delayIndexRef.current < DELAY_SEQUENCE.length
        ? DELAY_SEQUENCE[delayIndexRef.current]
        : (lastDelay !== undefined ? lastDelay * 3 : 5000);

    // Increment delay index for exponential backoff
    delayIndexRef.current++;

    timeoutRef.current = setTimeout(() => {
      if (!isMountedRef.current) return;

      // Generate and show notification
      const notification = generateNotification();
      showNotification(notification);
      notificationCountRef.current++;

      // Schedule next one
      scheduleNextNotification();
    }, delay);
  }, [enabled, maxNotifications, generateNotification, showNotification]);

  // Initialize and manage the notification schedule
  useEffect(() => {
    isMountedRef.current = true;

    if (!enabled) {
      return;
    }

    // Reset counters on mount
    notificationCountRef.current = 0;
    delayIndexRef.current = 0;
    isRunningRef.current = true;

    // Show first notification after initial delay (5 seconds)
    timeoutRef.current = setTimeout(() => {
      if (!isMountedRef.current || !enabled) return;

      const notification = generateNotification();
      showNotification(notification);
      notificationCountRef.current++;

      // Schedule subsequent notifications
      scheduleNextNotification();
    }, DELAY_SEQUENCE[0]);

    // Cleanup on unmount
    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      isRunningRef.current = false;
    };
  }, [enabled, generateNotification, showNotification, scheduleNextNotification]);

  return {
    showNotification,
    isRunning: isRunningRef.current,
  };
};

export default useFomoNotifications;
