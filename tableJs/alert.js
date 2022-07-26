const getData = () => fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())

const appInit = () => {
    // обявили состояние приложения
    const state = {
        data: [],
    }

    // HTML элементы приложения
    const searchInput = document.getElementById("search");
    const submitBtn = document.getElementById("submit");
    const tableBody = document.querySelector(".product__body");

    // фильтрация данных
    const filter = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const searchValue = searchInput.value;
        const filteredData = state.data.filter((item) =>
            item.body.includes(searchValue));

        renderData(filteredData);
    };

    // отрисовка данных
    const renderData = (data) => {
        tableBody.innerHTML = '';

        for (let key in data) {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td class="product__bogyCell">${data[key].id}</td>
                <td class="product__bogyCell">${data[key].title}</td>
                <td class="product__bogyCell">${data[key].body}</td>
            `;
            tableBody.appendChild(row);
        }
    }

    // запрашиваем данные
    getData()
        .then((data) => {
            state.data = data;
            renderData(data);
        })

    submitBtn.addEventListener('click', filter);
}

appInit();