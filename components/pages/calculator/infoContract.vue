<template>
<card>
  <div>
    <h4 class="card-title">Informações do Contrato</h4>
    <div class="row">
      <div class="col">
        <fg-input label="Prazo Remanescente" placeholder="193" type="number">
        </fg-input>

        <money :value="contract.saldoDevedor" label="Saldo Devedor" class="form-input input-lg"></money>
      </div>
    </div>
    <!--div class="row">
      <div class="col">
        <fg-input name="taxaJuros" label="Taxa de Juros" placeholder="8,65" :value="contract.taxaJuros" @input="updateInput" type="number">
        </fg-input>
        money name="taxaMensal" :value="contract.taxaMensal" @input="updateInput" label="Taxa Mensais" class="form-input input-lg"></money>
        <money name="seguro" :value="contract.seguro" @input="updateInput" label="Seguro" class="form-input input-lg"></money>
      </div>
    </div-->
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
  data() {
    return {
      teste: 0
    }
  },
  computed: {
    contract() {
      return this.$store.state.contract.infos
    }
  },
  methods: {
    ...mapMutations({
      update: 'contract/update',
    }),
    updateInput(e) {
      this.$store.commit(
        'contract/update', {
          [e.target.name]: e.target.value
        }
      )
    }
  }
}
</script>
