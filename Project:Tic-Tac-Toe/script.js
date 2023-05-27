

const gameBoard = (() => {

    let _board = new Array(9);

    const getField = index => _board[index];

    const setField = (index,player) => {

        const htmlIndex = document.querySelector(`.game-screen div:nth-child(${index + 1}) span`)
        htmlIndex.textContent = player;
        _board[index] = player;
    }



    return {
        getField,
        setField,
    }
})()


const Player = (sign,active) => {
    let _sign = sign
    let _active = active
    const getSign =() => {return {sign:_sign,active:_active}}
    const setSign = (active) => {
        _active = active
    }
    return{
        getSign,
        setSign
    }
}




const gameController = (() => {

    const _player1 = Player('O',true)
    const _player2 = Player('X',false)



    const playerStep = (num) => {
        const field = gameBoard.getField(num)
        let currentPlayer;
        if(field === undefined)
        {
            if(_player1.getSign()['active'] == true)
            {
                currentPlayer = _player1.getSign()['sign']
                gameBoard.setField(num,_player1.getSign()['sign'])
                _player1.setSign(false)
                _player2.setSign(true)
            }
            else
            {
                currentPlayer = _player2.getSign()['sign']
                gameBoard.setField(num,_player2.getSign()['sign'])
                _player1.setSign(true)
                _player2.setSign(false)
            }
        }
        else
        {
            console.log('not empty');
        }



        let p = document.querySelector('.win-screen p')
        let restartButton = document.querySelector('.win-screen button')
        restartButton.addEventListener('click',function(){
            location.reload()
        })    

        if(checkForWin(gameBoard))
        {
            let winScreen = document.getElementsByClassName('win-screen')[0]
            winScreen.style.zIndex = '1'
            winScreen.style.opacity = '1'
            p.innerHTML = `Player ${currentPlayer} Won`


        }
        else if(checkForDraw(gameBoard))
        {
            let winScreen = document.getElementsByClassName('win-screen')[0]
            winScreen.style.zIndex = '1'
            winScreen.style.opacity = '1'
            p.innerHTML = `The game ended in a draw`

        }
    }
    const checkBoardRow = (board) => {

        for(let i = 0; i < 3 ; i++)
        {
            let row = []
            for(let j = i * 3 ; j < i * 3 + 3 ; j++)
            {
                row.push(board.getField(j))
            }
            if(row.every(field => field == 'X') || row.every(field => field =='O'))
            {
                console.log(true)
                return true
            }

        }
        return false

    }
    const checkBoardColumn = (board) => {
        for(let i = 0; i < 3 ; i++)
        {
            let column = []

            for(let j = 0 ; j < 3 ; j++ )
            {
                column.push(board.getField(i + 3 * j));
            }
            if(column.every(field => field =='X') || column.every(field => field =='O'))
            {
                return true
            }
        }
        return false
    }

    const checkBoardDiagnol = (board) => {

        const diagonal1 = [board.getField(0),board.getField(4), board.getField(8)]
        const diagonal2 = [board.getField(6),board.getField(4), board.getField(2)]
        if(diagonal1.every(field => field == 'O') || diagonal1.every(field => field == 'X'))
            return true
        if(diagonal2.every(field => field == 'O') || diagonal2.every(field => field == 'X'))
            return true
        
        return false
    }

    const checkForWin = (board) => {
        if(checkBoardColumn(board) || checkBoardDiagnol(board) || checkBoardRow(board))
        {
            return true
        }
        return false
    }
    const checkForDraw = (board) => {
        if(checkForWin(board))
            return false
        for(let i = 0 ; i < 9 ; i++)
        {
            const field = board.getField(i)
            if(field == undefined)
                return false
        }
        return true
    }
    return {
        playerStep,
    }

})()


const displayController = (() => {

    const boardForHtml = Array.from(document.querySelectorAll('.game-area'))
    const _init = (() => {

        console.log(boardForHtml)
        
        for(let i = 0 ; i < boardForHtml.length ; i++)
        {
            let tmp = boardForHtml[i];
            tmp.addEventListener('click',gameController.playerStep.bind(null,i) )
        }
    })()

})()
