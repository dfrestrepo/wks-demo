


'use client'
import Navigation from './components/Navigation';

import { useState } from "react";

function Nav() {

  const [sidebarStyle, setSidebarStyle] = useState('compact');

  const toggleSidebarStyle = () => {
    setSidebarStyle(prevStyle => (prevStyle === 'compact' ? 'content' : 'compact'));
  };

  const items = [
    {
      id: 1,
      name: "Home",
      url: "/home",
      text: "Home (direct)",
      icon: "cds-ico-home",
      badge: "",
      badgeClass: "",
      onClick: () => alert("Direct link to home from first level"),
      notification: false,
    },
    {
      id: 2,
      name: "Alarms",
      url: "/alarms",
      text: "Alarms",
      icon: "cds-ico-bell",
      badge: "2",
      badgeClass: "cds-badge--primary",
      onClick: () => alert("Direct link to home from first level"),
      notification: true,
      avatarText: "",
      avatarVariant: "",
    },
    {
      id: 3,
      name: "Workspaces",
      url: "/workspaces",
      text: "Workspaces",
      icon: "cds-ico-chat-bubble",
      badge: "44",
      badgeClass: "cds-badge--primary",
      onClick: () => alert("Direct link to home from first level"),
      notification: true,
      avatarText: "",
      avatarVariant: "",
    },
    {
      id: 4,
      name: "Reports",
      url: "/reports",
      text: "Reports",
      icon: "cds-ico-report",
      badge: "",
      badgeClass: "",
      onClick: () => alert("Direct link to home from first level"),
      notification: false,
      avatarText: "",
      avatarVariant: "",
    }
  ];

  const itemsFooter = [
    {
      id: 5,
      name: "Projects",
      url: "/projects",
      text: "Projects",
      icon: "cds-ico-cog",
      badge: "",
      badgeClass: "",
      onClick: () => alert("Direct link to home from first level"),
      notification: false,
    },
    {
      id: 6,
      name: "Settings",
      url: "/settings",
      text: "Hello User name",
      icon: "",
      badge: "",
      badgeClass: "",
      notification: false,
      avatarText: "DR",
      avatarVariant: "accent",
	  sobnavigationDirection: "top",
      subnavigation: [
        { text: "Help & suport", badge: "12", badgeClass: "cds-badge--accent" },
        { text: "User preferences", badge: "", badgeClass: "" },
        { text: "Log out", badge: "", badgeClass: "" }
      ],
    },
    // Agrega más elementos según sea necesario
  ];

  return (
    <div className='cds-wrapper' sidebar-style={sidebarStyle}>
      <aside className="cds-sidebar">
      <button className="cds-sidebar__toggle" onClick={toggleSidebarStyle}></button>
      <div className="cds-sidebar__top">
					<div className="cds-logo">
						 <img src="./logo-scout.svg" />
					</div>
					<div className="cds-trafo">
						<img src="./trafo-scout.svg" />
					</div>
				</div>
        <nav className="cds-sidebar__main">
        <Navigation items={items}/>
			</nav>
			<nav className="cds-sidebar__bottom">
				<Navigation items={itemsFooter}/>
			</nav>
      </aside>
      <main className="cds-main">
      <header className="cds-main__header">
					<div className="cdsr-header">
						<h1 className="cdsr-header__title">Header title</h1>
						<div className="cdsr-bradcrumps">Breadcrumps</div>
					</div>
				</header>
        <section className="cds-main__section">
        MAIN CONTENT
        </section>
      </main>
    </div>
  );
}

export default Nav;