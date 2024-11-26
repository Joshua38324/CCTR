const array = ['dormir', 'despertarse', 'comer', 'estudiar']
array [array.length] = 'morir'
let texto = ''
for (let index = 0; index < array.length; index++)
{
    texto += "<li>"+ array[index] + '</li>'
}
document.getElementById('seleccionable').innerHTML = texto

let texto2 = 'hola chavales. soy un. fracaso'
let final = texto2.charAt(8)
let texto4 = '       que pasa chicos'
let texto5 = ' como estais'
let final2 = texto4.trim().concat(texto5)
let texto6 = texto.replace ('dormir', 'papear')
console.log(final)
console.log(texto6)