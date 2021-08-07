//sidenav

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});

//habilidades

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
});