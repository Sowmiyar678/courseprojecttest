package com.ocm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ocm.bean.Enrollment;

public interface EnrollmentRepo extends JpaRepository<Enrollment, Integer>{

	
}
