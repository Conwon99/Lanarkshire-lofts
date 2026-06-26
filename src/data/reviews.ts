/** Total reviews — MUST match visible review count on site (schema + reviews page). */
export const TOTAL_REVIEW_COUNT = 2;

export type CustomerReview = {
  name: string;
  meta: string;
  time: string;
  initial: string;
  initialBg: string;
  text: string;
};

export const reviews: CustomerReview[] = [
  {
    name: "Sarah M.",
    meta: "Facebook review",
    time: "recommended",
    initial: "S",
    initialBg: "bg-green-600",
    text: "Lanarkshire Lofts converted our attic into a proper bedroom. The team was professional, tidy and finished ahead of schedule. Great communication throughout and the finished room looks brilliant.",
  },
  {
    name: "James K.",
    meta: "Facebook review",
    time: "recommended",
    initial: "J",
    initialBg: "bg-emerald-500",
    text: "Had the roof reslated on our farmhouse — a big job but done to a very high standard. They also fitted new gutters at the same time. Competitive pricing and very tidy workmanship. Would highly recommend.",
  },
];
