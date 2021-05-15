import { Training, TrainingModel } from '@/models/converter'
import { Context } from 'koa'
import { Controller, Ctx, Get, Post } from 'koa-ts-controllers'

@Controller('/saver')
export default class {
  @Post('/')
  async saver(@Ctx() ctx: Context) {
    let trainingDay = await new TrainingModel(ctx.request.body).save()
    // console.log(trainingDay)
  }
  @Get('/')
  async loader(@Ctx() ctx: Context) {
    const trainingDay = await TrainingModel.find()
    console.log(trainingDay)
  }
}
