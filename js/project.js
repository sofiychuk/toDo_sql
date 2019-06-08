window.onload = function () {

    var list = document.querySelector('ul');
    document.getElementById("addBtn").addEventListener("click", function(){UpdateRecord(); newElement();}, false);
    document.getElementById("toDoEl").addEventListener("keydown", enter);
    document.getElementById("clear_all").addEventListener("click", clearAll);
    document.getElementById("all_done").addEventListener("click", checkedAll);

    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle('checked');
        } else if (ev.target.tagName === "SPAN") {
            var div = ev.target.parentNode;
            div.remove();
        }
    }, false);


    function enter(e) {
        e = e || window.event;
        if (e.keyCode === 13) {
            document.getElementById("addBtn").click()
        }
        return false;
    }

    function newElement() {
        var li = document.createElement('li');
        var inputValue = document.getElementById('toDoEl').value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue == "") {
            alert("Enter some task!");
        } else {
            document.getElementById('list').appendChild(li);
        }
        document.getElementById('toDoEl').value = "";
        var span = document.createElement('SPAN');
        var txt = document.createTextNode("X");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
    }

    function clearAll() {
        var li = document.querySelectorAll('li');
        for (var i = 0; i < li.length; i++) {
            var parent = li[i].parentNode;
            parent.removeChild(li[i]);
        }
    }

    var add = true;

    function checkedAll() {
        var li = document.querySelectorAll('li');
        for (var i = 0; i < li.length; i++) {
            li[i].classList[add ? 'add' : 'remove']('checked');
        }
        add = !add;
    }


    function UpdateRecord()
    {
          var id = $('#toDoEl').val();
        jQuery.ajax({
         type: "POST",
         data: {'id' : id},
         url: "index.php",
         cache: false,
         success: function(response)
         {
           alert("Record successfully updated");
         }
       });
   }


}