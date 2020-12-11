document.addEventListener("DOMContentLoaded", () => {
    var pwBtn = document.getElementById("pw")
    pwBtn.addEventListener("click", (e) => {
        chrome.tabs.executeScript({ file: 'pw.js' })
    })

    var fhcBtn = document.getElementById("fhc")
    fhcBtn.addEventListener("click", (e) => {
        chrome.tabs.executeScript({ file: 'email.js' })
    })
});
