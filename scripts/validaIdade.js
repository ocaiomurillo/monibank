export default function validaIdade(campo){
    const dataNasc = new Date(campo);
    const dataAtual = new Date();
    const dataMais18 = new Date(dataNasc.getUTCFullYear() + 18, dataNasc.getUTCMonth(), dataNasc.getUTCDate());

    console.log(dataAtual <= dataMais18);
    return dataAtual <= dataMais18;
};
