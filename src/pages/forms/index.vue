<template>
    <div class="form-content">
        {{module}}
        <component
            :is="currentForm.name"
            @next="next"
            @submit="submit"
            v-model="module[currentForm.name]">
        </component>
    </div>
</template>
<script>
import form1 from '../forms/form1.vue';
import form2 from '../forms/form2.vue';
export default {
    name: 'forms',
    components: {
        form1,
        form2
    },
    data: function () {
        return {
            module: {
                form1 :{
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                form2: {
                    user: '',
                    region: '',
                    topArray: [
                        {name: 'Tom', country: 'China'}
                    ]
                }
            },
            formArray: [
                {name: 'form1', id: 1},
                {name: 'form2', id: 2}
            ],
            currentIndex: 1
        }
    },
    methods: {
        next: function () {
            this.currentIndex ++;
        },
        submit: function () {
            this.$alert(this.module, 'value', {
                confirmButtonText: '确定'
            });
        }
    },
    mounted: function () {

    },
    watch: {
        'module': {
            deep: true,
            immediate: true,
            handler: function (newVal) {
                console.log(newVal)
            }
        }
    },
    computed: {
        'currentForm': function () {
            return this.formArray[this.currentIndex]
        }
    }
}
</script>
