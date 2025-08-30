"use client";

import { AppPopup, PopupVariant } from "@/components/Kit/PopUps/AppPopup";
import PricingCard from "@/components/Kit/Pricing/Pricing";

import { Button } from "antd";
import {
  UserOutlined,
  RocketOutlined,
  TeamOutlined,
  LockOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Display from "@/components/Kit/Typography/Display";
import AppText from "@/components/Kit/Typography/Text";
import CustomButton from "@/components/Kit/Buttons/Buttons";

const page = () => {
  // const [open, setOpen] = useState(false);
  // const [variant, setVariant] = useState<PopupVariant>("confirm");

  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-bg">
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

      <Display size="2xl" variant="normal">
        Display XL - Normal
      </Display>

      <Display size="lg" variant="bold">
        Display LG - Bold
      </Display>

      <Display size="xs" variant="medium">
        Display XS - Medium
      </Display>

      <AppText variant="xl" weight="normal">
        Normal
      </AppText>
      <AppText variant="xl" weight="medium">
        Medium
      </AppText>
      <AppText variant="xl" weight="semibold">
        Semibold
      </AppText>
      <AppText variant="xl" weight="bold">
        Bold
      </AppText>

      <AppText variant="xl" weight="normal" italic>
        Normal Italic
      </AppText>
      <AppText variant="xl" weight="medium" italic>
        Medium Italic
      </AppText>
      <AppText variant="xl" weight="semibold" italic>
        Semibold Italic
      </AppText>
      <AppText variant="xl" weight="bold" italic>
        Bold Italic
      </AppText>

      <AppText variant="xl" underline>
        Normal Underlined
      </AppText>

      <div className="flex flex-col gap-4 p-8">
        <CustomButton
          label="Get started now"
          variant="contained"
          color="primary"
          size="large"
          // disabled={true}
        />
        <CustomButton
          label="Get started now"
          variant="outlined"
          color="primary"
          icon={<PlusOutlined />}
          // size="large"
        />
        <CustomButton
          label="Get started now"
          variant="text"
          color="primary"

          // size="large"
        />

        <CustomButton
          label="Get started now"
          variant="contained"
          color="secondary"
          size="large"
        />
        <CustomButton
          label="Get started now"
          variant="outlined"
          color="secondary"
          size="large"
        />
        <CustomButton
          label="Get started now"
          variant="text"
          color="secondary"
          size="large"
        />
      </div>
    </div>
  );
};

export default page;
