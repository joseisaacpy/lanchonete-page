// imports
import { NextResponse, NextRequest } from "next/server";

// lugar onde usario sera redirecionado se não estiver autenticado
const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login";

// rotas publicas
export const publicRoutes = [
  {
    path: "/login",
    whenAuthenticated: "redirect",
  },
  {
    path: "/",
    whenAuthenticated: "next",
  },
] as const; // as const garante que o array nao seja alterado

// middleware ou proxy
export function proxy(request: NextRequest) {
  // pega o path atual
  const path = request.nextUrl.pathname;

  // pega a rota publica
  const publicRoute = publicRoutes.find((route) => route.path === path);

  // pega o token de autenticacao
  const authToken = request.cookies.get("admin_token")?.value;

  // se o user não estiver autenticado e estiver na rota publica
  if (!authToken && publicRoute) {
    return NextResponse.next();
  }
  // se o user nao estiver autenticado e estiver acessando uma rota privada
  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone(); // clona a url atual
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED; // redireciona para a rota de login
    return NextResponse.redirect(redirectUrl);
  }
  // se o user estiver autenticado, estiver acessando uma rota publica e rota publica tiver comportamento de redirecionamento
  if (
    authToken &&
    publicRoute &&
    publicRoute.whenAuthenticated === "redirect"
  ) {
    const redirectUrl = request.nextUrl.clone(); // clona a url atual
    redirectUrl.pathname = "/painel"; // redireciona para a rota de painel
    return NextResponse.redirect(redirectUrl);
  }
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|assets).*)"],
};
