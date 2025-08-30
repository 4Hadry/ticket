"use client";
import { Card, Col, Row } from "antd";
import CalendarBox from "./CalendarBox";
import TimeSelector from "./TimeSelector";

export default function TopCalendars() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-row">
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                width: 456,
                height: 306,
            }}
        >
            <Card
                bordered={false}
                style={{
                    background: "#1D2939",
                    color: "white",
                    padding: 0,
                    margin: 0,
                    marginTop: "70px",
                }}
                bodyStyle={{ padding: 0 }}
            >
                <Row gutter={16} align="top">
                    {/* Calendar side */}
                    <Col span={12} style={{ paddingRight: "16px" }}>
                        <CalendarBox />
                    </Col>

                    {/* Time side */}
                    <Col
                        span={12}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "24px", // space below top
                            paddingLeft: "16px", // space from calendar
                        }}
                    >
                        <TimeSelector />
                    </Col>
                </Row>
            </Card>
        </div>
         <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                width: 456,
                height: 306,
            }}
        >
            <Card
                bordered={false}
                style={{
                   background:"#253242",
                    color: "white",
                    padding: 0,
                    margin: 0,
                    marginTop: "70px",
                }}
                bodyStyle={{ padding: 0 }}
            >
                <Row gutter={16} align="top">
                    {/* Calendar side */}
                    <Col span={12} style={{ paddingRight: "16px" }}>
                        <CalendarBox />
                    </Col>

                    {/* Time side */}
                    <Col
                        span={12}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "24px", // space below top
                            paddingLeft: "16px", // space from calendar
                        }}
                    >
                        <TimeSelector />
                    </Col>
                </Row>
            </Card>
        </div>
        </div>
        </div>
    );
}
