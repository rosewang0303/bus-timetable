<template>
    <div class="search-bar">
        <nuxt-link :to="{name: 'index'}">
            <img src="~/assets/img/logo_index.svg"/>
        </nuxt-link>
        <input v-model="syncValue" :type="type" :placeholder="placeholder" :disabled="disabled" :readonly="readonly"/>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        }, // 綁定的值
        placeholder: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'text',
        },
        readonly: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {

        }
    },
    computed: {
        syncValue: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.search-bar {
    display: flex;
    align-items: center;
    img {
        width: 132px;
        margin-right: 9px;
    }
    input {
        width: calc(100% - 132px);
        padding: 8px 11px 8px 16px;
        background-color: $gray-dark;
        border-radius: 6px;
        font-size: 16px;
        line-height: 23px;
        color: $primary;
        &:hover {
            
        }
        &:focus {
            
        }
        &::placeholder {
            color: $gray-light;
        }
    }
}
</style>