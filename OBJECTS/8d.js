
             
            function comparePrice(product1,product2)
            {
                if(product1.price< product2.price){
                    return product1.price;
                }
                else{
                    return product2.price;
                }
            }
            const product1={
                name:'jahnavi',
                price:1000
            };
            const product2={
                name:'riya',
                price:1200
            };
            console.log(comparePrice(product1,product2));
 
