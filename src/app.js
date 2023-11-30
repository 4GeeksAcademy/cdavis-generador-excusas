/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generador() {
  let quien = ["Mi perro", "Mi abuela", "Mi profesor de 4geeks", "Mi suegra"];
  let accion = ["se comió", "destruyó", "orinó", "quemó"];
  let que = ["mi tarea", "mi dignidad", "mi casa", "mi computadora"];
  let cuando = [
    "antes de clase",
    "justo a tiempo",
    "cuando venía de camino",
    "mientras dormía",
    "cuando estaba estudiando"
  ];

  let arrayQuien = Math.floor(Math.random() * quien.length);
  let arrayAccion = Math.floor(Math.random() * accion.length);
  let arrayQue = Math.floor(Math.random() * que.length);
  let arrayCuando = Math.floor(Math.random() * que.length);
  return (
    quien[arrayQuien] +
    " " +
    accion[arrayAccion] +
    " " +
    que[arrayQue] +
    " " +
    cuando[arrayCuando]
  );
}

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generador();
};
