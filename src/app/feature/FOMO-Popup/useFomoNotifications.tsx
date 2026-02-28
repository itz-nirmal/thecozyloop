"use client";

import { useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";

// LocalStorage key for persisting FOMO notification state
const STORAGE_KEY = "fomo_notification_state";

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
// 5s, 15s, 45s, 135s, 405s, 1215s, 3645s, 10935s, 32805s, ... (multiply by 3 each time)
const DELAY_SEQUENCE = [
  5000,      // 1st: 5 sec
  15000,     // 2nd: 15 sec
  45000,     // 3rd: 45 sec
  135000,    // 4th: 135 sec (2.25 min)
  405000,    // 5th: 405 sec (6.75 min)
  1215000,   // 6th: 1215 sec (20.25 min)
  3645000,   // 7th: 3645 sec (60.75 min)
  10935000,  // 8th: 10935 sec (182.25 min)
  32805000,  // 9th: 32805 sec (546.75 min)
  98415000,  // 10th: 98415 sec (1640.25 min)
  295245000, // 11th: 295245 sec
  885735000, // 12th: 885735 sec
  2657205000,// 13th: 2657205 sec
  7971615000,// 14th: 7971615 sec
  23914845000, // 15th: 23914845 sec
  71744535000, // 16th: 71744535 sec
  215233605000, // 17th: 215233605 sec
  645700815000, // 18th: 645700815 sec
  1937102445000, // 19th: 1937102445 sec
  5811307335000, // 20th: 5811307335 sec
];

// Maximum number of notifications to show
const MAX_NOTIFICATIONS = 20;

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
 * with exponential backoff timing pattern and persistent state
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

  // Load persisted state from localStorage
  const loadPersistedState = useCallback((): { notificationCount: number; delayIndex: number; lastShownTimestamp: number | null } => {
    if (typeof window === "undefined") {
      return { notificationCount: 0, delayIndex: 0, lastShownTimestamp: null };
    }
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as { notificationCount?: number; delayIndex?: number; lastShownTimestamp?: number };
        return {
          notificationCount: parsed.notificationCount ?? 0,
          delayIndex: parsed.delayIndex ?? 0,
          lastShownTimestamp: parsed.lastShownTimestamp ?? null,
        };
      }
    } catch (e) {
      console.warn("Failed to load FOMO state from localStorage:", e);
    }
    return { notificationCount: 0, delayIndex: 0, lastShownTimestamp: null };
  }, []);

  // Save state to localStorage
  const savePersistedState = useCallback((notificationCount: number, delayIndex: number) => {
    if (typeof window === "undefined") return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        notificationCount,
        delayIndex,
        lastShownTimestamp: Date.now(),
      }));
    } catch (e) {
      console.warn("Failed to save FOMO state to localStorage:", e);
    }
  }, []);

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
      
      // Persist the state
      savePersistedState(notificationCountRef.current, delayIndexRef.current);

      // Schedule next one
      scheduleNextNotification();
    }, delay);
  }, [enabled, maxNotifications, generateNotification, showNotification, savePersistedState]);

  // Initialize and manage the notification schedule
  useEffect(() => {
    isMountedRef.current = true;

    if (!enabled) {
      return;
    }

    // Load persisted state instead of resetting
    const persistedState = loadPersistedState();
    notificationCountRef.current = persistedState.notificationCount;
    delayIndexRef.current = persistedState.delayIndex;
    
    // If we've already shown all notifications, don't show more
    if (notificationCountRef.current >= maxNotifications) {
      isRunningRef.current = false;
      return;
    }
    
    isRunningRef.current = true;

    // Calculate delay based on when the last notification was shown
    let initialDelay = DELAY_SEQUENCE[delayIndexRef.current] ?? DELAY_SEQUENCE[0];
    
    if (persistedState.lastShownTimestamp) {
      const timeSinceLastNotification = Date.now() - persistedState.lastShownTimestamp;
      // If enough time has passed since last notification, show immediately
      // Otherwise, wait for the remaining time
      if (initialDelay !== undefined && timeSinceLastNotification >= initialDelay) {
        initialDelay = 0;
      } else if (initialDelay !== undefined) {
        initialDelay = initialDelay - timeSinceLastNotification;
      }
    }

    // Show first notification after calculated delay
    timeoutRef.current = setTimeout(() => {
      if (!isMountedRef.current || !enabled) return;

      const notification = generateNotification();
      showNotification(notification);
      notificationCountRef.current++;
      
      // Persist the state
      savePersistedState(notificationCountRef.current, delayIndexRef.current);

      // Schedule subsequent notifications
      scheduleNextNotification();
    }, initialDelay);

    // Cleanup on unmount
    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      isRunningRef.current = false;
    };
  }, [enabled, generateNotification, showNotification, scheduleNextNotification, loadPersistedState, savePersistedState, maxNotifications]);

  return {
    showNotification,
    isRunning: isRunningRef.current,
  };
};

export default useFomoNotifications;
