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
  MailOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Display from "@/components/Kit/Typography/Display";
import AppText from "@/components/Kit/Typography/Text";
import CustomButton from "@/components/Kit/Buttons/Buttons";
import EventCard2 from "@/components/Kit/Cards/EventCards/EventCard2";
import EventCard3 from "@/components/Kit/Cards/EventCards/EventCard3";
import StatsCard from "@/components/Kit/Dashboard/StatusCard";
import AbandonedCard from "@/components/Kit/Dashboard/StatusCard";
import PageViewsCard from "@/components/Kit/Dashboard/Chart";
import AnalyticsCard from "@/components/Kit/Dashboard/Chart";
import UIComponent from "@/components/Kit/Buttons/LoadingBtn";

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

      <EventCard2
        monthDay="Aug 22"
        weekday="Friday"
        time="8:30 PM"
        city="Multan"
        guests="No Guest"
        title="Street Food Festival"
        imageUrl="/assets/images/cover.png"
        onManage={() => console.log("Manage clicked")}
      />
      <EventCard3
        day="Tue"
        date="1"
        featured
        start="Jul 19, 2023 @ 8:00 am"
        end="Aug 4, 2023 @ 5:00 pm"
        title="Street Food Festival"
        location="Eventicity Club 8 E 9th Street, Chicago, IL, United States"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
        price="$70"
        image="/assets/images/cover.png"
      />

      {/* <StatsCard
        icon={<MailOutlined className="text-white text-lg" />}
        title="Abandoned card"
        value={24}
        percentage={20}
        duration="In the last 7 days"
      /> */}
      <div className="flex justify-center items-center h-screen w-full bg-[#0f1b26]">
        <StatsCard
          icon={<MailOutlined className="text-white text-xs" />}
          title="Abandoned card"
          value={24}
          percentage={20}
          isIncrease={true}
          duration="In the last 7 days"
        />
      </div>
      {/* <PageViewsCard /> */}
      <AnalyticsCard />

      <UIComponent
        type="button"
        variant="contained"
        label="Save"
        state="loading"
      />
      <UIComponent type="alert" state="success" label="Operation Successful!" />
      <UIComponent
        type="toggle"
        checked={true}
        onChange={(v) => console.log(v)}
      />
      <UIComponent type="radio" checked={false} label="Option A" />
      <UIComponent type="checkbox" checked={true} label="Accept Terms" />
    </div>
  );
};

export default page;
