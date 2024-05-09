
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EnrollService from "../../Service/EnrollService";

const AddEnrollment = () => {
  let navigate = useNavigate();
  const [Enrollment, setEnrollment] = useState({
    date: "",

    user: {
      id: "",
    },

    course: {
      id: "",
    },
  });

  const handleInputChange = (e) => {
    if (e.target.name === "userId") {
      setEnrollment({...Enrollment, user: { id: e.target.value } });
    } else if (e.target.name === "courseId") {
      setEnrollment({...Enrollment, course: { id: e.target.value } });
    } else setEnrollment({...Enrollment, [e.target.name]: e.target.value });
  };

  const saveStudent = async () => {
    await EnrollService.AddEnrollment(Enrollment).then((response) => {
      setEnrollment(response.data);
      alert("success");
      navigate("/view-students");
    });
  };

  const [idList, setIdList] = React.useState([]);
  useEffect(() => {
    EnrollService.FindAllId().then((response) => {
      console.log(response.data);
      setIdList(response.data);
    });
  }, []);

  const [idcourseList, setIdcourseList] = React.useState([]);
  useEffect(() => {
    EnrollService.FindAllcourseId().then((response) => {
      console.log(response.data);
      setIdcourseList(response.data);
    });
  }, []);

  return (
    <div className="col-5 py-2 px-5 offset-3 shadow">
      <h2 className="mt-5 offset-3"> Add Enrollment</h2>
      <form onSubmit={(e) => saveStudent(e.Enrollment)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="date" >
            Date:
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="date"
            id="date"
            required
            value={Enrollment.date}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="userid" >
            User ID:
          </label>
          <select
            className="form-control col-sm-6"
            type="userId"
            name="userId"
            id="userId"
            required
            value={Enrollment.user.id}
            onChange={(e) => handleInputChange(e)}
          >
            {idList.map((id) => (
              <option key={id}>{id}</option>
            ))}
          </select>
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="courseId" >
            Course ID:
          </label>
          <select
            className="form-control col-sm-6"
            type="courseId"
            name="courseId"
            id="courseId"
            required
            value={Enrollment.course.id}
            onChange={(e) => handleInputChange(e)}
          >
            {idcourseList.map((id) => (
              <option key={id}>{id}</option>
            ))}
          </select>
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
          <div   data-testid="Addenrollbtn">
            <button type="submit" className="btn btn-outline-success btn-lg" name="save">
              Add
             </button></div>
          </div>

          <div className="col-sm-2">
          <div   data-testid="cancelenrollbtn">
            <Link
              to="/view-students"
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link></div>
          </div>
        </div>
      </form>
    </div>
  );
};
 
export default AddEnrollment;