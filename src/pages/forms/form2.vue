<template>
    <div class="form-content">
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="审批人">
                <el-input v-model="form.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <self-add :template="template" v-model="form.topArray" :disabled="disabled"></self-add>
        </el-form>
        <el-button type="primary" @click="submit">提交</el-button>
    </div>
</template>
<script>
import selfAdd from '../../components/selfAdd.vue'
export default {
    name: 'form2',
    components: {
        selfAdd
    },
    model: {
        prop: 'value',
        event: 'change' 
    },
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            nameArray: ['TOM', 'Jerry', 'Moli', 'Nancy'],
            form: {
            },
            template: [
                {
                    type: 'input',
                    id: 'name',
                    name: '姓名'
                },
                {
                    id: 'country',
                    name: '国籍',
                    type: 'select',
                    options: [
                        {
                            value: 'Chine',
                            label: '中国'
                        },
                        {
                            value: 'Korean',
                            label: '韩国'
                        },
                        {
                            value: 'Japan',
                            label: '日本'
                        }
                    ]
                }
            ],
            disabled: false
        }
    },
    created: function (){
        this.form = this.value;
    },
    methods: {
        changeName : function () {
            this.form.name = this.nameArray[parseInt(Math.random() * 4)]
        },
        submit :function () {
            this.$emit('submit')
        }
    },
    watch: {
        'form': {
            deep: true,
            immediate: true,
            handler: function (newVal) {
                this.$emit('change', newVal)
            }
        }
    }
}
</script>
