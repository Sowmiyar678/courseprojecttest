package com.ocm.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Enrollment {
	@Id 
   @GeneratedValue(strategy = GenerationType.IDENTITY) 

    private int id; 
    private String date; 

  

    @ManyToOne 
    @JoinColumn(name = "user_id") 
    private User user; 

  

    @ManyToOne
    @JoinColumn(name = "course_id") 
    private Course course;



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	public Course getCourse() {
		return course;
	}



	public void setCourse(Course course) {
		this.course = course;
	} 
    
    

}
