const EventTimeline = ({ status, title, timestamp, device_name, index }) => {

  let statusColor = "";

  if (status === "ON") {
    statusColor = "error";
  } else if (status === "OFF") {
    statusColor = "success";
  } else {
    statusColor = "info";
  }

  return (
    <div className="wks-events__event">
      <div className="wks-events__event__status">
        <div className={`wks-avatar wks-avatar--color-${statusColor}`}>{status}</div>
      </div>
      <div className="wks-events__event__content">
        <h2 className="wks-events__event__content__title">{title}</h2>
        <span className="wks-events__event__content__date">{timestamp}</span>
        <div className="wks-events__event__content__footer">
          <span className="wks-events__event__content__footer__device">
            {device_name}
          </span>
          <span className="wks-events__event__content__footer__index">
            {index}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
