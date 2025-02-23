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
    name: "Sarah Johnson",
    headline: "Senior Software Engineer | Cloud & AI Specialist",
    location: "San Francisco Bay Area",
    email: "sarah.johnson@example.com",
    website: "https://sarahjohnson.dev",
    github: "github.com/sarahjohnson",
    twitter: "twitter.com/sarahjohnsondev",
    connectionsCount: 787,
    profileViews: 2354,
    about: "Passionate technologist with 8+ years of experience in building scalable cloud solutions and AI-driven applications. Specializing in microservices architecture, machine learning integration, and innovative software design.",
    featuredWork: [
      {
        title: "AI-Powered Analytics Platform",
        description: "Led the development of a real-time analytics platform processing 1M+ events/second",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
        link: "#"
      },
      {
        title: "Cloud Migration Framework",
        description: "Created an automated framework reducing migration time by 60%",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=300&h=200&fit=crop",
        link: "#"
      }
    ],
    experience: [
      {
        company: "TechGiant Innovations",
        title: "Senior Software Engineer",
        duration: "Jan 2021 - Present",
        location: "San Francisco, CA",
        description: "Lead architect for cloud-native microservices platform. Developed AI-powered DevOps tools increasing deployment efficiency by 40%.",
        companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop",
        technologies: ["React", "Node.js", "AWS", "Kubernetes", "TensorFlow"]
      },
      {
        company: "StartUp Solutions",
        title: "Software Developer",
        duration: "Jun 2018 - Dec 2020",
        location: "San Jose, CA",
        description: "Implemented full-stack solutions using React and Node.js. Designed scalable backend systems for high-traffic web applications.",
        companyLogo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=80&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Docker"]
      }
    ],
    education: [
      {
        school: "Stanford University",
        degree: "Master of Science in Computer Science",
        duration: "2016 - 2018",
        description: "Advanced coursework in distributed systems, machine learning, and cloud computing.",
        schoolLogo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=80&h=80&fit=crop",
        activities: ["AI Research Lab", "Cloud Computing Club"]
      },
      {
        school: "UC Berkeley",
        degree: "Bachelor of Science in Computer Engineering",
        duration: "2012 - 2016",
        description: "Specialized in embedded systems and software engineering principles.",
        schoolLogo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=80&h=80&fit=crop",
        activities: ["Robotics Team Lead", "Hackathon Winner"]
      }
    ],
    skills: [
      { name: 'React', icon: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=80&h=80&fit=crop', endorsements: 127 },
      { name: 'Cloud Architecture', icon: 'https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?w=80&h=80&fit=crop', endorsements: 98 },
      { name: 'Machine Learning', icon: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=80&h=80&fit=crop', endorsements: 84 },
      { name: 'Microservices', icon: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=80&h=80&fit=crop', endorsements: 76 },
      { name: 'TypeScript', icon: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=80&h=80&fit=crop', endorsements: 92 },
      { name: 'Node.js', icon: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=80&h=80&fit=crop', endorsements: 115 }
    ],
    achievements: [
      "Patent: Distributed Computing Optimization",
      "Speaker at International AI Conference 2022",
      "Open Source Contributor of the Year",
      "Published Research: Machine Learning in Cloud Environments"
    ],
    certifications: [
      {
        name: "AWS Solutions Architect Professional",
        issuer: "Amazon Web Services",
        date: "2023",
        badge: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=80&h=80&fit=crop"
      },
      {
        name: "Google Cloud Professional Architect",
        issuer: "Google",
        date: "2022",
        badge: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=80&h=80&fit=crop"
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
            <a href={`https://${profileData.twitter}`} className="flex items-center space-x-2 text-gray-600 hover:text-pink-600">
              <Twitter size={18} />
              <span>{profileData.twitter}</span>
            </a>
          </div>
        </div>
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
                  <p className="text-sm text-gray-500">{skill.endorsements} endorsements</p>
                </div>
              </div>
              <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full transition-all duration-300 group-hover:bg-pink-500"
                  style={{ width: `${(skill.endorsements / 150) * 100}%` }}
                ></div>
              </div>
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
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                  />
                )}
                <h1 className="text-lg font-semibold text-gray-900">{profileData.name}</h1>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <MessageSquare size={16} />
                  <span>Message</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                  <UserPlus size={16} />
                  <span>Connect</span>
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg mt-4">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-pink-400 to-blue-400 h-48 rounded-t-lg relative">
            <div className="absolute bottom-0 left-4 transform translate-y-1/2">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" 
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
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  Connect
                </button>
                <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                  Message
                </button>
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