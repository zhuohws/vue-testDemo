<template>
  <div class="self-add">
      {{rows}}
    <table>
      <thead>
      <tr>
        <th v-for="(column,index) in template" :key="index">{{column.name}}</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in rows" :key="index" :id="row.id">
        <td v-for="(col,index) in row.value" :key="index">
          <template v-for="(value,key) in col" :id="key">
            <template v-if="key !== 'type'">

              <el-input
                :key="key"
                placeholder="请输入"
                v-model="col[key]"
                :disabled="disabled"
                v-if="col.type === 'input'"
              >
              </el-input>

              <el-input
                :key="key"
                type="textarea"
                autosize
                v-model="col[key]"
                :disabled="disabled"
                :placeholder="template[index].placeholder === undefined ? '请输入': template[index].placeholder"
                v-if="col.type === 'textarea'"
              >
              </el-input>

              <el-select
                :key="key"
                type="select"
                v-model="col[key]"
                :disabled="disabled"
                placeholder="请选择"
                v-if="col.type === 'select'">
                <el-option
                  v-for="item in template[index].options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

              <el-date-picker
                :key="key"
                style="width:100%;"
                v-model="col[key]"
                v-if="col.type === 'date'"
                type="date"
                value-format="yyyy-MM-dd"
                :disabled="disabled"
                placeholder="可输入如：“20180101”">
              </el-date-picker>

              <el-date-picker
                :key="key"
                style="width:100%;"
                v-model="col[key]"
                v-if="col.type === 'month'"
                type="month"
                :disabled="disabled"
                format="yyyy-MM"
                value-format="yyyy-MM-dd"
                placeholder="可输入如：“201801”">
              </el-date-picker>

              <el-select
                :key="key"
                type="select"
                multiple
                collapse-tags
                v-model="col[key]"
                :disabled="disabled"
                placeholder="请选择"
                v-if="col.type === 'checkbox'">
                <el-option
                  v-for="item in template[index].options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

            </template>                               
          </template>
        </td>
        <td class="operate-wrapper">
          <el-button class="add" type="primary"  @click="addRow" :disabled="disabled">
              <i class="el-icon el-icon-plus"></i>
          </el-button>
          <el-button class="delete" type="danger" @click="deleteRow(row.id)"
                     :disabled="disabled" style="margin:0px;">
                     <i class="el-icon el-icon-minus"></i>
          </el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    created () {
      this.initPage();
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      template: {
        type: Array,
        required: true
      },
      value: {
        required: true
      }
    },
    data () {
      return {
        row: {},
        rows: []
      }
    },
    watch: {
      'rows': {
        handler: function (newVal) {
          this.generateValue(newVal);
        },
        deep: true
      }
    },
    methods: {
      initPage () {
        if (!this.value) {
          this.addRow();
        } else {
          if (!this.value.length) {
            this.addRow();
          }
          this.value.forEach(val => {
            console.log(val)
            let row = this.generateRow();
            this.rows.push(row);
          });
          this.rows.forEach((row, index) => {
            row.id = Date.now() + index;
            row.value.forEach(col => {
              let obj = this.value[index];
              for (let key in obj) {
                if (key in col) {
                  col[key] = obj[key];
                }
              }
            })
          });
        }
      },
      generateRow () {
        let row = {};
        row.id = '';
        row.value = [];

        this.template.forEach(tepl => {
          let col = {};
          col[tepl.id] = '';
          col.type = tepl.type;
          row.value.push(col);
        });
        return row;
      },
      addRow () {
        let row = this.generateRow();
        row.id = Date.now();
        this.rows.push(row);
      },
      deleteRow (id) {
        this.rows.forEach((row, index) => {
          if (row.id === id) {
            this.rows.splice(index, 1);
          }
        })
      },
      generateValue (rows) {
        let result = [];
        rows.forEach(row => {
          let obj = {};
          row.value.forEach(col => {
            for (let key in col) {
              if (key !== 'type') {
                obj[key] = col[key];
              }
            }
          })
          result.push(obj);
        });
        this.$emit('change', result);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../assets/style/variable";

  table {
    width: 100%;
    border-collapse: collapse;

    &.table-border {
      th, td {
        border: 1px solid $borderColor;
      }
    }

    thead {
      tr {
        border-bottom: 1px solid $borderColor;

        th {
          height: 45px;
          box-sizing: border-box;
          color: $textDarkColor;
          text-align: center;
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid $borderColor;

        &:last-child {
          .delete {
            display: none;
          }
        }

        &:not(:last-child) {
          .add {
            display: none;
          }
        }

        &:hover {
          background-color: #f5f5f5;
        }

        td {
          padding: 8px;
          color: $textColor;
          text-align: center;
        }
      }
    }
  }
</style>
