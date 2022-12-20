import React from "react";
import ReactTimeAgo from "react-time-ago";

import { parseISO, formatDistanceToNow } from "date-fns";

function DateFormat({ timestamp }) {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return <div className="text-gray-500 font-semibold"> &nbsp; {timeAgo}</div>;
}

export default DateFormat;
