export { default } from "next-auth/middleware";

// Only protect /dashboard (homepage stays public)
export const config = {
  matcher: ["/dashboard"],
};
