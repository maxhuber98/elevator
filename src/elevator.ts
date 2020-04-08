export class Elevator {
  capacity: number
  currentFloor: number
  currentUsers: number[]

  constructor(capacity: number, currentFloor: number, currentUsers: number[]) {
    this.capacity = capacity
    this.currentFloor = currentFloor
    this.currentUsers = currentUsers
  }
}
