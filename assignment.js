function kilometerToMeter(kilometer)
{
    if(kilometer<0)
    {
        console.log("Kilometer cannon be negative!")
    }
    else
    {
        var meter= kilometer * 1000;
        return meter;
    }
    
}



function budgetCalculator(watch, phone, laptop)
{

    if(watch<0 && phone<0 && laptop<0)
    {
        console.log("Input Error!")
    }
    else
    {
        var watch= watch * 50;
        var phone= phone * 100;
        var laptop=laptop* 500;
        var budget=watch+phone+laptop;
    
        return budget;
    }
    

}




function hotelCost(days)
{
    if(days<0)
    {
        console.log("Input Error!");
    }
    else
    {
        var cost=0;
    
        if(days<=10)
        {  
            cost= days*100;
        }

        else if(days<=20)
        {   
            var temp1= days%10;
            cost= (10*100)+(temp1*80);
        }

        else
        {   
            var temp2=days%20;
            cost= (10*100)+(10*80)+(temp2*50);
        }

        return cost;

    }
  
}






function megaFriend(friend){
    if(friend.length==0)
    {
        console.log("Insert friends name!")
    }

    else
    {
        var largestWord= '';

        for(var i=0; i<friend.length; i++)
        {
            if(friend[i].length>largestWord.length)
            {
            largestWord=friend[i];
            }
        }
        
        return largestWord;

    }
    
}




//1
var meter=kilometerToMeter(0.3);
console.log(meter); 

//2
var budgetCalculator= budgetCalculator(10,20,5);
console.log(budgetCalculator);


//3
var hc= hotelCost(7);
console.log(hc);

var hc= hotelCost(13);
console.log(hc);

var hc= hotelCost(23);
console.log(hc);

//4
var friend=["akash","forman","hridika"];
console.log(megaFriend(friend));

