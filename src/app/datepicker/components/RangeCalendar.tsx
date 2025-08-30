"use client";
import { Calendar } from "antd";
import { useState } from "react";
import "../components/calendar.css";
import dayjs, { Dayjs } from "dayjs";

export default function RangeCalendar() {
  const [range, setRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);
  const [baseMonth, setBaseMonth] = useState(dayjs());

  const onSelect = (date: Dayjs) => {
    if (!range[0] || (range[0] && range[1])) {
      setRange([date, null]);
    } else {
      if (date.isBefore(range[0])) {
        setRange([date, range[0]]);
      } else {
        setRange([range[0], date]);
      }
    }
  };

  const cellRender = (date: Dayjs) => {
    const isStart = range[0] && date.isSame(range[0], "day");
    const isEnd = range[1] && date.isSame(range[1], "day");
    const inRange =
      range[0] &&
      range[1] &&
      date.isAfter(range[0], "day") &&
      date.isBefore(range[1], "day");

    return (
      <div
        style={{
          borderRadius: "50%",
          width: 22,
          height: 22,
          lineHeight: "22px",
          textAlign: "center",
          margin: "auto",
          fontSize: "12px",
          backgroundColor: isStart || isEnd ? "white" : inRange ? "#64748b" : "transparent",
          color: isStart || isEnd ? "black" : "white",
        }}
      >
        {date.date()}
      </div>
    );
  };

  const goMonth = (dir: "prev" | "next") => {
    setBaseMonth((prev) =>
      dir === "next" ? prev.add(1, "month") : prev.subtract(1, "month")
    );
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        background: "#1D2939",
        borderRadius: "8px",
        overflow: "hidden",
        margin: "0 auto",
        width: "600px",
      }}
    >
      {/* Left Arrow (outside left edge) */}
      <button
        onClick={() => goMonth("prev")}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        ◀
      </button>

      {/* Calendars */}
      <div style={{ width: "50%", borderRight: "1px solid #334155" }}>
        <Calendar
          fullscreen={false}
          value={baseMonth}
          onSelect={onSelect}
          style={{
            background: "transparent",
            color: "white",
            padding: "8px",
          }}
          dateFullCellRender={cellRender}
          headerRender={() => (
            <div
              style={{
                textAlign: "center",
                padding: "0 6px",
                fontSize: "12px",
                color: "white",
              }}
            >
              {baseMonth.format("MMM YYYY")}
            </div>
          )}
        />
      </div>

      <div style={{ width: "50%" }}>
        <Calendar
          fullscreen={false}
          value={baseMonth.add(1, "month")}
          onSelect={onSelect}
          style={{
            background: "transparent",
            color: "white",
            padding: "8px",
          }}
          dateFullCellRender={cellRender}
          headerRender={() => (
            <div
              style={{
                textAlign: "center",
                padding: "0 6px",
                fontSize: "12px",
                color: "white",
              }}
            >
              {baseMonth.add(1, "month").format("MMM YYYY")}
            </div>
          )}
        />
      </div>

      {/* Right Arrow (outside right edge) */}
      <button
        onClick={() => goMonth("next")}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        ▶
      </button>
    </div>
  );
}
