import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Project1-1.png";
import projImg2 from "../assets/img/Project1-2.png";
import projImg3 from "../assets/img/Project1-3.png";
import projImg4 from "../assets/img/Project1-4.png";
import projImg5 from "../assets/img/Project1-5.png";
import projImg6 from "../assets/img/Project1-6.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
	const projects = [
		{
			title: "Log In Page",
			description: "Simple and Elegant",
			imgUrl: projImg1,
		},
		{
			title: "Home Page",
			description: "Announcement and Graphical Reports. There's dark mode too!",
			imgUrl: projImg2,
		},
		{
			title: "Research List",
			description: "Datatable.JS table with filter and export filtered as XLSX file",
			imgUrl: projImg3,
		},
		{
			title: "Add Research From",
			description: "Validated in frontend and backend. Select2 package for dropdowns and multi-select inputs",
			imgUrl: projImg4,
		},
		{
			title: "Activity Logs",
			description: "Monitoring user activities with update details",
			imgUrl: projImg5,
		},
		{
			title: "Settings",
			description: "For dynamically managing contents and information that appears on selections and displays",
			imgUrl: projImg6,
		},
	];

	return (
		<section className="project" id="project">
			<Container>
				<Row>
					<Col>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>
									<h2>Projects</h2>
									<p>Previous projects as employed web developer and as an undergrad student!</p>
									<p>
										These websites are products of hardwork and passion. <br />
										They're mobile responsive too!
									</p>
								</div>
							)}
						</TrackVisibility>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
								<Nav.Item>
									<Nav.Link eventKey="first">BUCS-RDMS (Live)</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Lakbay Agapay (Thesis)</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Tab three</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2} alt="colorSharp" />
		</section>
	);
};
