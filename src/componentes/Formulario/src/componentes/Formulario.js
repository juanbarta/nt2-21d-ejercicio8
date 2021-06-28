
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formState : {},
      nombreMinLength : 3,
      nombreMaxLength : 15,
      edadMin : 18,
      edadMax : 120
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    
    getInicialData(){
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },

    resetData(){
      this.formData = this.getInicialData()
      this.formState._reset()
    },

    postUsuarioAsyncAwait(){
      this.$store.dispatch('postUsuario',{...this.formData});
      this.resetData();
    },

    //then-catch del tp6
    
    /*postUsuarioThenCatch(){
      this.axios.post(this.url,{...this.formData},{'content-type':'application/json'})
      .then(response => {
        console.log('POST USUARIO - THEN CATCH', response.data)
        this.resetData()
      })
      .catch(error => console.error(error))
    }*/
  }
}


