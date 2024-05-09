package com.ocm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.ocm.bean.Enrollment;
import com.ocm.repo.EnrollmentRepo;

@RestController
@CrossOrigin("http://localhost:3000/")
public class EnrollmentController {
	
	@Autowired
	EnrollmentRepo repo;
	
	@PostMapping("/CreateEnroll")
	public String createuser(@RequestBody Enrollment enroll) {
		String msg="";
		try {
			repo.saveAndFlush(enroll);
			msg="Enroll Object Saved";
		}catch(Exception e) {	
			msg="Enroll Object Not Saved";
		}
		return msg;
	}
	
	 @DeleteMapping("/DeleteEnroll/{id}")
		public String deleteenroll(@PathVariable("id") int id) {
		String msg="";
		try { 
			repo.deleteById(id);
			msg="Enroll Object Deleted";
		}catch(Exception e) {
			msg="Enroll Object Not Deleted";
		}
		return msg;
		}
	 
	 @GetMapping("/GetAllEnroll")
		public List<Enrollment> loadFindAllEnroll() {
			return (List<Enrollment>) repo.findAll();
			}

}
