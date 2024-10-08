/**
 * ! GALLERY ITEM PROPS INTERFACE
 * @interface GalleryItemProps
 * @description The Properties of the Gallery Item
 * 
 * @property {string} url
 *  The URL of the Item
 * 
 * @property {string} name
 *  The Name of the Item
 * 
 * @property {string} detail
 *  The Detail of the Item
 * 
 * @property {Object} caption
 *  The Caption of the Item
 * 
 * @property {string} caption.title
 *  The Title of the Item Caption
 * 
 * @property {Array} caption.technos
 *  The Technologies of the Item Caption
 * 
 * @property {Object} image
 *  The Image of the Item
 *
 * @property {string} image.url
 *  The URL of the Item Image
 *
 * @property {string} image.alt
 *  The Alternative Text of the Item Image
 */
export interface GalleryItemProps {
  url: string
  name?: string
  detail?: string
  caption?: {
    title: string
    technos?: string[]
  };
  image?: {
    url: string
    alt: string
  }
}
