var arrayTubes = new Array(
    {
        id: 'UCXao7aTDQM',
        title: 'Tháng Tư Là Lời Nói Dối Của Em',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'dns2WLu8Su8',
        title: 'Người Tình Mùa Đông',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'XyjhXzsVdiI',
        title: 'Tình Thôi Xót Xa',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'nrpjNgZCdlM',
        title: 'Tái Bút Anh Yêu Em',
        author: 'Hà Anh Tuấn'
    }
);

var myTube = document.getElementById('myTubes');
if (myTube!=null) {
    for (var i = 0; i < arrayTubes.length; i++) {
        var listTubes = '    <div class="tube-item" style="float: left;margin: 20px;">\n' +
            '        <iframe width="600" height="355" src="https://www.youtube.com/embed/' + arrayTubes[i].id + '" ' +
            'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n' +
            '        <h3>' + arrayTubes[i].title + '</h3>\n' +
            '    </div>';
        myTube.innerHTML += listTubes;
    }
}