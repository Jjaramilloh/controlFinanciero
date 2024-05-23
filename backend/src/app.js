console.clear()
import jorge from 'express'
import bodyParser from 'body-parser'

const PORT = 9000
const maria = jorge()

maria.use(bodyParser.urlencoded({extended:true}))

maria.get('/', (req,res)=>{
    
    res.send(`
        <form action="/" method="post">
            <input type="number" name="numero1" placeholder="Primer numero">
            <input type="number" name="numero2" placeholder="Segundo numero">
            <input type="button" value="Calcular" onclick="calculadora()">
        </form>
    `)
    
})

const calculadora = (num1,num2,op) =>{

    switch (num1,num2) {
        case op='+':

            res.send( `<p>El resultado de la suma es ${num1+num2}</p>
                        <a href="/">Volver</a>
            `)
            
            break;
    
        default:
            break;
    }

}

maria.listen(PORT,()=>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
)