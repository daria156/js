const basePrice = 500 // базовая цена билета

const age = 18 // возраст покупателя
const movieRating = "18+" // возрастной рейтинг фильма
const isWeekend = true // выходной или нет +15%
const isEvening = true // вечерний сеанс +10%
const hasStudentCard = true // есть ли студенческая карта

// студент может быть только при age от 14 до 25 лет
// студенческая скидка действует только в будни
// детям младше 12 лет скидка 50%

let price = basePrice

if (age < 12) {
    price = price - (basePrice * 50 / 100)
}

if (movieRating === "18+" && age < 18) {
    console.log("Вход запрещён: фильм только для зрителей старше 18 лет")
}
else if (movieRating === "16+" && age < 16) {
    console.log("Вход запрещён: фильм только для зрителей старше 16 лет")
}
else if (movieRating === "14+" && age < 14) {
    console.log("Вход запрещён: фильм только для зрителей старше 14 лет")
}
else if (movieRating === "12+" && age < 12) {
    console.log("Вход запрещён: фильм только для зрителей старше 12 лет")
}
else {
    if (isWeekend) {
        price = price + (basePrice / 100 * 15)
    }

    if (isEvening) {
        price = price + (basePrice / 100 * 10)
    }

    if (hasStudentCard && age >= 14 && age <= 25 && !isWeekend) {
        price = price - (price / 100 * 15)
    }

    console.log('Базовая цена:', basePrice)
    console.log('Возраст:', age)
    console.log('Рейтинг фильма:', movieRating)
    console.log('Выходной:', isWeekend ? 'да' : 'нет')
    console.log('Вечерний сеанс:', isEvening ? 'да' : 'нет')
    console.log('Есть студенческая карта:', hasStudentCard ? 'да' : 'нет')
    console.log('Итоговая цена:', price)
}