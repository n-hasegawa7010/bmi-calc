/* height(身長)とweight(体重)からBMIを算出する。*/ 
function calcBmi() {
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
    var bmi = weight / Math.pow(height / 100, 2)
    document.getElementById("bmi").value = bmi
}
