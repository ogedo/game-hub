import noImage from "../assets/mo-image-paceholdder.webp";

const getCroppedImageUrl = (url: string) => {
  if(!url) return "../assets/images/";
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
  }
  
  export default getCroppedImageUrl;

