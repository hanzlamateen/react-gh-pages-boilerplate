import fs from 'fs'
import path from 'path'
import routes from '../src/constants/routes.json' assert { type: 'json' }

const destinationFolder = 'dist'
const filesToCopy = ['sitemap.xml', 'robots.txt', 'CNAME']

// Copy files from the root of the project to the dist folder
for (const sourceFile of filesToCopy) {
  const destinationFile = path.join(destinationFolder, sourceFile)

  fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
      console.error(`Error copying file ${sourceFile}`, err)
    } else {
      console.log(`File ${sourceFile} copied successfully`)
    }
  })
}

// Create a new HTML file for each route based on the index.html file
for (const route in routes) {
  if (route === 'Home') {
    continue
  }
  const routeName = routes[route]
  const routeFileName = `${routeName.replace('/', '')}.html`
  const routeHtml = path.join(destinationFolder, routeFileName)
  const indexHtml = path.join(destinationFolder, 'index.html')

  fs.copyFile(indexHtml, routeHtml, (err) => {
    if (err) {
      console.error(`Error copying file ${routeFileName}`, err)
    } else {
      console.log(`File ${routeFileName} copied successfully`)
    }
  })
}
