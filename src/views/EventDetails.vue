<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// eslint-disable-next-line no-unused-vars
import { EventItem } from '../types'
import EventService from '../services/EventService'
export default defineComponent({
  props: ['id'],
  data() {
    // let e: Partial<EventItem> = {}
    return {
      // using partial
      // event: e

      //OR

      // using type assertion
      event: {} as EventItem
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response: any) => {
        this.event = response.data
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
})
</script>
