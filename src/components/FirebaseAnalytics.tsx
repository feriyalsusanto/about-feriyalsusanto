"use client";

import { useEffect } from "react";
import { analyticsService } from "@/lib/analytics";

export default function FirebaseAnalytics() {
    useEffect(() => {
        analyticsService.init().catch((error) => {
            console.error("Firebase Analytics initialization failed:", error);
        });
    }, []);

    return null;
}
