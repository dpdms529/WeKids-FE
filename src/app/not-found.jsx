import Link from 'next/link'
import CustomButton from '../ui/components/atoms/CustomButton'
 
export default function NotFound() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-between p-5">
      <h2 className="text-B-32">Not Found</h2>
      <p>자원을 찾을 수 없습니다.</p>
      <Link href="/">
        <CustomButton>
            홈으로
        </CustomButton>
      </Link>
    </div>
  )
}