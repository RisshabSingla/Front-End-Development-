

// Session Storage

// Properties and Methods -> same as localStorage
// Only exists in the current browser tab
// Survives page refresh but not closing/opening the tab

// Storage Event -> When data gets updated, then storage events get triggered
window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}