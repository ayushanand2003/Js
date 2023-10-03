
function area_of_triangle(a,b,c)
{

    const s=(a+b+c)/2;
    const area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
     return area.toFixed(2);

}

const result = area_of_triangle(5,6,7);
return console.log(result);