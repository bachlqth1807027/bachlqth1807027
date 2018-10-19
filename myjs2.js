var game = document.forms["favourite-form"]["btn-submit"];
game.onclick =function () {
    var favourite = document.forms["favourite-form"]["favourite[]"];
    var result="";
    for (var i = 0; i < favourite.length; i++)
    {
        if(favourite[i].checked == true)
        {
            result += favourite[i].value + "\n";
        }
    }
    alert("Các game yêu thich: \n" + result);
}