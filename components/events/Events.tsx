import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { findEvents } from '../../services/events.service'
import { Event } from '../../models/event.model'
import Moment from 'moment'

function Events() {

  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    async function fetchEvents() {
      const events: Event[] = await findEvents(0, 20)
      setEvents(events)
      setLoading(false)
    }

    fetchEvents()

  }, [])

  if(loading) {
    return (<ActivityIndicator size='large' color='#0000ff' />)
  }

  return (
    <ScrollView style={styles.container}>
      {
        events.map((e: Event) => {
          return (
            <ListItem
              key={e.id}
              title={e.label}
              subtitle={formatDates(e.startDate, e.endDate) + ' - ' + e.description}
              bottomDivider
            />
          )
        })
      }
    </ScrollView>
  )

  function formatDate(date: Date): string {
    return Moment(date).format('DD/MM/YYYY')
  }

  function formatDates(startDate: Date, endDate: Date): string {
    let result = formatDate(startDate)
    if (endDate) {
      result += ' / ' + formatDate(endDate)
    }
    return result
  }
}

export default Events

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
})
