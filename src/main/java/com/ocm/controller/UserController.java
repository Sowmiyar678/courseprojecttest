package com.ocm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ocm.bean.Enrollment;
import com.ocm.bean.User;
import com.ocm.repo.UserRepo;

import jakarta.persistence.Entity;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {
	
	@Autowired
	UserRepo repo;
	
	@PostMapping("/CreateUser")
	public String createuser(@RequestBody User user) {
		String msg="";
		try {
			repo.saveAndFlush(user);
			msg="User Object Saved";
		}catch(Exception e) {	
			msg="User Object Not Saved";
		}
		return msg;
	}
	
//	 id populate
	 @GetMapping("/GetUserId")
		List<Long> fetchUserIds() {
			return repo.fetchUserIds();
		}
	 @GetMapping("/AutoPop")
		public List<Long> doAutoPop(){
			return repo.getIdList();
		}
	
	 @GetMapping("/GetAllUser")
		public List<User> loadFindAllEnroll() {
			return (List<User>) repo.findAll();
			}

}
