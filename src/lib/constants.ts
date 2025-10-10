export const BACKEND_URL: string = process.env.NEXT_PUBLIC_API_URL || "http:localhost:9000/api";
export const ACCESS_TOKEN: string = process.env.JWT_ACCESS_TOKEN || "";

export const BACKEND_HEADERS = { 'Content-Type' : 'application/json' };