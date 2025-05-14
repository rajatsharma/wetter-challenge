import { format, isToday, isTomorrow } from "date-fns";

export function getRelativeDay(date: Date) {
  if (isToday(date)) {
    return "Today";
  }

  if (isTomorrow(date)) {
    return "Tomorrow";
  }

  return format(date, "EEEE");
}

export function formatDate(date: Date) {
  return format(date, "do MMM");
}
