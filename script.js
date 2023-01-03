// Daily Challenge GOLD: Bubble Sort

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8]
console.log("Numero: " + numbers)
// 1. À l'aide de la .toString()méthode, convertissez le tableau en chaîne.
let numbersStr = numbers.toString()
// 2. À l'aide de la .join()méthode, convertissez le tableau en chaîne. Essayez de transmettre différentes valeurs dans la jointure.Par exemple .join("+"), .join(" "), .join("")
let join1 = numbers.join(',')
let join2 = numbers.join('-')
let join3 = numbers.join('/')
// 3. Bonus : Pour ce faire, regardez comment travailler avec des boucles for imbriquées Triez le numberstableau dans l'ordre décroissant, faites-le en utilisant des boucles for (sans utiliser les méthodes de tri intégrées).La sortie devrait être : [9,8,7,6,5,4,3,2,1,0]
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length-1; j++) {
        if (numbers[i] > numbers[j]) {
            let temp = numbers[j] 
            numbers[j] = numbers[i] 
            numbers[i] = temp
        }
    }
}
console.log("SORTIR: " + numbers)