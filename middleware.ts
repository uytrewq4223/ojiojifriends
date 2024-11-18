import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 年齢確認が必要なページのパス
  const protectedPaths = ['/'];

  // クッキーで年齢確認済みかをチェック
  const ageVerifiedCookie = request.cookies.get('ageVerified');
  const ageVerified = ageVerifiedCookie ? ageVerifiedCookie.value === 'true' : false;

  // 年齢確認が必要なパスに一致する場合、クッキーをチェック
  if (protectedPaths.includes(pathname)) {
    if (!ageVerified) {
      const url = request.nextUrl.clone();
      url.pathname = '/age-verification';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
