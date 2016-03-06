/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="role">%data%</span>';

// var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><i class="icon-telegram"></i><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><i class="icon-mail"></i><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><i class="icon-twitter"></i><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><i class="icon-github"></i><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><i class="icon-map"></i><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<p>%data%</p>';

// var HTMLskillsStart = '<h3 id="skills-h3" class="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="skill-item">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%</a>';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
// var HTMLschoolDegree = ' -- %data%</a>';
// var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
// var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineClassesStart = '<div class="education-online-entry"></div>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

// var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

(function(){
	"use strict";
	/*
Resume data
 */

var info = {
	"bio": {
		"name": "JuanMa Ruiz",
		"role": "Front-end Developer",
		"welcomeMessage" : "Hi! my name is <b>JuanMa Ruiz</b>, I'm a passionate <b>Front-End developer</b> &amp; <b>UI/UX Designer</b>, fluent with HTML5, CSS3 and continue to learn JavaScript and jQuery.<br/>So, basically, I'm just a simple guy who loves his job.",
		"skills" : ["JavaScript", "jQuery", "AngularJS", "HTML5", "CSS3", "Grunt", "git", "mercurial", "RWD"],
		"contacts" : {
			"mobile": "615 862 642",
			"email": "ruizjuanma@gmail.com",
			"github": "JuanMaRuiz",
			"twitter": "RjuanMa",
			"location": "Madrid"
		},
		"avatar": "images/avatar.jpg"
	},

	"work": {
		"jobs": [
			{
				"employer": "Odigeo",
				"title": "Senior Front-end Developer",
				"location": "Madrid",
				"date": "October 2014 – Present",
				"description": "Lorem ipsum Duis do ullamco in do cillum do quis dolore nisi eiusmod ad ad sunt dolore adipisicing elit ad culpa ut qui occaecat enim sunt nulla elit Ut aute cupidatat fugiat occaecat."
			},
			{
				"employer": "Younique Money",
				"title": "Front-end Developer && Web Designer",
				"location": "Madrid",
				"date": "May 2012 – October 2014",
				"description": "Concept, design and web development of product web pages. Daily contact with JAVA programmers and continuous integration environment Spring Source."
			}
		]
	},
	"projects": [
		{
			"title": "Proyect 01",
			"dates": "11-22-1111",
			"description": "Lorem ipsum Do dolore consequat eu reprehenderit in in voluptate consectetur dolor ullamco consectetur mollit ullamco eu consectetur.",
			"images": "images/sample.gif"
	
		},
		{
			"title": "Proyect 02",
			"dates": "11-22-2222",
			"description": "Lorem ipsum Do dolore consequat eu reprehenderit in in voluptate consectetur dolor ullamco consectetur mollit ullamco eu consectetur.",
			"images": "images/sample.gif"
	
		},
		{
			"title": "Proyect 03",
			"dates": "11-22-3333",
			"description": "Lorem ipsum Do dolore consequat eu reprehenderit in in voluptate consectetur dolor ullamco consectetur mollit ullamco eu consectetur.",
			"images": ["images/sample.gif","",""]
	
		}
	],
	"education": {

		"schools" : [
			{
				"name": "Web Application Development - Bachellor's Degree",
				"location": "IES Aguadulce"
			},
			{
				"name": "Advertising and Public Relations - College Graduate",
				"location": "Universidad de Cádiz"
			}
		],
		"onlineCourses": [
			{
				"title": "JavaScript Basics",
				"school": "Udacity",
				"date": "july 2015",
				"url": "https://www.udacity.com/course/javascript-basics--ud804",
				"instructors": [
					{
						"name": "James Williams",
						"by": "Udacity"
					},
					{
						"name": "Cameron Pittman",
						"by": "Udacity"
					}
				],
				"final_project": ""
			},
			{
				"title": "JavaScript Design Patterns",
				"school": "Udacity",
				"date": "june-july 2015",
				"url": "https://www.udacity.com/course/javascript-design-patterns--ud989",
				"instructors": [
					{
						"name": "Ben Jaffe",
						"by": "Udacity"
					}
				],
				"by": "Coursera",
				"final_project": ""
			},
			{
				"title": "Responsive Images",
				"school": "Udacity",
				"date": "june 2015",
				"url": "https://www.udacity.com/course/responsive-images--ud882",
				"instructors": [
					{
						"name": "Sam Dutton",
						"by": "Udacity"
					},
					{
						"name": "Cameron Pittman",
						"by": "Udacity"
					}
				],
				"by": "The Hong Kong University of Science and Technology",
				"final_project": ""
			},
			{
				"title": "Front-End JavaScript Frameworks: AngularJS",
				"school": "Coursera",
				"date": "december-january 2015",
				"url": "https://www.coursera.org/learn/angular-js",
				"instructor": [
				{
					"name": "Jogesh K. Muppala"
				}],
				"by": "The Hong Kong University of Science and Technology",
				"final_project": ""
			}
		]

	}
};


var octopus = {

	getAllProjects: function() {
		return info.projects;
	},
	getAllSchools: function() {

		return info.education.schools;
	},
	getAllOnlineCourses: function() {

		return info.education.onlineCourses;
	},
	getAllContactInfo: function() {
		var contacts = info.bio.contacts;
		return contacts;
	},
	getAllJobs: function() {
		var jobs = [];
		for(var job in info.work.jobs){
			jobs.push(info.work.jobs[job]);
		}

		return jobs;
	},
	getAllSkills: function(){
		var skills = [];
		for(var skill in info.bio.skills){
			skills.push(info.bio.skills[skill]);
		}
		return skills;
	},
	getBio: function() {
		return info.bio;
	},
	init: function() {
		bioView.init();
		contactView.init();
		skillsView.init();
		workView.init();
		schoolsView.init();
		onlineCoursesView.init();
		projectsView.init();
		// mapView.init();
	}

};

var bioView = {
	render: function() {
		octopus.getBio();
		bioView.formattedName = HTMLheaderName.replace("%data%", info.bio.name);
		bioView.formattedRole = HTMLheaderRole.replace("%data%", info.bio.role);
		bioView.formattedAvatar = HTMLbioPic.replace("%data%", info.bio.avatar);
		bioView.formattedWelcomeMssg = HTMLwelcomeMsg.replace("%data%", info.bio.welcomeMessage);
		
		bioView.$name.prepend(bioView.formattedName);
		bioView.$role.append(bioView.formattedRole);
		bioView.$avatar.append(bioView.formattedAvatar);
		bioView.$welcomeMssg.append(bioView.formattedWelcomeMssg);
	},
	init: function() {
		this.$role = $("#me");
		this.$name = $("#me");
		this.$avatar = $("#avatar");
		this.$welcomeMssg = $("#welcome-message");
		this.formattedName = "";
		this.formattedRole = "";
		this.formattedAvatar = "";
		this.formattedWelcomeMssg = "";

		bioView.render();
	},

};

var contactView = {
	render: function(){
		var contacts = octopus.getAllContactInfo();
		
		contactView.formattedContactMobile =  HTMLmobile.replace("%data%", contacts.mobile);
		contactView.formattedContactEmail = HTMLemail.replace("%data%", contacts.email);
		contactView.formattedContactGithub = HTMLgithub.replace("%data%", contacts.github);
		contactView.formattedContactTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
		contactView.formattedContactLocation = HTMLlocation.replace("%data%", contacts.location);

		this.email.append(contactView.formattedContactEmail);
		this.mobile.append(contactView.formattedContactMobile);
		this.twitter.append(contactView.formattedContactTwitter);
		this.github.append(contactView.formattedContactGithub);
		this.location.append(contactView.formattedContactLocation);
	},
	init: function(){
		this.email = $("#topContacts, #footerContacts");
		this.mobile = $("#topContacts, #footerContacts");
		this.twitter = $("#topContacts, #footerContacts");
		this.github = $("#topContacts, #footerContacts");
		this.location = $("#topContacts, #footerContacts");
		this.formattedContactMobile = "";
		this.formattedContactEmail = "";
		this.formattedContactGithub = "";
		this.formattedContactTwitter = "";
		this.formattedContactLocation = "";

		contactView.render();
	}
};

var skillsView = {
	render: function() {
		octopus.getAllSkills().forEach( function( skills ) {
			skillsView.formattedSkills = HTMLskills.replace("%data%", skills);
			skillsView.$skillsNode.append(skillsView.formattedSkills);
		});

	},
	init: function() {
		this.$skillsNode = $("#skills");
		this.formattedSkills = "";

		skillsView.render();
	}
};

var workView = {
	render: function() {
		workView.$workExperiencie.append(HTMLworkStart);
		octopus.getAllJobs().forEach( function( jobs ) {
			workView.formattedWorkTitle = HTMLworkTitle.replace("%data%", jobs.title);
			workView.formattedWorkEmployer = HTMLworkEmployer.replace("%data%", jobs.employer);
			workView.formattedWorkDates = HTMLworkDates.replace("%data%", jobs.date);
			workView.formattedWorkLocation = HTMLworkLocation.replace("%data%", jobs.location);
			workView.formattedWorkDescription = HTMLworkDescription.replace("%data%", jobs.description);
			
			$(".work-entry").append(workView.formattedWorkEmployer, workView.formattedWorkDates, workView.formattedWorkLocation, workView.formattedWorkDescription);
		});
	},
	init: function() {
		this.formattedWorkTitle = "";
		this.formattedWorkEmployer = "";
		this.formattedWorkDates = "";
		this.formattedWorkLocation = "";
		this.formattedWorkDescription = "";
		this.$workExperiencie = $("#work-experience");
		this.$workEntry = $(".work-entry");

		workView.render();
	}
};

var projectsView = {
	render: function () {

		projectsView.$workExperience.append(HTMLprojectStart);

		octopus.getAllProjects().forEach( function ( projects ) {
			projectsView.formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.title);
			projectsView.formattedProjectDates = HTMLprojectDates.replace("%data%", projects.dates);
			projectsView.formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.description);
			projectsView.formattedProjectImage = HTMLprojectImage.replace("%data%", projects.images);

			$(".project-entry").append(projectsView.formattedProjectTitle, projectsView.formattedProjectDates, projectsView.formattedProjectDescription, projectsView.formattedProjectImage);

		});
	},
	init: function () {
		this.$workExperience = $("#projects");
		this.HTMLprojectStart = "";
		this.HTMLprojectTitle = "";
		this.HTMLprojectDates = "";
		this.HTMLprojectDescription = "";
		this.HTMLprojectImage = "";
		this.formattedProjectTitle = "";
		this.formattedProjectDates = "";
		this.formattedProjectDescription = "";
		this.formattedProjectImage = "";

		projectsView.render();
	}
};

