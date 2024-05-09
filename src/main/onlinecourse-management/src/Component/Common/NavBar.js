// import React from "react";
import { Link } from "react-router-dom";
import React from 'react'

const NavBar = () => {
	return (
		 
		
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
			<div className="container-fluid">
			<div data-testid="titletab"><Link className="navbar-brand" to={"/"}
				
                type="submit"
				>
					<h3 >ONLINE COURSE MANAGEMENT SYSTEM</h3>
				</Link></div>	
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="form-inline ">
				<div
					className="collapse navbar-collapse " 
					id="navbarNav" >
					<ul className="navbar-nav" >
						<li className="nav-item" style={{padding:10}}>
							<div data-testid="usertab">  
					 		<Link
								className="nav-link active  btn btn-secondary"
			 					aria-current="page"
								to={"/view-User"}
								>
								User table 
							</Link>
							</div>
						</li>


		 				<li className="nav-item" style={{padding:10}}>
						<div data-testid="coursetab">  
							<Link
								className="nav-link active btn btn-secondary"
								to={"/view-Course"}
								type="submit"
								>
								Course table
							</Link>
							</div>
						</li>
                        <li className="nav-item" style={{padding:10}}>
						<div data-testid="enrolltab">  
							<Link
								className="nav-link active btn btn-primary"
								to={"/view-enroll"}
								type="submit"
								>
								Enrollment table
							</Link></div>
						</li>
					</ul>
				</div>
				</div>
			</div>
		</nav>
		
	);
};
 
export default NavBar;