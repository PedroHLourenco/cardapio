//itens
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "imgs/item-1.jpeg",
        desc: `Deliciosas panquecas cobertas com mel e mix de frutas. Perfeitas para aquele café da manhã especial com a família.`,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "imgs/item-2.jpeg",
        desc: `Poderoso hambúrguer de 180g, cheddar e bacon. Acompanhamento: Porção de batatas rústicas, molho barbecue e maionese da casa.`,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "imgs/item-3.jpeg",
        desc: `O mais pedido, milkshake na caneca grande, que acompanha dois donuts e cobertura de chantilly com granulado e gomas de mascar.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "imgs/item-4.jpeg",
        desc: `Café da manhã pra dar energia para um longo dia, uma fatia de pão, dois ovos fritos, uma porção de feijão e queijo ralado. Acompanha um café grande.`,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "imgs/item-5.jpeg",
        desc: `Nosso querido hambúrguer vegano, com hambúrguer de 18g de soja, ovo estralado, duas rodelas de tomate e rúcula.`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "imgs/item-6.jpeg",
        desc: `Delicioso milkshake feito com as famosas bolachas Oreo, com a taça decorada com farelo de bolacha ao redor e um lindo morango em cima. Brinde: 3 bolachas.`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "imgs/item-7.jpeg",
        desc: `Hambúrguer diferenciado, com o pão sendo substituído por duas fatias de ovo mexido e recheado folhas de alface, um ovo frito, cheddar, uma rodela de tomate e uma explosão de bacon!`,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "imgs/item-8.jpeg",
        desc: `Para quem gosta do simples, receba um hambúrguer americano clássico, com uma fatia de cheddar, uma rodela de tomate, folhas de alface e 150g de hambúrguer. Acompanhamento: Porção de Batatas Fritas. `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "imgs/item-9.jpeg",
        desc: `O pedido ideal para aquele date com a pessoa especial. Milkshake grande de baunilha com morango.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "imgs/item-10.jpeg",
        desc: `Estreando nosso cardápio noturno, o primeiro item da seção jantar é um delicioso filé mignon ao molho madeira, acompanhado de 4 talos de aspargos e 1 batata recheada.`,
    }
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector(".btn-container");

// carrega os itens
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

// mostra os itens do cardápio 
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}
            </button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");
    // botões de filtro
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}