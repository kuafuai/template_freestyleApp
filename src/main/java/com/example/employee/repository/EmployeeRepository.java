package com.example.employee.repository;

import com.example.employee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    /**
     * Finds employees by keyword.
     *
     * @param keyword the keyword to search for
     * @return the list of employees matching the keyword
     */
    List<Employee> findByKeyword(String keyword);

    /**
     * Finds employees by department.
     *
     * @param department the department to search for
     * @return the list of employees in the specified department
     */
    List<Employee> findByDepartment(String department);

    /**
     * Finds employees by position.
     *
     * @param position the position to search for
     * @return the list of employees in the specified position
     */
    List<Employee> findByPosition(String position);
}