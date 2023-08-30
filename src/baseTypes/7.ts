/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday, 
  Saturday,
  Sunday
}

const isWeekend = (dayOfWeek: Weekdays): boolean => {
  console.log(dayOfWeek === Weekdays.Saturday || dayOfWeek === Weekdays.Sunday)
  return dayOfWeek === Weekdays.Saturday || dayOfWeek === Weekdays.Sunday;
}

isWeekend(Weekdays.Friday); 