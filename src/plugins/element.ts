import { App } from '@vue/runtime-core'
import { ElRow, ElCol, ElCard, ElButton, ElInputNumber, ElTable, ElTableColumn } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

export const element = {
  install: (app: App) => {
    app.component(ElRow.name, ElRow)
      .component(ElCol.name, ElCol)
      .component(ElCard.name, ElCard)
      .component(ElButton.name, ElButton)
      .component(ElInputNumber.name, ElInputNumber)
      .component(ElTable.name, ElTable)
      .component(ElTableColumn.name, ElTableColumn)
  }
}
