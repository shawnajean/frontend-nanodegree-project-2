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
		getJobs: function() {
			return data.jobs;
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
			var formattingString,
					currentList,
					currentObject;

			this.header = $("#header");
			this.contacts = $("#topContacts");

			this.jobs = $("#workExperience");

			this.education = $("#education");

			view.render();
		},
		render: function() {
			view.renderBio();
			view.renderSkills();
			view.renderJobs();
			view.renderSchools();
			view.renderOnlineCourses();
		},
		renderBio: function() {
			currentList = controller.getBio();

			this.header.prepend( HTMLbioPic.replace( "%data%", currentList.biopic ) );
			this.header.prepend( HTMLheaderRole.replace( "%data%", currentList.role ) );
			this.header.prepend( HTMLheaderName.replace( "%data%", currentList.name ) );

			formattingString = currentList.contacts.mobile.replace( /\./g, "" );
			formattingString = HTMLmobile.replace( /%formattedData%/g, formattingString );
			formattingString = formattingString.replace( /%data%/g, currentList.contacts.mobile );

			this.contacts.append( formattingString );
			this.contacts.append( HTMLemail.replace( /%data%/g, currentList.contacts.email ) );
			this.contacts.append( HTMLgithub.replace( /%data%/g, currentList.contacts.github ) );
			this.contacts.append( HTMLtwitter.replace( /%data%/g, currentList.contacts.twitter ) );
			this.contacts.append( HTMLblog.replace( /%data%/g, currentList.contacts.blog ) );
		},
		renderSkills: function() {
			currentList = controller.getSkills();

			if( currentList.length > 0 ) {
				this.header.append(HTMLskillsStart);

				currentObject = $("#skills");

				for( skill in currentList ) {
					currentObject.append( HTMLskills.replace( "%data%", currentList[skill] ) );
				}
			}
		},
		renderJobs: function() {
			currentList = controller.getJobs();

			for( job in currentList ) {
				this.jobs.append(HTMLworkStart);

				currentObject = $(".work-entry:last");

				formattingString = HTMLworkEmployer.replace("%data%", currentList[job].employer);
				formattingString = formattingString.replace("%url%", currentList[job].url);
				formattingString = formattingString.concat(HTMLworkTitle.replace("%data%", currentList[job].title));

				currentObject.append(formattingString);
				currentObject.append(HTMLworkLocation.replace("%data%", currentList[job].location));
				currentObject.append(HTMLworkDates.replace("%data%", currentList[job].dates));
				currentObject.append(HTMLworkDescription.replace("%data%", currentList[job].description));
			}
		},
		renderSchools: function() {
			currentList = controller.getSchools();

			for( school in currentList ) {
				this.education.append(HTMLschoolStart);

				currentObject = $(".education-entry:last");

				formattingString = HTMLschoolName.replace("%data%", currentList[school].name);
				formattingString = formattingString.replace("%url%", currentList[school].url);
				formattingString = formattingString.concat(HTMLschoolDegree.replace("%data%", currentList[school].degree));

				currentObject.append(formattingString);
				currentObject.append(HTMLschoolDates.replace("%data%", currentList[school].dates));
				currentObject.append(HTMLschoolLocation.replace("%data%", currentList[school].location));
				currentObject.append(HTMLschoolMajor.replace("%data%", currentList[school].majors));
			}
		},
		renderOnlineCourses: function() {
			currentList = controller.getOnlineCourses();

			if( currentList.length > 0 ) {
				this.education.append(HTMLonlineClasses);

				for( course in currentList ) {
					this.education.append(HTMLonlineStart);

					currentObject = $(".online-entry:last");

					formattingString = HTMLonlineTitle.replace("%data%", currentList[course].title);
					formattingString = formattingString.replace("%url%", currentList[course].url);
					formattingString = formattingString.concat(HTMLonlineSchool.replace("%data%", currentList[course].school));

					currentObject.append(formattingString);
					currentObject.append(HTMLonlineDates.replace("%data%", currentList[course].date));
					//currentObject.append(HTMLonlineURL.replace("%data%", currentList[course].url));
				}
			}
		}
	};

	controller.init();
});




/*var work = {
	"display" : function() {

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
