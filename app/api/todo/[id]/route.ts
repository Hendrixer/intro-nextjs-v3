import db from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (request: Request, { params }) => {
  const data = await db.todo.findUnique({ where: { id: params.id } })
  return NextResponse.json({ data })
}

export const DELETE = async (request: Request, { params }) => {
  const todo = await db.todo.delete({ where: { id: params.id } })
  return NextResponse.json({ data: todo })
}
