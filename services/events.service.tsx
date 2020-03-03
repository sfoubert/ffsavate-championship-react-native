import { Event } from '../models/event.model'
import Constants from '../Constants'

export const findEvents = (page, size) => {
    const URL = `${Constants.urlBackend}/events?page=${page}&size=${size}`
    return fetch(URL)
        .then((res) => res.json())
        .then((events: Event[]) => events)
        .catch((error) => {
            console.error(error)
            return []
        })
}