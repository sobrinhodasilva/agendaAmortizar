<template>
<card>
  <div>
    <h4 class="card-title">Informações do Contrato</h4>
    <div class="row">
      <div class="col">
        <fg-input name="prazoRemanescente" label="Prazo Remanescente" placeholder="193" :value="contract.prazoRemanescente" type="number">
        </fg-input>
        <money name="saldoDevedor" :value="contract.saldoDevedor" label="Saldo Devedor" v-bind="money" class="form-input input-lg"></money>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <fg-input name="taxaJuros" label="Taxa de Juros" placeholder="8,65" :value="contract.taxaJuros" type="number">
        </fg-input>
        <fg-input name="taxaMensais" label="Taxas Mensais" placeholder="25,00" :value="contract.taxaMensal" type="number">
        </fg-input>
        <fg-input name="seguro" label="Seguro" placeholder="65,00" :value="contract.seguro" type="number">
        </fg-input>
      </div>
    </div>
  </div>
</card>
</template>

<script>
import {
  Card,
  Button,
  FormGroupInput as FgInput,
  Checkbox,
  Money
} from '@/components';

import {
  mapState,
  mapMutations,
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'InfoContract',
  components: {
    Card,
    FgInput,
    Money
  },
  computed: {
    contract() {
      return this.$store.state.contract.infos
    }
  },
  methods: {
    ...mapActions({
      update: 'contract/update',
    }),
    updateInput(e) {
      this.$store.commit(
        'contract/update', {
          field: e.target.name,
          value: e.target.value
        }
      )
    }
  }
}
</script>
