package com.ocm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ocm.bean.Course;

public interface CourseRepo extends JpaRepository<Course, Integer>{

	@Query("select id from Course ")
	 public List<Integer> fetchCourseIds();

	@Query("select id from Course ")
	public List<Integer> getIdList();
}
