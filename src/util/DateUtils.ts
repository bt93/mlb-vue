export default {
  formatDate(gameDate: any): String {
    const dateTimeFormat = Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric'
    })
    const date = new Date(gameDate)
    const parts = dateTimeFormat.formatToParts(date)
    let value = ''
    parts.forEach((obj) => (value += `${obj.value}`))

    return value
  }
}
