const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to','avatars.githubusercontent.com','api.githubtrends.io','awesome-github-stats.azurewebsites.net','github-readme-streak-stats.herokuapp.com',"github-readme-stats.vercel.app"],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
  }
  
}