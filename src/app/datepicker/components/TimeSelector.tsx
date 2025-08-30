"use client";
import { Card, Col, Flex, Row } from "antd";
import { useState } from "react";
import "../components/calendar.css";

export default function TimeSelector() {
    const [hour, setHour] = useState<number>(12);
    const [minute, setMinute] = useState<number>(0);
    const [ampm, setAmPm] = useState<string>("AM");

    return (
        <Card
            bordered={false}
            style={{
                   background: "#1D2939",
                color: "white",
                display:"flex",
                width: "100%",
               
              justifyContent:"center",
            
            }}
            bodyStyle={{ padding: 0 }}
            headStyle={{ borderBottom: "none" }}
        >
            <Row gutter={8} > 
               
                <Col flex="60px"> 
                    <div className="flex flex-col gap-0.5 max-h-64 overflow-y-auto scrollbar-hide">
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                            <div
                                key={h}
                                className={`px-1 py-1.5 rounded text-center cursor-pointer transition ${hour === h
                                        ? "bg-white text-black"
                                        : "hover:bg-gray-700 text-gray-200"
                                    }`}
                                onClick={() => setHour(h)}
                            >
                                <p className="text-xs">{h}</p>
                            </div>
                        ))}
                    </div>
                </Col>

                {/* Minutes */}
                <Col flex="60px">
                    <div className="flex flex-col gap-0.5 max-h-64 overflow-y-auto scrollbar-hide">
                        {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                            <div
                                key={m}
                                className={`px-1 py-1.5 rounded text-center cursor-pointer transition ${minute === m
                                        ? "bg-white text-black"
                                        : "hover:bg-gray-700 text-gray-200"
                                    }`}
                                onClick={() => setMinute(m)}
                            >
                                <p className="text-xs">{m.toString().padStart(2, "0")}</p>
                            </div>
                        ))}
                    </div>
                </Col>

                {/* AM/PM */}
                <Col flex="50px">
                    <div className="flex flex-col gap-0.5">
                        {["AM", "PM"].map((p) => (
                            <div
                                key={p}
                                className={`flex items-center justify-center px-1 py-1.5 rounded cursor-pointer transition ${ampm === p
                                        ? "bg-white text-black"
                                        : "bg-transparent text-white hover:bg-white/20"
                                    }`}
                                onClick={() => setAmPm(p)}
                            >
                                <p className="text-xs">{p}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Card>
    );
}
