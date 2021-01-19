document.addEventListener("DOMContentLoaded", () => {
    var pwBtn = document.getElementById("pw")
    pwBtn.addEventListener("click", (e) => {
        chrome.tabs.executeScript({ file: 'pw.js' })
    })

    var fhcBtn = document.getElementById("fhc")
    fhcBtn.addEventListener("click", (e) => {
        chrome.tabs.executeScript({ file: 'email.js' })
    })

    var pinBtn = document.getElementById("pin")
    pinBtn.addEventListener("click", (e) => {
        chrome.tabs.executeScript({ file: 'pin.js' })
    })

    var mIt = document.getElementById("m-it")
    mIt.addEventListener("click", (e) => {
        chrome.tabs.executeScript({ file: 'm.js' })
    })

    var mClipboard = document.getElementById("m-clipboard")
    mClipboard.addEventListener("click", (e) => {
        chrome.tabs.executeScript({ file: 'm-clipboard.js' })
    })
});
