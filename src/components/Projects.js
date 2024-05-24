import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Project1-1.png";
import projImg2 from "../assets/img/Project1-2.png";
import projImg3 from "../assets/img/Project1-3.png";
import projImg4 from "../assets/img/Project1-4.png";
import projImg5 from "../assets/img/Project1-5.png";
import projImg6 from "../assets/img/Project1-6.png";
import projImg2_1 from "../assets/img/Project2-1.png";
import projImg2_2 from "../assets/img/Project2-2.png";
import projImg2_3 from "../assets/img/Project2-3.png";
import projImg2_4 from "../assets/img/Project2-4.png";
import projImg2_5 from "../assets/img/Project2-5.png";
import projImg2_6 from "../assets/img/Project2-6.png";
import projImg3_1 from "../assets/img/Project3-1.png";
import projImg3_2 from "../assets/img/Project3-2.png";
import projImg3_3 from "../assets/img/Project3-3.png";
import projImg3_4 from "../assets/img/Project3-4.png";
import projImg3_5 from "../assets/img/Project3-5.png";
import projImg3_6 from "../assets/img/Project3-6.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
	const projects = [
		{
			title: "Log In Page",
			description: "visit bucsrdms.com",
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
	const projects2 = [
		{
			title: "Landing Page",
			description: "Overview, Top Destinations, Top Tour Operators, Footer",
			imgUrl: projImg2_1,
		},
		{
			title: "Destinations Page & Details Page",
			description: "List of destinations with rating and heart feature.",
			imgUrl: projImg2_2,
		},
		{
			title: "Add Destination Form",
			description: "Multi-step form with Google Maps API for pinning location",
			imgUrl: projImg2_3,
		},
		{
			title: "Rating",
			description: "Star rating with image attachmet",
			imgUrl: projImg2_4,
		},
		{
			title: "Admin Page",
			description: "Reports, Destination/Tour Opeator Management, Requests Handling, Activity Logs",
			imgUrl: projImg2_5,
		},
		{
			title: "Chat System",
			description: "Chat with registered users, color theme and dark mode",
			imgUrl: projImg2_6,
		},
	];
	const projects3 = [
		{
			title: "Sign In Page",
			description: "With restore database feature, sign up, and forgot password option",
			imgUrl: projImg3_1,
		},
		{
			title: "Home Page",
			description: "Dashboard with reports of current/other event",
			imgUrl: projImg3_2,
		},
		{
			title: "Attendance Page",
			description: "Searches by student no. which enables/disables time-in/time-out button based on their attendance",
			imgUrl: projImg3_3,
		},
		{
			title: "Attendance Records",
			description: "List of attendance of specific event with report generation",
			imgUrl: projImg3_4,
		},
		{
			title: "Student Records",
			description: "List of registered students with reprot generation",
			imgUrl: projImg3_5,
		},
		{
			title: "Student Registration",
			description: "Form for adding a student into the system",
			imgUrl: projImg3_6,
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
									<p>
										These projects are products of hardwork and passion. <br />
										Websites are mobile responsive too!
									</p>
								</div>
							)}
						</TrackVisibility>
						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
								<Nav.Item>
									<Nav.Link eventKey="first">CodeIgniter</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Laravel</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">VB.NET</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<Row>
										<Col xs={12}>
											<p className="justify-content-center align-items-center mt-0">BUCS - Research Document Management System (Live)</p>
										</Col>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<Row>
										<Col xs={12}>
											<p className="justify-content-center align-items-center mt-0">Lakbay Agapay: Tourism Website (Thesis)</p>
										</Col>
										{projects2.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<Row>
										<Col xs={12}>
											<p className="justify-content-center align-items-center mt-0">Event Attendance System (Academic Requirement)</p>
										</Col>
										{projects3.map((project, index) => {
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
