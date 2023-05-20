import ImageShow from './ImageShow';

function ImageList({ dataApi }) {
  const renderedImages = dataApi.map((singleData) => {
    return <ImageShow image={singleData} />
  })
  return <div>{renderedImages}</div>;
}

export default ImageList;
