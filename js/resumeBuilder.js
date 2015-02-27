var bio = {
	"name" : "Shawna Jean",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome!",
	"contacts" : {
		"mobile" : "847.791.4808",
		"email" : "shawnajroberts@gmail.com",
		"github" : "shawnajroberts",
		"twitter" : "shawnajeanr",
		"blog" : "http://shawnajroberts.com",
		"location" : "Chicago, IL"
	},
	"skills" : [
		"awesomeness", "programming", "teaching", "CSS", "Bootstrap"
	],
	"imageURL" : "http://shawnajroberts.files.wordpress.com/2014/05/shawna-cropped.jpg",
}

var education = {
	"schools" : [
		{
			"name" : "Hampshire College",
			"location" : "Amherst, MA",
			"degree" : "BA",
			"majors" : ["Interpersonal Communication", "Team Management"],
			"dates" : "2008 - 2012",
			"url" : "http://hampshire.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://udacity.com/course/ud804"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "Fundamentals of Design",
			"school" : "Code School",
			"dates" : "2015",
			"url" : "https://www.codeschool.com/courses/fundamentals-of-design"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Automattic",
			"title" : "Happiness Engineer",
			"location" : "",
			"dates" : "2014 - current",
			"description" : "Build relationships based on trust which result in happy, passionate, loyal customers and colleagues. Help people use Automattic’s products, including WordPress.com, Jetpack, and Gravatar. Troubleshoot, investigate, and create detailed bug reports including screenshots, steps to reproduce, and number of users affected. Create, update and edit support documentation. Build a community of support by sharing knowledge and insight amongst team members."
		},
		{
			"employer" : "Hampshire College",
			"title" : "Network Technician",
			"location" : "Amherst, MA",
			"dates" : "2012 - 2014",
			"description" : "Assist Network Engineer in design, construction, and maintenance of campus network and phone infrastructure. Oversee physical network implementation. Provide support and troubleshooting for VoIP, POTS, CATV, and network infrastructure. Provided technical support to faculty and staff members."
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Mockup to Website",
			"dates" : "2015",
			"description" : "Develop a responsive website from a PDF design mockup.",
			"images" : ""
		}
	]
}

function displayHeaderContent() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	displayTopContacts();

	$("#header").append(HTMLbioPic.replace("%data%", bio.imageURL));
	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

	if( bio.skills.length > 0 ) {
		$("#header").append(HTMLskillsStart);
		for( skill in bio.skills ) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
}

function displayTopContacts() {
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
	//$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}

work.display = function() {
	for( job in work.jobs ) {
		$("#workExperience").append(HTMLworkStart);
		var workFormatted = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		workFormatted = workFormatted.concat(HTMLworkTitle.replace("%data%", work.jobs[job].title));
		$(".work-entry:last").append(workFormatted);
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
}

projects.display = function() {
	for ( project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
		if( projects.projects[project].images.length > 0 )
			for( image in projects.projects[project].images )
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
	}
}

function displayFooterContacts() {
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#footerContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
	//$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}


displayHeaderContent();
work.display();
projects.display();
displayFooterContacts();
$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});