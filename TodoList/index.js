const item = document.querySelector(".items");
const search = document.querySelector(".yo");
const button = document.querySelector(".but");

button.addEventListener('click', function() {
    const input = search.value;
    if (input !== '') {
        const listItem = document.createElement('li');
        const deletes = document.createElement('button');
        const updates = document.createElement('button');

        deletes.className = "deletes";
        updates.className = "updates";
        deletes.textContent = "Delete";
        updates.textContent = "Update";

        listItem.className = "hello";
        listItem.textContent = input;

        deletes.addEventListener('click', function() {
            listItem.remove();
            deletes.remove()
            updates.remove()
        });

        updates.addEventListener('click', function() {
            const newInput = prompt("Enter new value:");
            if (newInput !== null) {
                listItem.textContent = newInput;
            }
        });

        item.appendChild(listItem);
        item.appendChild(updates);
        item.appendChild(deletes);

        search.value = '';
    }
});
