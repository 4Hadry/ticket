"use client";
import { Calendar, Select } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import "../components/calendar.css";
const { Option } = Select;

export default function CalendarBox() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Calendar
        fullscreen={false}
        style={{
          background: "transparent",
          color: "white",
          padding: "10px",
          flex: 1,
        }}
        headerRender={({ value, onChange }) => {
          const current = value.clone();
          const goMonth = (direction: "up" | "down") => {
            const newValue =
              direction === "up"
                ? current.add(1, "month")
                : current.subtract(1, "month");
            onChange(newValue);
          };
          const handleMonthChange = (month: number) => {
            const newValue = current.clone().month(month);
            onChange(newValue);
          };
          const months = Array.from({ length: 12 }, (_, i) =>
            current.clone().month(i).format("MMMM")
          );
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                color: "white",
                fontSize: "12px",
                 
              }}
            >
              <div style={{ fontWeight: 600 }}>
                {current.format("MMMM YYYY")}
                <Select
                  bordered={false}
                  value={current.month() ?? -1}
                  onChange={handleMonthChange}
                  style={{
                    width: 100,
                    background: "transparent",
                    border: "none",
                 
                    color: "white",
                  }}
                  dropdownMatchSelectWidth={false}
                  suffixIcon={<DownOutlined style={{ color: "white" }} />}
                >
                  {months.map((m, idx) => (
                    <Option key={idx} value={idx}>
                      {""}
                    </Option>
                  ))}
                </Select>
              </div>
              <div style={{  gap: 4 }}>
                <button
                  onClick={() => goMonth("down")}
                  style={{
                    borderRadius: 4,
                    background: "transparent",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <DownOutlined />
                </button>
                <button
                  onClick={() => goMonth("up")}
                  style={{
                    borderRadius: 4,
                    background: "transparent",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <UpOutlined />
                </button>
              </div>
            </div>
          );
        }}
      />
   
    </div>
  );
}
