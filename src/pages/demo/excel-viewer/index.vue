<template>
  <div>
    <h1>Vue json to csv</h1>
    <button type="button" v-on:click="onexport">Excel download</button>
    <!-- <ExcelToCsv
      :json_fields="json_fields"
      :json_data="json_data"
      :header="header"
    ></ExcelToCsv> -->
  </div>
</template>
<script>
import XLSX from "xlsx";
export default {
  methods: {
    onexport() {
      // var wb = XLSX.utils.book_new();
      // wb.Props = {
      //   Title: "SheetJS Tutorial",
      //   Subject: "Test",
      //   Author: "Red Stapler",
      //   CreatedDate: new Date(2017, 12, 19)
      // };
      // wb.SheetNames.push("Test Sheet");
      // var ws_data = [["Title"], ["hello", "world"]];
      // var ws = XLSX.utils.aoa_to_sheet(ws_data);
      // wb.Sheets["Test Sheet"] = ws;
      // XLSX.writeFile(wb, "book.xlsx");
      // On Click Excel download button

      // export json to Worksheet of Excel
      // only array possible
      var animalWS = XLSX.utils.json_to_sheet(this.Datas.animals);
      var pokemonWS = XLSX.utils.json_to_sheet(this.Datas.pokemons);

      // A workbook is the name given to an Excel file
      var wb = XLSX.utils.book_new(); // make Workbook of Excel

      // add Worksheet to Workbook
      // Workbook contains one or more worksheets
      XLSX.utils.book_append_sheet(wb, animalWS, "animals"); // sheetAName is name of Worksheet
      XLSX.utils.book_append_sheet(wb, pokemonWS, "pokemons");

      // export Excel file
      XLSX.writeFile(wb, "book.xlsx"); // name of the file is 'book.xlsx'
    }
  },
  data() {
    return {
      Datas: {
        // We will make a Workbook contains 2 Worksheets
        animals: [
          { name: "cat", category: "animal" },
          { name: "dog", category: "animal" },
          { name: "pig", category: "animal" }
        ],
        pokemons: [
          { name: "pikachu", category: "pokemon" },
          { name: "Arbok", category: "pokemon" },
          { name: "Eevee", category: "pokemon" }
        ]
      }
      //   header: "title",
      //   json_fields: {
      //     "Complete name": "name",
      //     City: "city",
      //     Telephone: "phone.mobile",
      //     "": {
      //       field: "phone.landline",
      //       callback: value => {
      //         return `Landline Phone - ${value}`;
      //       }
      //     }
      //     // "": {
      //     //   field: "phone.landline",
      //     //   callback: value => {
      //     //     return `Landline Phone - ${value}`;
      //     //   }
      //     // }
      //   },
      //   json_data: [
      //     {
      //       name: "Tony Peña",
      //       city: "New York",
      //       country: "United States",
      //       birthdate: "1978-03-15",
      //       phone: {
      //         mobile: "1-541-754-3010",
      //         landline: "(541) 754-3010"
      //       }
      //     },
      //     {
      //       name: "Thessaloniki",
      //       city: "Athens",
      //       country: "Greece",
      //       birthdate: "1987-11-23",
      //       phone: {
      //         mobile: "+1 855 275 5071",
      //         landline: "(2741) 2621-244"
      //       }
      //     }
      //   ],
      //   json_meta: [
      //     [
      //       {
      //         key: "charset",
      //         value: "utf-8"
      //       }
      //     ]
      //   ]
      //   labels: {
      //     companyName: { title: "Company Name" },
      //     fimmFundCode: { title: "FIMM Fund Code" },
      //     FundName: { title: "Fund Name" },
      //     unitNAV: { title: "Unit NAV" },
      //     fundNoteDenotation: { title: "Fund Note Denotation" }
      //   },
      //   title: "NAV_daily_publish",
      //   items: [
      //     {
      //       no: 1,
      //       companyName:
      //         "Aberdeen Standard Islamic Investment (Malaysia) Sdn Bhd",
      //       fimmFundCode: "06204",
      //       FundName: "Aberdeen Islamic World Equity - Class A (RM)",
      //       unitNAV: "1.9893",
      //       fundNoteDenotation: "(a)"
      //     },
      //     {
      //       no: 2,
      //       companyName:
      //         "Aberdeen Standard Islamic Investment (Malaysia) Sdn Bhd",
      //       fimmFundCode: "06205",
      //       FundName:
      //         "Aberdeen Standard Islamic Asia Pacific Ex Japan Equity - Class A (RM)",
      //       unitNAV: "SUSP",
      //       fundNoteDenotation: "(a)"
      //     },
      //     {
      //       no: 3,
      //       companyName:
      //         "Aberdeen Standard Islamic Investment (Malaysia) Sdn Bhd",
      //       fimmFundCode: "06205",
      //       FundName:
      //         "Aberdeen Standard Islamic Asia Pacific Ex Japan Equity - Class A (RM)",
      //       unitNAV: "SUSP",
      //       fundNoteDenotation: "(a)"
      //     }
      //   ]
    };
  }
};
</script>