/**
 *Created by tomot on 2020/10/3.
 */

'use strict';
/*
document.getElementById("add").addEventListener("click", function() {
    document.getElementById("tb").appendChild(
        document.createElement("tr")
            .appendChild(    document.createElement("td").innerHTML="<td><input type=\"checkbox\" name=\"item\"></td>")
            // .appendChild( document.createElement("td").innerHTML=document.getElementById("name").value)
            // .appendChild(document.createElement("td").innerHTML=document.getElementById("age").value)
    );
});
*/
document.getElementById("btn_add").addEventListener("click", function () {
    let sex = document.getElementById("male").checked ? "male" : "female";
    document.getElementById("mainFrm").innerHTML +=
        "<tr>" +
        "<td><input type=\"checkbox\" name=\"item\"></td>" +
        " <td>" + document.getElementById("name").value + "</td>" +
        " <td>" + document.getElementById("age").value + "</td>" +
        " <td>" + sex + "</td>" +
        " <td>" + document.getElementById("phone").value + "</td>" +
        " <td><button>remove</button></td>" +
        "</tr>";
    document.getElementById("btn_reset").click();//立即执行点击.
    checked();
});
document.getElementById("mainFrm").addEventListener("click", function (e) {
    if (e.target.innerText === "remove") {
        e.target.parentNode.parentNode.remove();
    }
});
document.getElementById("remove_first").addEventListener("click", function (e) {
    document.getElementById("mainFrm").firstElementChild.remove();
});
document.getElementById("remove_last").addEventListener("click", function (e) {
    document.getElementById("mainFrm").lastElementChild.remove();
});

document.getElementById("all").addEventListener("change", function (e) {
    document.getElementsByName("item").forEach(function (item) {
        item.checked = e.target.checked;
    });
});

function checked() {
    document.getElementsByName("item").forEach(function (item) {
        item.addEventListener("change", function (e) {
            document.getElementById("all").checked = true;
            for (let item of document.getElementsByName("item")) {
                if (!item.checked) {
                    document.getElementById("all").checked = false;
                    break;
                }
            }
        });
    });
}

checked();

document.getElementById("remove_all").addEventListener("click", function () {
    let items = document.getElementsByName("item");
    for (let i = 0; i < items.length; i++) {
        if (items[i]) {
            items[i].parentNode.parentElement.remove();
            --i;
        }
    }
});
