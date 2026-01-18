package com.rohit.JobApp.repo;

import com.rohit.JobApp.model.JobPost;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class JobRepo {
    List<JobPost> jobs = new ArrayList<>(Arrays.asList(
            new JobPost("Java Developer", "Must have good experience in core Java and advanced Java", 2,
                    List.of("Core Java", "J2EE", "Spring Boot", "Hibernate")),

            new JobPost("Frontend Developer", "Experience in building responsive web applications using React", 3,
                    List.of("HTML", "CSS", "JavaScript", "React")),

            new JobPost("Data Scientist", "Strong background in machine learning and data analysis", 4,
                    List.of("Python", "Machine Learning", "Data Analysis")),

            new JobPost("Network Engineer", "Design and implement computer networks for efficient data communication", 5,
                    List.of("Networking", "Cisco", "Routing", "Switching")),

            new JobPost("Mobile App Developer", "Experience in mobile app development for iOS and Android", 3,
                    List.of("iOS Development", "Android Development", "Mobile App")),

            new JobPost("DevOps Engineer", "Implement and manage continuous integration and delivery pipelines", 4,
                    List.of("DevOps", "CI/CD", "Docker", "Kubernetes")),

            new JobPost("UI/UX Designer", "Create engaging user experiences and intuitive user interfaces", 2,
                    List.of("User Experience", "User Interface Design", "Prototyping")),

            new JobPost("Cybersecurity Analyst", "Protect computer systems and networks from cyber threats", 4,
                    List.of("Cybersecurity", "Network Security", "Incident Response")),

            new JobPost("Full Stack Developer", "Experience in both front-end and back-end development", 5,
                    List.of("JavaScript", "Node.js", "React", "Spring", "MongoDB")),

            new JobPost("Cloud Architect", "Design and implement cloud infrastructure solutions", 6,
                    List.of("Cloud Computing", "AWS", "Azure", "Google Cloud")),

            new JobPost("Software Tester", "Ensure software quality through testing and validation", 3,
                    List.of("Testing", "JUnit", "Selenium", "TestNG")),

            new JobPost("React Native Developer", "Develop cross-platform mobile applications using React Native", 2,
                    List.of("React Native", "JavaScript", "Mobile App Development")),

            new JobPost("Business Analyst", "Analyze business processes and recommend improvements", 4,
                    List.of("Business Analysis", "Requirements Gathering", "Process Modeling")),

            new JobPost("Embedded Systems Engineer", "Design and develop embedded systems for hardware applications", 5,
                    List.of("Embedded Systems", "C/C++", "Microcontrollers", "RTOS")),

            new JobPost("Content Writer", "Create engaging and informative content for websites and publications", 2,
                    List.of("Content Writing", "Copywriting", "SEO", "Creative Writing")),

            new JobPost("Business Intelligence Analyst", "Utilize data to provide insights and support decision-making", 4,
                    List.of("Business Intelligence", "SQL", "Data Warehousing", "Tableau")),

            new JobPost("UX Researcher", "Conduct user research to inform the design process", 3,
                    List.of("User Research", "Usability Testing", "Human-Computer Interaction")),

            new JobPost("Backend Developer", "Build server-side logic and databases for web applications", 4,
                    List.of("Java", "Spring", "Node.js", "MongoDB")),

            new JobPost("Game Developer", "Create and optimize games for various platforms", 3,
                    List.of("Game Development", "Unity", "C#", "3D Modeling")),

            new JobPost("IT Project Manager", "Lead and manage IT projects from initiation to completion", 6,
                    List.of("Project Management", "Agile", "Scrum", "Risk Management"))
    ));
    public List<JobPost> getAllJobs(){
         return jobs;
    }
    public void addJob(JobPost job){
        jobs.add(job);
        System.out.println(job);
    }
}
