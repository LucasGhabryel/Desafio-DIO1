let Heroi = "Lucas"
for (let HeroiLV = 1; HeroiLV <= 10000; HeroiLV++)
{ 
    console.log(HeroiLV)
    console.log ("O Heroi " + Heroi + " Subio de Level!")

   switch (HeroiLV){
    case 1:
      console.log("O Heroi está rank Ferro")
      break

    case 1001:
      console.log("O Heroi está rank Bronze")
      break

    case 2001:
      console.log("O Heroi está rank Prata")
      break

    case 5001:
      console.log("O Heroi está rank Ouro")
      break

    case 7001:
      console.log("O Heroi está rank Platina")
      break

    case 8001:
        console.log("O Heroi está rank Ascendente")
        break

    case 9001:
        console.log("O Heroi está rank Imortal")
        break  

    case 10000:
        console.log("O Heroi " + Heroi + " está Nivel Radiante!")
        
        }



}


