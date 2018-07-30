export class itemProperty{
    category : string;
    customProperty :string;
    value: string[];
  
    constructor(category: string, value: string[]){
            if(category === 'Pizza'){
                this.customProperty = 'Crust';
                }else
            if(category === 'Pasta'){
                this.customProperty = 'Sauce';
                }else
            if(category === 'Drinks'){
                this.customProperty = 'DrinkSize';
                }else
            if(category === 'Sides'){
                this.customProperty = 'Breadstick';
                }
            this.value = value;
            this.category = category;
            }
     
    }