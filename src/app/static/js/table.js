new Vue({
    el: '#app',
    data: {
        message: 'Bem-vindo ao Jogo de Damas!',
        board: [
            [' ', 'B', ' ', 'B', ' ', 'B', ' ', 'B'],
            ['B', ' ', 'B', ' ', 'B', ' ', 'B', ' '],
            [' ', 'B', ' ', 'B', ' ', 'B', ' ', 'B'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ['P', ' ', 'P', ' ', 'P', ' ', 'P', ' '],
            [' ', 'P', ' ', 'P', ' ', 'P', ' ', 'P'],
            ['P', ' ', 'P', ' ', 'P', ' ', 'P', ' ']
        ]
    }
});