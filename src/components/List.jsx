import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Form({
  titulo,
  culto,
  orderListagem,
  remocao,
  chegada,
  setControle,
  controle,
}) {
  const doRemove = (id, data) => {
    remove(`https://aguaviva-rp.firebaseio.com/teste/${id}.json`, data);
  };
  const remove = (url, data) => {
    Axios.delete(url).then(() => {
      alert(`você removeu ${data.nome} da listagem`);
      window.location = "/remocao.html";
    });
  };
  const doEdit = (id, data) => {
    setControle(!controle);
    if (data.chegada) {
      edit(`https://aguaviva-rp.firebaseio.com/teste/${id}.json`, {
        ...data,
        chegada: false,
      });
    } else {
      edit(`https://aguaviva-rp.firebaseio.com/teste/${id}.json`, {
        ...data,
        chegada: true,
      });
    }
  };
  const edit = (url, data) => {
    Axios.put(url, data).then(() => {
      // if (data.chegada) {
      //   alert(`${data.nome} confirmou a presença no culto`);
      // } else {
      //   alert(`você tirou a confirmação de ${data.nome} do culto`);
      // }
      // window.location = "/controle.html";
    });
  };

  // useEffect(() => {
  //   let fetchListagem;
  //   setTimeout(function () {
  //     const fetch = async () => {
  //       fetchListagem = await fetchTeacherMentory();
  //       setListMentory(fetchListagem);
  //     };
  //     fetch();
  //   }, 1000);
  // }, [mod]);

  return (
    <>
      <h1>{titulo}</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Rede</th>

            {chegada && <th>Controle Servos</th>}
            {remocao && <th>Status</th>}
          </tr>
        </thead>
        <tbody>
          {orderListagem && (
            <>
              {orderListagem.map((individuo) => {
                return (
                  <>
                    {individuo.map((ind) => {
                      if (ind.culto == culto) {
                        return (
                          <tr key={ind}>
                            <td>
                              {ind.nome} {ind.sobrenome}
                            </td>
                            <td>Pr {ind.rede}</td>
                            {chegada && (
                              <td onClick={(e) => doEdit(individuo[0], ind)}>
                                {ind.chegada ? (
                                  <img
                                    src="images/carraca.svg"
                                    className="certo"
                                  />
                                ) : (
                                  <img
                                    src="images/carraca.svg"
                                    className="nao_certo"
                                  />
                                  // <div className="nao_chegou"></div>
                                )}
                              </td>
                            )}
                            {remocao && (
                              <td>
                                <button
                                  className="remove"
                                  onClick={(e) => doRemove(individuo[0], ind)}
                                >
                                  Remover
                                </button>
                              </td>
                            )}
                          </tr>
                        );
                      }
                    })}
                  </>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}
