"use client";

import React, { useState } from "react";

import { Typography, ConfigProvider } from "antd";
import { CdsButton } from "@circutor/react-ui";

const CdsIcon = ({ name }) => {
  return <span className={name}></span>;
};

export const EditInline = ({ text }) => {
  const [editableStr, setEditableStr] = useState(text);

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "var(--cds-color-text-default)",
          colorIcon: "var(--cds-color-text-default)",
          colorLink: "var(--cds-color-text-default)",
          colorPrimaryBorder: "var(--cds-color-border-default)",
          borderRadius: 4,
          fontFamily: "NettoPro",

          // Alias Token
          colorBgContainer: "var(--cds-color-background-default)",
        },
      }}
    >
      <Typography.Title level={3}
        editable={{
          icon: <CdsButton type="button" buttonType="tertiary" icon="delete" />,
          enterIcon: < CdsIcon name="cds-ico-check-circle-solid" />,
          onChange: setEditableStr,
          maxLength: 30,
        }}
      >
        {editableStr}
      </Typography.Title >
    </ConfigProvider>
  );



};
