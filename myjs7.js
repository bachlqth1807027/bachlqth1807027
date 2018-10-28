var myModal = document.getElementById('myModal');
var youtubeFame = document.getElementById('youtubeFame');
var span = document.getElementsByTagName('close')[0];

searchYoutube();

document.getElementById('btnsearch').onclick = function(){
    searchYoutube();
};

document.getElementById('keyword').onkeypress = function (event) {
    var keyword = document.getElementById('keyword').value;
    if (event.which ===13 || event.keyCode === 13){
        searchYoutube(keyword);
    }
};

function dosomething(videoId) {
    youtubeFame.src = 'https://www.youtube.com/embed/' + videoId;
    myModal.style.display = 'block';
}

close.onclick = function () {
    myModal.style.display = 'none';
    youtubeFrame.src = '';
};

function searchYoutube() {
    var keyword = document.getElementById('keyword').value;
    var YOUTUBE_API = 'https://content.googleapis.com/youtube/v3/search?q=' +keyword + ' &type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            var responseObject = JSON.parse(xhttp.responseText);
            var content = '';
            for (var i = 0; i < responseObject.items.length; i++) {
                var videoItem = '<div class="tube-item">';
                videoItem += '<img onclick="dosomething(\'' + responseObject.items[i].id.videoId + '\')" class="video-thumb" src="' + responseObject.items[i].snippet.thumbnails.medium.url + '">';
                videoItem += '<h3>' + responseObject.items[i].snippet.title + '</h3>';
                videoItem += '</div>';
                content += videoItem;
            }
            document.getElementById("demo").innerHTML = content;
        }
    };
    xhttp.open("GET", YOUTUBE_API, true);
    xhttp.send();
}
