$(function() {
	var data = {
		bio: {
			name: "Shawna Jean",
			role: "Web Developer",
			biopic: "http://shawnajroberts.files.wordpress.com/2014/05/shawna-cropped.jpg",
			contacts: {
				mobile : "555.555.5555",
				email : "hello@shawnajroberts.com",
				github : "shawnajroberts",
				twitter : "shawnajeanr",
				blog : "http://shawnajroberts.com"
			}
		},
		skills: [
			"awesomeness", "programming", "teaching", "C", "C++", "Java", "HTML", "CSS", "Bootstrap"
		],
		schools: [
			{
				name : "Hampshire College",
				location : "Amherst, MA",
				degree : "BA",
				majors : ["Interpersonal Communication", "Computer Science", "Theater Management"],
				dates : "2012",
				url : "https://hampshire.edu"
			}
		],
		onlineCourses: [
			{
				title : "JavaScript Basics",
				school : "Udacity",
				date : "2015",
				url : "https://udacity.com/course/ud804"
			},
			{
				title : "Intro to HTML and CSS",
				school : "Udacity",
				date : "2015",
				url : "https://www.udacity.com/course/ud304"
			},
			{
				title : "Fundamentals of Design",
				school : "Code School",
				date : "2015",
				url : "https://www.codeschool.com/courses/fundamentals-of-design"
			}
		],
		jobs: [
			{
				employer : "Automattic",
				title : "Happiness Engineer",
				location : "",
				dates : "2014 - current",
				description : "Build relationships based on trust which result in happy, passionate, loyal customers and colleagues. Help people use Automattic’s products, including WordPress.com, Jetpack, and Gravatar. Troubleshoot, investigate, and create detailed bug reports including screenshots, steps to reproduce, and number of users affected. Create, update and edit support documentation. Build a community of support by sharing knowledge and insight amongst team members.",
				url : "https://automattic.com"
			},
			{
				employer : "Hampshire College",
				title : "Network Technician",
				location : "Amherst, MA",
				dates : "2012 - 2014",
				description : "Assist Network Engineer in design, construction, and maintenance of campus network and phone infrastructure. Oversee physical network implementation. Provide support and troubleshooting for VoIP, POTS, CATV, and network infrastructure. Provided technical support to faculty and staff members.",
				"url" : "https://hampshire.edu"
			}
		],
		projects: [
			{
				title : "Mockup to Website",
				dates : "2015",
				description : "Develop a responsive website from a PDF design mockup.",
				images : ["images/197x148.gif"],
				url : "https://github.com/shawnajroberts/udacity-front-end-dev/tree/master/Projects/Project%201"
			}
		]
	};

	var controller = {
		init: function() {
			view.init();
		},
		getBio: function() {
			return data.bio;
		},
		getSkills: function() {
			return data.skills;
		},
		getSchools: function() {
			return data.schools;
		},
		getOnlineCourses: function() {
			return data.onlineCourses;
		}
	};

	var view = {
		init: function() {
			var bio,
					contacts,
					formattedMobile,
					skillsList,
					$skills,
					schoolsList,
					schoolNameFormatted,
					courseList,
					currentObject;

			this.header = $("#header");
			this.contactsList = $("#topContacts");

			this.education = $("#education");

			view.render();
		},
		render: function() {
			view.renderBio();
			view.renderSkills();
			view.renderSchools();
			view.renderOnlineCourses();
		},
		renderBio: function() {
			bio = controller.getBio();
			contacts = bio.contacts;

			this.header.prepend( HTMLbioPic.replace( "%data%", bio.biopic ) );
			this.header.prepend( HTMLheaderRole.replace( "%data%", bio.role ) );
			this.header.prepend( HTMLheaderName.replace( "%data%", bio.name ) );

			formattedMobile = contacts.mobile.replace( /\./g, "" );
			formattedMobile = HTMLmobile.replace( /%formattedData%/g, formattedMobile );
			formattedMobile = formattedMobile.replace( /%data%/g, contacts.mobile );

			this.contactsList.append( formattedMobile );
			this.contactsList.append( HTMLemail.replace( /%data%/g, contacts.email ) );
			this.contactsList.append( HTMLgithub.replace( /%data%/g, contacts.github ) );
			this.contactsList.append( HTMLtwitter.replace( /%data%/g, contacts.twitter ) );
			this.contactsList.append( HTMLblog.replace( /%data%/g, contacts.blog ) );
		},
		renderSkills: function() {
			skillsList = controller.getSkills();

			if( skillsList.length > 0 ) {
				this.header.append(HTMLskillsStart);

				$skills = $("#skills");

				for( skill in skillsList ) {
					$skills.append( HTMLskills.replace( "%data%", skillsList[skill] ) );
				}
			}
		},
		renderSchools: function() {
			schoolsList = controller.getSchools();

			for( school in schoolsList ) {
				this.education.append(HTMLschoolStart);

				currentObject = $(".education-entry:last");

				schoolNameFormatted = HTMLschoolName.replace("%data%", schoolsList[school].name);
				schoolNameFormatted = schoolNameFormatted.replace("%url%", schoolsList[school].url);
				schoolNameFormatted = schoolNameFormatted.concat(HTMLschoolDegree.replace("%data%", schoolsList[school].degree));

				currentObject.append(schoolNameFormatted);
				currentObject.append(HTMLschoolDates.replace("%data%", schoolsList[school].dates));
				currentObject.append(HTMLschoolLocation.replace("%data%", schoolsList[school].location));
				currentObject.append(HTMLschoolMajor.replace("%data%", schoolsList[school].majors));
			}
		},
		renderOnlineCourses: function() {
			courseList = controller.getOnlineCourses();

			if( courseList.length > 0 ) {
				this.education.append(HTMLonlineClasses);

				for( course in courseList ) {
					this.education.append(HTMLonlineStart);

					currentObject = $(".online-entry:last");

					courseNameFormatted = HTMLonlineTitle.replace("%data%", courseList[course].title);
					courseNameFormatted = courseNameFormatted.replace("%url%", courseList[course].url);
					courseNameFormatted = courseNameFormatted.concat(HTMLonlineSchool.replace("%data%", courseList[course].school));

					currentObject.append(courseNameFormatted);
					currentObject.append(HTMLonlineDates.replace("%data%", courseList[course].date));
					//currentObject.append(HTMLonlineURL.replace("%data%", courseList[course].url));
				}
			}
		}
	};

	controller.init();
});




/*var education = {
	"display" : function() {

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

var bio = {
	"display" : function() {
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(HTMLemail.replace(/%data%/g, bio.contacts.email));
		$("#footerContacts").append(HTMLgithub.replace(/%data%/g, bio.contacts.github));
		$("#footerContacts").append(HTMLtwitter.replace(/%data%/g, bio.contacts.twitter));
		$("#footerContacts").append(HTMLblog.replace(/%data%/g, bio.contacts.blog));
		//$("#footerContacts").append(HTMLlocation.replace(/%data%/g, bio.contacts.location));
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
*/
