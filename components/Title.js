
//childrena propsu ne yazarsak onun yerine gecmis oluyor veiyoruz ve herkesn kullanabilmesi icin ayni tailwind css i 
//components klasorunde yapiyoruz
function Title({children}){
    return(
        <h1 className="text-2xl">{children}</h1>
    )
}

export default Title;