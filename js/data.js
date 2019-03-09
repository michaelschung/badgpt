/* If true, then the auto-calendar shows the entire term.
   If false, it only shows from the current week on. */
const showFullTerm = false;

/* Background colors for the months March-June */
const colors = {
	2: "#FFDEDE",
	3: "#DEFFE9",
	4: "#DEE7FF",
	5: "#FDDEFF",
}

const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
]

/* First and last days of class */
const termStart = new Date("03/02/2019");
const termEnd = new Date("06/05/2019");

const milsInDay = 1000*60*60*24;

/* Returns the most recent Sunday before the given date */
function recentSunday(someDate) {
	someDate.setDate(someDate.getDate() - someDate.getDay());
	someDate.setHours(0, 0, 0, 0);
	return someDate;
}

/* Returns the next Saturday after the given date */
function nextSaturday(someDate) {
	someDate.setDate(someDate.getDate() + 6 - someDate.getDay());
	return someDate;
}

/* We may want to start/end the calendar on days other
   than the actual start/end of the term */
const dispStart = recentSunday(showFullTerm ? termStart : new Date());
const dispEnd = nextSaturday(termEnd);

const daysInTerm = Math.round((dispEnd-dispStart) / milsInDay)+1;

/* Data for B1 */
const b1Cal = {
	"events": [
		{
			"date": "03/19/2019",
			"content": "Welcome back // Logistics // HTML: body, tags"
		},
		{
			"date": "03/21/2019",
			"content": "HTML: img, lists, div"
		},
		{
			"date": "03/25/2019",
			"content": "HTML: class, id // CSS: size, color, font"
		},
		{
			"date": "03/27/2019",
			"content": "CSS: positioning"
		},
		{
			"date": "03/28/2019",
			"content": "CSS: hover, click"
		},
		{
			"date": "04/01/2019",
			"content": "CSS: flex positioning"
		},
		{
			"date": "04/03/2019",
			"content": "CSS: padding, border, margin"
		},
		{
			"date": "04/05/2019",
			"content": "HTML/CSS: review, practice // JS: sneak preview"
		},
		{
			"date": "04/08/2019",
			"content": "JS: DOM"
		},
		{
			"date": "04/10/2019",
			"content": "HTML/JS: labels, button, input, checkboxes, forms"
		},
		{
			"date": "04/12/2019",
			"content": "HTML/JS: review, practice problems"
		},
		{
			"date": "04/16/2019",
			"content": "Responsive web pages"
		},
		{
			"date": "04/17/2019",
			"content": "Responsive web pages (continued)"
		},
		{
			"date": "04/19/2019",
			"content": "MINI1 work session"
		},
		{
			"date": "04/24/2019",
			"content": "JS: creating HTML elements"
		},
		{
			"date": "04/26/2019",
			"content": "JS: creating HTML elements (continued)"
		},
		{
			"date": "04/29/2019",
			"content": "MINI2 work session"
		},
		{
			"date": "05/01/2019",
			"content": "Bringing it all together"
		},
		{
			"date": "05/03/2019",
			"content": "Review work session"
		},
		{
			"date": "05/07/2019",
			"content": "HTML/CSS/JS: Review"
		},
		{
			"date": "05/08/2019",
			"content": "HTML/CSS/JS: practice problems"
		},
		{
			"date": "05/14/2019",
			"content": "Project work session"
		},
		{
			"date": "05/16/2019",
			"content": "Project work session"
		},
		{
			"date": "05/17/2019",
			"content": "Document-switching"
		},
		{
			"date": "05/21/2019",
			"content": "Project work session"
		},
		{
			"date": "05/23/2019",
			"content": "Project presentations!"
		},
		{
			"date": "05/28/2019",
			"content": "Class"
		},
		{
			"date": "05/29/2019",
			"content": "Class"
		},
		{
			"date": "05/31/2019",
			"content": "Review session"
		},
		{
			"date": "06/05/2019",
			"content": "Exam day"
		}
	],
	"assigns": [
		{
			"date": "03/25/2019",
			"name": "HW1: About You",
			"due": "10:45 AM",
			"type": 0
		},
		{
			"date": "03/28/2019",
			"name": "PROJ1: Proposal",
			"due": "02:05 PM",
			"type": 0
		},
		{
			"date": "04/01/2019",
			"name": "HW2: Positioning (Part 1)",
			"due": "12:10 PM",
			"type": 0
		},
		{
			"date": "04/08/2019",
			"name": "HW3: Positioning (Part 2)",
			"due": "02:05 PM",
			"type": 0
		},
		{
			"date": "04/12/2019",
			"name": "PROJ2: Basic Layout",
			"due": "10:45 AM",
			"type": 0
		},
		{
			"date": "04/16/2019",
			"name": "HW4: Comic Strip",
			"due": "08:30 AM",
			"type": 0
		},
		{
			"date": "04/19/2019",
			"name": "MINI1: HW5 Prep",
			"due": "01:55 PM",
			"type": 1
		},
		{
			"date": "04/24/2019",
			"name": "HW5: Grocery Store",
			"due": "09:30 AM",
			"type": 0
		},
		{
			"date": "04/26/2019",
			"name": "PROJ3: Responsive Interface",
			"due": "08:30 AM",
			"type": 0
		},
		{
			"date": "04/29/2019",
			"name": "MINI2: HW6 Prep",
			"due": "03:20 PM",
			"type": 1
		},
		{
			"date": "05/01/2019",
			"name": "HW6: Photo Generator",
			"due": "10:30 AM",
			"type": 0
		},
		{
			"date": "05/07/2019",
			"name": "HW7: Review Worksheet",
			"due": "08:30 AM",
			"type": 0
		},
		{
			"date": "05/14/2019",
			"name": "PROJ4: Goals",
			"due": "12:00 PM",
			"type": 1
		},
		{
			"date": "05/17/2019",
			"name": "PROJ5: Check-in",
			"due": "02:05 PM",
			"type": 0
		},
		{
			"date": "05/22/2019",
			"name": "PROJ6: Code",
			"due": "11:59 PM",
			"type": 2
		},
		{
			"date": "05/23/2019",
			"name": "PROJ6: Report",
			"due": "11:59 PM",
			"type": 2
		}
	],
	"assessments": [
		{
			"date": "04/05/2019",
			"name": "QUIZ: HTML/CSS"
		},
		{
			"date": "05/10/2019",
			"name": "TEST: HTML/CSS/JS"
		}
	]
}

