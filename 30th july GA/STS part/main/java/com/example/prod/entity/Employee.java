package com.example.prod.entity;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table (name = "Employee")

public class Employee {
	
	
	@Id
	@Column(name="empno")
	private Integer empNo;
	
	@Column(name="ename")
	private String eName;
	
	@Column(name="job")
	private String job;
	
	@Column(name="hiredate")
	private Date hireDate;
	
	@Column(name="managerid")
	private Integer managerID;
	
	@Column(name="salary")
	private Integer salary;
	
	@Column(name="commission")
	private Integer commission;
	
	@Column(name ="deptno")
	private Integer deptNo;
	
	public Employee () {
		
	}
	 
	public Employee(int empNo, String eName, String job, Date hireDate, int managerID, int salary, int commission,
			int deptNo) {
		super();
		this.empNo = empNo;
		this.eName = eName;
		this.job = job;
		this.hireDate = hireDate;
		this.managerID = managerID;
		this.salary = salary;
		this.commission = commission;
		this.deptNo = deptNo;
	}

	public Integer getEmpNo() {
		return empNo;
	}

	public void setEmpNo(int empNo) {
		this.empNo = empNo;
	}

	public String geteName() {
		return eName;
	}

	public void seteName(String eName) {
		this.eName = eName;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public Date getHireDate() {
		return hireDate;
	}

	public void setHireDate(Date hireDate) {
		this.hireDate = hireDate;
	}

	public Integer getManagerID() {
		return managerID;
	}

	public void setManagerID(int managerID) {
		this.managerID = managerID;
	}

	public Integer getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public Integer getCommission() {
		return commission;
	}

	public void setCommission(int commission) {
		this.commission = commission;
	}

	public Integer getDeptNo() {
		return deptNo;
	}

	public void setDeptNo(int deptNo) {
		this.deptNo = deptNo;
	}

	@Override
	public String toString() {
		return "Employee [empNo=" + empNo + ", eName=" + eName + ", job=" + job + ", hireDate=" + hireDate
				+ ", managerID=" + managerID + ", salary=" + salary + ", commission=" + commission + ", deptNo="
				+ deptNo + "]";
	}

	 
	

}