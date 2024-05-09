package com.ocm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.ocm.bean.Course;
import com.ocm.repo.CourseRepo;

@RestController
@CrossOrigin("http://localhost:3000/")
public class CourseController {
	
	@Autowired
	CourseRepo repo;
	
	@PostMapping("/CreateCourse")
	public String createcourse(@RequestBody Course course) {
		String msg="";
		try {
			repo.saveAndFlush(course);
			msg="Course Object Saved";
		}catch(Exception e) {	
			msg="Course Object Not Saved";
		}
		return msg;
	}
	
	 @GetMapping("/GetCourse/{id}")
		public Course performFind(@PathVariable("id") int id) {
			return repo.findById(id).get();
		}
	 
//	 id populate
	 @GetMapping("/GetCourseId")
		List<Integer> fetchCourseIds() {
			return repo.fetchCourseIds();
		}
	 @GetMapping("/courseAutoPop")
		public List<Integer> doAutoPop(){
			return repo.getIdList();
		}
	 
	 @GetMapping("/GetAllCourse")
		public List<Course> loadFindAllCourse() {
			return (List<Course>) repo.findAll();
			}

}
