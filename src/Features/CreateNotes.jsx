import React, { useRef, useState, useEffect } from "react";
import "./CreateNotes.css";

function CreateNotes() {
  const [bgColor, setBgColor] = useState("white");
  const [title, setTitle] = useState("");
  const [contentt, setContentt] = useState("");
  const [content, setContent] = useState([]);

  useEffect(() => {
    let result = localStorage.getItem("MyNotes");
    if (result) {
      setContent(JSON.parse(result));
    }
  }, []);

  console.log(content);
  const addNotes = () => {
    if (title.trim() === "") {
      //   toast.error('Please enter a valid title.');
      alert("invalid");
      return;
    } else {
      const newData = {
        Gitem: title,
        ContentItem: contentt,
        back: bgColor,
      };
      const newDataUpdate = [...content, newData];
      setContent(newDataUpdate);
      localStorage.setItem("MyNotes", JSON.stringify(newDataUpdate));
    }
  };
  return (
    <>
      <div className="notesmain">
        <div className="leftnotes">
          <span><b style={{color:"brown", fontSize:"30px"}}>Welcome to our note-taking feature!</b><br /><br /> Easily jot down thoughts, ideas, or favorite quotes while exploring books on our website. Edit or delete notes anytime to stay organized and enhance your reading experience. Start taking notes today to engage with books on a deeper level!</span>
         <img src="https://i.pinimg.com/originals/f4/35/28/f435281885f879de2b207fbe9f5d30d2.jpg" alt="" />
        </div>
        <div className="main">
          {/* <marquee behavior="" direction="down"> */}
          <h3
            style={{ textAlign: "center", fontSize: "30px", marginTop: "7%" }}
          >
            Create Yout Own Notes 📝
          </h3>
          {/* </marquee> */}

          <div className="upper">
            <div className="sect">
              <input
                type="text"
                id="title"
                placeholder=" Add A Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <br />
              <textarea
                name="text"
                id="content"
                cols="60"
                rows="10"
                placeholder="Add You Content..."
                value={contentt}
                onChange={(e) => {
                  setContentt(e.target.value);
                }}
              ></textarea>
            </div>
            <br />
            <div className="button1">
              <label for="color" style={{ color: "black" }}>
                Choose Color
              </label>
              <input
                type="color"
                id="color"
                value={bgColor}
                onChange={(e) => {
                  setBgColor(e.target.value);
                }}
              />
              <button className="button-75" onClick={addNotes}>
                Add A Note
              </button>
            </div>
          </div>
          <h2
            style={{
              color: "blue",
              fontFamily: "cursive",
              textAlign: "center",
              marginTop: "1%",
            }}
          >
            ✨ Your Notes ✨
          </h2>
          {/* style="color:blue;font-family: cursive;text-align: center;" */}
          <br />
          <br />
          {/* <h2 id="note" style={{textAlign:"center"}}>No Note Is Added Yet</h2> */}
          <div className="lower_section">
            {content.map((value, index, array) => {
              return (
                <div
                  className="card"
                  style={{ backgroundColor: value.back }}
                  key={index}
                >
                  <h6
                    onClick={() => {
                      const data = [...content];
                      data.splice(index, 1);
                      setContent(data);
                      localStorage.setItem("MyNotes", JSON.stringify(data));
                    }}
                  >
                    ❌
                  </h6>
                  <h2>{value.Gitem}</h2>
                  <h3>{value.ContentItem}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNotes;
