export  interface Ingredient{
    ingredient: string;
    measure: string;
}

export interface Instruction{
    instruction: string;
    photo: string;
}

export class Recipe{
    public id : number;
    public title: string;
    public description: string;
    public feed_this_many: number;
    public preparation_time: number;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cover_photo: string;
    public keywords:string;

    /**
     *
     */
    constructor(id: number,t:string, d:string, ftm:number, pt:number, ing:Ingredient[], ins:Instruction[], cp:string, kw:string) {
        this.id = id;
        this.title = t;
        this.description = d;
        this.feed_this_many = ftm;
        this.preparation_time = pt;
        this.ingredients = ing;
        this.instructions = ins;
        this.cover_photo = cp;
        this.keywords = kw;
        
    }

    public static recipeFromJSON(obj: any): Recipe{
        return new Recipe (obj.id , obj.title, obj.description, obj.feeds_this_many, obj.preparation_time,
                            obj.ingredients, obj.instructions, obj.cover_photo, obj.keywords);
    }

    public static createBlank():Recipe{
        return new Recipe(0, ''," ", 0,1,[ ], [], " "," ",)
    }
}