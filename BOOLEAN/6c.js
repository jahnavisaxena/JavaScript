
            const hour = 11;
            let message='';
            const name='jahnavi'
            if(hour >= 6 && hour < 12){
                message=`Goodmorning ${name}`;
            }
            else if(hour >= 13 && hour < 17){
                message='Goodafternoon';
            }
            else{
                message='Goodnight';
            }
            console.log(message);

