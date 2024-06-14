let HeroiRank = "Ferro"
let Heroi = "Lucas"
for (let HeroiLV = 0; HeroiLV <= 10000; HeroiLV++)

    { 
    console.log(HeroiLV)
    console.log ("O Heroi " + Heroi + " Subio de Level!")
   
   switch (HeroiLV){
    case 1:
    HeroiRank = "Ferro"
    console.log("O Heroi de Nome " + Heroi + " está no nivel " + HeroiRank + "!")
     break 

    case 1001:
       HeroiRank = "Bronze"
        console.log("O Heroi de Nome " + Heroi + " está no nivel " + HeroiRank + "!")
      break

    case 2001:
       HeroiRank = "Prata"
        console.log("O Heroi de Nome " + Heroi + " está no nivel " + HeroiRank + "!")
     break

    case 5001:
     HeroiRank = "Ouro"
  console.log("O Heroi de Nome " + Heroi + " está no nivel " + HeroiRank + "!")
      break

    case 7001:
      HeroiRank = "Platina"
      console.log("O Heroi de Nome " + Heroi + " está no nivel " + HeroiRank + "!")
     break

    case 8001:
      HeroiRank = "Ascendente"
      console.log("O Heroi de Nome " + Heroi + " está no nivel " + HeroiRank + "!")
     break
        

    case 9001:
     HeroiRank = "Imortal"
      console.log("O Heroi de Nome " + Heroi + " está no nivel " + HeroiRank + "!")
      break
    case 10000:
    HeroiRank = "Radiante"
    console.log("O Heroi de Nome " + Heroi + " está no nivel " + HeroiRank + "!")
    break
        }

 

}
