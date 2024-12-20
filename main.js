// Funksiya uchun xato tashlash

// Shart:
//  Funksiya yozing, u berilgan sonni faktorialini hisoblaydi. Agar funksiyaga musbat son emas (masalan, manfiy son yoki satr) uzatilsa, throw yordamida xato tashlash kerak. Xato xabarida quyidagi mazmun bo‘lishi kerak:
alert("1-vazifa")
let request_1 = +prompt("son kiriting")
function part_1() {
    let total = 1
    if (request_1 < 0) {
        throw new Error("Faktorialni hisoblash uchun musbat son kerak!");
    }

    for (let i_1 = 1; i_1 <= request_1; i_1++) {
        total *= i_1
    }
    return total
}

try {
    console.log(part_1())
} catch (error) {
    console.log("Xato yuz berdi: ", error)
}

// 2. Array bilan ishlashda xatolarni boshqarish
// buni o'rniga tepadagi masala berilgan ekan

// 3. O‘z xatolik sinfini yaratish

// Shart:
// O‘zingizning CustomError nomli xatolik sinfini yarating. Ushbu sinf konstruktoriga xabar va kod qabul qiladi (message va code).
// Funksiya yozing, u ikki sonni bo‘lishni bajaradi.
// Agar bo‘luvchi 0 bo‘lsa, CustomError yordamida "Bo‘luvchi nolga teng bo‘lmasligi kerak" deb xato tashlang.
// Agar argumentlardan biri son bo‘lmasa, "Ikkala argument ham son bo‘lishi kerak" deb xato tashlang.
// Funksiyani try...catch orqali chaqiring:
// Xato yuz bersa, console.error orqali xato xabarini va xato kodini chiqarish kerak.
// Xato bo‘lmasa, natijani qaytaring.
alert("2-vazifa") // ?

// Massivlarga oid masalalar

// Funksiya yozing, massivdagi barcha juft sonlarni topib, ularning yig‘indisini qaytaruvchi.
alert("3-vazifa")
let massiv_1 = [15, 12, 14, 96, 58, 36]

function part_2() {
    let yigindi_1 = 0
    for (let i_1 = 0; i_1 <= massiv_1.length; i_1++) {
        if (massiv_1[i_1] % 2 === 0) {
            yigindi_1 += massiv_1[i_1]
        }
    }
    return yigindi_1
}

console.log(part_2())

// Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan.
alert("4-vazifa")
let massiv_2 = [15, 25, 36, 14, 75, 89]

function part_3() {
    let res_1 = massiv_2.filter(value => {
        if (value % 2 === 1) {
            return value
        }
    })
    return res_1
}

console.log(part_3())

// Funksiya yozing, massiv ichida nechta unikal element borligini aniqlaydigan.
alert("5-vazifa")
let massiv_7 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4]

function part_7() {
    return [...new Set(massiv_7)]
}

console.log(part_7())


// Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.
alert("6-vazifa") // ustoz buni o'rtasidagi farqni tushunmadim ?

// Funksiya yozing, massivning barcha elementlarini o‘zgartirmasdan teskari tartibda qaytaradigan.
alert("7-vazifa")
let massiv_3 = [1, 2, 3, 4, 5, 6]

function part_4() {
    return massiv_3.reverse()
}

console.log(part_4())

// Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.
alert("8-vazifa") // ?

// Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.
alert("9-vazifa") // ?

// Funksiya yozing, massivni ikki qismga bo‘lib, yangi massiv yaratadigan (birinchi yarmi va ikkinchi yarmi alohida massivlarda).
alert("10-vazifa")
let massiv_4 = [1, 2, 3, 4, 5, 6]
let massiv_5 = []

function part_5() {
    let qwert = massiv_4.slice(0, Math.trunc(massiv_4.length / 2))
    let qwert_2 = massiv_4.slice(3, 6)
    return [qwert, qwert_2]
}

console.log(part_5())

// Funksiya yozing, massiv ichidan faqat musbat sonlarni yig‘ib yangi massiv yaratadigan.
alert("11-vazifa")
let massiv_6 = [1, 2, 3, -4, -5, -6]

function part_6() {
    let res_2 = massiv_6.filter(value => {
        if (value > 0) {
            return value
        }
    })
    return res_2
}

console.log(part_6())

// Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.
alert("12-vazifa") // ustoz yig'indisini qiymatini topishni bilardim lekin massiv ichidagi qiymatni topishni bilmayman

// Funksiya yozing, massiv ichidagi barcha elementlarni ikki marta takrorlab qaytaradigan.
alert("13-vazifa")
let massiv_8 = [1, 2, 3, 4, 5, 6]

function part_8() {
    let massiv_9 = []
    for (let i_2 = 0; i_2 <= massiv_8.length; i_2++) {
        massiv_9.push(massiv_8[i_2], massiv_8[i_2])
    }
    return massiv_9
}

console.log(part_8())

// Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan.
alert("14-vazifa")
let massiv_10 = ["hello", "salom", "bye"]

function part_9() {
    let res_3 = massiv_10.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
    return res_3
}

console.log(part_9())

// Funksiya yozing, massiv ichidagi raqamlar massivini saralash uchun, ammo tartibni belgilovchi flag qabul qilsin (o‘sish yoki kamayish tartibi).
alert("15-vazifa")
let massiv_11 = [1, 3, 2, 4, 6, 5]

