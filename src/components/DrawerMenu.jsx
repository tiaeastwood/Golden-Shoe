const DrawerMenu = () => {

    return (
			<div>
				{["left", "right", "top", "bottom"].map((anchor) => (
					<React.Fragment key={anchor}>
						<Drawer
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
						>
							<DrawerHeader>
								<Button>
									<CloseIcon
										style={{ fontSize: 50, color: "black" }}
										onClick={toggleDrawer(anchor, false)}
									/>
								</Button>
								<h1>Menu</h1>
							</DrawerHeader>
							{list(anchor)}
						</Drawer>
					</React.Fragment>
				))}
			</div>
		);
}