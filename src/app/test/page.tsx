"use client";

import { AppPopup, PopupVariant } from "@/components/Kit/PopUps/AppPopup";
import PricingCard from "@/components/Kit/Pricing/Pricing";

import { Button } from "antd";
import { UserOutlined, RocketOutlined, TeamOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const page = () => {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<PopupVariant>("confirm");

  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen">
      {/* Buttons to switch popup type */}
      {/* <Button
        type="primary"
        onClick={() => {
          setVariant("confirm");
          setOpen(true);
        }}
      >
        Show Confirm
      </Button> */}

      {/* Popup Component */}
      {/* <AppPopup
        variant={variant}
        open={open}
        onClose={() => setOpen(false)}
        onAction={() => setOpen(false)}
      /> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-start min-h-screen  p-8">
        {/* Basic Plan (outline + light shade) */}
        <PricingCard
          title="Basic"
          price="$9"
          features={[
            "Access to core AI analytics",
            "Basic customer segmentation",
            "Limited report generation",
            "Email support",
          ]}
          //   buttonText="Get Started"
          //   buttonVariant="default"
          //   icon={<UserOutlined />}
          bgShade="light"
        />

        {/* Pro Plan (primary + medium shade) */}
        <PricingCard
          title="Pro"
          price="$29"
          features={[
            "All Basic plan features",
            "Advanced AI insights",
            "Dynamic pricing optimization",
            "24/7 priority support",
            "24/7 priority support",
            "24/7 priority support",
          ]}
          variant="pro"
          //   buttonText="Start Free Trial"
          //   buttonVariant="primary"
          //   icon={<RocketOutlined />}
          bgShade="medium"
        />

        {/* Enterprise Plan (outline + dark shade) */}
        <PricingCard
          title="Enterprise"
          features={[
            "Custom integrations",
            "Dedicated account manager",
            "On-site training",
            "Unlimited users",
            "Unlimited users",
          ]}
          //   buttonText="Contact Sales"
          //   buttonVariant="dashed"
          //   icon={<TeamOutlined />}
          bgShade="light"
        />
      </div>
    </div>
  );
};

export default page;
