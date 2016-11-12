var fs = require('fs');
var path = require('path')

var arg = process.argv.slice(2)

// grab arguments
var folder = arg[0]
var type = arg [1]



// daily
function daily(){
  var d = new Date()
  var title = d.toDateString()
  folder = path.join(__dirname, folder, `${title.replace(/ /g, "")}.md`)
  fs.writeFile(folder, `#${title}`, err => {
    if(err) {console.error(err)}
  })
  console.log("daily log was created for " + title)
}
if(folder.toString() === "daily"){
  daily()
}




// print options - if no arguments
var hello =
`|:Welcome to create-md:|

create md styled notes files automatically

options [folder] [type:diary/think]
--[folder]
indicate location folder of Notes
--[type:]
/diary/ - creates note with todays date as name
//
`

if(arg.length === 0){
  console.log(hello);
}
