export const state = () => ({
  infos: {
    prazoRemanescente: null,
    saldoDevedor: null,
    taxaJuros: null,
    taxaMensal: null,
    seguro: null,
  }
})

export const mutations = {
  update (state, payload){
      //Object.assign(state.infos.attributes, playload.attributes)
  },
}