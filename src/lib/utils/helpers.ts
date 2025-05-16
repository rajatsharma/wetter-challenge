import { format } from "date-fns";

export function getRelativeDay(date: string | null, index: number) {
  if (date === null) {
    return "-----";
  }

  // We are using index to determine Today, or Tomorrow instead of using isToday() because it could cause
  // hydration errors when page is served from different timezone as the client
  if (index === 0) {
    return "Today";
  }

  if (index === 1) {
    return "Tomorrow";
  }

  return format(date, "EEEE");
}

export function formatDate(date: string | null) {
  if (date === null) {
    return "-- ---";
  }

  return format(date, "do MMM");
}

export function formatHours(date: string | null) {
  if (date === null) {
    return "--";
  }

  return format(date, "HH");
}
