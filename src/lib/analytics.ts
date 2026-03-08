import { getAnalytics, logEvent, isSupported } from "firebase/analytics";
import { app } from "./firebase";

class AnalyticsService {
    private static instance: AnalyticsService;
    private analytics: any = null;
    private initialized: boolean = false;

    private constructor() {
        // Initialization happens lazily or via explicit call
    }

    public static getInstance(): AnalyticsService {
        if (!AnalyticsService.instance) {
            AnalyticsService.instance = new AnalyticsService();
        }
        return AnalyticsService.instance;
    }

    async init() {
        if (this.initialized) return;

        if (typeof window !== "undefined") {
            try {
                const supported = await isSupported();
                if (supported) {
                    this.analytics = getAnalytics(app);
                    this.initialized = true;
                }
            } catch (error) {
                console.error("Firebase Analytics failed to initialize:", error);
            }
        }
    }

    /**
     * Logs an event to Firebase Analytics.
     * @param eventName Name of the event.
     * @param params Additional parameters for the event.
     */
    async log(eventName: string, params?: Record<string, any>) {
        await this.init();
        if (this.analytics) {
            logEvent(this.analytics, eventName, params);
        }
    }
}

export const analyticsService = AnalyticsService.getInstance();
