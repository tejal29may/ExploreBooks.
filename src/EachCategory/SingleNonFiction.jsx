import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import { useParams } from "react-router-dom";
import AllNonFictions from "../ALLCategories/ViewAllNonFiction";
import axios from "axios";
import "./SingleFictionBook.css";
// import { useSpeechSynthesis } from "react-speech-kit";

function SingleNonFiction() {
  const { speak, cancel } = useSpeechSynthesis();
  const param = useParams();
  const [singleNonFiction, setSingleNonFiction] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  async function fetchData() {
    try {
      const response = await axios(
        `https://www.googleapis.com/books/v1/volumes/${param.id}`
      );
      setSingleNonFiction(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const toggleSpeech = () => {
    if (isSpeaking) {
      cancel();
    } else {
      speak({ text: singleNonFiction.volumeInfo.description });
    }
    setIsSpeaking(!isSpeaking);
  };

  return (
    <>
      {singleNonFiction && (
        <div className="singleBook">
          <div className="singleupper">
            <div className="singleleft">
              <img
                src={singleNonFiction.volumeInfo.imageLinks.thumbnail}
                alt=""
              />
            </div>
            <div className="singleright">
              <h1 className="bookname">{singleNonFiction.volumeInfo.title}</h1>
              <h4 className="Author">
                Category :{singleNonFiction.volumeInfo.categories[0]}{" "}
              </h4>
              <h4 className="Author">
                Author :{singleNonFiction.volumeInfo.authors[0]}{" "}
              </h4>
              <h4>Publishers: {singleNonFiction.volumeInfo.publisher}</h4>

              <h4>
                Published Date : {singleNonFiction.volumeInfo.publishedDate}{" "}
              </h4>
              <div className="buttons3">
                <button className="buy">
                  <a href={singleNonFiction.saleInfo.buyLink}>Buy Now</a>
                </button>
                <button className="buy">
                  <a href={singleNonFiction.accessInfo.pdf.acsTokenLink}>
                    Read Here
                  </a>
                </button>
                <button className="buy">
                  <a href={singleNonFiction.volumeInfo.previewLink}>
                    View Preview
                  </a>
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
              {singleNonFiction.volumeInfo.description}
            </span>
          </div>
          {/* <button onClick={toggleSpeech} style={{padding:"12px", height:"40px",borderRadius:"30px"}}>
            {isSpeaking ? "Stop Reading" : "Read it Loud"}
          </button> */}
        </div>
      )}

      <AllNonFictions />
    </>
  );
}

export default SingleNonFiction;
