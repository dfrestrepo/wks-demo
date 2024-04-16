
'use client'

import HomeMain from "./components/HomeMain";
import LayoutHomeDemo from "./components/LayoutHomeDemo";

export default function Page() {
  return (
    <div className="page">
        <LayoutHomeDemo>
            <HomeMain />
        </LayoutHomeDemo>
    </div>
    
  );
}
