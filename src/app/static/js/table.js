let index = 0;
let lastRow = 0;

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
    },
    methods: {
        //Criar classes para o tabuleiro
        makeClass(cell, rowIndex) {
            let className;
            let cellPosition;
            let repeat;

            switch (cell) {
                case ' ':
                    className = 'nothing'
                    break;

                case 'B':
                    className = 'bot'
                    break;

                case 'P':
                    className = 'person'
                    break;

                default:
                    className = 'nothing'
            }

            if (lastRow != rowIndex) {
                repeat = true;
                lastRow = rowIndex;
            } else {
                repeat = false;
            }

            index = repeat ? index : index + 1
            cellPosition = index % 2 === 0 ? 'green' : 'white';
            
            return `cell ${className} ${cellPosition}`
        }
    }
});