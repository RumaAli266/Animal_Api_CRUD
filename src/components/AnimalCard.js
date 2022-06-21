import React from "react";
import edit from "../assets/website.png"
import trash from "../assets/trash.png"
import '../App.css';

const AnimalCard = ({ index, imageURL, id, commonName, handleDelete, viewCard }) => 
            (<div className="col-md-4 text-center overlay-card mt-5" key={index}>
                  <div className="card card-01 card-layout">
                  <div className="profile-box mt-3">
                      <img className="card-img-top rounded-circle" src={imageURL} alt="image" />
                  </div>
                  <div className="card-body text-center p-4">
                        <h2 className="card-text">{commonName}</h2>
                    <span className="footer-card">
                        <a href="#"><img className="icons-style pulse" src={trash} onClick={() => handleDelete(id)} /></a>
                        <a href="#" onClick={() => viewCard(id)}  data-toggle="modal" data-target="#exampleModalCenter">
                            <img className="icons-style pulse" src={edit} /></a>
                    </span>
                  </div>
                </div>
            </div>);

export default AnimalCard;