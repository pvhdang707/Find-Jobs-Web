import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData = [
  { title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
  { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
  { title: "Experience", icon: IconBriefcase, options: ['Entry Level', 'Intermediate', 'Expert'] },
  { title: "Job Type", icon: IconRecharging, options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] }
];



const jobList = [
  {
    jobTitle: "Product Designer",
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "32 LPA",
    postedDaysAgo: 12,
    description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment."
  },
  {
    jobTitle: "Software Developer",
    company: "Microsoft",
    applicants: 42,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "San Francisco",
    package: "45 LPA",
    postedDaysAgo: 5,
    description: "Microsoft is looking for a talented Software Developer to work on cutting-edge cloud technologies. You'll be part of a dynamic team building scalable solutions for enterprise clients."
  },
  {
    jobTitle: "Product Manager",
    company: "Google",
    applicants: 38,
    experience: "Expert",
    jobType: "Full-Time",
    location: "London",
    package: "55 LPA",
    postedDaysAgo: 8,
    description: "Google is hiring a Product Manager to lead innovative product initiatives. This role requires strategic thinking, cross-functional collaboration, and a passion for creating impactful user experiences."
  },
  {
    jobTitle: "Data Analyst",
    company: "Amazon",
    applicants: 30,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "Delhi",
    package: "28 LPA",
    postedDaysAgo: 15,
    description: "Amazon is seeking a Data Analyst to analyze large datasets and provide insights that drive business decisions. This is a great opportunity for recent graduates to start their career in data analytics."
  },
  {
    jobTitle: "Marketing Specialist",
    company: "Apple",
    applicants: 52,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Tokyo",
    package: "38 LPA",
    postedDaysAgo: 3,
    description: "Apple is looking for a Marketing Specialist to develop and execute marketing campaigns. You'll work on promoting innovative products and building brand awareness in global markets."
  },
  {
    jobTitle: "Product Designer",
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "32 LPA",
    postedDaysAgo: 12,
    description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment."
  },
  {
    jobTitle: "Software Developer",
    company: "Microsoft",
    applicants: 42,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "San Francisco",
    package: "45 LPA",
    postedDaysAgo: 5,
    description: "Microsoft is looking for a talented Software Developer to work on cutting-edge cloud technologies. You'll be part of a dynamic team building scalable solutions for enterprise clients."
  },
  {
    jobTitle: "Product Manager",
    company: "Google",
    applicants: 38,
    experience: "Expert",
    jobType: "Full-Time",
    location: "London",
    package: "55 LPA",
    postedDaysAgo: 8,
    description: "Google is hiring a Product Manager to lead innovative product initiatives. This role requires strategic thinking, cross-functional collaboration, and a passion for creating impactful user experiences."
  },
  {
    jobTitle: "Data Analyst",
    company: "Amazon",
    applicants: 30,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "Delhi",
    package: "28 LPA",
    postedDaysAgo: 15,
    description: "Amazon is seeking a Data Analyst to analyze large datasets and provide insights that drive business decisions. This is a great opportunity for recent graduates to start their career in data analytics."
  },
  {
    jobTitle: "Marketing Specialist",
    company: "Apple",
    applicants: 52,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Tokyo",
    package: "38 LPA",
    postedDaysAgo: 3,
    description: "Apple is looking for a Marketing Specialist to develop and execute marketing campaigns. You'll work on promoting innovative products and building brand awareness in global markets."
  }
];

export  { dropdownData, jobList };


