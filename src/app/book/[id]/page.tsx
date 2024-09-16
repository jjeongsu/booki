export default function Page({
  params,
}: {
  params: { id: string | string[] }
}) {
  return <>{params.id}번 도서 상세정보 페이지 입니다.</>
}
