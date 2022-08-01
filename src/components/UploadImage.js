import React from 'react'
import ImageUploading from "react-images-uploading";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function UploadImage() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
      
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
  
    return (
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={["jpg"]}
        >
          {({
            imageList,
            onImageUpload,
            isDragging,
            dragProps
          }) => (
        
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
               <AddPhotoAlternateIcon ></AddPhotoAlternateIcon>
                Upload Image
              </button>
              &nbsp;
              
            </div>
          )}
        </ImageUploading>
      </div>
    );
}
