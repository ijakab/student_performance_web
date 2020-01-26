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
            <v-select v-model="student.details.sex" outlined label="Sex" color="teal" :items="sexItems"
                      :item-text="sexItems.text"
                      :item-value="sexItems.value"></v-select>
          </v-flex>

          <v-flex xs4 mt-2 px-4>
            <v-select v-model="student.details.address" outlined label="Address" color="teal" :items="addressItems"
                      :item-text="addressItems.text"
                      :item-value="addressItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select v-model="student.details.famsize" outlined label="Family size" color="teal" :items="familyItems"
                      :item-text="familyItems.text"
                      :item-value="familyItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select v-model="student.details.Pstatus" outlined label="Parent's status" color="teal"
                      :items="pstatusItems" :item-text="pstatusItems.text"
                      :item-value="pstatusItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select v-model="student.details.Medu" outlined label="Mother's education" color="teal" :items="meduItems"
                      :item-text="meduItems.text"
                      :item-value="meduItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select v-model="student.details.Fedu" outlined label="Fathers's education" color="teal"
                      :items="feduItems" :item-text="feduItems.text"
                      :item-value="feduItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select v-model="student.details.Mjob" outlined label="Mother's job" color="teal" :items="mjobItems"
                      :item-text="mjobItems.text"
                      :item-value="mjobItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select v-model="student.details.Fjob" outlined label="Fathers's job" color="teal" :items="fjobItems"
                      :item-text="fjobItems.text"
                      :item-value="fjobItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select v-model="student.details.traveltime" outlined label="Home to school travel time" color="teal"
                      :items="travelTimeItems"
                      :item-text="travelTimeItems.text"
                      :item-value="travelTimeItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-select v-model="student.details.studytime" outlined label="Weekly study time" color="teal"
                      :items="studyTimeItems"
                      :item-text="studyTimeItems.text"
                      :item-value="studyTimeItems.value"></v-select>
          </v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs4 mt-2 px-4></v-flex>
          <v-flex xs12 mt-3 px-4><span class="subtitle-1">Please check if true: </span></v-flex>
          <v-flex xs4 px-4>
            <v-checkbox
              v-model="student.details.activities"
              label="Extra-curricular activities"
              color="teal"
              hide-details
              false-value="no"
              true-value="yes"
            ></v-checkbox>
          </v-flex>
          <v-flex xs4 px-4>
            <v-checkbox
              v-model="student.details.higher"
              label="Wants to take higher education"
              color="teal"
              hide-details
              false-value="no"
              true-value="yes"
            ></v-checkbox>
          </v-flex>
          <v-flex xs4 px-4>
            <v-checkbox
              v-model="student.details.internet"
              label="Internet access at home"
              color="teal"
              hide-details
              false-value="no"
              true-value="yes"
            ></v-checkbox>
          </v-flex>
          <v-flex xs4 mt-2 px-4>
            <v-checkbox
              v-model="student.details.romantic"
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
              v-model="student.details.age"
              :tick-labels="ageItems"
              min="15"
              max="22"
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
              v-model="student.details.freetime"
              :tick-labels="freeTimeItems"
              min="1"
              max="5"
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
              v-model="student.details.goout"
              :tick-labels="goOutItems"
              min="1"
              max="5"
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
              v-model="student.details.Dalc"
              :tick-labels="dalcItems"
              min="1"
              max="5"
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
              v-model="student.details.Walc"
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
              v-model="student.details.absences"
              min="0"
              max="93"
              color="teal"
              thumb-color="teal"
              track-color="grey"
              thumb-label
            ></v-slider>
          </v-flex>
          <v-flex xs4 py-2 px-4></v-flex>
        </v-layout>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="ma-3 white--text" rounded outlined color="teal" @click="$router.go(-1)">Back</v-btn>
        <v-btn class="ma-3 white--text" rounded depressed color="teal" @click="addDetails(student.id)">Predict
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
  import Swal from 'sweetalert2'
    export default {
        middleware: "log",
        data() {
            return {
                student: {
                    id: null,
                    username: "",
                    email: "",
                    firstname: "",
                    lastname: "",
                    role: "",
                    created_at: "",
                    details: {
                        sex: "",
                        age: null,
                        address: "",
                        famsize: "",
                        Pstatus: "",
                        Medu: "",
                        Fedu: "",
                        Mjob: "",
                        Fjob: "",
                        traveltime: null,
                        studytime: null,
                        activities: "no",
                        higher: "no",
                        internet: "no",
                        romantic: "no",
                        freetime: null,
                        goout: null,
                        Dalc: null,
                        Walc: null,
                        absences: null
                    }
                },
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
        },

        async mounted() {
            let id = localStorage.getItem("detailsId")
            this.id = id;
            let res = await this.$axios.get("user/get/" + id)
            this.student = res.data.data
        },

        methods: {
            async addDetails(id) {
                try {
                    let res = await this.$axios.post(`/user/addDetails/${id}`,
                        {
                            sex: this.student.details.sex,
                            age: this.student.details.age.toString(),
                            address: this.student.details.address,
                            famsize: this.student.details.famsize,
                            Pstatus: this.student.details.Pstatus,
                            Medu: this.student.details.Medu.toString(),
                            Fedu: this.student.details.Fedu.toString(),
                            Mjob: this.student.details.Mjob,
                            Fjob: this.student.details.Fjob,
                            traveltime: this.student.details.traveltime.toString(),
                            studytime: this.student.details.studytime.toString(),
                            activities: this.student.details.activities,
                            higher: this.student.details.higher,
                            internet: this.student.details.internet,
                            romantic: this.student.details.romantic,
                            freetime: this.student.details.freetime.toString(),
                            goout: this.student.details.goout.toString(),
                            Dalc: this.student.details.Dalc.toString(),
                            Walc: this.student.details.Walc.toString(),
                            absences: this.student.details.absences.toString()
                        }
                    )
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User updated!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } catch (err) {
                    console.log(err)
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Upsss... Something went wrong!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        }
    }
</script>
