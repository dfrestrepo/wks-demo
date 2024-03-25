import "./sidebar.scss";


function handleClickOutside() {
	console.log('handleClickOutside');
	document.body.classList.toggle('collapsed-sidebar');
}


export const Sidebar = () => {
	

    return(
        <div className="sidebar">
            <nav className="tiki-sidebar__navigation">
            <div className="tiki-sidebar__navigation">
			
			<button class="cds-button cds-button--ghost" onClick={handleClickOutside}>
					<span class="cds-button__icon cds-ico-arrow-left"></span>
				</button>

				<ul className="navmenu">
					<li className="navItem">
						<div className="navLink">
							<span className="navLink__icon cds-ico-home"></span>
							<span className="navLink__content">Home</span>
						</div>
					</li>
					
					<li className="navItem">
						<div className="navLink is-active has-badge">
							<span className="navLink__icon cds-ico-chat-bubble-dots"></span>
							<span className="navLink__content">Workspaces</span>
							<span className="navLink__badge cds-bse-badge cds-bse-badge--secondary">44</span>
						</div>
						
					</li>

					<li className="navItem">
						<div className="navLink">
							<span className="navLink__icon cds-ico-bell"></span>
							<span className="navLink__content">Alarms</span>
						</div>
						
					</li>
					<li className="navItem">
						<div className="navLink">
							<span className="navLink__icon cds-ico-report"></span>
							<span className="navLink__content">Reports</span>
						</div>
						
					</li>

				</ul>
			</div>
            </nav>
        </div>
    )
}