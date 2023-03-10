export default function getCheckInput(newClock) {
  if(!newClock.city  || !newClock.timeZone ) {
    alert('заполните все поля')
    return false
  }
  if(typeof newClock.city !== 'string' || parseInt(newClock.city)) {
    alert('название города должно быть строкой')
    return false
  }
  if(!parseInt(newClock.timeZone)) {
    alert('временная зона задается числом')
    return false
  }
  return true
}
