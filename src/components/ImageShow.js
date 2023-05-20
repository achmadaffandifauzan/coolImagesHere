function ImageShow({ image }) {
  return (
    <img width="300px" src={image.urls.full} />
  );
}

export default ImageShow;
