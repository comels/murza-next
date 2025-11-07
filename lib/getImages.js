import fs from 'fs'
import path from 'path'

/**
 * Lit le dossier /public/images et retourne un tableau de chemins publics
 * Filtre les extensions: .jpg, .jpeg, .png, .webp (insensible à la casse)
 */
export default function getImages() {
  const imagesDirectory = path.join(process.cwd(), 'public', 'images')
  
  // Vérifie si le dossier existe
  if (!fs.existsSync(imagesDirectory)) {
    return []
  }

  const files = fs.readdirSync(imagesDirectory)
  
  // Extensions autorisées (insensible à la casse)
  const allowedExtensions = /\.(jpg|jpeg|png|webp)$/i
  
  // Filtre et transforme en chemins publics
  const imagePaths = files
    .filter(file => allowedExtensions.test(file))
    .map(file => `/images/${file}`)
  
  return imagePaths
}

