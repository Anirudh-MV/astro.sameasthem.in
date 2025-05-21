import { getShowDate } from "./date-formatter";

export function getHeroHeader(date: Date): string {
  if (getShowDate(date) > getShowDate(new Date())) {
    return "Upcoming Release";
  }
  return "Latest Release";
}
