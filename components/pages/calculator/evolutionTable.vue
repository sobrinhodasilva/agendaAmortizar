<template>
<div class="row">
  <div class="col-12">
    <h4> Evolução do Contrato Simulada</h4>
    <el-table :data="tableData">
      <el-table-column min-width="20" type="index"></el-table-column>
      <el-table-column min-width="100" prop="mesano" label="Mês/Ano"></el-table-column>
      <el-table-column min-width="200" prop="amortizacao" label="Amortização"></el-table-column>
      <el-table-column min-width="150" prop="jurosValor" label="Juros Contratuais"></el-table-column>
      <el-table-column min-width="150" prop="outrosEncargos" label="Encargos"></el-table-column>
      <el-table-column min-width="150" prop="prestacao" label="Prestação"></el-table-column>
      <el-table-column min-width="150" header-align="right" label="Ações">
        <div slot-scope="{row}" class="text-right table-actions">
          <el-tooltip content="Informações extras" :open-delay="300" placement="top">
            <n-button type="info" size="sm" icon>
              <i class="now-ui-icons files_paper"></i>
            </n-button>
          </el-tooltip>
          <el-tooltip content="Adicionar Amortização" :open-delay="300" placement="top">
            <n-button type="success" size="sm" icon>
              <i class="now-ui-icons ui-1_simple-add"></i>
            </n-button>
          </el-tooltip>
        </div>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
import {
  Table,
  TableColumn
} from 'element-ui'
import {
  Button
} from '@/components'
export default {
  name: 'EvolutionTable',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Button.name]: Button
  },
  data() {
    return {
      tableData: [{
          id: 1,
          mesano: '10/2020',
          amortizacao: 852.23,
          jurosValor: 1379.26,
          outrosEncargos: 90.67,
          prestacao: 2049.62

        },
        {
          id: 2,
          mesano: '10/2020',
          amortizacao: 852.23,
          jurosValor: 1379.26,
          outrosEncargos: 90.67,
          prestacao: 2049.62

        },
        {
          id: 3,
          mesano: '10/2020',
          amortizacao: 852.23,
          jurosValor: 1379.26,
          outrosEncargos: 90.67,
          prestacao: 2049.62

        }

      ]
    }
  },
}
</script>
