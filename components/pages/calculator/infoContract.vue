<template>
<card>
  <div>
    <h4 class="card-title">Informações do Contrato</h4>
    <div class="row">
      <fg-input name="prazoRemanescente" class="col-sm-6 col-12" label="Prazo Remanescente" placeholder="193" v-model="contract.prazoRemanescente" type="number">
      </fg-input>
      <fg-input name="saldoDevedor" class="col-sm-6 col-12" label="Saldo Devedor" placeholder="R$ 155765,65" v-model="contract.saldoDevedor">
      </fg-input>
    </div>
    <div class="row">
      <fg-input name="taxaJuros" class="col-sm-4 col-12" label="Taxa de Juros" placeholder="8,65" v-model="contract.taxaJuros" type="number">
      </fg-input>
      <fg-input name="taxaMensais" class="col-sm-4 col-12" label="Taxas Mensais" placeholder="25,00" v-model="contract.taxaMensal" type="number">
      </fg-input>
      <fg-input name="seguro" class="col-sm-4 col-12" label="Seguro" placeholder="65,00" v-model="contract.seguro" type="number">
      </fg-input>
    </div>
  </div>
</card>
</template>

<script>
import {
  Card,
  Button,
  FormGroupInput as FgInput,
  Checkbox
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
    FgInput
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
