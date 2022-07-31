package com.example.prod.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Department")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Department {
    @Id
	@Column(name="deptno")
    private Integer deptNo;
    
	@Column(name="departmentname")
	private String departmentName;
    
	@Column(name="location")
    private String location;
	
	public Department () {
		
	}

	public Department(int deptNo, String departmentName, String location) {
		super();
		this.deptNo = deptNo;
		this.departmentName = departmentName;
		this.location = location;
	}

	public Integer getDeptNo() {
		return deptNo;
	}

	public void setDeptNo(int deptNo) {
		this.deptNo = deptNo;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Department [deptNo=" + deptNo + ", departmentName=" + departmentName + ", location=" + location + "]";
	}
	
	
}