toggleUPPERCASE = false;

function load() {
    if (typeof(Storage) !== "undefined") {
        var local = localStorage.notes;
        if(local == undefined || local == "<div><br></div>" || local == "<br>" || local == "") {
            var new_text = "<input class='header' id='paragraph' value='paragraph' onkeyup='updateID(event)'><br><br> • Press ctrl+shift+H to insert a header.<br><br><span style='margin-left:2em'> • Headers can be used to navigate to specific sections of your notebook.</span><br><br><span style='margin-left:2em'> • Navigate by adding #NAME to the page URL, substituting NAME for the text inside the header.</span><br><br> • Press ctrl+shift+U to toggle uppercase for headers.<br><br> • Press alt+8 to insert a bullet point<br><br> • Press ctrl+shift+r to reset your notebook (requires confirmation).<br><br>";
            local = new_text;
        }
        var textarea = document.getElementById("textarea");
        textarea.innerHTML = local;
        var headers = document.getElementsByTagName("input");
        for (var i=0,  tot=headers.length; i < tot; i++) {
            var item = headers[i];
            item.value = item.id;
            item.onkeyup = function(callback) {updateID(callback)};
        }
    } else {
        alert("No support for local storage! Try checking your settings or using a more updated browser.");
    }
    // register handler for keyup event
    document.addEventListener('keyup', shortcut, false);
}
function save() {
    var textarea = document.getElementById("textarea");
    localStorage.notes = textarea.innerHTML;
}
function shortcut(event) {
    if (event.keyCode == 72 && (event.ctrlKey || event.metaKey) && event.shiftKey) {
        // insert a header
        var element = document.getElementById("textarea");
        var node = document.createElement("DIV");
        var inner = document.createElement("INPUT");
        inner.id = "Header";
        inner.className = "header";
        inner.onkeyup = function(callback) {updateID(callback)};
        inner.value = "Header";
        node.appendChild(inner);
        var parentNode = getSelectionStart();
        parentNode.appendChild(node);
    } else if (event.keyCode == 85 && (event.ctrlKey || event.metaKey) && event.shiftKey) {
        // set headers to UPPERCASE
        if(toggleUPPERCASE) {
            toggleUPPERCASE = false;
            var value = "lowercase";
        } else {
            toggleUPPERCASE = true;
            var value = "uppercase";
        }

        var headers = document.getElementsByTagName("input");
        for (var i=0,  tot=headers.length; i < tot; i++) {
            var item = headers[i];
            item.style.textTransform = value;
            console.log(item.style.textTransform);
        }
    } else if (event.keyCode == 82 && (event.ctrlKey || event.metaKey) && event.shiftKey) {
        if (confirm("Do you really want to reset your notebook?")) {
            // yes
            reset();
        }
    }
    // make sure last element isn't an <input>
    var lastElement = document.getElementById("textarea").lastChild.lastChild.lastChild.tagName;
    if(lastElement == "INPUT") {
        var node = document.createElement("DIV");
        var inner = document.createElement("BR");
        node.appendChild(inner);
        document.getElementById("textarea").appendChild(node); 
    }
    save();
}
function reset() {
    // delete all stored text
    localStorage.notes = "";
    // reload the page
    location.reload();
}
function updateID(event) {
    var header = event.target;
    header.id = header.value;
}
function focusText() {
    var textarea = document.getElementById("textarea")
    if(textarea.contains(document.activeElement) == false) {
        textarea.focus();
        // move caret to end of element
        setEndOfContenteditable(textarea);
    }
}
function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    // Firefox, Chrome, Opera, Safari, IE 9+
    if(document.createRange)
    {
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
    // IE 8 and lower
    else if(document.selection)
    { 
        range = document.body.createTextRange();
        range.moveToElementText(contentEditableElement);
        range.collapse(false);
        range.select();
    }
}
// get current element caret is within
function getSelectionStart() {
    var node = document.getSelection().anchorNode;
    return (node.nodeType == 3 ? node.parentNode : node);
}