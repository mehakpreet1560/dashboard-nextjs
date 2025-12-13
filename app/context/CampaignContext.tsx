"use client";

import React, { createContext, useContext, useState } from "react";

export type Campaign = {
  id: string;
  name: string;
  status: "Active" | "Paused";
  startDate: string;
  endDate: string;
};

type CampaignContextType = {
  campaigns: Campaign[];
  addCampaign: (campaign: Campaign) => void;
};

const CampaignContext = createContext<CampaignContextType | undefined>(
  undefined
);

export const CampaignProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const addCampaign = (campaign: Campaign) => {
    setCampaigns((prev) => [...prev, campaign]);
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaigns = () => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error("useCampaigns must be used within CampaignProvider");
  }
  return context;
};
