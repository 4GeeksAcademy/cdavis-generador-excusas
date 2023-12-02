/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generador() {
  let quien = ["Mi perro", "Mi abuela", "Mi profesor de 4geeks", "Mi suegra", "mi compañere de 4 geeks"];
  let accion = ["se comió", "destruyó", "orinó", "quemó", "tiró a la basura"];
  let que = ["mi tarea", "mi dignidad", "mi casa", "mi computadora", "mi ropa"];
  let cuando = ["antes de clase", "justo a tiempo", "cuando venía de camino", "mientras dormía", "cuando estaba estudiando", "mientras dormía", "mientras yo estaba bañandome"];

  let indiceRandomQuien = Math.floor(Math.random() * quien.length);
  let indiceRandomAccion = Math.floor(Math.random() * accion.length);
  let indiceRandomQue = Math.floor(Math.random() * que.length);
  let indiceRandomCuando = Math.floor(Math.random() * que.length);
  return (
    quien[indiceRandomQuien] +
    " " +
    accion[indiceRandomAccion] +
    " " +
    que[indiceRandomQue] +
    " " +
    cuando[indiceRandomCuando]
  );
}

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generador();
};
