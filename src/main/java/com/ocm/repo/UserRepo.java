	package com.ocm.repo;
	
	import java.util.List;
	
	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.data.jpa.repository.Query;
	
	import com.ocm.bean.User;
	
	public interface UserRepo extends JpaRepository<User, Long> {
	
		@Query("select id from User")
		 public List<Long> fetchUserIds();
	
		@Query("select id from User")
		public List<Long> getIdList();
	}
