import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const BannerBottom = () => {
  const { theme } = useTheme()
  return (
    <div className={cn('mt-16 bg-green-100', theme === 'dark' && 'bg-slate-500')}>
      <div className='px-32 flex justify-center py-16'>
        <div>
          <Image height={350} width={450} alt='banner' src='/huy4.png' />
        </div>
        <div className='flex flex-col gap-4 w-[400px]'>
          <h1 className='font-bold text-4xl' style={{ color: 'black' }}>Nhấn nút đăng ký tham gia để trở thành hội viên và được nghe sớm nhạc mới của DJ Wuyy</h1>

          <p style={{ color: 'black' }}>Khám phá tài năng âm nhạc bên trong bạn, từ những giai điệu đầu tiên đến những bản nhạc hoàn hảo, Thắp sáng đam mê âm nhạc của bạn – Hãy để những nốt nhạc trở thành nguồn cảm hứng bất tận trong cuộc sống của bạn</p>
          <div className='flex items-center gap-2'>
            <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Bắt đầu học ngay</Button>
            <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Đăng nhập</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BannerBottom
