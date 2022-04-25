import React, { useState } from "react";
import "./AddNews.css";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import { useDispatch } from "react-redux";
import { postNews } from "./../../store/reducer/novosti.reducer";
import axios from '../../api/axios.input';


function AddNews() {
  const [news, setNews] = useState({
    Title: "",
    Description: "",
  });
  const [file, setFile] = useState(null);

  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const changeHadnler = (e) =>
    setNews((news) => ({ ...news, [e.target.name]: e.target.value }));

  const onFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("files", file);
    axios.post('/upload',formData,{
      headers:{
        "Content-Type":"multipar/form-data"
      }
    })
    .then(res=>{
      const data = {
        data:{
          ...news,
          Media: res.data[0],
          Content: content
        }
      };
      dispatch(postNews(data));
    })

  };

  const mdParser = new MarkdownIt(/* Markdown-it options */);
  function handleEditorChange({ html, text }) {
    setContent(text);
  }
  return (
    <div className="container add-post">
      <form onSubmit={submitHandler} className="form-news">
        <h3 className="title">Добавить новость</h3>
        <hr />
        <div className="flex-container">
          <div className="cont-add-news">
            <div className="add__news">
              <h4 className="news__title">Заголовок новости</h4>
              <div className="input">
                <input
                  onChange={changeHadnler}
                  type="text"
                  value={news.Title}
                  name="Title"
                  placeholder="Название новости"
                />
              </div>
            </div>
            <div className="news__text">
              <h4 className="text__title">Краткое описание</h4>
              <div className="input">
                <textarea
                  onChange={changeHadnler}
                  name="Description"
                  defaultValue={news.Description}
                  placeholder="Краткое описание новости"
                ></textarea>
              </div>
            </div>
            <div className="news__file">
              <div className="input">
                <input
                  type="file"
                  className="input-file"
                  onChange={onFileSelect}
                  name="name"
                />
              </div>
            </div>
          </div>
          <div className="container3">
            <h3 className="title2">Полное описание новости</h3>
            <MdEditor
              style={{ height: "400px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={handleEditorChange}
            />
          </div>
        </div>
        <button className="btn-transition">Добавить новость</button>
      </form>
    </div>
  );
}

export default AddNews;
