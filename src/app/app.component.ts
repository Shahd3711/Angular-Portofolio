import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shahd Mostafa';
  
  skills = [
    { name: 'JavaScript & TypeScript', level: 95 },
    { name: 'React & React Native', level: 90 },
    { name: '.NET Full Stack', level: 88 },
    { name: 'C++ & Problem Solving', level: 92 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'Node.js & REST APIs', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'MySQL & SQL Server', level: 85 }
  ];

  projects = [
    {
      title: 'Full Stack .NET Application',
      description: 'Enterprise-level web application built with .NET Core, featuring authentication, RESTful APIs, and responsive UI',
      tags: ['.NET', 'C#', 'SQL Server', 'Bootstrap'],
      link: '#'
    },
    {
      title: 'React Native Mobile App',
      description: 'Cross-platform mobile application with real-time features, localization support, and accessible UI/UX',
      tags: ['React Native', 'TypeScript', 'REST API'],
      link: '#'
    },
    {
      title: 'ICPC Problem Solving Platform',
      description: 'Educational platform for competitive programming training, mentoring 500+ students in algorithms',
      tags: ['C++', 'Algorithms', 'Data Structures'],
      link: '#'
    },
    {
      title: 'E-Commerce Web Application',
      description: 'Responsive online store with shopping cart, payment integration, and admin dashboard',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    }
  ];

  experiences = [
    {
      role: 'Software Developer',
      company: 'Al-Emteyaz Wa Al-Tatweer Company',
      period: 'May 2024 - Present',
      location: 'Saudi Arabia (Remote)',
      description: 'Developing responsive front-end components and cross-platform interfaces'
    },
    {
      role: 'Coach',
      company: 'Coach Academy',
      period: 'Jul 2024 - Present',
      location: 'Cairo, Egypt',
      description: 'Training students in programming, algorithms, and software engineering best practices'
    },
    {
      role: 'Problem-Solving Mentor & Instructor',
      company: 'ACM ACPC SVU Community',
      period: 'Dec 2022 - Feb 2024',
      location: 'Qena, Egypt',
      description: 'Mentored 500+ students in C++ and algorithmic problem-solving, ECPC Regional Finalist'
    }
  ];

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/CV_Shahd_Mostafa.pdf';
    link.download = 'CV_Shahd_Mostafa.pdf';
    link.click();
  }
}