import { ref, reactive } from 'vue'

export default function Hello() {
    const a = ref('1111')
    const b = reactive({ c: 1 })
    const c = reactive([1, 2, 3])
    return (
      <div>
        JSX
        <h1>a:{a.value}</h1>
        <h2>b:{b.c}</h2>
        {
          c.map((item, index) => {
            return <h3 key={index}>{item}</h3>
          })
        }
      </div>
    )
    
}