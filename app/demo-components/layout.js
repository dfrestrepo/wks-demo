
import "./../globals.scss";

export const metadata = {
  title: "Demo components CDS",
  description: "All rect ui components in one place",
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
  