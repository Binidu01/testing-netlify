export default function handler(req: Request) {
  return Response.json({ message: 'hello', method: req.method })
}
