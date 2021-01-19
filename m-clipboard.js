function setClipboard(text = "m") {
    var t = "text/plain";
    var d = new Blob([text], { type: t });
    var c = new ClipboardItem({ [t]: d });

    navigator.clipboard.write([c])
    .then(function () {
        /* success */
        console.log('********** clipboard then success');
    }, function (err) {
        /* failure */
        console.log('********** clipboard catch fail', err);
    });
}
function setClipboardTwo(text = "m") {
    navigator.clipboard.writeText(text)
        .then(function () {
            /* success */
            console.log('********** clipboard then success');
        }, function (err) {
            /* failure */
            console.log('********** clipboard catch fail', err);
        });
}
setClipboardTwo();
