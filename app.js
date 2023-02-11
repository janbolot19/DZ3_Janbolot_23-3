// ⁃ Повторение пройденых тем
// ⁃ Три вида операторов: унарные, бинарные, тернарные 
// ⁃ truthy and falsy выражения
// ⁃ Array - массивы
// ⁃ Методы массива
// ⁃ Индексация в массиве
// ⁃ Цикл while
// ⁃ Цикл for с счетчиком
// ⁃ типы данных symbol, bigint



// ДЗ:

//Есть большой массив разных типов данных, например, 
//[null, 123, undefined, null, «qwerty», 34, 65, undefined, null, null, 43, «aerg», «пкцйк»]. 
//Пройдитесь по массиву циклом и каждый тип данных добавьте в новый массив, 
//то есть нужно отсортировать похожие типы данных в другие массивы, а затем отсортировать эти массивы от большего к меньшему, 
//то есть на первом месте должен быть массив с наибольшим количеством элементов. В конечном 
//счете из одного большого массива у вас должно получится несколько маленьких массивов, которые содержат одинаковые типы данных.


var bigMassiv = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк"]

var res = {}

for (var a = 0; a < bigMassiv.length; a++) {
    var typeMassiv = typeof bigMassiv[a]
    if (!res[typeMassiv]) {
        res[typeMassiv] = []
    }
    res[typeMassiv].push(bigMassiv[a])
}

var SortirovkaMassiva = Object.values(res).sort((y,z) => z.length - y.length)

console.log(SortirovkaMassiva)