(() => {
    var dest = 'https://pinterest.com/pin/create/button/?url=' + window.location.href;
    var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,noopener=yes";
    window.open(dest, "pinWindow", windowFeatures);
})();