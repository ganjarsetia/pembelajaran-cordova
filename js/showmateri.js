$('#materiPage').live('pageshow', function(event) {
	//lanjut sini
	var id = getUrlVars()["id_materi"];
	$.getJSON(serviceURL + 'rest_semester.php?getmateribykode='+id, displayMateri);
});

function displayMateri(data) {

	$('#isi_materi').empty();
	data_materi = data.data_materi;
    
	$('#isi_materi').html(nl2br(data_materi.deskripsi + "<br>" + data_materi.resume));

	// Set judul materi
	$('#judul_materi').text(data_materi.judul);
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

function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
