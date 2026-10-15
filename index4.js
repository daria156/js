const icome = 40000 //ЗП
const creditScore = 600 //  300 to 850      кредитная история 
const hasCoSigneer = true // есть ли у человкека поручитель

// дз блок сххема по этому заданию


if (creditScore < 500)
{
    console.log ("отказано")
}
else {
    console.log ("одобрено")
}

if (icome > 15000 && creditScore > 700)
{
    console.log ("одобрено")
}
else {
    console.log ("отказано")
}

if (icome >= 50000 && icome<= 149999 && hasCoSigneer == true)
{
 console.log ("одобрено")
}

else {
     console.log ("отказано")
}








