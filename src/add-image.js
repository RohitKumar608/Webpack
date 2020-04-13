import natureImage from './images/alleppeyPlaces_feature.jpg';
const addImage = () => {
    const img = document.createElement('img');
    img.alt = 'nature';
    img.width = 300;
    img.src = natureImage;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;