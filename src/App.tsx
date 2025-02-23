import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin,
  Mail,
  Link2,
  Github,
  Twitter,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Trophy,
  Eye,
  UserPlus,
  MessageSquare,
  Share2
} from 'lucide-react';

const LinkedInProfileClone = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [modelRotation, setModelRotation] = useState({ x: 0, y: 0 });
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const modelContainerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerPosition = headerRef.current.getBoundingClientRect().top;
        setIsHeaderSticky(headerPosition <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (!modelContainerRef.current) return;

    const rect = modelContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotationX = (y - rect.height / 2) / (rect.height / 2) * 30;
    const rotationY = (x - rect.width / 2) / (rect.width / 2) * 30;

    setModelRotation({ x: -rotationX, y: rotationY });
  };

  const resetModelRotation = () => {
    setModelRotation({ x: 0, y: 0 });
  };

  const profileData = {
    name: "Richa Singh",
    headline: "Business Intelligence and Data Intern | Data & AI Enthusiast",
    location: "New York City",
    email: "richabhanusingh@gmail.com",
    website: "https://richa-bsingh.github.io",
    github: "github.com/richa-bsingh",
    // twitter: "twitter.com/sarahjohnsondev",
    connectionsCount: 855,
    profileViews: 200,
    about: "I'm a data-driven problem solver specializing in building scalable solutions—from data pipelines to anomaly detection—who thrives on turning complex challenges into actionable insights. With expertise across Python, Spark, and AWS, I’m passionate about accelerating innovation and business growth through technology.",
    featuredWork: 
      [
        {
          "title": "AI To-Do List Bot",
          "description": "Developed a Discord bot integrating AI-powered task management, gamified achievements, motivational quotes, and OpenAI-generated interactions to enhance productivity and engagement.",
          "image": "images/Screenshot 2025-02-23 at 2.50.27 PM.png",
          "link": "#"
        },
        {
          "title": "Remote Work & Mental Health Dashboard",
          "description": "Built a Streamlit app to analyze the impact of remote work on mental health using interactive visualizations, including stress heatmaps, work-life balance trends, and mental health resource accessibility.",
          "image": "images/Screenshot 2025-02-23 at 2.50.15 PM.png",
          "link": "https://work-stress-dashboard.streamlit.app/"
        }      
    ],
    experience: [
      {
        company: "New Jersey Institute of Technology",
        title: "Business Intelligence and Data Intern",
        duration: "Feb 2024 - Present",
        location: "New Jersey",
        description: "Optimized multi-terabyte data processing by developing multiprocessing scripts and Airflow DAGs, reducing pre-processing time by 40% while enhancing anomaly detection with an ensemble of advanced methods.",
        companyLogo: "images/Logo_of_New_Jersey_Institute_of_Technology.png",
        technologies: ["SQL", "Matillion", "Snowflake", "Oracle", "MicroStrategy", "Splunk", "Python", "REST APIs", "Data Modelling"]
      },
      {
        company: "Verizon",
        title: "Data Scientist – Graduate Intern",
        duration: "Sep 2024 – Dec 2024",
        location: "New Jersey",
        description: "Designed robust ETL pipelines using SQL and Matillion to streamline data workflows, developed KPI validation scripts for MicroStrategy, and integrated REST APIs into Splunk dashboards, cutting incident response times by 90%.",
        companyLogo: "images/Verizon-New-Logo.webp",
        technologies: ["Python", "Airflow", "scikit-learn", "TensorFlow", "Keras", "Django", "React", "AWS"]
      },
      {
        company: "John Deere India Pvt. Ltd.",
        title: "Senior Software Engineer 1 – GITI Data and Analytics",
        duration: "Aug 2020 – Jun 2023",
        location: "India",
        description: "Transformed data ingestion pipelines with Databricks, reducing processing costs by 85%, and maintained 99% uptime through AWS blue-green deployments, while implementing CI/CD pipelines to expedite software delivery by 30%.",
        companyLogo: "images/Logo_JD.png",
        technologies: ["Databricks", "AWS (EC2, RDS, Elastic Beanstalk)", "Spark", "Python", "GitHub Actions", "Jenkins", "Power Automate", "SQL", "ServiceNow"]
      }
    ],
    education: [
      {
        school: "New Jersey Institute of Technology",
        degree: "MS in Computer Science",
        duration: "2023 - 2025",
        description: "Pursuing a Master’s in Computer Science with a focus on data engineering, machine learning, and cloud computing, applying advanced techniques to optimize data workflows and predictive analytics.",
        schoolLogo: "images/Logo_of_New_Jersey_Institute_of_Technology.png",
        activities: ["WICs", "Hackathon Winner"]
      },
      {
        school: "Sardar Vallabhbhai National Institute of Technology, Surat",
        degree: "B.Tech in Computer Engineering",
        duration: "2016 - 2020",
        description: "Completed a Bachelor’s in Computer Engineering with a strong foundation in algorithms, software development, and distributed systems, gaining hands-on experience in full-stack development and cloud technologies.",
        schoolLogo: "images/NIT_Surat_Logo.svg.png",
        activities: ["Dance Club Lead","Arts Club Lead"]
      }
    ],
    skills: 
      [
        { "name": "Python", "icon": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { "name": "Java", "icon": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
        { "name": "R", "icon": "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" },
        { "name": "Shell Scripting", "icon": "images/shell.png" },
        { "name": "Scala", "icon": "images/scala.png" },
        { "name": "SQL", "icon": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
        { "name": "Snowflake", "icon": "images/snowflake.png" },
        { "name": "AWS", "icon": "images/aws.png" },
        { "name": "Azure", "icon": "images/azure.png" },
        { "name": "PostgreSQL", "icon": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
        { "name": "MySQL", "icon": "images/mysql.png" },
        { "name": "MongoDB", "icon": "images/mongodb.svg" },
        { "name": "Hadoop", "icon": "https://upload.wikimedia.org/wikipedia/commons/3/38/Hadoop_logo_new.svg" },
        { "name": "Spark", "icon": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" },
        { "name": "Databricks", "icon": "images/databricks.png" },
        { "name": "Airflow", "icon": "images/airflow.png" },
        { "name": "Matillion", "icon": "images/matillion.png" },
        { "name": "Splunk", "icon": "images/splunk.png" },
        { "name": "Tableau", "icon": "images/tableau.png" },
        { "name": "Power BI", "icon": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { "name": "MicroStrategy", "icon": "images/microstrategy.png" },
        { "name": "Streamlit", "icon": "images/streamlit.svg" },
        { "name": "Excel", "icon": "images/excel.png" },
        { "name": "GitHub", "icon": "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
        { "name": "ServiceNow", "icon": "images/ServiceNow-Symbol.png" },
        { "name": "React", "icon": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { "name": "Django", "icon": "images/dj.svg" },
        { "name": "Jenkins", "icon": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg" },
        { "name": "GitHub Actions", "icon": "images/ga.png" },
        { "name": "Power Automate", "icon": "images/pa.png" },
        { "name": "REST APIs", "icon": "images/rest.png" }
      ]
      ,
    achievements: [
      "Top 5 HackNJIT 2024 Hackathon Winner",
      "GirlHacks 2023 Hackathon Winner- 2nd Place and For Best use of Google Cloud",
      "Best Team Sprint - 2023",
      "Best Team Player - 2021"
    ],
    certifications:
      [
        {
          "name": "AWS Academy Graduate - AWS Academy Cloud Developing",
          "issuer": "Amazon Web Services (AWS)",
          "date": "December 2024",
          "badge": "images/aws.png"
        },
        {
          "name": "TensorFlow: Neural Networks and Working with Tables",
          "issuer": "LinkedIn",
          "date": "December 2024",
          "badge": "images/linkedin.png"
        },
        {
          "name": "Alteryx Foundational Micro-Credential",
          "issuer": "Alteryx",
          "date": "November 2024",
          "badge": "images/alteryx.png"
        },
        {
          "name": "Intro to Splunk",
          "issuer": "Splunk",
          "date": "October 2024",
          "badge": "images/splunk.png"
        },
        {
          "name": "Introduction to Splunk SOAR",
          "issuer": "Splunk",
          "date": "October 2024",
          "badge": "images/splunk.png"
        },
        {
          "name": "Academy Accreditation - Generative AI Fundamentals",
          "issuer": "Databricks",
          "date": "September 2024",
          "badge": "images/databricks.png"
        },
        {
          "name": "Python: Working with Predictive Analytics",
          "issuer": "LinkedIn",
          "date": "September 2024",
          "badge": "images/linkedin.png"
        },
        {
          "name": "Matillion Academy | Python in Matillion ETL",
          "issuer": "Matillion",
          "date": "February 2024",
          "badge": "images/matillion.png"
        },
        {
          "name": "Matillion Data Productivity Cloud, Foundations",
          "issuer": "Matillion",
          "date": "January 2024",
          "badge": "images/matillion.png"
        },
        {
          "name": "AWS Certified Cloud Practitioner",
          "issuer": "Amazon Web Services (AWS)",
          "date": "December 2021",
          "badge": "images/aws.png"
        },
        {
          "name": "Academy Accreditation - Databricks Lakehouse Fundamentals",
          "issuer": "Databricks",
          "date": "October 2023",
          "badge": "images/databricks.png"
        },
        {
          "name": "Scrum Team Member",
          "issuer": "Scrum Inc.",
          "date": "2020",
          "badge": "images/scrum.jpeg"
        }
      ]
      
  };

  const TabContent = {
    about: (
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-pink-600">About</h2>
          <p className="text-gray-700 leading-relaxed">{profileData.about}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-pink-600">Featured Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.featuredWork.map((work, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={work.image} alt={work.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">{work.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{work.description}</p>
                  <a href={work.link} className="text-blue-500 hover:text-blue-700 text-sm mt-2 inline-block">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-pink-600">Contact & Social</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href={`mailto:${profileData.email}`} className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
              <Mail size={18} />
              <span>{profileData.email}</span>
            </a>
            <a href={`https://${profileData.website}`} className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
              <Link2 size={18} />
              <span>{profileData.website}</span>
            </a>
            <a href={`https://${profileData.github}`} className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
              <Github size={18} />
              <span>{profileData.github}</span>
            </a>
            {/* <a href={`https://${profileData.twitter}`} className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
              <Twitter size={18} />
              <span>{profileData.twitter}</span>
            </a> */}
          </div>
        </div>
        <footer className="w-full bg-gray-100 py-4 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Richa Singh. All rights reserved.
        </footer>

      </div>
    ),
    experience: (
      <div className="space-y-6">
        {profileData.experience.map((job, index) => (
          <div key={index} className="border-b pb-6">
            <div className="flex items-start space-x-4 mb-4">
              <img 
                src={job.companyLogo} 
                alt={job.company} 
                className="w-16 h-16 rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg text-blue-600">{job.title}</h3>
                <p className="text-gray-600">{job.company} · {job.duration}</p>
                <p className="text-gray-500 flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {job.location}
                </p>
                <p className="mt-2 text-gray-700">{job.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    education: (
      <div className="space-y-6">
        {profileData.education.map((edu, index) => (
          <div key={index} className="border-b pb-6">
            <div className="flex items-start space-x-4 mb-4">
              <img 
                src={edu.schoolLogo} 
                alt={edu.school} 
                className="w-16 h-16 rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg text-pink-600">{edu.school}</h3>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-gray-500">{edu.duration}</p>
                <p className="mt-2 text-gray-700">{edu.description}</p>
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-600">Activities & Societies:</h4>
                  <ul className="mt-1 list-disc list-inside text-gray-600 text-sm">
                    {edu.activities.map((activity, actIndex) => (
                      <li key={actIndex}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    skills: (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {profileData.skills.map((skill, index) => (
            <div 
              key={index} 
              className="group relative w-full cursor-pointer bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-pink-50 rounded-full 
                    flex items-center justify-center 
                    transition-all duration-300 
                    group-hover:scale-110 
                    group-hover:rotate-6"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                  {/* <p className="text-sm text-gray-500">{skill.endorsements} endorsements</p> */}
                </div>
              </div>
              {/* <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full transition-all duration-300 group-hover:bg-pink-500"
                  style={{ width: `${(skill.endorsements / 150) * 100}%` }}
                ></div>
              </div> */}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-pink-600 mb-4">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profileData.certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <img 
                  src={cert.badge} 
                  alt={cert.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">Issued {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    achievements: (
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-pink-600">Professional Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profileData.achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <Award className="text-pink-500 w-6 h-6 mt-1" />
                  <p className="text-gray-700">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  };

  const TabIcons = {
    about: <Code size={18} />,
    experience: <Briefcase size={18} />,
    education: <GraduationCap size={18} />,
    skills: <Code size={18} />,
    achievements: <Trophy size={18} />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto pb-12">
        {/* Sticky Header */}
        <div 
          ref={headerRef}
          className={`sticky top-0 z-50 bg-white shadow-sm transition-all duration-300 ${
            isHeaderSticky ? 'translate-y-0' : 'translate-y-0'
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {isHeaderSticky && (
                  <img 
                    src="images/1.jpeg" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                  />
                )}
                <h1 className="text-lg font-semibold text-gray-900">{profileData.name}</h1>
              </div>
              <div className="flex items-center space-x-3">
                {/* <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <MessageSquare size={16} />
                  <span>Message</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                  <UserPlus size={16} />
                  <span>Connect</span>
                </button> */}
                {/* <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                  <Share2 size={20} />
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg mt-4">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-pink-400 to-blue-400 h-48 rounded-t-lg relative">
            <div className="absolute bottom-0 left-4 transform translate-y-1/2">
              <img 
                src="images/1.jpeg" 
                alt="Profile" 
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg" 
              />
            </div>
          </div>

          {/* Profile Header */}
          <div className="px-6 pt-24 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                <p className="text-pink-600">{profileData.headline}</p>
                <div className="flex items-center space-x-2 text-gray-600 mt-2">
                  <MapPin size={16} />
                  <span>{profileData.location}</span>
                </div>
                <div className="mt-2 text-sm text-gray-500 flex items-center space-x-4">
                  <span className="flex items-center">
                    <UserPlus size={14} className="mr-1" />
                    {profileData.connectionsCount} connections
                  </span>
                  <span className="flex items-center">
                    <Eye size={14} className="mr-1" />
                    {profileData.profileViews} profile views
                  </span>
                </div>
              </div>
              <div className="flex space-x-3">
              <a href="https://www.linkedin.com/in/richa-singh-78935438/" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                  <UserPlus size={16} />
                  <span>Connect</span>
                </button>
                </a>
                <a href="https://www.linkedin.com/in/richa-singh-78935438/" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <MessageSquare size={16} />
                <span> Message </span>
                </button>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b px-6">
            {Object.keys(TabContent).map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center space-x-2 px-4 py-3 ${
                  activeTab === tab 
                    ? 'border-b-2 border-pink-500 text-pink-700' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {TabIcons[tab]}
                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </button>
            ))}
          </div>

          {/* Scrollable Tab Content */}
          <div className="p-6">
            {TabContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInProfileClone;