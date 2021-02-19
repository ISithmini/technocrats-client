export const DashBoardHeadSection = (icon, sectionTitle) => {
	return (
		<div className="section-head">
			{ icon() }
			<div className="head-text">
				{ sectionTitle }
			</div>
		</div>
	);
};