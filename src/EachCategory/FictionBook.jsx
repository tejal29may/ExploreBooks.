
import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import { useParams } from "react-router-dom";
import AllFictions from "../ALLCategories/ViewAllFictions";
import axios from "axios";
import "./SingleFictionBook.css";
// import { useSpeechSynthesis } from "react-speech-kit";

function FictionBook() {
  const [value, setValue] = useState("");
  const { speak, cancel } = useSpeechSynthesis(); // Destructuring cancel function from useSpeechSynthesis

  const param = useParams();
  const [singleBook, setSingleBook] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false); // New state variable

  async function fetchData() {
    try {
      const response = await axios(
        `https://www.googleapis.com/books/v1/volumes/${param.id}`
      );
      setSingleBook(response.data);
      setValue(response.data.volumeInfo.description);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const toggleSpeech = () => {
    if (isSpeaking) {
      cancel(); // Stop speech if already speaking
    } else {
      speak({ text: value }); // Start speech
    }
    setIsSpeaking(!isSpeaking); // Toggle isSpeaking state
  };

  return (
    <>
      {singleBook && (
        <div className="singleBook">
          <div className="singleupper">
            <div className="singleleft">
              <img src={singleBook.volumeInfo.imageLinks.thumbnail} alt="" />
            </div>
            <div className="singleright">
              <h1 className="bookname">{singleBook.volumeInfo.title}</h1>
              <h4 className="Author">
                Category :{singleBook.volumeInfo.categories[0]}{" "}
              </h4>
              <h4 className="Author">
                Author :{singleBook.volumeInfo.authors[0]}{" "}
              </h4>
              <h4>Publishers: {singleBook.volumeInfo.publisher}</h4>

              <h4>Published Date : {singleBook.volumeInfo.publishedDate} </h4>
              <div className="buttons3">
                <button className="buy">
                  <a href={singleBook.saleInfo.buyLink}>Buy Now</a>
                </button>
                <button className="buy">
                  <a href={singleBook.accessInfo.pdf.acsTokenLink}>Read Here</a>
                </button>
                <button className="buy">
                  <a href={singleBook.volumeInfo.previewLink}>View Preview</a>
                </button>
              </div>
            </div>
          </div>
          <div className="singlebottom">
            <span>
              <b style={{ fontSize: "22px", marginTop: "3%" }}>
                Description: <br />
                <br />
              </b>{" "}
              {singleBook.volumeInfo.description}
            </span>
          </div>

          {/* <button onClick={toggleSpeech} style={{padding:"12px", height:"40px",borderRadius:"30px"}}>
            {isSpeaking ? "Stop Reading" : "Read it Loud"}
          </button> */}
        </div>
      )}

      <AllFictions />
    </>
  );
}

export default FictionBook;
