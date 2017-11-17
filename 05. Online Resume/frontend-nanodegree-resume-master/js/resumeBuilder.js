//This is the bio object with a display function
var bio = {
  name: "Zach Savage",
  role: "Senior IT Risk Analyst",
  welcomeMessage: "I am an IT Risk Analyst with 5 years of industry audit experience including a year" +
  " supporting Essbase and HFM financial reporting systems. I want to broaden my knowledge of programming langauges and build phone apps and websites",
  biopic: "images/Savage1.jpg",
  skills: ["IT Audit", "Financial Reporting Systems", "Sarbanes-Oxley", "Corporate Goverance", "HTML", "CSS", "JavaScript", "SQL", "VBA", "MaxL", "HFM", "Essbase", "Systems Admin"],
  contacts:
    {
    mobile: "000-000-0000",
    email: "My-Google-Email@gmail.com",
    github: "My-GitHub-Account",
    twitter: "My-Twitter-Account",
    blog: "My-Blog",
    location: "Cincinnati, OH, US"
    },
  display: function displayBio() {
    var formattedName = formatHTML(HTMLheaderName, bio.name);
    var formattedRole = formatHTML(HTMLheaderRole, bio.role);
    var formattedPic = formatHTML(HTMLbioPic, bio.biopic);
    var formattedWelcome = formatHTML(HTMLwelcomeMsg, bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedPic,formattedWelcome);
    $("#header").append(HTMLskillsStart);

    var formattedSkills = formatHTML(HTMLskills,bio.skills.join(" ,  ")+".");
    $("#skills").append(formattedSkills);

    var formattedMobile = formatHTML(HTMLmobile,bio.contacts.mobile);
    var formattedEmail = formatHTML(HTMLemail,bio.contacts.email);
    var formattedGitHub = formatHTML(HTMLgithub,bio.contacts.github);
    var formattedBlog = formatHTML(HTMLblog,bio.contacts.blog);
    var formattedTwitter = formatHTML(HTMLtwitter,bio.contacts.twitter);
    var formattedLocation = formatHTML(HTMLlocation,bio.contacts.location);

    $("#topContacts, #footerContacts").append(formattedMobile,formattedEmail,formattedGitHub,formattedBlog,formattedTwitter, formattedLocation);
  }
};

//This is the education object with a display function
var education = {
  schools: [
      {
        name: "Miami University",
        location: "Oxford, OH, US",
        dates: "2009-2013",
        url: "https://www.miamioh.edu/",
        majors: ["Information Systems"]
      }
    ],
  onlineCourses: [
      {
        title: "Front-End Web Developer",
        school: "Udacity",
        dates: "2017",
        url: "https://www.udacity.com/"
      }
    ],
  display: function displayEducation() {
    education.schools.forEach(function(school){
      $("#education").append(HTMLschoolStart);

      var fomattedSchoolName = formatHTML(HTMLschoolName, school.name);
      var fomattedSchoolLocation = formatHTML(HTMLschoolLocation, school.location);
      var fomattedSchoolDates = formatHTML(HTMLschoolDates, school.dates);
      var fomattedSchoolMajor = formatHTML(HTMLschoolMajor, school.majors[0]);

      $(".education-entry:last").append(fomattedSchoolName,fomattedSchoolLocation,fomattedSchoolDates,fomattedSchoolMajor);
      $(".education-entry:last").children("a").attr("href", school.url);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLschoolStart);

      var formattedCourseTitle = formatHTML(HTMLonlineTitle, course.title);
      var formattedCourseSchool = formatHTML(HTMLonlineSchool, course.school);
      var formattedCourseDates = formatHTML(HTMLonlineDates, course.dates);
      var formattedCourseUrl = formatHTML(HTMLonlineURL, course.url);

      $(".education-entry:last").append(formattedCourseTitle + formattedCourseSchool,formattedCourseDates, formattedCourseUrl);
      $(".education-entry:last").children("a").attr("href",course.url);
    });
  }
};

//This is the work object with a display function
var work = {
  jobs: [
    {
      employer: "GE Digital",
      title: "Senior IT Risk Analyst",
      location: "Evendale, OH, US",
      dates: "May 2017-Current",
      description: "Manage the SOX compliance program on behalf of GE Aviation"
    },
    {
      employer: "GE Aviation",
      title: "Senior IT Risk Analyst",
      location: "Blue Ash, OH, US",
      dates: "August 2015-May 2017",
      description: "Managed the SOX compliance program on behalf of GE Aviation"
    },
    {
      employer: "Luxottica Retail",
      title: "Senior IT Financial Systems Analyst",
      location: "Mason, OH, US",
      dates: "August 2014-August 2015",
      description: "Managed the Essbase and HFM financial reporting systems"
    },
    {
      employer: "Luxottica Retail",
      title: "IT Audit Intern, IT Auditor, Senior IT Auditor",
      location: "Mason, OH, US",
      dates: "June 2012-August 2014",
      description: "Performed the SOX compliance testing and quarterly audits"
    }
  ],
  display: function displayWork() {
   work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = formatHTML(HTMLworkEmployer, job.employer);
      var formattedTitle = formatHTML(HTMLworkTitle, job.title);
      var formattedLocation = formatHTML(HTMLworkLocation, job.location);
      var formattedDates = formatHTML(HTMLworkDates, job.dates);
      var formattedDescription = formatHTML(HTMLworkDescription, job.description);

      var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

      $(".work-entry:last").append(formattedJob);
    });
  }
};

//This is the projects object with a display function
var projects = {
  projects: [
    {
      title: "Project 1",
      dates: "2014-2016",
      description: "This is some example text",
      images: ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    },
    {
      title: "Project 2",
      dates: "2014-2016",
      description: "This is some example text",
      images: ["images/197x148.gif", "images/197x148.gif"]
    }
  ],
  display: function displayProjects() {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = formatHTML(HTMLprojectTitle, project.title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = formatHTML(HTMLprojectDates, project.dates);
      $(".project-entry:last").append(formattedDates);
      var formattedDescription = formatHTML(HTMLprojectDescription, project.description);
      $(".project-entry:last").append(formattedDescription);

      if (project.images.length > 0) {
        project.images.forEach(function(image) {
          var formattedImage = formatHTML(HTMLprojectImage, image);
          $(".project-entry:last").append(formattedImage);
        });
      }
    });
  }
};

/*Calling the functions in the objects that will display the information on the page*/
bio.display();
work.display();
projects.display();
education.display();

/*Adds the international button on the page and the google map with the pins*/
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

/* Function section*/
/*
Given the array of work objects, the locationizer will grab each of the locations so
they can be pinned on the google maps
@param workObj The workObj containing your locations from work experience
@return an array of locations based on where you have worked
*/
function locationizer(workObj) {
  var locationArray = [];

  for(var job in workObj.jobs) {
    var newLocation = workObj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}

/*
Given the name on the page, this function returns the internnationized version of the name
@param name The string (name) you are passing to the function
@return the name with the last name captilized
*/
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

/*
Given the HTML starter string, this function will replace the %data% value with your passed string
@param HTMLfromHelper The block of starter HTML code
@param data The string of data you would like to repalce %data% with
@return The HTML script with your text
*/
function formatHTML(HTMLfromHelper, data) {
  return HTMLfromHelper.replace("%data%", data);
}
