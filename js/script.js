"use strict"
let picOne = document.querySelector('.picture__1')
let picTwo = document.querySelector('.picture__2')
let picThree = document.querySelector('.picture__3')
let picFour = document.querySelector('.picture__4')
let picFive = document.querySelector('.picture__5')
let picSix = document.querySelector('.picture__6')

let german = 0
let france = 0
let britan = 0

let buttonGerman = document.querySelector('.button__german')
let buttonFrance = document.querySelector('.button__france')
let buttonBritan = document.querySelector('.button__britan')

let author1 = document.querySelector('.author1')
let author2 = document.querySelector('.author2')
let author3 = document.querySelector('.author3')
let author4 = document.querySelector('.author4')
let author5 = document.querySelector('.author5')
let author6 = document.querySelector('.author6')

let name1 = document.querySelector('.name1')
let name2 = document.querySelector('.name2')
let name3 = document.querySelector('.name3')
let name4 = document.querySelector('.name4')
let name5 = document.querySelector('.name5')
let name6 = document.querySelector('.name6')

let material1 = document.querySelector('.material1')
let material2 = document.querySelector('.material2')
let material3 = document.querySelector('.material3')
let material4 = document.querySelector('.material4')
let material5 = document.querySelector('.material5')
let material6 = document.querySelector('.material6')

let prise1 = document.querySelector('.prise1')
let prise2 = document.querySelector('.prise2')
let prise3 = document.querySelector('.prise3')
let prise4 = document.querySelector('.prise4')
let prise5 = document.querySelector('.prise5')
let prise6 = document.querySelector('.prise6')

