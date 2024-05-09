import React, {
	useEffect,
	useState,
} from "react";
import { Link, useParams } from "react-router-dom";

import CourseService from "../../Service/CourseService";

const ViewCourse = () => {
	const { id } = useParams();
     
	const [Course, setCourse] = useState({
		name:"",
      type:"",
      
	});

	useEffect(() => {
		loadCourse();
	});

    const loadCourse=async()=>{
        await CourseService.ViewCourseId(id).then((response)=>{
          setCourse(response.data)
        //   navigate("/view-students");
        })
      }

	 

	  


	return (
		<section
        
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://www.shutterstock.com/image-photo/training-courses-business-concept-stack-260nw-549736798.jpg"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">Course Id:
									{`${Course.id}`} <br/>Course Name: {` ${Course.name}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

                                <div className="row">
									<div className="col-sm-3">
										<div data-testid="courseid">  
										<h5 className="mb-0">
											Course Id
										</h5></div>
									</div>
									
									<div className="col-sm-9">
							 			<p className="text-muted mb-0">
											{Course.id}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
									<div data-testid="coursename"> 
										<h5 className="mb-0">
											name
										</h5></div>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{Course.name}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
									<div data-testid="type"> 
										<h5 className="mb-0">
											Type
										</h5></div>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{Course.type}
										</p>
									</div>

									<div className="col-sm-2">
										<div data-testid="backbtn"> 
            <Link
            type="submit"
            name="back"
			to="/view-Course"
            className="btn btn-outline-success btn-lg">Back</Link></div>
        </div> 
								</div>
                                
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ViewCourse;