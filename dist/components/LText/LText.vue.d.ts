declare const _default: import("vue").DefineComponent<{
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, {
    styleProps: import("vue").ComputedRef<Partial<Readonly<Partial<import("../../defaultProps").CommonComponentProps & {
        isEditing: boolean;
    }>>>>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    isEditing: boolean;
    tag: string;
}, {}>;
export default _default;
