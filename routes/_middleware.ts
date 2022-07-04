// routes/_middleware.ts
import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  ctx.state.data = "myData";
  const resp = await ctx.next();
  resp.headers.set("X-Custom-Header", "Rawr");
  resp.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  resp.headers.set("X-Frame-Options", "SAMEORIGIN");
  resp.headers.set("Referrer-Policy", "strict-origin");
  resp.headers.set("X-Content-Type-Options", "nosniff");
  resp.headers.set("X-Powered-By", "Blood Sweat Tears");
  resp.headers.set("Permissions-Policy", "accelerometer=(), ambient-light-sensor=*, autoplay=(self), battery=(self), camera=(), cross-origin-isolated=*, fullscreen=*, geolocation=(self), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), usb=()");
  return resp;
}