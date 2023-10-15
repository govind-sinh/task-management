export enum STATUS { PENDING = 'pending', COMPLETED = 'completed' }

export interface ITasks {
  id: string,
  title: string,
  description: string,
  creationDate: Date,
  dueDate: Date,
  assignedTo: string,
  category: string,
  status: STATUS
}
