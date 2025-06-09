const items = []

function addItem() {
    const itemName = document.querySelector("#item").value

    if (itemName === "") {
        alert("Não é possível adicionar um item em branco!")
        return
    }

    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""
               }
{
showItensList()
}

function showItensList() {
    const sectionList = document.querySelector(".list")
    sectionList.textContent = ""
    items.sort((itemA, itemB) => Number(itemA.checked) - Number(itemB.checked))
    items.map((item, index) => {
        sectionList.innerHTML += `
            <div class="item">
                    <div>
                       <input type="checkbox" name="list" id="item-${index}" ${item.checked ? 'checked' : ''}>
                        <div class="custom-checkbox">
                            <img src="./assets01/assets/checked.svg" alt="checked">
                        </div>
                          <label for="item-${index}" onclick="checkItem('${item.name}')">${item.name}</label>
                    </div>
                    <button>
                        <img src="./assets01/assets/trash-icon.svg" alt="trash icon">
                    </button>
                </div>
        `
    })
  
}

function removeItem(itemName) {
    const itemIndex = items.findIndex((item) => item.name === itemName)

    if (itemIndex !== -1) {
        items.splice(itemIndex, 1)
    }
    const divWarning = document.querySelector(".warning")

    divWarning.classList.remove("hide-warning")

    setTimeout(() => {
        divWarning.classList.add("hide-warning")
    }, 4000)
    showItensList()
}

function checkItem(itemName) {
    const item = items.find((item) => item.name === itemName)

    // if (item.checked) {
    //      item.checked = false
    //} else {
    //      item checked = true
    //}

    // item checked ? item.checked = false : item.checked = true

    item.checked = !item.checked
    showItensList()
}