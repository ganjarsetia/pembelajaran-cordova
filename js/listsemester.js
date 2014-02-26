var serviceURL = "http://ganjarsolutions.com/resep/";

var semesters;

$('#listSemesterPage').bind('pageinit', function(event) {
	getAllListSemester();
});

function getAllListSemester () {
	$.getJSON(serviceURL + 'rest_semester.php?getsemester=all', function(data) {
			$('#listSemester li').remove();
			semesters = data.data_semester;
			$.each(semesters, function(index, sem) {
				$('#listSemester').append('<li><a href="showlistbab.html?id_semester=' + sem.id_semester + '">'+sem.semester+'</a></li>');
			});
			$('#listSemester').listview('refresh');
	});
}
