'use client'

import EventTimeline from "../components/EventTimeline";

import { CdsButton } from "@circutor/react-ui";

import { alarmsData } from "@/public/alarms-data";

export default function Page() {
  return (
    <div className="wks-alarm">
      

      <div className="wks-alarm__main">
        <div className="wks-alarm__main__preheader">
        <CdsButton
          type="submit"
          buttonType="ghost"
          icon="arrow-left"
          iconPosition="left"
          onClick={() => router.push("/alarms")}
        >
          Return to alarms
        </CdsButton>
      </div>
        <div className="wks-alarm__main__header">
          <div className="wks-alarm__main__header__highlights">
            <span className="wks-tag-ghost">
              <span className="cds-icon cds-ico-skyline"></span>
              Empire State Building
            </span>
            <span className="wks-tag-ghost">
              <strong>Creatiion date:</strong>
              2days ago
            </span>
            <span className="wks-tag-ghost">
              <strong>See by:</strong>
              John Doe
            </span>
          </div>
          <div className="wks-alarm__main__header__title">
            <h2>Over temperature</h2>
          </div>
          <div className="wks-alarm__main__header__actions">
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="chat-bubble-plus"
              iconPosition="left"
            >
              New workspace
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="bell-close"
              iconPosition="left"
            >
              Close
            </CdsButton>
            <CdsButton
              type="submit"
              buttonType="secondary"
              icon="bell-discard"
              iconPosition="left"
            >
              Discard
            </CdsButton>
          </div>
        </div>
        <section className="wks-alarm__main__content">
          <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quia, quod, quae, quibusdam quidem quas           quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas</p>
          <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quia, quod, quae, quibusdam quidem quas           quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas</p>
          <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quia, quod, quae, quibusdam quidem quas           quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quia, quod, quae, quibusdam quidem quas           quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quia, quod, quae, quibusdam quidem quas           quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas</p>
          <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quia, quod, quae, quibusdam quidem quas           quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas</p>
          <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quia, quod, quae, quibusdam quidem quas           quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas</p>
          <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quia, quod, quae, quibusdam quidem quas           quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quia, quod, quae, quibusdam quidem quas           quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quia, quod, quae, quibusdam quidem quas           quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas quae, quibusdam quidem quas</p>
          </section>
      </div>
      <section className="wks-alarm__sidebar">
        <div className="wks-alarm__sidebar__header">
          <h5>Related events</h5>
          <span class="cds-tag cds-tag--primary">
            <span class="cds-tag__text">{alarmsData.length}</span>
          </span>
        </div>
        <div className="wks-events">
          {alarmsData.map((alarm) => {
            return (
              <EventTimeline
                status={alarm.status}
                title={alarm.title}
                timestamp={alarm.timestamp}
                device_name={alarm.device_name}
                index={alarm.index}
              ></EventTimeline>
            );
          })}
        </div>
      </section>
    </div>
  );
}
