
            function convertoMiles(km){
                return km*1.6;
            }
            function convertokm(mile){
                return mile/1.6;
            }
            function convertLength(len,from,to){
                if(from === 'miles'){
                    if(to === 'km'){
                        const result=convertokm(len);
                        return `${result}km`;
                    }
                }
                if(from === 'km'){
                    if(to === 'miles'){
                        const result=convertoMiles(len);
                        return `${result}miles`;
                    }
                }
            }
            console.log(convertLength(50,'miles','km'));
            console.log(convertLength(32,'km','miles'));
       
