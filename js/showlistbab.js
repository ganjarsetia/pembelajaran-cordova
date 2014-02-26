$('#listBabPage').live('pageshow', function(event) {
	//lanjut sini
	var id = getUrlVars()["id_semester"];
	$.getJSON(serviceURL + 'rest_semester.php?data_semester='+id, displayBab);
});

function displayBab(data) {

	$('#listBab li').remove();
	allBab = data.bab;
	$.each(allBab, function(index, bab) {
		$('#listBab').append('<li><a href="showmateri.html?id_materi=' + bab.kode + '">'+bab.judul+'</a></li>');
	});

	// Set judul semester
	$('#judul_header').text(allBab[0]['semester']);
	$('#listBab').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
