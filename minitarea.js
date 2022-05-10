const x = 0;
const y = 0;
const z = 1;

function fibonacci (x, y, z)
{
    console.log(x)
    if(x > 10000)
    {
        return 0;
    }
    fibonacci(y+z, z, y+z)
}

fibonacci(x, y, z)

