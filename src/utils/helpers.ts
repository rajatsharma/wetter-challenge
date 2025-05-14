import { format, isToday, isTomorrow } from "date-fns";

export function getRelativeDay(date: string) {
  if (isToday(date)) {
    return "Today";
  }

  if (isTomorrow(date)) {
    return "Tomorrow";
  }

  return format(date, "EEEE");
}

export function formatDate(date: string) {
  return format(date, "do MMM");
}

export function formatHours(date: string | null) {
  if (date === null) {
    return "--";
  }

  return format(date, "HH");
}
