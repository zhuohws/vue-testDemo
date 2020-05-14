<template>
    <div class="text">
        <div class="tom">
            {{hehe}}123
            <span v-for="(item, index) in iconArray" :key="index">
                {{item}}
            </span>
        </div>
        <slot name="paddingHeader"></slot>
    </div>
</template>
<script>
export default {
    name: 'steve-tom',
    props: {
        textIm: String,
        icon: {
            type: Array,
            default : function () {
                return [1,2,3]
            }
        }
    },
    data: function () {
        return {
            hehe: 'laughage'
        }
    },
    methods: {

    },
    watch: {

    },
    computed: {
        iconArray: function () {
            return this.icon.concat([6,7,8,9])
        }
    }
}
</script>

