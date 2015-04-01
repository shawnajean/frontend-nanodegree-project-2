var bio = {
	"name" : "Shawna Jean",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "555.555.5555",
		"email" : "hello@shawnajroberts.com",
		"github" : "shawnajroberts",
		"twitter" : "shawnajeanr",
		"blog" : "http://shawnajroberts.com",
		"location" : "Chicago, IL"
	},
	"welcomeMessage" : "Welcome!",
	"skills" : [
		"awesomeness", "programming", "teaching", "C", "C++", "Java", "HTML", "CSS", "Bootstrap"
	],
	"biopic" : "http://shawnajroberts.files.wordpress.com/2014/05/shawna-cropped.jpg",
	"display" : function() {
		$("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

		var formattedMobile = bio.contacts.mobile.replace(/\./g, "");
		formattedMobile = HTMLmobile.replace(/%formattedData%/g, formattedMobile);
		formattedMobile = formattedMobile.replace(/%data%/g, bio.contacts.mobile);
		//$("#topContacts").append(formattedMobile);
		$("#topContacts").append(HTMLemail.replace(/%data%/g, bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace(/%data%/g, bio.contacts.github));
		$("#topContacts").append(HTMLtwitter.replace(/%data%/g, bio.contacts.twitter));
		$("#topContacts").append(HTMLblog.replace(/%data%/g, bio.contacts.blog));
		//$("#topContacts").append(HTMLlocation.replace(/%data%/g, bio.contacts.location));

		
		//$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

		if( bio.skills.length > 0 ) {
			$("#header").append(HTMLskillsStart);
			for( skill in bio.skills ) {
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
			}
		}

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(HTMLemail.replace(/%data%/g, bio.contacts.email));
		$("#footerContacts").append(HTMLgithub.replace(/%data%/g, bio.contacts.github));
		$("#footerContacts").append(HTMLtwitter.replace(/%data%/g, bio.contacts.twitter));
		$("#footerContacts").append(HTMLblog.replace(/%data%/g, bio.contacts.blog));
		//$("#footerContacts").append(HTMLlocation.replace(/%data%/g, bio.contacts.location));
	}
}

var education = {
	"schools" : [
		{
			"name" : "Hampshire College",
			"location" : "Amherst, MA",
			"degree" : "BA",
			"majors" : ["Interpersonal Communication", "Computer Science", "Theater Management"],
			"dates" : "2012",
			"url" : "https://hampshire.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "https://udacity.com/course/ud804"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "Fundamentals of Design",
			"school" : "Code School",
			"date" : "2015",
			"url" : "https://www.codeschool.com/courses/fundamentals-of-design"
		}
	],
	"display" : function() {
		for( school in education.schools ) {
			$("#education").append(HTMLschoolStart);
			schoolNameFormatted = HTMLschoolName.replace("%data%", education.schools[school].name);
			schoolNameFormatted = schoolNameFormatted.replace("%url%", education.schools[school].url);
			schoolNameFormatted = schoolNameFormatted.concat(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
			$(".education-entry:last").append(schoolNameFormatted);
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
		}
		$("#education").append(HTMLonlineClasses);
		for( course in education.onlineCourses ) {
			$("#education").append(HTMLonlineStart);
			courseNameFormatted = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			courseNameFormatted = courseNameFormatted.replace("%url%", education.onlineCourses[course].url);
			courseNameFormatted = courseNameFormatted.concat(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
			$(".online-entry:last").append(courseNameFormatted);
			$(".online-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
			//$(".online-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
		}

	}
}

var work = {
	"jobs" : [
		{
			"employer" : "Automattic",
			"title" : "Happiness Engineer",
			"location" : "",
			"dates" : "2014 - current",
			"description" : "Build relationships based on trust which result in happy, passionate, loyal customers and colleagues. Help people use Automattic’s products, including WordPress.com, Jetpack, and Gravatar. Troubleshoot, investigate, and create detailed bug reports including screenshots, steps to reproduce, and number of users affected. Create, update and edit support documentation. Build a community of support by sharing knowledge and insight amongst team members.",
			"url" : "https://automattic.com"
		},
		{
			"employer" : "Hampshire College",
			"title" : "Network Technician",
			"location" : "Amherst, MA",
			"dates" : "2012 - 2014",
			"description" : "Assist Network Engineer in design, construction, and maintenance of campus network and phone infrastructure. Oversee physical network implementation. Provide support and troubleshooting for VoIP, POTS, CATV, and network infrastructure. Provided technical support to faculty and staff members.",
			"url" : "https://hampshire.edu"
		}
	],
	"display" : function() {
		for( job in work.jobs ) {
			$("#workExperience").append(HTMLworkStart);
			var workFormatted = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			workFormatted = workFormatted.replace("%url%", work.jobs[job].url);
			workFormatted = workFormatted.concat(HTMLworkTitle.replace("%data%", work.jobs[job].title));
			$(".work-entry:last").append(workFormatted);
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
	}
}

var projects = {
	"projects" : [
		{
			"title" : "Mockup to Website",
			"dates" : "2015",
			"description" : "Develop a responsive website from a PDF design mockup.",
			"images" : ["images/197x148.gif"],
			"url" : "https://github.com/shawnajroberts/udacity-front-end-dev/tree/master/Projects/Project%201"
		}
	],
	"display" : function() {
		for ( project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var titleFormatted = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			titleFormatted = titleFormatted.replace("%url%", projects.projects[project].url);
			$(".project-entry:last").append(titleFormatted);
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
			if( projects.projects[project].images.length > 0 )
				for( image in projects.projects[project].images )
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
		}
	}
}


bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});