/* Data for B5 */
const b5Cal = {
	"events": [
		/*
		{
			"date": "",
			"content": ""
		},
		*/
		{
			"date": "03/19/2019",
			"content": "Welcome back // Logistics // HTML: body, tags"
		},
		{
			"date": "03/20/2019",
			"content": "HTML: img, lists, div"
		},
		{
			"date": "03/22/2019",
			"content": "HTML: class, id // CSS: size, color, font"
		},
		{
			"date": "03/26/2019",
			"content": "CSS: positioning"
		},
		{
			"date": "03/28/2019",
			"content": "CSS: hover, click"
		},
		{
			"date": "03/29/2019",
			"content": "CSS: flex positioning"
		},
		{
			"date": "04/02/2019",
			"content": "CSS: padding, border, margin"
		},
		{
			"date": "04/04/2019",
			"content": "HTML/CSS: review, practice // JS: sneak preview"
		},
		{
			"date": "04/08/2019",
			"content": "JS: DOM"
		},
		{
			"date": "04/09/2019",
			"content": "HTML/JS: labels, button, input, checkboxes, forms"
		},
		{
			"date": "04/11/2019",
			"content": "HTML/JS: review, practice problems"
		},
		{
			"date": "04/15/2019",
			"content": "Responsive web pages"
		},
		{
			"date": "04/17/2019",
			"content": "Responsive web pages (continued)"
		},
		{
			"date": "04/18/2019",
			"content": "MINI1 work session"
		},
		{
			"date": "04/23/2019",
			"content": "JS: creating HTML elements"
		},
		{
			"date": "04/25/2019",
			"content": "JS: creating HTML elements (continued)"
		},
		{
			"date": "04/29/2019",
			"content": "MINI2 work session"
		},
		{
			"date": "04/30/2019",
			"content": "Bringing it all together"
		},
		{
			"date": "05/02/2019",
			"content": "Review work session"
		},
		{
			"date": "05/06/2019",
			"content": "HTML/CSS/JS: Review"
		},
		{
			"date": "05/08/2019",
			"content": "HTML/CSS/JS: practice problems"
		},
		{
			"date": "05/13/2019",
			"content": "Project work session"
		},
		{
			"date": "05/15/2019",
			"content": "Project work session"
		},
		{
			"date": "05/17/2019",
			"content": "Document-switching"
		},
		{
			"date": "05/20/2019",
			"content": "Project work session"
		},
		{
			"date": "05/22/2019",
			"content": "Project work session"
		},
		{
			"date": "05/24/2019",
			"content": "Project presentations!"
		},
		{
			"date": "05/29/2019",
			"content": "Class"
		},
		{
			"date": "05/30/2019",
			"content": "Review session"
		},
		{
			"date": "06/04/2019",
			"content": "Exam day"
		}
	],
	"assigns": [
		/*
		{
			"date": "",
			"name": "",
			"due": "",
			"type": 0	// 0 = normal, 1 = end of class, 2 = use the due time
		},
		*/
		{
			"date": "03/26/2019",
			"name": "HW1: About You",
			"due": "10:45 AM",
			"type": 0
		},
		{
			"date": "03/29/2019",
			"name": "PROJ1: Proposal",
			"due": "02:05 PM",
			"type": 0
		},
		{
			"date": "04/02/2019",
			"name": "HW2: Positioning (Part 1)",
			"due": "12:10 PM",
			"type": 0
		},
		{
			"date": "04/08/2019",
			"name": "HW3: Positioning (Part 2)",
			"due": "08:30 AM",
			"type": 0
		},
		{
			"date": "04/11/2019",
			"name": "PROJ2: Basic Layout",
			"due": "12:10 PM",
			"type": 0
		},
		{
			"date": "04/15/2019",
			"name": "HW4: Comic Strip",
			"due": "10:45 AM",
			"type": 0
		},
		{
			"date": "04/18/2019",
			"name": "MINI1: HW5 Prep",
			"due": "03:20 PM",
			"type": 1
		},
		{
			"date": "04/23/2019",
			"name": "HW5: Grocery Store",
			"due": "12:10 PM",
			"type": 0
		},
		{
			"date": "04/25/2019",
			"name": "PROJ3: Responsive Interface",
			"due": "10:45 AM",
			"type": 0
		},
		{
			"date": "04/29/2019",
			"name": "MINI2: HW6 Prep",
			"due": "09:45 AM",
			"type": 1
		},
		{
			"date": "04/30/2019",
			"name": "HW6: Photo Generator",
			"due": "02:05 PM",
			"type": 0
		},
		{
			"date": "05/06/2019",
			"name": "HW7: Review Worksheet",
			"due": "10:45 AM",
			"type": 0
		},
		{
			"date": "05/13/2019",
			"name": "PROJ4: Goals",
			"due": "01:55 PM",
			"type": 1
		},
		{
			"date": "05/17/2019",
			"name": "PROJ5: Check-in",
			"due": "08:30 AM",
			"type": 0
		},
		{
			"date": "05/23/2019",
			"name": "PROJ6: Code",
			"due": "11:59 PM",
			"type": 2
		},
		{
			"date": "05/24/2019",
			"name": "PROJ7: Report",
			"due": "11:59 PM",
			"type": 2
		}
	],
	"assessments": [
		{
			"date": "04/04/2019",
			"name": "QUIZ: HTML/CSS"
		},
		{
			"date": "05/09/2019",
			"name": "TEST: HTML/CSS/JS"
		}
	]
};