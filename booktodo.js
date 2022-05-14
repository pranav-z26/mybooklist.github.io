function addrow() {

    chk1 = document.getElementById('bookname').value;
    chk2 = document.getElementById('authorname').value;
    chk3 = document.getElementById('pub').value;
    chk4 = document.getElementById('price').value;
    if (chk1.length == 0) {
        alert("Enter Name");
        return false;
    }
    else if (chk2.length == 0) {
        alert("Enter Author Name");
        return false;
    }
    else if (chk3.length == 0) {
        alert("Enter Publication Name");
        return false;
    }
    else if (chk4.length == 0) {
        alert("Enter Price");
        return false;
    }
    else {
        var table = document.getElementById("t1");
        var row = table.insertRow(1);
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        var c4 = row.insertCell(3);
        c1.innerHTML = document.getElementById('bookname').value;
        c2.innerHTML = document.getElementById('authorname').value;
        c3.innerHTML = document.getElementById('pub').value;
        c4.innerHTML = document.getElementById('price').value;
    }
}