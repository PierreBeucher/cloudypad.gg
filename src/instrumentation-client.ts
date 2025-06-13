import posthog from 'posthog-js'

const POSTHOG_PUBLIC_KEY = "phc_caJIOD8vW5727svQf90FNgdALIyYYouwEDEVh3BI1IH"
const POSTHOG_API_HOST = "https://eu.i.posthog.com"

posthog.init(POSTHOG_PUBLIC_KEY, {
    api_host: POSTHOG_API_HOST,
    capture_pageview: 'history_change',
    debug: process.env.NODE_ENV === "development"
});