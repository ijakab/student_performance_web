<template>
  <v-container fluid>
    <v-card style="border-radius: 16px" elevation="5">
      <v-card-title><span class="teal--text font-weight-bold headline">Student Information Form</span></v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout row wrap class="py-4 px-5">
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="School" color="teal" :items="schoolItems" :item-text="schoolItems.text"
                      :item-value="schoolItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Sex" color="teal" :items="sexItems" :item-text="sexItems.text"
                      :item-value="sexItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Age" color="teal" :items="ageItems"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Address" color="teal" :items="addressItems" :item-text="addressItems.text"
                      :item-value="addressItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Family size" color="teal" :items="familyItems" :item-text="familyItems.text"
                      :item-value="familyItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Parent's status" color="teal" :items="pstatusItems" :item-text="pstatusItems.text"
                      :item-value="pstatusItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Mother's education" color="teal" :items="meduItems" :item-text="meduItems.text"
                      :item-value="meduItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Fathers's education" color="teal" :items="feduItems" :item-text="feduItems.text"
                      :item-value="feduItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
        </v-layout>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn class="ma-3 white--text" rounded outlined color="teal" large>Reset</v-btn>
        <v-btn class="ma-3 white--text" rounded depressed color="teal" large>Predict</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
    export default {
        data() {
            return {
                schoolItems: [{value: "GP", text: "Gabriel Pereira"}, {value: "MS", text: "Mousinho da Silveira"}],
                sexItems: [{value: "F", text: "Female"}, {value: "M", text: "Male"}],
                ageItems: [15, 16, 17, 18, 19, 20, 21, 22],
                addressItems: [{value: "U", text: "Urban"}, {value: "R", text: "Rural"}],
                familyItems: [{value: "LE3", text: "Less or equal to 3"}, {value: "GT3", text: "Greater than 3"}],
                pstatusItems: [{value: "T", text: "Living together"}, {value: "A", text: "Living apart"}],
                meduItems: [
                    {value: 0, text: "None"},
                    {value: 1, text: "Primary education (4th grade)"},
                    {value: 2, text: "5th to 9th grade"},
                    {value: 3, text: "Secondary education"},
                    {value: 4, text: "Higher education"},
                ],
                feduItems: [
                    {value: 0, text: "None"},
                    {value: 1, text: "Primary education (4th grade)"},
                    {value: 2, text: "5th to 9th grade"},
                    {value: 3, text: "Secondary education"},
                    {value: 4, text: "Higher education"},
                ],
            }
        }
    }
</script>
