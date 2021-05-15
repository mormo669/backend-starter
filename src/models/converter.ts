import { getModelForClass, prop } from '@typegoose/typegoose'

export class Training {
  @prop({ index: true, lowercase: true })
  group: string
  @prop({ index: true, lowercase: true })
  name: string
  @prop({ index: true, lowercase: true })
  weight: number
  @prop({ index: true, lowercase: true })
  sets: number
  @prop({ index: true, lowercase: true })
  reps: number
  @prop({ index: true, lowercase: true })
  sum: number
  @prop({ index: true, lowercase: true })
  date: string
  _doc: any
}
export class Name {
  @prop({ index: true, lowercase: true })
  exersize: string
  @prop({ index: true, lowercase: true })
  group: string
  @prop({ index: true, lowercase: true })
  multiplicator: 1 | 2
}
export const TrainingModel = getModelForClass(Training, {
  schemaOptions: { timestamps: true },
})
// let trainingDay = new Training()
// console.log(trainingDay)
// )
// group: 'chest'
// ,
//   name: Name
// ,
//   weight: 100
// ,
//   sets: 5
// ,
//   reps: 8
//   ,
//   sum: 100*8*5
//  ,
//   date: '12.05.2021',
//   _doc: 1
