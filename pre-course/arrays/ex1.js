const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

let newGenes = [...genes]

let temp = newGenes[2]
newGenes[2] = newGenes[4]
newGenes[4] = temp

newGenes.splice(3, 1)

newGenes.push("AZIN2", "AZIN2")

newGenes.unshift("FXT")

console.log(newGenes)
