


export const state = () => ({
  infos: {
    prazoRemanescente: 0,
    saldoDevedor: 10,
    taxaJuros: 20,
    taxaMensal: 30,
    seguro: 40,
  }
})

export const mutations = {
  update (state, payload){
    Object.assign(state.infos, payload)
  },
}