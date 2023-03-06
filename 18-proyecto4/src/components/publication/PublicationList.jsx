import React from "react";
import { Global } from "../../helpers/Global";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
export const PublicationList = ({
        publications,
        getPublications,
        page,
        setPage,
        more,
        setMore
      }
) => {

  const {auth} = useAuth()
  const nextPage =  () => {
    let next = page + 1
    setPage(next)
    getPublications(next)
  }

  
  const deletePublication = async(publicationID) =>{
    const request = await fetch(Global.url + "publication/remove/" + publicationID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token"),
      }
    })

    const data = await request.json()
    setPage(1)
    setMore(true)
    getPublications(1,true)
  



  }
  return (
    <>
      <div className="content__posts">
        {publications.map((publication) => {
          return (
            <article className="posts__post" key={publication._id}>
              <div className="post__container">
                <div className="post__image-user">
                  <a href="#" className="post__image-link">
                    {publication.user.image != "default.png" && (
                      <img
                        src={
                          Global.url + "user/avatar/" + publication.user.image
                        }
                        className="post__user-image"
                        alt="Foto de perfil"
                      />
                    )}
                    {publication.user.image == "default.png" && (
                      <img
                        src={avatar}
                        className="post__user-image"
                        alt="Foto de perfil"
                      />
                    )}
                  </a>
                </div>

                <div className="post__body">
                  <div className="post__user-info">
                    <a href="#" className="user-info__name">
                      {publication.user.name} {publication.user.surname}
                    </a>
                    <span className="user-info__divider"> | </span>
                    <a href="#" className="user-info__create-date">
                      {publication.created_at}
                    </a>
                  </div>

                  <h4 className="post__content">{publication.text}</h4>

                  {publication.file && (
                    <img
                      src={Global.url + "publication/media/" + publication.file}
                    />
                  )}
                </div>
              </div>

              {auth._id == publication.user._id && (
                <div className="post__buttons">
                  <button
                    onClick={() => deletePublication(publication._id)}
                    className="post__button"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {more && (
        <div className="content__container-btn">
          <button className="content__btn-more-post" onClick={nextPage}>
            Ver mas publicaciones!
          </button>
        </div>
      )}
    </>
  );
};
