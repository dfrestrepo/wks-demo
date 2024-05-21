"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { CdsButton, CdsChip, CdsList, CdsNotice } from "@circutor/react-ui";
import { CdsLoader } from "@circutor/react-ui";

import "./demo-components.scss";
export default function Page() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const dataToDisplayAction = [
    {
      title: "Title 1",
      subtitle: "Subtitle 1",
      avatarIcon: "cds-ico-device",
      iconAction: "cds-ico-edit",
      actionClick: () => console.log("Click on action 1"),
    },
    {
      title: "Title 2",
      subtitle: "Subtitle 2",
      avatarIcon: "cds-ico-device",
      iconAction: "cds-ico-edit",
      actionClick: () => console.log("Click on action 2"),
    },
  ];
  const dataToDisplayValue = [
    {
      title: "Title 1",
      subtitle: "Subtitle 1",
      avatarIcon: "cds-ico-device",
      value: "2",
    },
    {
      title: "Title 1",
      subtitle: "Subtitle 1",
      avatarIcon: "cds-ico-device",
      value:
        "loremp ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et",
    },
    {
      title: "Title 2",
      subtitle: "Subtitle 2",
      avatarIcon: "cds-ico-device",
      value: "2",
    },
  ];
  const dataToDisplayValueSimple = [
    {
      title: "Title 2",
      value: "2",
    },
    {
      title: "Title 1",
      value:
        "loremp ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et",
    },
    {
      title: "Title 2",
      value: "2",
    },
  ];
  return (
    <>
      <CdsButton
        type="submit"
        buttonType="ghost"
        icon="arrow-left"
        iconPosition="left"
        onClick={() => router.push("/")}
      >
        Return
      </CdsButton>
      <div>
        {/* Buttons */}
        <details>
          <summary>Buttons</summary>
          {/* Primary */}
          <div className="details-row">
            <CdsButton
              type="submit"
              buttonType="primary"
              icon="floppydisk"
              iconPosition="right"
              onClick={() => setCount(count + 1)}
            >
              Click me!
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="primary"
              icon="floppydisk"
              iconPosition="left"
              onClick={() => setCount(count + 1)}
            >
              Click me!
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="primary"
              icon="floppydisk"
              iconPosition="left"
              onClick={() => setCount(count + 1)}
            />
            <CdsButton
              type="submit"
              buttonType="primary"
              icon="floppydisk"
              iconPosition="left"
              selected
              onClick={() => setCount(count + 1)}
            >
              Selected
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="primary"
              icon="floppydisk"
              iconPosition="left"
              disabled
              onClick={() => setCount(count + 1)}
            >
              Disabled
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="primary"
              icon="floppydisk"
              iconPosition="left"
              loading
              onClick={() => setCount(count + 1)}
            >
              Selected
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="primary"
              icon="floppydisk"
              iconPosition="left"
              danger
              onClick={() => setCount(count + 1)}
            >
              Danger
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="primary"
              icon="floppydisk"
              iconPosition="left"
              condensed
              onClick={() => setCount(count + 1)}
            >
              Condensed
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="primary"
              icon="floppydisk"
              iconPosition="left"
              expanded
              onClick={() => setCount(count + 1)}
            >
              Expanded
            </CdsButton>
          </div>
          {/* secondary */}
          <div className="details-row">
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="floppydisk"
              iconPosition="right"
              onClick={() => setCount(count + 1)}
            >
              Click me!
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="floppydisk"
              iconPosition="left"
              onClick={() => setCount(count + 1)}
            >
              Click me!
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="floppydisk"
              iconPosition="left"
              onClick={() => setCount(count + 1)}
            />
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="floppydisk"
              iconPosition="left"
              selected
              onClick={() => setCount(count + 1)}
            >
              Selected
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="floppydisk"
              iconPosition="left"
              disabled
              onClick={() => setCount(count + 1)}
            >
              Disabled
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="floppydisk"
              iconPosition="left"
              loading
              onClick={() => setCount(count + 1)}
            >
              Selected
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="floppydisk"
              iconPosition="left"
              danger
              onClick={() => setCount(count + 1)}
            >
              Danger
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="floppydisk"
              iconPosition="left"
              condensed
              onClick={() => setCount(count + 1)}
            >
              Condensed
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="floppydisk"
              iconPosition="left"
              expanded
              onClick={() => setCount(count + 1)}
            >
              Expanded
            </CdsButton>
          </div>
          {/* Tertiary */}
          <div className="details-row">
            <CdsButton
              type="submit"
              buttonType="tertiary"
              icon="floppydisk"
              iconPosition="right"
              onClick={() => setCount(count + 1)}
            >
              Click me!
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="tertiary"
              icon="floppydisk"
              iconPosition="left"
              onClick={() => setCount(count + 1)}
            >
              Click me!
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="tertiary"
              icon="floppydisk"
              iconPosition="left"
              onClick={() => setCount(count + 1)}
            />
            <CdsButton
              type="submit"
              buttonType="tertiary"
              icon="floppydisk"
              iconPosition="left"
              selected
              onClick={() => setCount(count + 1)}
            >
              Selected
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="tertiary"
              icon="floppydisk"
              iconPosition="left"
              disabled
              onClick={() => setCount(count + 1)}
            >
              Disabled
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="tertiary"
              icon="floppydisk"
              iconPosition="left"
              loading
              onClick={() => setCount(count + 1)}
            >
              Selected
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="tertiary"
              icon="floppydisk"
              iconPosition="left"
              danger
              onClick={() => setCount(count + 1)}
            >
              Danger
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="tertiary"
              icon="floppydisk"
              iconPosition="left"
              condensed
              onClick={() => setCount(count + 1)}
            >
              Condensed
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="tertiary"
              icon="floppydisk"
              iconPosition="left"
              expanded
              onClick={() => setCount(count + 1)}
            >
              Expanded
            </CdsButton>
          </div>
          {/* Ghost */}
          <div className="details-row">
            <CdsButton
              type="submit"
              buttonType="ghost"
              icon="floppydisk"
              iconPosition="right"
              onClick={() => setCount(count + 1)}
            >
              Click me!
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="ghost"
              icon="floppydisk"
              iconPosition="left"
              onClick={() => setCount(count + 1)}
            >
              Click me!
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="ghost"
              icon="floppydisk"
              iconPosition="left"
              onClick={() => setCount(count + 1)}
            />
            <CdsButton
              type="submit"
              buttonType="ghost"
              icon="floppydisk"
              iconPosition="left"
              selected
              onClick={() => setCount(count + 1)}
            >
              Selected
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="ghost"
              icon="floppydisk"
              iconPosition="left"
              disabled
              onClick={() => setCount(count + 1)}
            >
              Disabled
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="ghost"
              icon="floppydisk"
              iconPosition="left"
              loading
              onClick={() => setCount(count + 1)}
            >
              Selected
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="ghost"
              icon="floppydisk"
              iconPosition="left"
              danger
              onClick={() => setCount(count + 1)}
            >
              Danger
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="ghost"
              icon="floppydisk"
              iconPosition="left"
              condensed
              onClick={() => setCount(count + 1)}
            >
              Condensed
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="ghost"
              icon="floppydisk"
              iconPosition="left"
              expanded
              onClick={() => setCount(count + 1)}
            >
              Expanded
            </CdsButton>
          </div>
        </details>

        {/* Chips */}
        <details>
          <summary>Chips</summary>

          <div className="details-row">
            <CdsChip feedback="information" text="Information" />
            <CdsChip feedback="error" text="Error" />
            <CdsChip feedback="success" text="Success" />
            <CdsChip feedback="alert" text="Alert" />
            <CdsChip feedback="processing" text="Processing" />
          </div>
        </details>

        {/* Lists */}
        <details>
          <summary>Lists</summary>

          <CdsList data={dataToDisplayValue} />
          <CdsList data={dataToDisplayValueSimple} />
          <CdsList data={dataToDisplayAction} />
        </details>

        {/* Loaders*/}
        <details>
          <summary>Loaders</summary>

          <CdsLoader text="Loading..." size="large" />
          <CdsLoader text="Loading..." size="medium" />
          <CdsLoader size="small" />
        </details>

        {/* Notices */}
        <details>
          <summary>Notices</summary>

          <CdsNotice icon="cds-ico-floppydisk" text="pleceholder text" />

          <CdsNotice
            icon="cds-ico-chat-bubble-dots"
            title="Workspace"
            text="See and solve your building problems in one place. Include your team members and generate customised graphics."
          />

          <CdsNotice
            icon="cds-ico-chat-bubble-dots"
            title="Workspace"
            text="See and solve your building problems in one place. Include your team members and generate customised graphics."
          >
            <CdsButton
              buttonType="primary"
              icon="floppydisk"
              onClick={() => setCount(count + 1)}
            >
              Click me!
            </CdsButton>
          </CdsNotice>

          <CdsNotice
            feedback="error"
            icon="cds-ico-close-circle-solid"
            hero="403"
            title="Server error"
            text="no puedes entrar aqui"
          />
        </details>
      </div>
    </>
  );
}
