function addNewtask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;
    var listItem = docoment.createElement("li");
    listItem.className = "list-item";

    const textElement = document. createTexNode(text);
    listItem.appendchild(textElement);
    list.appendchild(listItem);
}
