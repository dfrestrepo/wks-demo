
import "./../globals.scss";

export const metadata = {
  title: "Notice CDS",
  description: "notice component",
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
  