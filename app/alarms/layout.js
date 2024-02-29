
import "./../globals.scss";
import "./alarms.scss";

export const metadata = {
  title: "Alarms detail",
  description: "Alarms are a great way to get notified when something goes wrong.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
    <body>
        <div className="wks-layout-temp">
            {children}
        </div>
    </body>
  </html>
  

  );
}
  