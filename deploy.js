var ghpages = require("gh-pages")
var fs = require("fs")

fs.writeFile("public/CNAME", "brettinternet.com", function(err) {
  if (err) {
    console.log("Could not write CNAME file.")
    console.error(err)
  }
})

ghpages.publish(
  "public",
  {
    branch: "master",
  },
  function(err) {
    if (err) {
      console.error(err)
    }
  }
)
