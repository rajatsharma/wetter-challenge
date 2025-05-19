import { format, isToday, isTomorrow } from "date-fns";
import { tz } from "@date-fns/tz";

export function getRelativeDay(date: string | null, timezone: string) {
  if (date === null) {
    return "-----";
  }

  if (isToday(date, { in: tz(timezone) })) {
    return "Today";
  }

  if (isTomorrow(date, { in: tz(timezone) })) {
    return "Tomorrow";
  }

  return format(date, "EEEE", {
    in: tz(timezone),
  });
}

export function formatDate(date: string | null, timezone: string) {
  if (date === null) {
    return "-- ---";
  }

  return format(date, "do MMM", {
    in: tz(timezone),
  });
}

export function formatHours(date: string | null, timezone: string) {
  if (date === null) {
    return "--";
  }

  return format(date, "HH", {
    in: tz(timezone),
  });
}
