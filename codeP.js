let purchases = [100,80,50,120,25,49,99,200,201,1,-50];
let rewardPoints = 0;

for(let purchase of purchases){
    if(purchase>=100){
        //print("over 100 "+(purchase - 100))
        rewardPoint = 2*(purchase -100) + 50
        print(rewardPoint  +" points earnedfrom your $"+purchase+" purchase!")
    }else if(purchase>50){
       // print("over 50 "+purchase)
        rewardPoint = (purchase -50)
        print(rewardPoint +" points earned from your $"+purchase+" purchase!")
    }
}
print("Made with Javascript")
