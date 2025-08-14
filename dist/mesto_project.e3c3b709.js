// Данные пользователя
const user = {
    name: "\u0410\u043D\u0434\u0440\u0435\u0439 \u041A",
    about: "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0420\u043E\u0441\u0441\u0438\u0438",
    avatar: 'https://media.tenor.com/Qx0tjz2EN0gAAAAe/%D0%B7%D1%83%D0%B1%D1%80%D0%B8%D0%BB%D0%B0.png',
    _id: '6d84618e3e02fd4c423a8d0b',
    cohort: 'wff-cohort-9'
};
// Данные карточек
const cards = [
    {
        name: "\u041D\u043E\u0432\u043E\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A",
        link: 'https://admnvrsk.ru/upload/resize_cache/iblock/387/865_497_2/9h9n3jbo8uh22enraxfd7xlvpr3d649z.jpg',
        owner: {
            _id: '682c60609bc8f3ab2e4d6f7d'
        },
        likes: [
            {
                name: "\u0411\u043E\u0440\u044F",
                about: 'Photographer',
                _id: '682c60609bc8f3ab2e4d6f7d'
            }
        ],
        _id: '68476c66d3ff6e148b0e82bc',
        createdAt: '2025-06-09T23:21:10.790Z'
    },
    {
        name: "\u041C\u043E\u0441\u043A\u0432\u0430",
        link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moscow-City2015.jpg/330px-Moscow-City2015.jpg',
        owner: {
            _id: '682c60609bc8f3ab2e4d6f7d'
        },
        likes: [
            {
                name: "\u0411\u043E\u0440\u044F",
                about: 'Photographer',
                _id: '682c60609bc8f3ab2e4d6f7d'
            },
            {
                name: "\u0424\u0438\u043B\u044F\u043D",
                about: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444",
                _id: '682c60609bc8f3ab2e4d6f7d'
            },
            {
                name: "\u0424\u0438\u043B\u044F\u043Da",
                about: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444",
                _id: '682c60609bc8f3ab2e4d6f7a'
            }
        ],
        _id: '68476c66d3ff6e148b0e82bd',
        createdAt: '2025-06-09T23:21:10.790Z'
    },
    {
        name: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
        link: 'https://sokroma.ru/upload/resize_cache/webp/iblock/741/ce4j337r6oe7evt2xy87jtoixlrs0pdy.webp',
        owner: {
            _id: '682c60609bc8f3ab2e4d6f7d'
        },
        likes: [
            {
                name: "\u0411\u043E\u0440\u044F",
                about: 'Photographer',
                _id: '682c60609bc8f3ab2e4d6f7d'
            },
            {
                name: "\u0424\u0438\u043B\u044F\u043D",
                about: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444",
                _id: '682c60609bc8f3ab2e4d6f7d'
            },
            {
                name: "\u0416\u0430\u043A-\u0418\u0432 \u041A\u0443\u0441\u0442\u043E",
                about: "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u043A\u0435\u0430\u043D\u0430",
                _id: '6d84618e3e02fd4c423a8d0b'
            }
        ],
        _id: '68476c66d3ff6e148b0e82bb',
        createdAt: '2025-06-09T23:21:10.790Z'
    },
    {
        name: "\u041C\u0443\u0440\u043C\u0430\u043D\u0441\u043A",
        link: 'https://sdelanounas.ru/i/a/w/1/f_aW1nLmdlbGlvcGhvdG8uY29tL211cm1hbnNrLzE0X211ci5qcGc_X19pZD0xMTgyNzg=.jpeg',
        owner: {
            _id: '6d84618e3e02fd4c423a8d0b'
        },
        likes: [
            {
                name: "\u0411\u043E\u0440\u044F",
                about: 'Photographer',
                _id: '682c60609bc8f3ab2e4d6f7d'
            }
        ],
        _id: '6d84618e3e02fd4c423a8d0b',
        createdAt: '2025-06-19T23:21:10.790Z'
    }
];
// Сохраняем оригинальный fetch
const originalFetch = window.fetch;
// Перехватываем fetch для имитации сервера
window.fetch = (url, options)=>{
    const path = url.replace('./backend.js', '');
    // GET /users/me - данные профиля
    if (options.method === 'GET' && path === '/users/me') return Promise.resolve({
        ok: true,
        json: ()=>user
    });
    else if (options.method === 'GET' && path === '/cards') return Promise.resolve({
        ok: true,
        json: ()=>cards
    });
    else if (options.method === 'PATCH' && path === '/users/me') {
        const data = JSON.parse(options.body);
        user.name = data.name;
        user.about = data.about;
        return Promise.resolve({
            ok: true,
            json: ()=>user
        });
    } else if (options.method === 'POST' && path === '/cards') {
        const data = JSON.parse(options.body);
        const newCard = {
            name: data.name,
            link: data.link,
            owner: {
                _id: user._id
            },
            likes: [],
            _id: Date.now().toString(),
            createdAt: new Date().toISOString()
        };
        cards.push(newCard);
        return Promise.resolve({
            ok: true,
            json: ()=>newCard
        });
    } else if (options.method === 'PUT' && path.startsWith('/cards/likes/')) {
        const card_id = path.split('/')[3];
        const card = cards.find((card)=>card._id === card_id);
        if (card) {
            if (!card.likes.some((like)=>like._id === user._id)) card.likes.push(user);
            return Promise.resolve({
                ok: true,
                json: ()=>card
            });
        } else return Promise.reject("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430");
    } else if (options.method === 'DELETE' && path.startsWith('/cards/likes/')) {
        const card_id = path.split('/')[3];
        const card = cards.find((card)=>card._id === card_id);
        if (card) {
            card.likes = card.likes.filter((like)=>like._id !== user._id);
            return Promise.resolve({
                ok: true,
                json: ()=>card
            });
        } else return Promise.reject("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430");
    } else if (options.method === 'DELETE' && path.startsWith('/cards/likes/')) {
        const card_id = path.split('/')[3];
        const card = cards.find((card)=>card._id === card_id);
        if (card) {
            card.likes = card.likes.filter((like)=>like._id !== user._id);
            return Promise.resolve({
                ok: true,
                json: ()=>card
            });
        } else return Promise.reject("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430");
    } else if (options.method === 'PATCH' && path === '/users/me/avatar') {
        const data = JSON.parse(options.body);
        user.avatar = data.avatar;
        return Promise.resolve({
            ok: true,
            json: ()=>user
        });
    } else return originalFetch(url, options);
};

//# sourceMappingURL=mesto_project.e3c3b709.js.map
