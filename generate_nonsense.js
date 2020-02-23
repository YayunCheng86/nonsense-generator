function generateNonsense (target) {
    const task = 
    {
        engineer: ['加個按鈕', '加新功能', '切個版', '改一點code'],
        designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢', '想個business model', '找VC募錢'],
    }
    const phrase = ['很簡單', '很容易', '很快', '很正常']
    let nonsense = ''

    // 根據苦主職位選擇task (用random index)
    if (target === 'engineer') {
        nonsense += '工程師'
        let tasks = task.engineer 
        nonsense += nonsenseComplete(tasks, phrase)
    } else if (target === 'designer') {
        nonsense += '設計師'
        let tasks = task.designer
        nonsense += nonsenseComplete(tasks, phrase)
    } else if (target === 'entrepreneur') {
        nonsense += '企業家'
        let tasks = task.entrepreneur
        nonsense += nonsenseComplete(tasks, phrase)
    } else nonsense = '要先點選苦主才能對他說幹話喔！'    //沒選職位就submit會提醒user 
    return nonsense
}

// 把剩餘的幹話放進去
function nonsenseComplete (array1, phrase) {
    let index = Math.floor(Math.random() * array1.length)
    let phraseIdx = Math.floor(Math.random() * phrase.length)
    let nonsense = array1[index]
    nonsense += phrase[phraseIdx]
    return nonsense
}

module.exports = generateNonsense