var schoolsView = {
	render: function() {

		schoolsView.$educationBlock.append(HTMLschoolStart);

		octopus.getAllSchools().forEach( function ( schools ) {
			schoolsView.formattedEducationTitle = HTMLschoolName.replace("%data%", schools.name);
			schoolsView.formattedEducationLocation = HTMLschoolLocation.replace("%data%", schools.location);

			$(".education-entry").append(schoolsView.formattedEducationTitle, schoolsView.formattedEducationLocation);

		});
	
	},
	init: function() {
		this.$educationBlock = $("#education");
		this.HTMLschoolStart = "";
		this.formattedEducationTitle = "";
		this.formattedEducationLocation = "";
		this.HTMLschoolName = "";
		this.HTMLschoolDegree = "";
		this.HTMLschoolDates = "";
		this.HTMLschoolLocation = "";
		this.HTMLschoolMajor = "";

		schoolsView.render();
	}
};

var onlineCoursesView = {
	render: function() {
		onlineCoursesView.$educationBlock.append(HTMLonlineClasses, HTMLonlineClassesStart);

		octopus.getAllOnlineCourses().forEach(function ( onlineCourses ) {
			onlineCoursesView.formattedOnlineCoursesTitle = HTMLonlineTitle.replace("%data%", onlineCourses.title);
			onlineCoursesView.formattedOnlineCoursesSchool = HTMLonlineSchool.replace("%data%", onlineCourses.school);
			onlineCoursesView.formattedOnlineCoursesDates = HTMLonlineDates.replace("%data%", onlineCourses.date);
			onlineCoursesView.formattedOnlineCoursesUrl = HTMLonlineURL.replace("%data%", onlineCourses.url);

			$(".education-online-entry").append(onlineCoursesView.formattedOnlineCoursesTitle, onlineCoursesView.formattedOnlineCoursesSchool, onlineCoursesView.formattedOnlineCoursesDates, onlineCoursesView.formattedOnlineCoursesUrl);
		});
	},
	init: function() {
		this.$educationBlock = $("#education");
		this.HTMLschoolStart = "";
		this.HTMLonlineClassesStart = "";
		this.formattedOnlineCoursesTitle = "";
		this.formattedOnlineCoursesSchool = "";
		this.formattedOnlineCoursesDates = "";
		this.formattedOnlineCoursesUrl = "";

		onlineCoursesView.render();
	}
};

var mapView = {
	render: function() {
		mapView.$map.append(googleMap);

	},
	init: function() {
		this.$map = $("#map-div");

		mapView.render();

	}
};

octopus.init();





})();