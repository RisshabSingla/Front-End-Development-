// from 52_web_callbacks

// Problem with callbacks -> the entire control is given 
// a single error if it's true in the loadScript function can call the CEO function.

function hello(error, src) {
  if (error) {
    console.log(error);
    return
  }
  alert('Hello World!' + src);
}

function goodmorning(error, src) {
  if (error) {
    console.log(error);
    sendEmergencyMessageToCeo();
    return
  }
  alert('Good morning' + src);
}

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Script Loaded")
    callback(null, src);
  }

  script.onerror = function () {
    console.log("Error loading script ")
    callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}

loadScript("https://cdn.jsddelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning);







// Callback Hell / Pyramid of doom
// When we have callbacks inside callbacks -> the code gets difficult to manage

// The pyramid grows towards right with every asynchronous call -> not a very good practice


// Example
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
  if (error) {
    console.log(error)
    sendEmergencyMessageToCeo();
    return
  }
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
    if (error) {
      console.log(error)
      sendEmergencyMessageToCeo();
      return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
      if (error) {
        console.log(error)
        sendEmergencyMessageToCeo();
        return
      }
      loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
        if (error) {
          console.log(error)
          sendEmergencyMessageToCeo();
          return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
          if (error) {
            console.log(error)
            sendEmergencyMessageToCeo();
            return
          }
          loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
            if (error) {
              console.log(error)
              sendEmergencyMessageToCeo();
              return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
              if (error) {
                console.log(error)
                sendEmergencyMessageToCeo();
                return
              }
              loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                if (error) {
                  console.log(error)
                  sendEmergencyMessageToCeo();
                  return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
              })
            })
          })
        })
      })
    })
  })
})






