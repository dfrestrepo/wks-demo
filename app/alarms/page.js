import EventTimeline from "../components/EventTimeline";

import { alarmsData } from "@/public/alarms-data";

export default function Page() {
  return (
    <div className="wks-alarm">
      <div className="wks-alarm__main">
        <h1>Alarms</h1>
        <p>Alarms are a great way to get notified when something goes wrong.</p>
      </div>
      <section className="wks-alarm__sidebar">
        <div className="wks-alarm__sidebar__header">
          <h5>Related events</h5>
          <span class="cds-tag cds-tag--primary">
            <span class="cds-tag__text">24</span>
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
          })
        }
        </div>
      </section>
    </div>
  );
}
