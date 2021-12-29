package com.CodingKobra.Spring.React.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

import static com.CodingKobra.Spring.React.student.Student.Gender.*;

@RestController
@RequestMapping("students")
public class StudentController {

    @GetMapping
    public List<Student> getStudents(){
        return List.of(
                new Student(UUID.randomUUID(), "Sarim",
                        "Siddiqui", "Sarim@gmail.com", MALE),
                new Student(UUID.randomUUID(), "Zainab",
                        "Zainab", "Zainab@gmail.com", FEMALE)
                );
    }

}