function part_10() {
    let b = massiv_11.sort((a, b) => a - b)
    return b
}

console.log(part_10())

// Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.
alert("16-vazifa") // ?

// Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun).
alert("17-vazifa")
let massiv_12 = [1, 2, 3, 4, 5, 6]

function part_11() {
    let c = massiv_12.toString()
    return c
}

console.log(part_11())

// Stringlarga oid masalalar

// Funksiya yozing, satr ichida nechta unli harf borligini qaytaradigan.
alert("18-vazifa") // kod googledan korildi ozmuncha tushunib oldim siklni ichida sikl ochmasdan shunaqa qilgan ekanman
let massiv_13 = ["salom", "hello", "bye"]

function part_12() {
    let unli = ["a", "i", "e", "o", "u"]
    let count = 0
    for (let i_3 = 0; i_3 < massiv_13.length; i_3++) {
        for (let i_4 = 0; i_4 < massiv_13[i_3].length; i_4++) {
            if (unli.includes(massiv_13[i_3][i_4])) {
                count++
            }
        }
    }
    return count
}

console.log(part_12())

// Funksiya yozing, berilgan satrdan barcha probellarni olib tashlaydigan va yangi satr qaytaradigan.
alert("19-vazifa")
let massiv_14 = "salom google bye bye"

function part_13() {
    return massiv_14.split(' ').join('')
}

console.log(part_13())

// Funksiya yozing, satr ichidagi barcha so‘zlarni o‘zaro joyini almashtiradigan.
alert("20-vazifa") // ustoz qanday qilib men pop, shift, unshift, push qilib joyini almashtirardim yoki harfini replace bilan bu o'zaro deyapti

// Funksiya yozing, satr ichidagi so‘zlarni uzunligi bo‘yicha tartiblaydigan.
alert("21-vazifa") // ustoz bu sort bilan boladi lekin kompyuterim qandaydir functiondan chiqib yozganimdayam functionni ichida yozilyapti deb chiqyapti
// functionni ichida sortni ishlatib bolmaydi ekan
// let massiv_15 = "salom google bye"

// let t = massiv_15.sort((a, b) => a.length - b.length)

// menda functionni ichida yozyapsiz dep chiqyapti

// Funksiya yozing, satr ichida ma’lum bir so‘z necha marta takrorlanganini aniqlaydigan.
alert("22-vazifa") // ?

// Funksiya yozing, satr ichidagi barcha kichik harflarni katta harfga aylantiradigan va aksincha.
alert("23-vazifa")
let massiv_16 = "salom google bye"

function part_14() {
    return massiv_16.toUpperCase()
}

console.log(part_14())

// Funksiya yozing, satrdagi barcha raqamlarni yig‘indisini hisoblaydigan.
alert("24-vazifa") // ?

// Funksiya yozing, satrdan faqat unikal harflarni qoldiradigan va takroriylarini olib tashlaydigan.
alert("25-vazifa") // ustoz buni googledan korgandim hali otmagan kodlarimiz borakan

// Funksiya yozing, satrdan barcha belgilarni o‘z o‘rniga teskari tartibda chiqaradigan.
alert("26-vazifa") // ustoz bu xatomi belgilarni deyapti bu harflarni bolsa kerak oz ornidan qanday qilib teskari qilish mumkin

// Funksiya yozing, satr ichidagi barcha so‘zlarning birinchi harfini katta harfga o‘zgartiradigan.
alert("27-vazifa")
let massiv_17 = "salom google bye"

function part_15() {
    massiv_17.split(' ')
    return massiv_17[0].toUpperCase() + massiv_17.slice(1)
}

console.log(part_15())

// Massiv va string metodlarini birgalikda ishlatadigan masalalar

// Funksiya yozing, satrdan barcha so‘zlarni massivga ajratadigan va so‘zlarni alfavit tartibida qaytaradigan.
alert("28-vazifa")
let massiv_18 = "salom google bye"

function part_16() {
    return massiv_18.split(' ').sort((a, b) => a - b)
}

console.log(part_16())

// Funksiya yozing, massiv ichidagi barcha so‘zlarni birlashtirib, yagona satr yaratadigan.
alert("29-vazifa")
let massiv_19 = ["salom", "google", "bye"]

function part_17() {
    return massiv_19.join("")
}

console.log(part_17())

// Funksiya yozing, massiv ichidagi satrlardan uzunligi bo‘yicha eng katta bo‘lganini qaytaradigan.
alert("30-vazifa") // tepadayam bilmagan edim qanday qilishni ustoz

// Funksiya yozing, massiv ichidagi har bir elementni teskari qilib, yangi massiv qaytaradigan.
alert("31-vazifa")
let massiv_20 = ["salom", "google", "bye"]

function part_18() {
    let res_4 = massiv_20.map(value => {
        return value.split('').reverse().join('')
    })
    return res_4
}

console.log(part_18())

// Funksiya yozing, satr ichidagi barcha takrorlanmagan so‘zlarni ajratib, massivga joylashtiradigan.
alert("32-vazifa") // ustoz bu ham unikal qiymat ekan sonlarning unikalini topishni bilaman stringlarnikini hech topmagan ekanman