var currentFocus = document.activeElement;
if (currentFocus.nodeName == 'INPUT') {
    currentFocus.value = "katherine.rosenkranz@florencehc.com"
}
else {
    document
    .querySelectorAll('[type="email"]')
    .forEach(function(i) {
        console.log(i)
        i.value = "katherine.rosenkranz@florencehc.com"
    });
}