
            const hour = 15;
            let message='';
            if(hour >= 6 && hour < 12){
                message='Goodmorning';
            }
            else if(hour >= 13 && hour < 17){
                message='Goodafternoon';
            }
            else{
                message='Goodnight';
            }
            console.log(message);

