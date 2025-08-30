"use client";
import { Card } from "antd";
import CalendarBox from "./CalendarBox";
import TimeSelector from "./TimeSelector";

export default function TopCalendars() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "50px",
        gap: "16px", // ⬅ space between calendar and time card
      }}
    >
      {/* Calendar Card */}
      <Card
        bordered={false}
        style={{
          background: "#1D2939",
          color: "white",
          width: 456,
          height: 306,
        }}
        bodyStyle={{ padding: "8px" }}
      >
        <CalendarBox />
      </Card>

      {/* Time Selector Card */}
      <Card
        bordered={false}
        style={{
          background: "#1D2939",
          color: "white",
          width: 456,
          height: 306,
        }}
        bodyStyle={{ padding: "8px" }}
      >
        <TimeSelector />
      </Card>
    </div>
  );
}
