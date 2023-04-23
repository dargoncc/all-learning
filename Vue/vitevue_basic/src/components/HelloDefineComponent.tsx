import { ref, reactive, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const a = ref(1);
    const b = reactive({ name: "hello tsx defineComponent" });
    return (
      <div>
        <h1>{a.value}</h1>
        <h2>{b.name}</h2>
      </div>
    )
  },
});
