let container = document.createElement("div");
let topDiv = document.createElement("div");
let bottomDiv = document.createElement("div");
let rowT = document.createElement("row");
let bottomTopl = document.createElement("div");
let bottomTopc = document.createElement("div");
let bottomTopr = document.createElement("div");
let rowB = document.createElement("row");
let bottomBotl = document.createElement("div");
let bottomBotc = document.createElement("div");
let bottomBotr = document.createElement("div");

container.style.marginLeft = "180px";
container.style.marginTop = "10px";
topDiv.style.backgroundColor = "black";
topDiv.style.width = "960px";
topDiv.style.height = "360px";
topDiv.style.marginBottom = "40px";

bottomDiv.style.width = "960px";
bottomDiv.style.height = "360px";


// rowT

rowT.style.height = "180px";
rowT.classList.add("d-flex");
rowT.classList.add("list-group-item");
rowT.classList.add("justify-content-between");
rowT.classList.add("align-items-center");
rowT.style.marginBottom = "20px";

bottomTopl.style.width = "30.2%";
bottomTopl.style.height = "180px";
bottomTopl.style.backgroundColor = "black";
bottomTopl.style.marginBottom = "20px";
bottomTopr.style.width = "30.2%";
bottomTopr.style.height = "180px";
bottomTopr.style.backgroundColor = "black";
bottomTopr.style.marginBottom = "20px";
bottomTopc.style.width = "30.2%";
bottomTopc.style.height = "180px";
bottomTopc.style.backgroundColor = "black";
bottomTopc.style.marginBottom = "20px";

// rowB

rowB.style.height = "180px";
rowB.style.marginTop= "20px";
rowB.classList.add("d-flex");
rowB.classList.add("list-group-item");
rowB.classList.add("justify-content-between");
rowB.classList.add("align-items-center");

bottomBotl.style.width = "290px";
bottomBotl.style.height = "180px";
bottomBotc.style.width = "290px";
bottomBotc.style.height = "180px";
bottomBotr.style.width = "290px";
bottomBotr.style.height = "180px";

let headl = document.createElement("h5");
let infol = document.createElement("p");
let linkl = document.createElement("h6");
let headr = document.createElement("h5");
let infor = document.createElement("p");
let linkr = document.createElement("h6");
let headc = document.createElement("h5");
let infoc = document.createElement("p");
let linkc = document.createElement("h6");

headl.innerText = "Indonectetus facilis";
infol.innerText = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.";
linkl.innerText = "Read More >>";
headl.style.fontStyle = "italic";
linkl.style.color = "orange";
linkl.style.float = "right";
infol.style.fontFamily = "Garamond";
headc.innerText = "Indonectetus facilis";
infoc.innerText = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.";
linkc.innerText = "Read More >>";
headc.style.fontStyle = "italic";
linkc.style.color = "orange";
linkc.style.float = "right";
infoc.style.fontFamily = "Garamond";
headr.innerText = "Indonectetus facilis";
infor.innerText = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.";
linkr.innerText = "Read More >>";
headr.style.fontStyle = "italic";
linkr.style.color = "orange";
linkr.style.float = "right";
infor.style.fontFamily = "Garamond";


//append

bottomBotl.append(headl,infol,linkl);
bottomBotr.append(headr,infor,linkr);
bottomBotc.append(headc,infoc,linkc);
rowT.append(bottomTopl,bottomTopr,bottomTopc);
rowB.append(bottomBotl,bottomBotr,bottomBotc)
bottomDiv.append(rowT,rowB);
container.append(topDiv, bottomDiv);

document.body.append(container);