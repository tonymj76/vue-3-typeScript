// Contain all the types we want to use for this app

export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}

interface TodoItem {
  label: string
  completed: string
}

let futureTodoItem: Partial<TodoItem> = {}
futureTodoItem.label = 'name'
futureTodoItem.completed = 'some'

let f: Partial<TodoItem>[] = []
f[0].completed = 'name'
