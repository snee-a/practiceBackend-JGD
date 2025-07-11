const axios=require("axios");
const sources=require("./sources");

async function fetchAllProducts(category){
    let all=[];
    for(const source of sources){
        try{
            const res=await axios.get(source.url);
            const data=Array.isArray(res.data)?res.data:res.data||[];

            const filtered=data.filter(p=>p.category?.toLowercase().includes(category.toLowercase())).map((p,i)=>(
                {
                    id:`${source.name}-${p.id||i}`,
                    name:p.title||p.name,
                    company:p.category,
                    price:p.price,
                    rating:p.rating?.rate||p.rating||0,
                    discount:p.discount||Math.floor(Math.random()*20),
                    availability:p.availability??true,
                }
            ));
            all.push(...filtered);
        }catch(err){
            console.error(`Error at ${source.name}`);
        }
    }
    return all;
}

module.exports={ fetchAllProducts }