if (buttonFrance.classList.contains('main__item-button')){
    france+=1
} else if (buttonGerman.classList.contains('main__item-button'))
{
    german+=1
} else (buttonBritan.classList.contains('main__item-button'));{
    britan+=1
}
buttonGerman.addEventListener('click', () =>{
    german+=1
    buttonGerman.classList.add('main__item-button')
    buttonGerman.classList.remove('main__item-button1')
    if (buttonFrance.classList.contains('main__item-button')){
        buttonFrance.classList.add('main__item-button1')
        buttonFrance.classList.remove('main__item-button')
    }else(buttonBritan.classList.contains('main__item-button'));{
        buttonBritan.classList.add('main__item-button1')
        buttonBritan.classList.remove('main__item-button')
    }
    picOne.src = './img/german/main__german1.png'
    picTwo.src = './img/german/main__german2.png'
    picThree.src = './img/german/main__german3.png'
    picFour.src = './img/german/main__german4.png'
    picFive.src = './img/german/main__german5.png'
    picSix.src = './img/german/main__german6.png'

    author1.textContent = 'Курт Вернер'
    author2.textContent = 'Макс Рихтер'
    author3.textContent = 'Мартин Майер'
    author4.textContent = 'Герман Беккер'
    author5.textContent = 'Вульф Бауэр'
    author6.textContent = 'Вальтер Хартманн'

    name1.textContent = 'Над городом'
    name2.textContent = 'Птенцы'
    name3.textContent = 'Среди листьев'
    name4.textContent = 'Яркая птица'
    name5.textContent = 'Дятлы'
    name6.textContent = 'Большие воды'

    material1.textContent = 'Цветная литография (40х60)'
    material2.textContent = 'Холст, масло (50х80)'
    material3.textContent = 'Цветная литография (40х60)'
    material4.textContent = 'Цветная литография (40х60)'
    material5.textContent = 'Бумага, акрил (50х80)'
    material6.textContent = 'Бумага, акрил (50х80)'

    prise1.textContent = '16 000 руб'
    prise2.textContent = '14 500 руб'
    prise3.textContent = '20 000 руб'
    prise4.textContent = '13 000 руб'
    prise5.textContent = '20 000 руб'
    prise6.textContent = '23 000 руб'

})
buttonFrance.addEventListener('click', () =>{
    france+=1
    buttonFrance.classList.add('main__item-button')
    buttonFrance.classList.remove('main__item-button1')
    if (buttonGerman.classList.contains('main__item-button')){
        buttonGerman.classList.add('main__item-button1')
        buttonGerman.classList.remove('main__item-button')
    }else(buttonBritan.classList.contains('main__item-button'));{
        buttonBritan.classList.add('main__item-button1')
        buttonBritan.classList.remove('main__item-button')
    }
    picOne.src = './img/main1.svg'
    picTwo.src = './img/main2.svg'
    picThree.src = './img/main3.svg'
    picFour.src = './img/main4.svg'
    picFive.src = './img/main5.svg'
    picSix.src = './img/main6.svg'

    author1.textContent = 'Марсель Руссо'
    author2.textContent = 'Анри Селин'
    author3.textContent = 'Франсуа Дюпон'
    author4.textContent = 'Луи Детуш'
    author5.textContent = 'Франсуа Дюпон'
    author6.textContent = 'Пьер Моранж'
    
    name1.textContent = 'Охота Амура'
    name2.textContent = 'Дама с собачкой'
    name3.textContent = 'Процедура'
    name4.textContent = 'Роза'
    name5.textContent = 'Птичья трапеза'
    name6.textContent = 'Пейзаж с рыбой'

    material1.textContent = 'Холст, масло (50х80)'
    material2.textContent = 'Акрил, бумага (50х80)'
    material3.textContent = 'Цветная литография (40х60)'
    material4.textContent = 'Бумага, акрил (50х80)'
    material5.textContent = 'Цветная литография (40х60)'
    material6.textContent = 'Цветная литография (40х60)'

    prise1.textContent = '14 500 руб'
    prise2.textContent = '16 500 руб'
    prise3.textContent = '20 000 руб'
    prise4.textContent = '12 000 руб'
    prise5.textContent = '22 500 руб'
    prise6.textContent = '20 000 руб'
})
buttonBritan.addEventListener('click', () =>{
    britan+=1
    buttonBritan.classList.add('main__item-button')
    buttonBritan.classList.remove('main__item-button1')
    if (buttonFrance.classList.contains('main__item-button')){
        buttonFrance.classList.add('main__item-button1')
        buttonFrance.classList.remove('main__item-button')
    }else(buttonGerman.classList.contains('main__item-button'));{
        buttonGerman.classList.add('main__item-button1')
        buttonGerman.classList.remove('main__item-button')
    }
    picOne.src = './img/britan/mainEngland1.jpg'
    picTwo.src = './img/britan/mainEngland2.jpg'
    picThree.src = './img/britan/mainEngland3.jpg'
    picFour.src = './img/britan/mainEngland4.jpg'
    picFive.src = './img/britan/mainEngland5.jpg'
    picSix.src = './img/britan/mainEngland6.jpg'
    author1.textContent = 'Пол Смит'
    author2.textContent = 'Джон Уайт'
    author3.textContent = 'Джим Уотсон'
    author4.textContent = 'Юджин Зеллион'
    author5.textContent = 'Эрик Гиллман'
    author6.textContent = 'Альфред Барр'
    
    name1.textContent = 'Дикий зверь'
    name2.textContent = 'Скалистый берег'
    name3.textContent = 'Река и горы'
    name4.textContent = 'Белый попугай'
    name5.textContent = 'Ночная рыба'
    name6.textContent = 'Рыжий кот'

    material1.textContent = 'Акварель, бумага (50х80)'
    material2.textContent = 'Цветная литография (40х60)'
    material3.textContent = 'Акварель, бумага (50х80)'
    material4.textContent = 'Цветная литография (40х60)'
    material5.textContent = 'Бумага, акрил (50х80)'
    material6.textContent = 'Цветная литография(40х60)'

    prise1.textContent = '19 500 руб'
    prise2.textContent = '17 500 руб'
    prise3.textContent = '20 500 руб'
    prise4.textContent = '15 500 руб'
    prise5.textContent = '12 500 руб'
    prise6.textContent = '21 000 руб'
})
