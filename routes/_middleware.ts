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

const auth = req.headers.get("authorization");
  if (!auth) {
    return new Response(null, {
      status: 401,
      headers: {
        "content-type": "text/plain",
        "WWW-Authenticate": 'Basic realm="Access to this page"',
      },
    });
  } else {
    const [username, password] = atob(auth.slice(6)).split(":");
    if (
      username === Deno.env.get("SECRET_USERNAME") &&
      password === Deno.env.get("SECRET_PASSWORD")
    ) {
      return new Response("Hello World!", {
        headers: { "content-type": "text/plain" },
      });
    } else {
      return new Response("You are not allowed to view this page", {
        status: 403,
      });
    }
  }