import React from "react";
import { useState } from "react";
import Header from "../layout/Header";
import axios from "axios";

const DiseaseUpload = () => {
  
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log('image change',e.target.files[0])

      setSelectedImage(e.target.files[0]);
    }
  };

  const getHealth = (e)=>{
    let file = selectedImage;
    let formdata = new FormData();
    formdata.append('file', file)

    console.log(e.target)
    console.log(selectedImage)
    axios({
      url: 'http://127.0.0.1:8000/disease-predict',
      method: "POST",
      data: formdata}).then(response=>{
    console.log("add this",response );
    })
  }

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <>
      {/* <Header /> */}
      <h3 style={styles.textCenter}>🌾Disease Detection🌾</h3>
      <div className="m-3">
      <input type="file" name="file" id="image" onChange={imageChange}/>

        {selectedImage && (
          <div style={styles.preview}>
            <img id="image_api"
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
            <br />
            <button onClick={getHealth} style={styles.upload}>Analyse the disease</button>
            <br />
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}
      </div>
    </>
  );
};

// export default App;

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
  upload: {
    cursor: "pointer",
    padding: 15,
    background: "green",
    color: "white",
    border: "none",
  },
  textCenter: {
    textAlign: "center",
  },
};
export default DiseaseUpload;
