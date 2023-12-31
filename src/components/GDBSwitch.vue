<script>
import { isNumber, isString, isNull, isBoolean, isUndefined } from "lodash-es";
import {defineComponent, computed} from 'vue'

export default defineComponent({
    props: {
        modelValue: {
            type: [String, Boolean, Number],
            default: undefined,
        },
        
        disabled: {
            type: Boolean,
            default: false,
        },
        activeColor: {
            type: String,
            default: "green-1",
        },
        disActiveColor: {
            type: String,
            default: "gray-3",
        },
        trueValue: {
            type: [String, Number],
            default: null,
        },
        falseValue: {
            type: [String, Number],
            default: null,
        },
        label: {
            type: String,
            default: "標題文字",
        },
        labelColor: {
            type: String,
            default: "gray-1",
        },
        description: {
            type: String,
            default: "",
        },
        descriptionColor: {
            type: String,
            default: "gray-2",
        },
        iconDescriptionColor: {
            type: String,
            default: "gray-2",
        },
        spacing: {
            type: Boolean,
            default: true,
        },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        // set css var
        const style = computed(() => ({
            activeColor: `var(--${props.activeColor}-color)`,
            disactiveColor: `var(--${props.disActiveColor}-color)`,
            labelColor: `var(--${props.labelColor}-color)`,
        }));

        // switch functionality
        const checked = computed(() => {
            if (
                isNumber(props.modelValue) ||
                isString(props.modelValue) ||
                isUndefined(props.modelValue)
            )
                return props.modelValue === props.trueValue;

            return props.modelValue;
        });
        const toggle = () => {
            if (props.disabled) return;
            if (isBoolean(props.modelValue))
                return emit("update:modelValue", !checked.value);
            if (isNull(props.trueValue) || isNull(props.falseValue))
                return console.warn("missing required prop.");

            emit(
                "update:modelValue",
                !checked.value ? props.trueValue : props.falseValue
            );
        };

        return {
            style,
            toggle,
            checked,
        };
    },
});
</script>

<template>
    <span
        class="gdb-switch"
        :class="{
            'gdb-switch--checked': checked,
            'gdb-switch--disabled': disabled,
            'gdb-switch--spacing': spacing,
        }"
        @click="toggle"
    >
        <div class="gdb-switch__inner">
            <div class="gdb-switch__switch">
                <span class="gdb-switch__icon material-icons-outlined">
                    <font-awesome-icon icon="fa-solid fa-check" v-show="checked"/>
                    <font-awesome-icon icon="fa-solid fa-xmark" v-show="!checked"/>
                </span>
            </div>
        </div>
        <div v-if="label || description" class="gdb-switch__right">
            <span v-if="label" class="gdb-switch__label" v-text="label" />
            <div v-if="description" class="gdb-switch__description">
                <!-- <GDBDescription
                    :text-color="descriptionColor"
                    :icon-color="iconDescriptionColor"
                >
                    {{ description }}
                </GDBDescription> -->
                <!-- 不清楚這個元件的功用 -->
            </div>
        </div>
    </span>
</template>

<style lang="scss">
@import "@/assets/scss/all.scss";
</style>
