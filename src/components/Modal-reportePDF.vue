<template>
  <div>
    <div class="bg-warning btn" v-b-modal="'modal-producto-'">Generar Reporte</div>
    <!-- modal -->
    <b-modal :id="'modal-producto-'" size="xl" title="BootstrapVue" hide-header>
      <div class="producto d-flex flex-column">
        <div id="app">
          <div id="menu" class="bg-danger">
            <h3>Generar Reporte</h3>
            <div class="p-2 ">
              <ul style="text-align:left">
                <li>Selecciona una fecha</li>
                <li>Descargue el documento</li>
              </ul>
            </div>
          </div>
          <div class="np-btn">
          <button class="btn btn-danger" @click="generatePDF()">Descargar PDF</button>
          </div>

          <vue-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="false"
            :paginate-elements-by-height="1400" filename="nightprogrammerpdf" :pdf-quality="5"
            :manual-pagination="false" pdf-format="a4" :pdf-margin="20" pdf-orientation="portrait"
            pdf-content-width="800px" @progress="onProgress($event)" ref="html2Pdf">
            <section slot="pdf-content">
              <ContentToPrint />
            </section>
          </vue-html2pdf>
          <div>
            <ContentToPrint />
          </div>
        </div>


      </div>

    </b-modal>
  </div>



</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import ContentToPrint from "./ContentToPrint";
import { mapState, mapActions, mapGetters } from "vuex";
import jspdf from 'jspdf'

export default {
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)

    // 15th in two months
    const maxDate = new Date(today)

    return {
      value: '',
      min: minDate,
      max: maxDate,
      picked: 0,
      selectImg: {
        imgValue: '',
        optionValue: 1
      },
      imageShow: {
        scale: 2.0
      }
      ,
    }

  },
  methods: {

    /* 
        Generate Report using refs and calling the 
        refs function generatePdf() 
    */
    download() {
      alert('hi')
      let pdfName = 'test';
      var doc = new jspdf();
      doc.text("Hello World", 10, 10);
      doc.save(pdfName + '.pdf')
    },
    generateReport() {

      this.$refs.html2Pdf.generatePdf()
    },
    onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
  },


  components: {

     VueHtml2pdf,
    ContentToPrint,

  },



  props: ["index", "producto"],
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  height: auto;
  z-index: 10;
}

#pdf-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 400px;
}

.view-pdf {
  width: 100%;
  height: 80%;
}
#menu{
  padding: 0.6em 2.4em;
  border-radius: 3px;
  margin-bottom: 60px;
}
</style>
