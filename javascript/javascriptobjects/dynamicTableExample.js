
function setup() {
}

function makeCourseRows(student) {
  document.getElementById('courseRows').innerHTML = '';
  student.courses.forEach(function (course) {
    row = document.createElement('tr');
    row.appendChild(createTD(course.courseName));
    row.appendChild(createTD(course.instructor));
    row.appendChild(createTD(course.termGrades[0]));
    row.appendChild(createTD(course.termGrades[1]));
    row.appendChild(createTD(course.termGrades[2]));
    row.appendChild(createTD(course.termGrades[3]));
    row.appendChild(createTD(course.termGrades[4]));
    row.appendChild(createTD(course.termGrades[5]));

    document.getElementById('courseRows').appendChild(row);
  });
}

function createTD(content) {
  cell = document.createElement('td');
  cell.innerHTML = content;
  return cell;
}

function buildReportcard() {
  // figure out which student was selected
  selectBox = document.getElementById('table');
  selectedOption = selectBox[selectBox.selectedIndex];
  selectedStudent = students[parseInt(selectedOption.value)];
  // using the selected students
    // load names
    // load avatar
    makeCourseRows(selectedStudent);
}








students = [
  {
    'idNumber' : '123455678',
    'avatar' : 'https://lorempixel.com/200/200/people/1/',
    'lastName' : 'Tucker',
    'firstName' : 'Brianna',
    'streetAddress' : '154 Seguin Ave',
    'city' : 'Seguin',
    'state' : 'TX',
    'zipCode' : '78123',
    'courses' : [
      {
        'courseName' : 'Physics',
        'instructor' : 'Jones',
        'termGrades' : [74, 83, 92, 96]
      },
      {
        'courseName' : 'Theatre',
        'instructor' : 'Baxter',
        'termGrades' : [88, 90, 95, 100]
      },
      {
        'courseName' : 'History',
        'instructor' : 'Arteaga',
        'termGrades' : [84, 63, 97, 65]
      }
    ]
  },
  {
    'idNumber' : '421840493',
    'avatar' : 'https://lorempixel.com/200/200/people/3/',
    'lastName' : 'Polanco',
    'firstName' : 'Paul',
    'streetAddress' : '3328 Harvest Hill Blvd',
    'city' : 'Marion',
    'state' : 'TX',
    'zipCode' : '78124',
    'courses' : [
      {
        'courseName' : 'Drama',
        'instructor' : 'Lane',
        'termGrades' : [85, 72, 84, 78]
      },
      {
        'courseName' : 'Spanish',
        'instructor' : 'Contreras',
        'termGrades' : [78, 93, 68, 87]
      },
      {
        'courseName' : 'Reading',
        'instructor' : 'Ayala',
        'termGrades' : [93, 100, 71, 85]
      }
    ]
  },
  {
    'idNumber' : '56883380',
    'avatar' : 'https://lorempixel.com/200/200/people/6/',
    'lastName' : 'Justine',
    'firstName' : 'Henderson',
    'streetAddress' : '4 Goldfield Rd.',
    'city' : 'San Antonio',
    'state' : 'TX',
    'zipCode' : '78214',
    'courses' : [
      {
        'courseName' : 'Sociology',
        'instructor' : 'McMahon',
        'termGrades' : [77, 95, 94, 70]
      },
      {
        'courseName' : 'Phys. Ed.',
        'instructor' : 'Perry',
        'termGrades' : [97, 69, 74, 90]
      },
      {
        'courseName' : 'Basket Making',
        'instructor' : 'Mitchell',
        'termGrades' : [70, 99, 76, 96]
      }
    ]
  },
  {
    'idNumber' : '308532970',
    'avatar' : 'https://lorempixel.com/200/200/people/8/',
    'lastName' : 'Mathias',
    'firstName' : 'Cobb',
    'streetAddress' : '514 S. Magnolia Ave.',
    'city' : 'San Antonio',
    'state' : 'TX',
    'zipCode' : '78216',
    'courses' : [
      {
        'courseName' : 'Algebra',
        'instructor' : 'Ramirez',
        'termGrades' : [95, 79, 85, 99]
      },
      {
        'courseName' : 'Fashion Design',
        'instructor' : 'Huynh',
        'termGrades' : [74, 74, 78, 82]
      },
      {
        'courseName' : 'US History',
        'instructor' : 'Shaffer',
        'termGrades' : [81, 71, 72, 76]
      }
    ]
  },
  {
    'idNumber' : '74129419',
    'avatar' : 'https://lorempixel.com/200/200/people/9/',
    'lastName' : 'Angela',
    'firstName' : 'Walker',
    'streetAddress' : '70 Bowman St.',
    'city' : 'San Antonio',
    'state' : 'TX',
    'zipCode' : '78220',
    'courses' : [
      {
        'courseName' : 'Geometry',
        'instructor' : 'Davies',
        'termGrades' : [73, 93, 73, 82]
      },
      {
        'courseName' : 'Literature',
        'instructor' : 'Hoffman',
        'termGrades' : [68, 93, 87, 87]
      },
      {
        'courseName' : 'Astronomy',
        'instructor' : 'Hanna',
        'termGrades' : [83, 77, 82, 99]
      }
    ]
  }
];
