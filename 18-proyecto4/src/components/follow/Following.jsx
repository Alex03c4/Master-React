import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { UserList } from "../user/UserList";


export const Following = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(true);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams()

  useEffect(() => {
    getUsers(1);
  }, []);

  const getUsers = async (nextPage = 1) => {
    setLoading(true);

    const userId = params.userId;

    // Petición para sacar usuarios
    const request = await fetch(Global.url + "follow/following/" + userId + "/" + nextPage, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });

    const data = await request.json();
    
    // Recorrer y limpiar follows para quedarme con followed
    let cleanUsers = []
    data.follows.forEach(follow => {
      cleanUsers = [...cleanUsers, follow.followed]
    })

    data.users = cleanUsers
    console.log(data.users)



    // Crear un estado para poder listar
    if (data.users && data.status == "success") {
      let newUsers = data.users;

      if (users.length >= 1) {
        newUsers = [...users, ...data.users];
      }
      setUsers(newUsers);
      setFollowing(data.user_following);
      setLoading(false);

      // paginacion
      if (users.length >= data.total - data.users.length) {
        setMore(false);
      }
    }
  };

  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Usuarios que sigues </h1>
      </header>

      <UserList
        users={users}
        getUsers={getUsers}
        following={following}
        setFollowing={setFollowing}
        page={page}
        setPage={setPage}
        more={more}
        loading={loading}
      />

      <br />
    </>
  );
};