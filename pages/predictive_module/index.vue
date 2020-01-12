<template>
  <v-container fluid>
    <v-card style="border-radius: 16px" elevation="5">
      <v-card-title style="background-color: #009688">
        <span class="white--text font-weight-bold headline">Student Information Form</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout row wrap class="py-4 px-5">
          <v-flex xs12 mb-2 px-4><span class="subtitle-1">Please choose: </span></v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Sex" color="teal" :items="sexItems" :item-text="sexItems.text"
                      :item-value="sexItems.value"></v-select>
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
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Mother's job" color="teal" :items="mjobItems" :item-text="mjobItems.text"
                      :item-value="mjobItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Fathers's job" color="teal" :items="fjobItems" :item-text="fjobItems.text"
                      :item-value="fjobItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Home to school travel time" color="teal" :items="travelTimeItems"
                      :item-text="travelTimeItems.text"
                      :item-value="travelTimeItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select outlined label="Weekly study time" color="teal" :items="studyTimeItems"
                      :item-text="studyTimeItems.text"
                      :item-value="studyTimeItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs12 mt-3 px-4><span class="subtitle-1">Please check if true: </span></v-flex>
          <v-flex xs4 px-4>
            <v-checkbox
              label="Extra-curricular activities"
              color="teal"
              hide-details
              false-value="no"
              true-value="yes"
            ></v-checkbox>
          </v-flex>
          <v-flex xs4 px-4>
            <v-checkbox
              label="Wants to take higher education"
              color="teal"
              hide-details
              false-value="no"
              true-value="yes"
            ></v-checkbox>
          </v-flex>
          <v-flex xs4 px-4>
            <v-checkbox
              label="Internet access at home"
              color="teal"
              hide-details
              false-value="no"
              true-value="yes"
            ></v-checkbox>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-checkbox
              label="With a romantic relationship"
              color="teal"
              hide-details
              false-value="no"
              true-value="yes"
            ></v-checkbox>
          </v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs12 pt-5 px-4></v-flex>
          <v-flex xs12 mt-5 px-4><span class="subtitle-1">Please select value: </span></v-flex>
          <v-flex xs12 pt-3 px-4></v-flex>
          <v-flex xs4 mt-2 px-4>
            <span>Age:</span>
            <v-slider
              :tick-labels="ageItems"
              :max="7"
              step="1"
              ticks="always"
              tick-size="5"
              track-color="grey"
              color="teal"
            ></v-slider>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <span>Free time after school:</span>
            <v-slider
              :tick-labels="freeTimeItems"
              :max="4"
              step="1"
              ticks="always"
              tick-size="5"
              color="teal"
              track-color="grey"
              hint="1-Very low - - - 5-Very high "
            ></v-slider>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <span>Going out with friends:</span>
            <v-slider
              :tick-labels="goOutItems"
              :max="4"
              step="1"
              ticks="always"
              tick-size="5"
              color="teal"
              track-color="grey"
              hint="1-Very low - - - 5-Very high "
            ></v-slider>
          </v-flex>
          <v-flex xs12 pt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4>
            <span>Workday alcohol consumption:</span>
            <v-slider
              :tick-labels="dalcItems"
              :max="4"
              step="1"
              ticks="always"
              tick-size="5"
              color="teal"
              track-color="grey"
              hint="1-Very low - - - 5-Very high "
            ></v-slider>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <span>Weekend alcohol consumption:</span>
            <v-slider
              :tick-labels="walcItems"
              :max="4"
              step="1"
              ticks="always"
              tick-size="5"
              color="teal"
              track-color="grey"
              hint="1-Very low - - - 5-Very high "
            ></v-slider>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <span>Number of school absences:</span>
            <v-slider
              min="0"
              max="93"
              color="teal"
              thumb-color="teal"
              track-color="grey"
              thumb-label="true"
            ></v-slider>
          </v-flex>
          <v-flex xs4 py-2 px-4></v-flex>
        </v-layout>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
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
                mjobItems: [
                    {value: "teacher", text: "Teacher"},
                    {value: "health", text: "Health care related"},
                    {value: "services", text: "Civil services"},
                    {value: "at_home", text: "At home"},
                    {value: "other", text: "Other"},
                ],
                fjobItems: [
                    {value: "teacher", text: "Teacher"},
                    {value: "health", text: "Health care related"},
                    {value: "services", text: "Civil services"},
                    {value: "at_home", text: "At home"},
                    {value: "other", text: "Other"},
                ],
                travelTimeItems: [
                    {value: 1, text: "<15 min"},
                    {value: 2, text: "15 to 30 min"},
                    {value: 3, text: "30 to 60 min"},
                    {value: 4, text: ">1 hour"},
                ],
                studyTimeItems: [
                    {value: 1, text: "<2 hours"},
                    {value: 2, text: "2 to 5 hours"},
                    {value: 3, text: "5 to 10 hours"},
                    {value: 4, text: "10 hours"},
                ],
                activitiesItems: [
                    {value: "yes", text: "Yes"},
                    {value: "no", text: "No"},
                ],
                higherItems: [
                    {value: "yes", text: "Yes"},
                    {value: "no", text: "No"},
                ],
                internetItems: [
                    {value: "yes", text: "Yes"},
                    {value: "no", text: "No"},
                ],
                romanticItems: [
                    {value: "yes", text: "Yes"},
                    {value: "no", text: "No"},
                ],
                freeTimeItems: [1, 2, 3, 4, 5],
                goOutItems: [1, 2, 3, 4, 5],
                dalcItems: [1, 2, 3, 4, 5],
                walcItems: [1, 2, 3, 4, 5],
            }
        }
    }
</script>
