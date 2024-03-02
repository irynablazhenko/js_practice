/*
Create a method to see whether the string is ALL CAPS.
'c' => FALSE
'C' => TRUE
'vsndkvjJNVKSvvdm' => FALSE
'DNKVNLDKNVLSNVLKDNF' =>TRUE

*/
let string ='LOWER CASE STRING.'  //'lower case string'

function checkCase(s){
    if (s ===s.toUpperCase()){
        console.log(`String is ALL CAPS letter : ${s}`)
    } else {
        console.log(`String is not ALL CAPS letter : ${s}`)
    }
    return
}
checkCase(string)